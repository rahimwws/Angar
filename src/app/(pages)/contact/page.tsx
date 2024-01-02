"use client"

import language from "@/service/language/language";
import { lang } from "@/service/language/languageID";
import { PageHeadInfo } from "@/shared/PageHeadInfo/PageHeadInfo";
import { ContactContainer } from "@/widgets/ContactContainer/ContactContainer";
import { useAtom } from "jotai";
import React from "react";

type Props = {};

export default function ContactPage({}: Props) {
  const [idLang] = useAtom(lang)

  return (
    <main className="">
        <PageHeadInfo text={language.contacts[idLang]}/>
        <ContactContainer/>
    </main>
  );
}
