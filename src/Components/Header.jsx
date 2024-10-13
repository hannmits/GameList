import React, { useContext, useEffect, useState } from "react";
import { HiSun, HiMoon, HiOutlineSearch } from "react-icons/hi";
import { Theme } from "../Context/Theme";
import Logo from "./../assets/Images/logo.jpg";

function Header() {
  const [toggle, setToggle] = useState(true);
  const {theme,setTheme}=useContext(Theme)

  useEffect(()=>{
    console.log("Theme", theme)
  },[])

  return (
    <div className="flex items-center p-3 ">
      <img src={Logo} width={80} height={60} />
      <div className="flex bg-slate-200 p-2 w-full mx-5 rounded-full items-center">
        <HiOutlineSearch />
        <input
          type="text"
          placeholder="Search Games"
          className="px-2 bg-transparent outline-none"
        />
      </div>
      <div>
        {theme=='light' ? (
          <HiMoon
            className="text-[40px] bg-slate-200 text-black p-2 rounded-full cursor-pointer"
            onClick={() => {setTheme('dark');localStorage.setItem('theme', 'dark')}}
          />
        ) : (
          <HiSun
            onClick={() => {setTheme('light');localStorage.setItem('theme', 'dark')}}
            className="text-[40px] bg-slate-200 text-black p-2 rounded-full cursor-pointer"
          />
        )}
      </div>
    </div>
  );
}

export default Header;
