import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import AuthLayout from './layouts/AuthLayout'
import DashboardLayout from './layouts/DashboardLayout'
import WebsiteLayout from './layouts/WebsiteLayout'
import PageNotFound from './pages/PageNotFound'

function App() {
  return (
    <>
      <Routes>
        <Route path="/auth/*" element={<AuthLayout />}>
        </Route>
        <Route path="/dashboard/*" element={<DashboardLayout />}>
        </Route>
        <Route path="/*" element={<WebsiteLayout />}>
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
