"use client"

import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Stack, Typography } from "@mui/material";
import { FormProvider, useForm } from "react-hook-form";
import { inventoryRegistrationValidation } from "../../schemas/user/inventory/inventoryRegistrationValidations";
import type { inventoryFieldsType, inventoryRegistrationValidationType } from "../../types/inventory/inventoryTypes";
import { InventoryTextField } from "../../components/textFields/inventory/textFieldComponents";

// 在庫登録画面
export const InventoryRegistration = () => {
  // バリデーション
  const inventoryRegistrationMethods = useForm<inventoryRegistrationValidationType>({
    mode: "onChange",
    resolver: zodResolver(inventoryRegistrationValidation),
    defaultValues: {
      name: "",
      count: 0,
      memo: ""
    }
  });

  // テキストフィールドで使用
  const inventoryFields: inventoryFieldsType[] = [
    {
      name: "name",
      label: "在庫名",
      placeholder: "【例】ポカリスエット1ダース"
    },
    {
      name: "count",
      label: "在庫数"
    },
    {
      name: "memo",
      label: "備考欄",
      placeholder: "任意"
    }
  ]

  // 在庫登録ボタン押下後の処理
  const afterInventoryRegistrationButton = () => {

  }

  return (
    <FormProvider {...inventoryRegistrationMethods}>
      <Box>
        <Typography variant="h6">在庫登録画面</Typography>
        <form onSubmit={inventoryRegistrationMethods.handleSubmit(afterInventoryRegistrationButton)}>
          <Stack direction="column" spacing={2} sx={{ p: 2 }}>
            {inventoryFields.map((item) => (
              <InventoryTextField
                name={item.name}
                label={item.label}
                placeholder={item.placeholder} />
            ))}
          </Stack>
        </form>
      </Box>
    </FormProvider>
  )
};