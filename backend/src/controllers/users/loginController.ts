import { Request, Response } from "express";
import { userLoginType } from "../../types/users/userTypes";
import { LoginService } from "../../services/users/loginService";

export const LoginController = async (req: Request, res: Response) => {
  const data: userLoginType = req.body;

  // ログイン情報に不備があった場合
  if(!data.mailAddress || !data.passWord) {
    return res.status(401).json({
      message: "再度ログインを試すか、新規登録して下さい。"
    })
  };

  const result: string | null = await LoginService(data);

  // Serviceからnullが返ってきた場合
  if(!result) {
    return res.status(401).json({
      message: "メールアドレスかパスワードが正しくありません。"
    })
  };

  return res.status(200).json({
    data: {
      name: result
    }
  })
}