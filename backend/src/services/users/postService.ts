import { PostRepository } from "../../repositories/users/postRepository";
import { userDataType } from "../../types/users/userTypes";

// 登録処理の詳細
export const PostService = async (data: userDataType) => {
  const result = await PostRepository(data);

  return result;
};