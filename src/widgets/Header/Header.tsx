"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

import "./Header.scss";

import logo from "../../../public/logo.svg";
import shop from "./assets/icons/shopping-cart.svg";
import user from "./assets/icons/user.svg";

import Nav from "@/shared/Nav/Nav";
import SearchInput from "@/entities/SearchInput/SearchInput";
import { HeaderInfo } from "@/shared/HeaderInfo/HeaderInfo";
import { MegaMenu } from "@/entities/MegaMenu/MegaMenu";
import { AuthModal } from "@/entities/AuthModal/AuthModal";
import Link from "next/link";

type Props = {};

const Header = (props: Props) => {
  const [isOpenedMain, setIsOpenedsMain] = useState(false);
  const [isAuthModal, setIsAuthModal] = useState(false);

  useEffect(() => {
    const main: any | HTMLElement = document.querySelector("main");
    if (isOpenedMain) {
      main.className = "blur" as string;
    } else {
      main.classList.remove("blur");
    }
    main.addEventListener("click", () => {
      setIsOpenedsMain(false);
    });
  }, [isOpenedMain]);

  return (
    <>
      <header className="desktop-header">
        <HeaderInfo />
        <div className="main-header">
          <Link href="/">
            <Image src={logo} alt="logo" width={110} height={110} />
          </Link>
          <Nav openCatalog={setIsOpenedsMain} check={isOpenedMain} />
          <SearchInput />
          <div className="assets">
            <Image
              src={user}
              alt="user"
              onClick={() =>
                isAuthModal ? setIsAuthModal(false) : setIsAuthModal(true)
              }
            />
            <Link href="/cart">
              <Image src={shop} alt="shop" width={25} height={25} />
            </Link>
          </div>
        </div>
      </header>
      <header className="mobile-header">
        <HeaderInfo />
        <div className="main-header">
          <Link href="/">
            <Image src={logo} alt="logo" width={110} height={110} />
          </Link>
          <div className="assets">
            <Image
              src={user}
              alt="user"
              onClick={() =>
                isAuthModal ? setIsAuthModal(false) : setIsAuthModal(true)
              }
              width={25}
              height={25}
            />
            <Link href="/cart">
              <Image src={shop} alt="shop" width={20} height={20} />
            </Link>
          </div>
        </div>
        <div className="mobile-catalog-header">
          <button>
            <Nav openCatalog={setIsOpenedsMain} check={isOpenedMain} />
          </button>
          <SearchInput />
        </div>
      </header>
      <MegaMenu isOpen={isOpenedMain} close={setIsOpenedsMain} />
      <AuthModal check={isAuthModal} open={setIsAuthModal} />
    </>
  );
};

export default Header;
