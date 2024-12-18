export interface RegisterUserDto {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
}

export interface LoginUserDto {
  username: string;
  email: string;
  password: string;
}
