"use client"

import { Button } from "@mui/material";
import { useFormContext } from "react-hook-form";
import type { ReturnTopPagePropsType, UserRegistrationButtonPropsType } from "../../../types/user/userType";

// メールアドレス・パスワードの送信ボタン
export const SubmitButton = () => {
  // RHFから取得
  const {formState} = useFormContext();

  return (
    <Button
      type="submit"
      variant="contained"
      disabled={!formState.isDirty || !formState.isValid}>
      送信
    </Button>
  )
};

/**
 * 新規登録を促すボタン
 * ①登録済みのユーザーデータをDBから取得してストアで管理
 * → ストアに存在すれば押下可能にする
 */
export const UserRegistrationButton = ({
  onClick
}: UserRegistrationButtonPropsType) => {

  return (
    <Button
      variant="text"
      onClick={onClick}>
      新規登録がまだの方はこちら
    </Button>
  )
};

/**
 * トップ画面に遷移するボタン
 */
export const ReturnTopPage = ({
  onClick
}: ReturnTopPagePropsType) => {

  return (
    <Button
      variant="text"
      onClick={onClick}>
      ログインページに戻る
    </Button>
  )
};