import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/page/home/Home'
import Response from './components/page/response/Response';
import Detail from './components/page/detail/Detail';
import Feedback from './components/page/feedback/Feedback';
import Login from './components/page/login/Login';
import Register from './components/page/register/Register';
import AppProvider from './components/provider/AppProvider';
// import AdminBase from './components/page-admin/AdminBase';
import UserInfo from './components/page/userinfo/UserInfo';
import Statistic from './components/page/statistic/Statistic';
import AdminBase from './components/page-admin/AdminPage';

function App() {
  return (
    <AppProvider>
      <Routes>
        <Route path='/' element={<Statistic />} />
        <Route path='/home' element={<Home />} />
        <Route path='/response' element={<Response />} />
        <Route path='/detail' element={<Detail />} />
        <Route path='/feedback' element={<Feedback />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/admin' element={<AdminBase />} />
        <Route path='/info' element={<UserInfo />} />
      </Routes>
    </AppProvider>
  );
}

export default App;
