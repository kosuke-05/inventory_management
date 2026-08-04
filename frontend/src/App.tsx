import { Box } from '@mui/material'
import './App.css'
import { UserCertification } from './pages/user/userCertification'
import { Route, Routes } from 'react-router-dom'
import { UserRegistration } from './pages/user/userRegistration'
import { ProductList } from './pages/product/productsList'

function App() {

  return (
    <Box sx={{ p: 4 }}>
      <Routes>
        {/** メールアドレス・パスワードの認証画面 */}
        <Route path='/' element={<UserCertification />} />

        {/** ユーザー新規登録 */}
        <Route path='/registration' element={<UserRegistration />} />

        {/** 商品一覧 */}
        <Route path='/products' element={<ProductList />} />
      </Routes>
    </Box>
  )
}

export default App
