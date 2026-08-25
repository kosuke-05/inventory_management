// ユーザーCRUD処理に関する型
export type userDataType = {
  name: string,
  mailAddress: string,
  passWord: string
};

// ログイン処理のControllerに使用する型
export type userLoginType = Omit<userDataType, "name">;