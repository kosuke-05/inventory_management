"use client"

import { Controller, useFormContext } from "react-hook-form";
import type { inventoryFieldsType } from "../../../types/inventory/inventoryTypes";
import { TextField } from "@mui/material";

// 在庫登録画面のフィールド
export const InventoryTextField = ({
  name,
  label,
  placeholder
}: inventoryFieldsType) => {
  // useFormから取得
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <TextField
          {...field}
          error={fieldState.invalid}
          helperText={fieldState.error?.message}
          label={label}
          placeholder={placeholder}
          multiline={name === "memo"}
          rows={name === "memo" ? 5 : undefined} />
      )} />
  )
};