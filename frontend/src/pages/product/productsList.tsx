"use client"

import { Grid, Typography } from "@mui/material";
import { ProductCard } from "./productCard";

/**
 * 商品一覧画面
 * ロジックコンポーネント
 */
export const ProductList = () => {


  return (
    <>
      <Typography variant="h6">商品一覧</Typography>
      <Grid container spacing={2}>
        <Grid size={4}>
          <ProductCard />
        </Grid>
      </Grid>
    </>
  )
};