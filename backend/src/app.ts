import express from "express";
import cors from "cors";
import postRouter from "./routes/users/postRoute";
import loginRouter from "./routes/users/loginRoute";

// expressの設定ファイル
const app = express();

// 異なるポート番号同士の通信を許可
app.use(cors());

// フロントからJSON文字列で渡されるため、JSオブジェクトに変換
app.use(express.json());

// 各ルーティング
app.use("/user/registration", postRouter);
app.use("/user/login", loginRouter);

export default app;