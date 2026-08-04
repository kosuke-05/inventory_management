"use client"

import { FormProvider, useForm } from "react-hook-form";
import type { UserCertificationValidationType } from "../../types/user/userType";
import { zodResolver } from "@hookform/resolvers/zod";
import { UserCertificationValidations } from "../../schemas/userValidation";
import { Stack, Typography } from "@mui/material";
import { TextFieldComponent } from "../../components/textFields/textFieldComponents";
import { SubmitButton, UserRegistrationButton } from "../../components/buttons/users/buttons";
import { useNavigate } from "react-router-dom";

// 【トップ画面】メールアドレス・パスワードの認証画面
// ロジックコンポーネント
export const UserCertification = () => {
  // RHF
  const certificationMethods = useForm<UserCertificationValidationType>({
    mode: "onChange",
    resolver: zodResolver(UserCertificationValidations),
    defaultValues: {
      mailAddress: "",
      passWord: ""
    }
  });

  // 画面遷移
  const navigate = useNavigate();

  /**
   * メールアドレス・パスワードを入力後に送信ボタン押下後の処理
   * ①API通信を始める
   * ②データの登録が完了後、商品一覧画面に遷移
   * ※ログイン処理になるため、navigateで画面遷移よりも先にDBに同一データが登録できているか確認処理
   */
  const afterSubmitButton = () => {

  }

  // 新規登録ボタンを押下後の処理
  const afterUserRegistrationButton = () => {
    navigate("/registration");
  }

  return (
    <FormProvider {...certificationMethods}>
      <form onSubmit={certificationMethods.handleSubmit(afterSubmitButton)}>
        <Typography variant="h6">ログイン</Typography>
        <Stack direction="column" spacing={1}>
          <TextFieldComponent
            array={[
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

          {/** メールアドレス・パスワード送信ボタン */}
          <SubmitButton />

          {/** 新規登録ボタン */}
          <UserRegistrationButton onClick={afterUserRegistrationButton} />
        </Stack>
      </form>
    </FormProvider>
  )
};
