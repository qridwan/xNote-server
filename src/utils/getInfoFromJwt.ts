import jwt, { JwtPayload } from "jsonwebtoken";
export const getUserInfo = (
  token: string
): { email: string; username: string; id: string } => {
  const { email, username, id } = jwt.verify(
    token as string,
    process.env.SECRET_KEY
  ) as JwtPayload;

  return { email, username, id };
};
