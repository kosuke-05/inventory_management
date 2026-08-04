import { Controller, useFormContext } from "react-hook-form";
import type { TextFieldComponentPropsType } from "../../types/user/propsTypes";
import { TextField } from "@mui/material";

// メールアドレス・パスワードの認証フォーム
export const TextFieldComponent = ({
  array
}: TextFieldComponentPropsType) => {
  // controlの取得
  const {control} = useFormContext();

  return (
    <>
      {array.map((item) => (
        <Controller
          key={item.name}
          name={item.name}
          control={control}
          render={({ field, fieldState }) => (
            <TextField
              {...field}
              label={item.label}
              placeholder={item.placeholder}
              error={fieldState.invalid}
              helperText={fieldState.error?.message} />
          )} />
      ))}
    </>
  )
};