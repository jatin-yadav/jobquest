class ApiError extends Error {
  statusCode: number;
  message: string;
  data: unknown;
  success: boolean;
  errors: unknown[];

  constructor(
    statusCode: number,
    message: string = "Something went wrong",
    errors: unknown[] = [],
    data: unknown = null,
    stack: string = ""
  ) {
    super(message);

    // Ensure this is set correctly as the base class has a `message` property
    this.statusCode = statusCode;
    this.message = message;
    this.data = data;
    this.success = false;
    this.errors = errors;

    // If a custom stack trace is provided, use it; otherwise, generate it.
    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

export { ApiError };
