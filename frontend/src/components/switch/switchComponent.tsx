"use client"

import { FormControlLabel, Switch } from "@mui/material";
import { useState } from "react";

/**
 * AppBar内に配置する在庫の有無で判定するスイッチ
 * ①今回は【在庫あり】のみの切り替えのため、スイッチを実装
 */
export const InventorySwitch = () => {
  // スイッチの切り替え
  const [inventorySwitch, setInventorySwitch] = useState(false);

  return (
    <FormControlLabel
      label="在庫有りのみ"
      control={
        <Switch
          checked={inventorySwitch}
          onChange={(e) => setInventorySwitch(e.target.checked)} />
      }
      sx={{
        "& .MuiFormControlLabel-label": {
          fontSize: "13px"
        },
        "& .MuiSwitch-thumb": {
          color: "white"
        }
      }}>
    </FormControlLabel>
  )
};