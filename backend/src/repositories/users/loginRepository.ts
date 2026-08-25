import { pool } from "../../db/db"
import { userLoginType } from "../../types/users/userTypes"

// DB処理
export const LoginRepository = async (data: userLoginType) => {
  const { mailAddress, passWord } = data;

  const result = await pool.query(
    "SELECT name FROM users WHERE mail_address = $1 AND pass_word = $2",
    [mailAddress, passWord]
  );

  const name = result.rows[0]?.name;

  return name;
};