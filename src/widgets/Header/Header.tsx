import React from "react";
import Image from "next/image";
import "./Header.scss";

import logo from "../../../public/logo.svg";
import shop from "./assets/icons/shop.png";
import user from "./assets/icons/user.png";

import Nav from "@/shared/Nav/Nav";
import SearchInput from "@/entities/SearchInput/SearchInput";
import { HeaderInfo } from "@/shared/HeaderInfo/HeaderInfo";

type Props = {};

const Header = (props: Props) => {
  return (
    <header>
      <HeaderInfo />
      <div className="main-header">
        <Image src={logo} alt="logo" width={110} height={110} />
        <Nav />
        <SearchInput />
        <div className="assets">
          <Image src={user} alt="user" />
          <Image src={shop} alt="shop" />
        </div>
      </div>
    </header>
  );
};

export default Header;
