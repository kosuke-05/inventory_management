import { Router } from "express";
import { PostController } from "../../controllers/users/postController";

const postRouter = Router();

// 登録処理
postRouter.post("/", PostController);

export default postRouter;
