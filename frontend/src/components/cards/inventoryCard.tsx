"use client"

import { Button, Card, CardActions, CardContent, CardHeader, Typography } from "@mui/material";

// 商品単体
/**
 * Cardの内訳
 * ①CardHeader → タイトル
 * ②CardContent → 内容
 * ③CardActions → アクションボタン等
 */
export const ProductCard = () => {


  return (
    <Card>
      <CardHeader
        title="タイトル" />
      <CardContent>
        <Typography variant="body1">商品情報</Typography>
      </CardContent>
      <CardActions>
        <Button>詳細</Button>
      </CardActions>
    </Card>
  )
};