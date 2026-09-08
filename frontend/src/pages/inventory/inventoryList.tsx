"use client"

import { Grid, Typography } from "@mui/material";
import { InventoryCard } from "../../components/cards/inventoryCard";
import { GetInventoryHook } from "../../hooks/user/inventory/inventoryGet";
import type { inventoryArrayType } from "../../types/inventory/inventoryTypes";

/**
 * 商品一覧画面
 * ロジックコンポーネント
 */
export const InventoriesList = () => {
  // hooksの取得
  const { data, isError } = GetInventoryHook();

  const inventoryData: inventoryArrayType[] = data;

  // 詳細ボタン押下後の処理
  const afterInventoryDetailButton = () => {
    
  }

  return (
    <>
      <Typography variant="h6">商品一覧</Typography>
      <Grid container spacing={2}>
        <Grid size={4}>
          {inventoryData.map((item) => (
            <InventoryCard
              key={item.name}
              name={item.name}
              count={item.count}
              created_at={item.created_at}
              updated_at={item.updated_at}
              deleted_at={item.deleted_at}
              memo={item.memo}
              category={item.category} />
          ))}
        </Grid>
      </Grid>
    </>
  )
};