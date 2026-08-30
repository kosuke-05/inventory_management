"use client"

import { AppBar, Box, IconButton, Stack, Toolbar, Typography } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import { UserStore } from "../../stores/user/userStore";
import { InventorySwitch } from "../switch/switchComponent";
import { InventoryRegistrationButton } from "../buttons/inventory/buttons";

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
      {/** AppBarだけでなく、在庫一覧画面も非表示にする必要がある */}
      {location.pathname !== "/" && location.pathname !== "/user/registration" && (
        <AppBar position="static" sx={{ width: "100%"}} >
          <Toolbar>
            <Stack direction="column" sx={{ width: "100%"}}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between"
                }}>
                <Box>
                  <IconButton
                    onClick={() => navigate("/inventories")}
                    sx={{ color: "white" }}>
                    <Typography variant="body1">在庫管理</Typography>
                  </IconButton>
                </Box>
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
              </Box>

              <Box sx={{ position: "relative", display: "flex", alignItems: "center"}}>
                {/** 在庫ありのみ表示するスイッチ */}
                <Box sx={{ position: "absolute", left: "50%", transform: "translateX(-50%)", alignItems: "center"}}>
                  <InventorySwitch />
                </Box>
                <Box sx={{ ml: "auto"}}>
                  <InventoryRegistrationButton />
                </Box>
              </Box>
            </Stack>
          </Toolbar>
        </AppBar>
      )}
    </>
  )
};