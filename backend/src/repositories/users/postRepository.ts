import { pool } from "../../db/db";
import { userDataType } from "../../types/users/userTypes";

// DBへの登録処理
export const PostRepository = async (data: userDataType) => {
  const result = await pool.query(
    "INSERT INTO users (name, mail_address, pass_word) values ($1, $2, $3) RETURNING *",
    [data.name, data.mailAddress, data.passWord]
  );

  return result.rows[0];
};