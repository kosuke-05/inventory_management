"use client"

import { FormProvider, useForm } from "react-hook-form";
import type { UserRegistrationInitialValue, UserRegistrationValidationType } from "../../types/user/userType";
import { zodResolver } from "@hookform/resolvers/zod";
import { UserRegistrationValidation } from "../../schemas/userRegistrationValidation";
import { Stack, Typography } from "@mui/material";
import { TextFieldComponent } from "../../components/textFields/textFieldComponents";
import { ReturnTopPage, SubmitButton } from "../../components/buttons/users/buttons";
import { useNavigate } from "react-router-dom";
import { UserPostHook } from "../../hooks/user/userPost";

/**
 * ユーザー新規登録
 * 兼ロジックコンポーネント
 *
 * ①名前・メールアドレス・パスワードの登録
 */
export const UserRegistration = () => {
  // RHF
  const registrationMethods = useForm<UserRegistrationValidationType>({
    mode: "onChange",
    resolver: zodResolver(UserRegistrationValidation),
    defaultValues: {
      name: "",
      mailAddress: "",
      passWord: ""
    }
  });

  // // 新規登録のテキストフィールド初期値
  // const UserInitialValue: UserRegistrationInitialValue = {
  //   name: ""
  // }

  // 画面遷移
  const navigate = useNavigate();

  // hooks層
  const userPost = UserPostHook();

  /**
   * 【新規登録はこちら】ボタン押下後の処理
   * ①hooks層を呼び出す
   * ②テキストフィールドのリセット
   * ③新規登録完了後、在庫一覧画面に遷移
   */
  const userRegistration = (data: UserRegistrationValidationType) => {
    userPost.mutate(data);
    registrationMethods.reset();
    navigate("/products");
  };

  // トップ画面に戻る処理
  const returnTopPage = () => {
    navigate("/");
  };

  return (
    <FormProvider {...registrationMethods}>
      <form onSubmit={registrationMethods.handleSubmit(userRegistration)}>
        <Stack direction="column" spacing={1}>
          <Typography variant="h6">新規登録</Typography>
          <TextFieldComponent
            array={[
              {
                name: "name",
                label: "名前",
                placeholder: "山田 太郎"
              },
              {
                name: "mailAddress",
                label: "メールアドレス",
                placeholder: "sample@gmail.com"
              },
              {
                name: "passWord",
                label: "パスワード",
                placeholder: "小文字・大文字・数字含んで5文字以上"
              }
            ]} />

          {/** 送信ボタン */}
          <SubmitButton />

          {/** トップ画面に戻る */}
          <ReturnTopPage onClick={returnTopPage} />
        </Stack>
      </form>
    </FormProvider>
  )
};