import { QueryResult } from "pg";
import { LoginRepository } from "../../repositories/users/loginRepository";
import { userLoginType } from "../../types/users/userTypes";

export const LoginService = async (data: userLoginType) => {
  const result: QueryResult = await LoginRepository(data);

  // DB処理後に名前が適切に取得できなかった際の処理
  if(!result.rows[0]) {
    return null;
  }

  console.log(result);

  // 取得したレコードをパスワード以外取得
  const { name, mailAddress } = result.rows[0];

  return {
    data: {
      name: name,
      mailAddress: mailAddress
    }
  }
};