"use client";
import React, { useState } from "react";

import Image from "next/image";

import "./assets/style.scss";
import { ModalImage } from "@/entities/ProductPageMain/ModalImage";

type Props = {
  url: string;
};

export const ProductMainImage = (props: Props) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string>("");

  return (
    <>
        <Image
        width={500}
        height={500}
          src={props.url}
          alt="product"
          className="main-image"
          onClick={() => {
            setSelectedImage(props.url);
            setModalOpen(true);
          }}
        />
      <ModalImage
        image={selectedImage}
        handleCloseClick={setModalOpen}
        isOpen={isModalOpen}
      />
    </>
  );
};
