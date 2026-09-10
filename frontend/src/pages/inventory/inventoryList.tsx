"use client"

import { Grid, Typography } from "@mui/material";
import { InventoryCard } from "../../components/cards/inventoryCard";
import { GetInventoryHook } from "../../hooks/user/inventory/inventoryGet";
import type { inventoryArrayType } from "../../types/inventory/inventoryTypes";
import { InventoryStore } from "../../stores/inventory/inventoryStore";
import { InventoryDetailDialog } from "../../components/dialog/invnetory/inventoryDialog";

/**
 * 商品一覧画面
 * ロジックコンポーネント
 */
export const InventoriesList = () => {
  /**
   * hooksの取得
   * ①isErrorはエラーメッセージを表示する際に使用する
   */
  const { data, isError } = GetInventoryHook();

  const inventoryData: inventoryArrayType[] = data ?? [];

  // ストアから取得
  const setInventoryDetailDialog = InventoryStore((state) => state.setInventoryDetailDialog);

  // 詳細ボタン押下後の処理
  const afterInventoryDetailButton = () => {
    setInventoryDetailDialog(true);
  };

  return (
    <>
      <Typography variant="h6">商品一覧</Typography>
      <Grid container spacing={2}>
        <Grid size={4}>
          {inventoryData.map((item) => (
            <InventoryCard
              key={item.name}
              name={item.name}
              created_at={item.created_at}
              updated_at={item.updated_at}
              deleted_at={item.deleted_at}
              count={item.count}
              category={item.category}
              onClick={afterInventoryDetailButton} />
          ))}
        </Grid>
      </Grid>
    </>
  )
};