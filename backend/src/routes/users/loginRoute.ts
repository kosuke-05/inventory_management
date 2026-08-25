import { Router } from "express";
import { LoginController } from "../../controllers/users/loginController";

const loginRouter = Router();

// ログイン処理
loginRouter.post("/", LoginController);

export default loginRouter;