"use client";
import React, { useState } from "react";

import "./styles/style.scss";
import { ANGAR_URL } from "@/service/Data/angar_url";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";

type Props = {};

const SearchInput = (props: Props) => {
  const [inputText, setTextInput] = useState("");
  const router = useRouter()

  const HandleText = (e: any) => {
    setTextInput(e.target.value);
  };
  const EnterClick = (e: any) => {
    if (e.key == "Enter") {
      router.push(`/search?search=${inputText}`)
      setTextInput("")
    }
  };

  return (
    <div className="search-container">
      <div className="SearchInput">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="21"
          height="21"
          viewBox="0 0 21 21"
          fill="none"
        >
          <path
            d="M9.7235 19.9457C4.46717 19.9457 0.187683 15.6662 0.187683 10.4099C0.187683 5.15357 4.46717 0.874084 9.7235 0.874084C14.9798 0.874084 19.2593 5.15357 19.2593 10.4099C19.2593 15.6662 14.9798 19.9457 9.7235 19.9457ZM9.7235 2.26957C5.23004 2.26957 1.58317 5.92574 1.58317 10.4099C1.58317 14.8941 5.23004 18.5502 9.7235 18.5502C14.217 18.5502 17.8638 14.8941 17.8638 10.4099C17.8638 5.92574 14.217 2.26957 9.7235 2.26957Z"
            fill="#292D32"
          />
          <path
            d="M19.4923 20.8759C19.3155 20.8759 19.1387 20.8108 18.9992 20.6713L17.1385 18.8106C16.8688 18.5408 16.8688 18.0943 17.1385 17.8245C17.4083 17.5547 17.8549 17.5547 18.1247 17.8245L19.9853 19.6851C20.2551 19.9549 20.2551 20.4015 19.9853 20.6713C19.8458 20.8108 19.669 20.8759 19.4923 20.8759Z"
            fill="#292D32"
          />
        </svg>
        <input
          type="text"
          className="input"
          placeholder="Поиск"
          value={inputText}
          onChange={HandleText}
          onKeyDown={EnterClick}
        />
      </div>
    
    </div>
  );
};

export default SearchInput;
