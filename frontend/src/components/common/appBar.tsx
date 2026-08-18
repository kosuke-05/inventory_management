"use client"

import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import { UserStore } from "../../stores/user/userStore";

// ログイン・新規登録画面以外で配置するAppBar
export const AppBarMenu = () => {
  // 画面遷移
  const navigate = useNavigate();

  // 現在地点を確認
  const location = useLocation();

  // ストアから取得
  const userName = UserStore((state) => state.user?.name);

  return (
    <>
      {location.pathname !== "/" && location.pathname !== "/registration" && (
        <AppBar position="static">
          <Toolbar
            sx={{ justifyContent: "space-between" }}>
            <IconButton onClick={() => navigate("/products")} sx={{ color: "white" }}>
              <Typography variant="body1">在庫管理</Typography>
            </IconButton>

            {/** 在庫ありの商品のみ表示するチェックボックス */}
            
            <Box
              sx={{
                display: "flex",
                alignItems: "center"
              }}>
              <Typography variant="body2">{userName} さん</Typography>
              <IconButton onClick={() => navigate("/")} sx={{ color: "white" }}>
                <Typography variant="body2">ログアウト</Typography>
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
      )}
    </>
  )
};