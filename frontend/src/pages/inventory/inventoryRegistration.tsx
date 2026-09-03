"use client"

import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Stack, Typography } from "@mui/material";
import { FormProvider, useForm } from "react-hook-form";
import { inventoryRegistrationValidation } from "../../schemas/user/inventory/inventoryRegistrationValidations";
import type { categoryLabelType, inventoryData, inventoryFieldsType, inventoryRegistrationValidationType } from "../../types/inventory/inventoryTypes";
import { InventoryTextField } from "../../components/textFields/inventory/textFieldComponents";
import { InventorySelectBox } from "../../components/selectBox/inventory/selectBox";
import { InventorySubmitButton } from "../../components/buttons/inventory/buttons";
import { InventoryPostHook } from "../../hooks/user/inventory/inventoryPost";

// 在庫登録画面
export const InventoryRegistration = () => {
  // バリデーション
  const inventoryRegistrationMethods = useForm<inventoryRegistrationValidationType>({
    mode: "onChange",
    resolver: zodResolver(inventoryRegistrationValidation),
    defaultValues: {
      name: "",
      count: 0,
      memo: "",
      category: undefined
    }
  });

  // hookの取得
  const inventoryPostHook = InventoryPostHook();

  // カテゴリ
  const CategoryLabel: categoryLabelType[] = [
    { en: "food", ja: "食品" },
    { en: "drink", ja: "飲料" },
    { en: "furniture", ja: "家具" },
    { en: "electronic", ja: "家電" },
    { en: "stationery", ja: "文房具" },
    { en: "others", ja: "その他" }
  ];

  // テキストフィールドで使用
  const inventoryFields: inventoryFieldsType[] = [
    {
      name: "name",
      label: "在庫名",
      placeholder: "【例】ポカリスエット1ダース",
      component: "textField"
    },
    {
      name: "count",
      label: "在庫数",
      component: "textField"
    },
    {
      name: "category",
      label: "在庫のカテゴリ",
      component: "selectBox"
    },
    {
      name: "memo",
      label: "備考欄",
      placeholder: "任意",
      component: "textField"
    }
  ]

  // 在庫登録ボタン押下後の処理
  const afterInventorySubmitButton = (data: inventoryData) => {
    inventoryPostHook.mutate(data);
  }

  return (
    <FormProvider {...inventoryRegistrationMethods}>
      <Box>
        <Typography variant="h6">在庫登録画面</Typography>
        <form onSubmit={inventoryRegistrationMethods.handleSubmit(afterInventorySubmitButton)}>
          <Stack direction="column" spacing={2} sx={{ p: 2 }}>
            {inventoryFields.map((item) => (
              (item.component === "textField" ?
                <InventoryTextField
                  key={item.name}
                  name={item.name}
                  label={item.label}
                  placeholder={item.placeholder} />
                :
                <InventorySelectBox
                  name={item.name}
                  label={item.label}
                  categoryLabel={CategoryLabel} />
              )
            ))}

            {/** 送信ボタン */}
            <InventorySubmitButton />
          </Stack>
        </form>
      </Box>
    </FormProvider>
  )
};