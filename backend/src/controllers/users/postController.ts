import { Request, Response } from "express"
import { PostService } from "../../services/users/postService";
import { userDataType } from "../../types/users/userTypes";

/**
 * 登録処理
 * ①フロントから渡されてきたデータが条件を満たしているかの検証
 * 
 */
export const PostController = async (req: Request, res: Response) => {
  // データが存在するかの確認
  const data: userDataType = req.body;

  if(!data.name || !data.mailAddress || !data.passWord) {
    return res.status(400).json({
      message: "登録情報が不足しています。"
    })
  };

  // 詳細処理はServiceに任せる
  const result = await PostService(data);

  // パスワード以外の情報を取得
  const { name, mail_address } = result;

  return res.status(201).json({
    data: {
      name: name,
      mailAddress: mail_address
    },
    message: "ユーザー登録完了"
  })
};