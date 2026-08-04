"use client"

import { FormProvider, useForm } from "react-hook-form";
import type { UserRegistrationValidationType } from "../../types/user/userType";
import { zodResolver } from "@hookform/resolvers/zod";
import { UserRegistrationValidation } from "../../schemas/userRegistrationValidation";
import { Stack, Typography } from "@mui/material";
import { TextFieldComponent } from "../../components/textFields/textFieldComponents";
import { ReturnTopPage, SubmitButton } from "../../components/buttons/users/buttons";
import { useNavigate } from "react-router-dom";

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
      mainAddress: "",
      passWord: ""
    }
  });

  // 画面遷移
  const navigate = useNavigate();

  // 【新規登録はこちら】ボタン押下後の処理
  const userRegistration = () => {

  }

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