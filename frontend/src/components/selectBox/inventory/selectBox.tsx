"use client"

import { Controller, useFormContext } from "react-hook-form";
import type { inventoryFieldsType } from "../../../types/inventory/inventoryTypes";
import { FormControl, FormHelperText, InputLabel, MenuItem, Select } from "@mui/material";

// 在庫登録画面で表示するセレクトボックス
export const InventorySelectBox = ({
  name,
  label,
  categoryLabel
}: inventoryFieldsType) => {
  // useFormから取得
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <FormControl error={fieldState.invalid}>
          <InputLabel>{label}</InputLabel>
          <Select
            {...field}
            displayEmpty>
            <MenuItem>以下から一つ選択して下さい</MenuItem>
            {categoryLabel?.map((value) => (
              <MenuItem value={value.en}>{value.ja}</MenuItem>
            ))}
          </Select>
          <FormHelperText>{fieldState.error?.message}</FormHelperText>
        </FormControl>
      )} />
  )
};