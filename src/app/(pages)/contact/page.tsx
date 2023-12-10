import { PageHeadInfo } from "@/shared/PageHeadInfo/PageHeadInfo";
import { ContactContainer } from "@/widgets/ContactContainer/ContactContainer";
import React from "react";

type Props = {};

export default function ContactPage({}: Props) {
  return (
    <main className="">
        <PageHeadInfo text="Контакты"/>
        <ContactContainer/>
    </main>
  );
}
