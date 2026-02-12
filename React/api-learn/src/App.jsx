import { useState } from "react";
import Form from "./login-page/Form";
import Footer from "./Footer";
import Header from "./Header";
import Recipe from "./Recipe";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      {isLoggedIn ? (
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
