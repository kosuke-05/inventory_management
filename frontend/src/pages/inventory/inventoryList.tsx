"use client"

import { Box, Grid, Typography } from "@mui/material";
import { InventoryCard } from "../../components/cards/inventoryCard";
import { GetInventoryHook } from "../../hooks/user/inventory/inventoryGet";
import type { inventoryArrayType } from "../../types/inventory/inventoryTypes";
import { InventoryStore } from "../../stores/inventory/inventoryStore";
import { InventoryDetailDialog } from "../../components/dialog/invnetory/inventoryDialog";
import { DeleteInventoryHook } from "../../hooks/user/inventory/inventoryDelete";

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
  const deleteInventoryHook = DeleteInventoryHook();

  console.log(`dataの中身：${data}`);

  const inventoryData: inventoryArrayType[] = data ?? [];

  // ストアから取得
  const setInventoryDetailDialog = InventoryStore((state) => state.setInventoryDetailDialog);
  const inventoryId = InventoryStore((state) => state.inventoryId);

  // 詳細ボタン押下後の処理
  const afterInventoryDetailButton = () => {
    setInventoryDetailDialog(true);
  };

  // 詳細ダイアログ内の削除ボタン押下後の処理
  const afterInventoryDetailDeleteButton = () => {
    if(inventoryId) deleteInventoryHook.mutate(inventoryId);
  };

  return (
    <>
      <Typography variant="h6" sx={{ mb: 2 }}>商品一覧</Typography>
      <Grid container spacing={2}>
        {inventoryData.map((item) => (
          <Grid size={4} key={item.id}>
            <InventoryCard
              key={item.id}
              id={item.id}
              name={item.name}
              created_at={item.created_at}
              updated_at={item.updated_at}
              deleted_at={item.deleted_at}
              memo={item.memo}
              count={item.count}
              category={item.category}
              onClick={afterInventoryDetailButton} />
          </Grid>
        ))}
      </Grid>

      {/** 在庫詳細ダイアログ */}
      <Box
        sx={{
          p: 2
        }}>
        <InventoryDetailDialog
          onClick={afterInventoryDetailDeleteButton} />
      </Box>
    </>
  )
};