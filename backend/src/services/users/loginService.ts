import { LoginRepository } from "../../repositories/users/loginRepository";
import { userLoginType } from "../../types/users/userTypes";

export const LoginService = async (data: userLoginType) => {
  const name = await LoginRepository(data);

  // DB処理後に名前が適切に取得できなかった際の処理
  if(!name) {
    return null;
  }

  return name;
};