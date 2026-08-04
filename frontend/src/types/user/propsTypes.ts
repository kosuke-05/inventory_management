// TextFieldComponentのprops型
export type TextFieldComponentPropsType = {
  array: {
    name: "name" | "mailAddress" | "passWord",
    label: "名前" | "メールアドレス" | "パスワード",
    placeholder: string
  }[]
};