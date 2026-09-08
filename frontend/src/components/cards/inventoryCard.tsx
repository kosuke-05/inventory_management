"use client"

import { Card, CardActions, CardContent, CardHeader, Typography } from "@mui/material";
import type { categoryLabelType, inventoryCardProps } from "../../types/inventory/inventoryTypes";
import { InventoryDetailButton } from "../buttons/inventory/buttons";

// 商品単体
/**
 * Cardの内訳
 * ①CardHeader → タイトル
 * ②CardContent → 内容
 * ③CardActions → アクションボタン等
 */
export const InventoryCard = ({
  name,
  count,
  created_at,
  updated_at,
  deleted_at,
  memo,
  category
}: inventoryCardProps) => {

  // 一覧画面ではカテゴリは日本語表記で表示
  const CategoryLabel: categoryLabelType = {
    food: "食料",
    drink: "飲料",
    furniture: "家具",
    electronic: "家電",
    stationery: "文房具",
    others: "その他"
  };

  return (
    <Card>
      <CardHeader
        title={name} />
      <CardContent>
        <Typography variant="body2">カテゴリ：{CategoryLabel[category]}</Typography>
        <Typography variant="body2">残り個数：{count}</Typography>
      </CardContent>
      <CardActions>
        <InventoryDetailButton />
      </CardActions>
    </Card>
  )
};