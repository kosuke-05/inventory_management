import { Box } from '@mui/material'
import './App.css'
import { UserCertification } from './pages/user/userCertification'
import { Navigate, Route, Routes } from 'react-router-dom'
import { UserRegistration } from './pages/user/userRegistration'
import { InventoriesList } from './pages/inventory/inventoryList'
import { AppBarMenu } from './components/common/appBar'
import { UserStore } from './stores/user/userStore'
import { InventoryRegistration } from './pages/inventory/inventoryRegistration'

function App() {
  // ストアから取得
  const user = UserStore((state) => state.user);

  return (
    <>
      {/** AppBar */}
      <AppBarMenu />

      <Box sx={{ p: 4 }}>
        <Routes>
          {/** メールアドレス・パスワードの認証画面 */}
          <Route path='/' element={<UserCertification />} />

          {/** ユーザー新規登録 */}
          <Route path='/user/registration' element={<UserRegistration />} />

          {/** 在庫一覧 */}
          <Route
            path='/inventories'
            element={
              user ? <InventoriesList />
              : <Navigate to="/" replace />
            } />

          {/** 在庫登録 */}
          <Route path='/inventory/registration' element={<InventoryRegistration />} />
        </Routes>
      </Box>
    </>
  )
}

export default App
