import { Box } from '@mui/material'
import './App.css'
import { UserCertification } from './pages/user/userCertification'
import { Navigate, Route, Routes } from 'react-router-dom'
import { UserRegistration } from './pages/user/userRegistration'
import { ProductList } from './pages/product/productsList'
import { AppBarMenu } from './components/common/appBar'
import { UserStore } from './stores/user/userStore'

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
          <Route path='/registration' element={<UserRegistration />} />

          {/** 商品一覧 */}
          <Route
            path='/products'
            element={
              user ? <ProductList />
              : <Navigate to="/" replace />
            } />
        </Routes>
      </Box>
    </>
  )
}

export default App
