import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "../pages/Login";
import HomePage from "../pages/Home";
import RegisterPage from "../pages/Register";


const RoutesApp = () => {

    const Private = ({ children }) => {
        var user = true;

        if(user) {
            return (
             children   
            )
        } else {
            return (
                <LoginPage />
            )
        }
    }

  return (
    <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Private><HomePage /></Private>}/>
          <Route exact path="/login" element={<LoginPage />} />
          <Route exact path="/register" element={<RegisterPage />} />
          <Route path="*" element={<LoginPage />} />
        </Routes>
    </BrowserRouter>
  );
};

export default RoutesApp;
 