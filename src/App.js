import GlobalStyle from 'styles/globalStyle';
import Main from 'pages/Main';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import TodoList from 'pages/Main/TodoList';
import Group from 'pages/Main/Group';
import GroupDetail from 'pages/Main/GroupDetail';
import Login from 'pages/Login';
import { ToastContainer, Flip } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Join from 'pages/Join';
import CreateGroup from 'pages/Main/CreateGroup';
import SearchGroup from 'pages/Main/SearchGroup';

function App() {
  return (
    <div>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}>
            <Route path="/" element={<TodoList />} />
            <Route path="/group" element={<Group />} />
            <Route path="/group/search" element={<SearchGroup />} />
            <Route path="/group/:id" element={<GroupDetail />} />
            <Route path="/group/create" element={<CreateGroup />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/join" element={<Join />} />
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
