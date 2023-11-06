/**
 * @description Type for register
 */
export type UserRegister = {
  username: string;
  email: string;
  password: string;
};

/**
 * @description Type for register user
 */

export type Registeruser = {
  user_name: string;
  user_id: string;
  password: string;
  location?: string;
  email: string;
  phone_no: string;
};
/**
 * @description Type for user Admin Login
 */
export type userLogin = {
  email: string;
  password: string;
};
