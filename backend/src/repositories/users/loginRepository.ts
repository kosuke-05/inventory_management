import { pool } from "../../db/db"
import { userLoginType } from "../../types/users/userTypes"

// DB処理
export const LoginRepository = async (data: userLoginType) => {
  const { mailAddress, passWord } = data;

  const result = await pool.query(
    "SELECT name, mail_address FROM users WHERE mail_address = $1 AND pass_word = $2",
    [mailAddress, passWord]
  );
  
  console.log(`
    取得データ：
      名前：${result.rows[0].name}
      メールアドレス：${result.rows[0].mail_address}
    `);

  return result.rows[0];
};