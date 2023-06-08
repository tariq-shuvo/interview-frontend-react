import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Layout from "./screens/common/Layout";
import Home from "./screens/Home";
import Authentication from "./screens/Authentication";
import Contact from "./screens/Contact";
import NoPage from "./screens/NoPage";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchUserInfoData } from "./util/authUser";

function App() {
  const auth = useSelector((state) => state.auth)
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(fetchUserInfoData(auth.user))
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="auth" element={<Authentication />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
