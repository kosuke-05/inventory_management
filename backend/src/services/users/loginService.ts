import { LoginRepository } from "../../repositories/users/loginRepository";
import { userLoginType } from "../../types/users/userTypes";

export const LoginService = async (data: userLoginType) => {
  const result = await LoginRepository(data);

  // DB処理後に名前が適切に取得できなかった際の処理
  if(!result) {
    return null;
  }

  // 取得したレコードをパスワード以外取得
  const { name, mail_address } = result;

  return {
    data: {
      name: name,
      mailAddress: mail_address
    }
  }
};