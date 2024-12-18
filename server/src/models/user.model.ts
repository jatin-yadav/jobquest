import mongoose, { Model, Schema } from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

interface IUserDocument extends Document {
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  avatar?: string | null;
  refreshToken?: string | null;

  // Instance method
  isPasswordCorrect(password: string): Promise<boolean>;
  generateAccessToken(): string;
  generateRefreshToken(): string;
}

// 2. Define the custom model interface (optional if no static methods)
interface IUserModel extends Model<IUserDocument> {}

const userSchema = new Schema<IUserDocument>(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      index: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowecase: true,
      trim: true,
    },
    firstName: {
      type: String,
      required: true,
      trim: true,
      index: true,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
      index: true,
    },
    avatar: {
      type: String, // cloudinary url
      //   required: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
    },
    refreshToken: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  this.password = await bcrypt.hash(this.password, 10);
  next();
});

userSchema.methods.isPasswordCorrect = async function (
  password: string
): Promise<boolean> {
  try {
    return bcrypt.compare(password, this.password);
  } catch (error) {
    console.error("Error comparing passwords:", error);
    throw new Error("Password verification failed.");
  }
};

userSchema.methods.generateAccessToken = function (): string {
  // Combine firstName and lastName if fullName is needed
  const fullName = `${this.firstName} ${this.lastName}`;

  try {
    return jwt.sign(
      {
        _id: this._id,
        email: this.email,
        username: this.username,
        fullName,
      },
      process.env.ACCESS_TOKEN_SECRET as string,
      {
        expiresIn: process.env.ACCESS_TOKEN_EXPIRY || "1h", // Default to 1 hour if not set
      }
    );
  } catch (error) {
    console.error("Error generating access token:", error);
    throw new Error("Could not generate access token.");
  }
};

userSchema.methods.generateRefreshToken = function (): string {
  try {
    return jwt.sign(
      {
        _id: this._id,
      },
      process.env.REFRESH_TOKEN_SECRET as string,
      {
        expiresIn: process.env.REFRESH_TOKEN_EXPIRY || "7d", // Default to 7 days if not set
      }
    );
  } catch (error) {
    console.error("Error generating refresh token:", error);
    throw new Error("Could not generate refresh token.");
  }
};

export const User = mongoose.model("User", userSchema);
