import GlobalStyle from 'styles/globalStyle';
import Main from 'pages/Main';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import TodoList from 'pages/Main/TodoList';
import Group from 'pages/Main/Group';
import GroupDetail from 'pages/GroupDetail';
import Login from 'pages/Login';
import { ToastContainer, Flip } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Join from 'pages/Join';
import CreateGroup from 'pages/CreateGroup';
import SearchGroup from 'pages/Main/SearchGroup';
import PrivateRoute from 'layouts/PrivateRoute';
import MyPage from 'pages/MyPage';

function App() {
  return (
    <div>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          {' '}
          {/* 인증을 반드시 하지 않아야만 접속 가능한 페이지 정의 */}
          <Route element={<PrivateRoute userAuthentication={false} />}>
            <Route path="/login" element={<Login />} />
            <Route path="/join" element={<Join />} />
          </Route>
          {/* 인증을 반드시 해야지만 접속 가능한 페이지 정의 */}
          <Route element={<PrivateRoute userAuthentication={true} />}>
            <Route path="/" element={<Main />}>
              <Route path="/" element={<TodoList />} />
              <Route path="/group" element={<Group />} />
              <Route path="/group/search" element={<SearchGroup />} />
            </Route>
            <Route path="/group/:id" element={<GroupDetail />} />
            <Route path="/group/create" element={<CreateGroup />} />
            <Route path="/profile" element={<MyPage />} />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Flip}
      />
    </div>
  );
}

export default App;
