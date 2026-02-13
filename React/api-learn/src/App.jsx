import { useState, useEffect } from "react";
import axios from "axios";
import Form from "./login-page/Form";
import Footer from "./Footer";
import Header from "./Header";
import Recipe from "./Recipe";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // useEffect(() => {
  //   const checkAuth = async () => {
  //     const token = localStorage.getItem("accessToken");

  //     if (!token) return;

  //     try {
  //       await axios.get("https://dummyjson.com/auth/me", {
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //         },
  //       })
  //       ;

  //       setIsLoggedIn(true);
  //     } catch (error) {
  //       localStorage.removeItem("accessToken");
  //       setIsLoggedIn(false);
  //     }
  //   };

  //   checkAuth();
  // }, []);

        const token = localStorage.getItem("accessToken")||false;

        console.log(token)

  return (
    <>
      {token ? (
        <>
          <Header />
          <Recipe />
          <Footer />
        </>
      ) : (
        <Form setIsLoggedIn={setIsLoggedIn} />
      )}
    </>
  );
}

export default App;
