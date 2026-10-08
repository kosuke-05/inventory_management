"use client"

import { Box, Grid, Typography } from "@mui/material";
import { InventoryCard } from "../../components/cards/inventoryCard";
import { GetInventoryHook } from "../../hooks/inventory/inventoryGet";
import type { inventoryArrayType } from "../../types/inventory/inventoryTypes";
import { InventoryStore } from "../../stores/inventory/inventoryStore";
import { InventoryDetailDialog } from "../../components/dialog/invnetory/inventoryDialog";
import { DeleteInventoryHook } from "../../hooks/inventory/inventoryDelete";
import { InventoryGetSnackBar } from "../../components/snackbar/inventory/inventoryGet";
import { InventoryUpdateHook } from "../../hooks/inventory/inventoryUpdate";

/**
 * 商品一覧画面
 * ロジックコンポーネント
 */
export const InventoriesList = () => {
  /**
   * hooksの取得
   * ①isErrorはエラーメッセージを表示する際に使用する（トリガー）
   */
  const { data, isError, error } = GetInventoryHook();
  const deleteInventoryHook = DeleteInventoryHook();
  const inventoryUpdateHook = InventoryUpdateHook();
  
  const InventoryData: inventoryArrayType[] = data ?? [];

  // ストアから取得
  const setInventoryDetailDialog = InventoryStore((state) => state.setInventoryDetailDialog);
  const inventoryId = InventoryStore((state) => state.inventoryId);
  const inventorySwitch = InventoryStore((state) => state.inventorySwitch);
  const inventoryData = InventoryStore((state) => state.inventoryData);

  // 詳細ボタン押下後の処理
  const afterInventoryDetailButton = () => {
    setInventoryDetailDialog(true);
  };

  // 詳細ダイアログ内の削除ボタン押下後の処理
  const afterInventoryDetailDeleteButton = () => {
    if(inventoryId) deleteInventoryHook.mutate(inventoryId);
  };

  // 詳細ダイアログ内の編集ボタン押下後の処理
  // 在庫情報編集画面で情報入力後、送信ボタンを押下してから呼び出す関数
  const afterInventoryDetailUpdateButton = () => {
    // if(inventoryData.id) inventoryUpdateHook.mutate(inventoryData.id);
  };

  return (
    <>
      <Typography variant="h6" sx={{ mb: 2 }}>商品一覧</Typography>
      {inventorySwitch ? (
        <Grid container spacing={2}>
          {InventoryData.filter((item) => item.count > 0).map((item) => (
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
      ) : (
        <Grid container spacing={2}>
          {InventoryData.map((item) => (
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
      )}

      {/** 在庫詳細ダイアログ */}
      <Box
        sx={{
          p: 2
        }}>
        <InventoryDetailDialog
          onUpdate={afterInventoryDetailUpdateButton}
          onDelete={afterInventoryDetailDeleteButton} />
      </Box>

      {/** 在庫取得に失敗した際のスナックバー */}
      {isError && (
        <InventoryGetSnackBar error={error} />
      )}
    </>
  )
};