// import React,{ useState, useEffect } from 'react'
import HeaderTop from "./HeaderTop"
import HeaderBottom from './HeaderBottom'
import "./Header.css"
 
function Header() {
//     const[position,setPosition]=useState('')
//     const handleScroll = () => {
//       let pos=window.pageYOffset
//       console.log(window.pageYOffset)
//       if (pos>=150){
//           setPosition('ixed')
//       } else {
//           setPosition('')
//       }
//       // const position = window.pageYOffset;
//       // setScrollPosition(position);
//   };
  
//   useEffect(() => {
//       window.addEventListener('scroll', handleScroll, { passive: true });
  
//       return () => {
//           window.removeEventListener('scroll', handleScroll);
//       };
//   }, []);
   
    return (
        <div className="header__container">
 <div  className="bg-white  fixed__header">
       <HeaderTop></HeaderTop>
       <HeaderBottom></HeaderBottom>
        </div>
        </div>
       
    )
}

export default Header
