// import HeroSection from "./components/HeroSection/HeroSection";
import Main from "./components/Main/Main";
import Navbar from "./components/Navbar/Navbar";
import { Switch, Route, useHistory } from "react-router-dom";
import CreateBlog from "./components/Create Blog/CreateBlog";
import { useState } from "react";
import { auth, provider } from "./firebase-config";
import { signInWithPopup, signOut } from "firebase/auth";
import Login from "./components/Login/Login";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/Footer.js/Footer";
import BlogDetails from "./components/Blog Details/BlogDetails";

function App() {
  // eslint-disable-next-line
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));

  const history = useHistory();

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then(() => {
      localStorage.setItem("isAuth", true);
      setIsAuth(true);
    });

    history.push("/");
  };

  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
    });

    toast.success("Logged out successfully", {
      position: "top-center",
      autoClose: 1000,
    });

    history.push("/");
  };

  return (
    <div>
      <div>
        <Navbar
          signInWithGoogle={signInWithGoogle}
          signUserOut={signUserOut}
          isAuth={isAuth}
        />
      </div>

      <Switch>
        <div className=" bg-gray-100 ">
          <Route exact path="/">
            <div className="w-[80%] m-auto pb-14 ">
              <Main
                isAuth={isAuth}
                signInWithGoogle={signInWithGoogle}
                signUserOut={signUserOut}
              />
            </div>
          </Route>
          <Route path="/create">
            <div className="overflow-y-hidden">
              <CreateBlog />
            </div>
          </Route>
          <Route path="/login">
            <div className="overflow-x-hidden">
              <Login signInWithGoogle={signInWithGoogle} />
            </div>
          </Route>
          <Route path="/blogDetails/:blogId">
            <div className="overflow-x-hidden">
              <BlogDetails />
            </div>
          </Route>
        </div>
      </Switch>
      <div>
        <Footer />
      </div>
      <ToastContainer />
    </div>
  );
}

export default App;
