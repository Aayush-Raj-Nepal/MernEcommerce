import React, { useEffect, useState } from "react";
import Routes from "./Routes";
import { useStateValue } from "./StateProvider";
import * as fb from "./api/firebase";

// style sheets
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// import './styles/unicons-2.0.1/css/unicons.css'
import "./styles/fontawesome-free/css/all.min.css";
import "./styles/OwlCarousel/assets/owl.carousel.css";
import "./styles/OwlCarousel/assets/owl.theme.default.min.css";
import "./styles/bootstrap/css/bootstrap.min.css";
import "./styles/semantic/semantic.min.css";
import "./styles/css/style.css";
import "./styles/css/responsive.css";
import "./styles/css/night-mode.css";

import "./App.css";

function App() {
  const [{ user, extras }, dispatch] = useStateValue();
  useEffect(() => {
    const fetchExtras = () => {
      fb.extrasCollection
        .orderBy("createdOn", "desc")
        .onSnapshot((snapshot) => {
          let extrasArray = [];
          snapshot.forEach((doc) => {
            let post = doc.data();
            post.id = doc.id;
            extrasArray.push(post);
          });
          dispatch({
            extras: "SET_EXTRAS",
            extras: extrasArray,
          });
        });
    };
    fetchExtras();
    // auth.onAuthStateChanged(authUser=>{
    //   console.log('THE USER IS >>>>',authUser)
    //   if (authUser) {
    //     dispatch({
    //       type:'SET_USER',
    //       user:authUser
    //     })
    //   }else{
    //     dispatch({
    //       type:'SET_USER',
    //       user:null
    //     })

    //   }
    // })
  }, []);
  return (
    <div className="App">
      <link
        href="https://fonts.googleapis.com/css2?family=Rajdhani:wght@300;400;500;600;700&display=swap"
        rel="stylesheet"
      />
      <ToastContainer newestOnTop={true} />

      <Routes />
    </div>
  );
}

export default App;
