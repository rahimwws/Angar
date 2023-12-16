"use client";

import { MainMenu } from "@/shared/Menu/MainMenu";
import { Menu } from "@/shared/Menu/Menu";
import React, { useState } from "react";

import "./MegaMenu.scss";
import { NoMain } from "@/shared/Menu/NoMain";
import { useCatalogItems } from "@/features/Api/MenuCatalog/useCatalogItems";
type Props = {
  isOpen: any;
  close: any;
};

export const MegaMenu = (props: Props) => {
  const data = useCatalogItems()
  const [isOpenedNoMain, setIsOpenedsNoMain] = useState(false);
  const [isOpenedInfo, setIsOpenedsInfo] = useState(false); 
  const [MenuID,setMenuID] = useState(0) 
  return (
    <>
      <div className={props.isOpen ? "mega-menu" : "none"}>
        <div className="menu-catalog">
          <div>
            <MainMenu
              class={props.isOpen ? "main-menu" : "none"}
              isOpen={setIsOpenedsNoMain}
              open={""}
              data = {data[1]}
              idItem={setMenuID}
            
              close = {props.close}
            />
          </div>
          <div>
            <NoMain
              class={isOpenedNoMain ? "main-menu" : "none"}
              isOpen={setIsOpenedsInfo} open={''}
              idItem = {MenuID}
              close={props.close}
              data={data[1]}
            />
          </div>
          {/* <div>
            <Menu class={isOpenedInfo ? "items" : "none"} close={props.close} />
          </div> */}
        </div>
      </div>
      <div className={props.isOpen ? "mega-menu-mobile" : "none"}>
        <div className="mobile-catalog-header">
          {!isOpenedNoMain ? (
              <p>Категории каталога</p>
              ) : isOpenedInfo ? (
                <p onClick={()=>setIsOpenedsInfo(false)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="12"
                  viewBox="0 0 14 12"
                  fill="none"
                >
                  <path
                    d="M0.505025 5.50502C0.231658 5.77839 0.231658 6.22161 0.505025 6.49497L4.9598 10.9497C5.23316 11.2231 5.67638 11.2231 5.94975 10.9497C6.22311 10.6764 6.22311 10.2332 5.94975 9.9598L1.98995 6L5.94975 2.0402C6.22311 1.76683 6.22311 1.32362 5.94975 1.05025C5.67638 0.776885 5.23317 0.776885 4.9598 1.05025L0.505025 5.50502ZM14 5.3L1 5.3L1 6.7L14 6.7L14 5.3Z"
                    fill="black"
                  />
                </svg>{" "}
                Электроиструмент
              </p>
              ): (
            <p onClick={()=>setIsOpenedsNoMain(false)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="12"
                viewBox="0 0 14 12"
                fill="none"
              >
                <path
                  d="M0.505025 5.50502C0.231658 5.77839 0.231658 6.22161 0.505025 6.49497L4.9598 10.9497C5.23316 11.2231 5.67638 11.2231 5.94975 10.9497C6.22311 10.6764 6.22311 10.2332 5.94975 9.9598L1.98995 6L5.94975 2.0402C6.22311 1.76683 6.22311 1.32362 5.94975 1.05025C5.67638 0.776885 5.23317 0.776885 4.9598 1.05025L0.505025 5.50502ZM14 5.3L1 5.3L1 6.7L14 6.7L14 5.3Z"
                  fill="black"
                />
              </svg>{" "}
              Суб-Категория
            </p>
          )}

          <button onClick={() => props.close(false)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 8 8"
              fill="none"
            >
              <path
                d="M7.5 0.5L0.5 7.5M0.5 0.5L7.5 7.5"
                stroke="#FF5A6E"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
        <div className="mega-menu-container">
          <div className="menu-catalog">
            <div>
              <MainMenu
                class={props.isOpen ? "main-menu" : "none"}
                isOpen={setIsOpenedsNoMain}
                open={isOpenedNoMain}
                data = {data[1]}
              idItem={setMenuID}
              close = {props.close}
              />
            </div>
            <div>
              <NoMain
                class={isOpenedNoMain ? "main-menu" : "none"}
                isOpen={setIsOpenedsInfo}
                open={isOpenedInfo}
                idItem = {MenuID}
              data={data[1]}
              close={props.close}

              />
            </div>
            {/* <div>
              <Menu
                class={isOpenedInfo ? "items" : "none"}
                close={props.close}
              />
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};
