import GlobalStyle from 'styles/globalStyle';
import Main from 'pages/Main';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import TodoList from 'pages/Main/TodoList';
import Group from 'pages/Main/Group';
import GroupDetail from 'pages/Main/GroupDetail';
import Login from 'pages/Login';
import { ToastContainer, Flip } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/main" element={<Main />}>
            <Route path="/main" element={<TodoList />} />
            <Route path="/main/group" element={<Group />} />
            <Route path="/main/group/detail/:id" element={<GroupDetail />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Navigate to="/login" />} />
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
