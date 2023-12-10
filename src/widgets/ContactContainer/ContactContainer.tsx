import React from "react";

type Props = {};

import "./style.scss";
import { Button } from "@/shared/Button/Button";
import Link from "next/link";

export const ContactContainer = (props: Props) => {
  return (
    <section className="contact-container">
      <div className="contact-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5332.848911520116!2d58.414385!3d37.962107!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f6fff9155bb2eef%3A0xe2cf2873b87a34fe!2sUssat%20In%C5%BEener%20H.K.!5e1!3m2!1sen!2sde!4v1702158238496!5m2!1sen!2sde"
          width="600"
          height="450"
          style={{ border: 0 }}
          loading="lazy"
        ></iframe>
      </div>
      <div className="contact-info">
        <div className="contact-info-item">
          <div className="contact-text">
            <svg
              width="20"
              height="20"
              viewBox="0 0 14 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.54256 9.00963C8.02794 9.00963 9.24133 7.80321 9.24133 6.31088C9.24133 4.81858 8.02794 3.61914 6.54256 3.61914C5.0572 3.61914 3.84382 4.82556 3.84382 6.31786C3.84382 7.81019 5.0572 9.00963 6.54256 9.00963ZM6.54256 4.66517C7.44912 4.66517 8.19531 5.40436 8.19531 6.31786C8.19531 7.23139 7.45609 7.97058 6.54256 7.97058C5.62903 7.97058 4.88984 7.23139 4.88984 6.31786C4.88984 5.40436 5.63601 4.66517 6.54256 4.66517Z"
                fill="#0D2945"
              />
              <path
                d="M6.54335 15C7.57542 15 8.61448 14.6095 9.42341 13.8354C11.4806 11.855 13.754 8.69596 12.8962 4.93724C12.1222 1.5272 9.14447 0 6.54335 0H6.53637C3.93526 0 0.957572 1.5272 0.183514 4.94421C-0.667253 8.70293 1.60611 11.855 3.66329 13.8354C4.47222 14.6095 5.51127 15 6.54335 15ZM6.54335 1.04603C8.57264 1.04603 11.1807 2.12692 11.8711 5.16736C12.6242 8.45188 10.5601 11.2831 8.69119 13.0753C7.48477 14.2399 5.59495 14.2399 4.38853 13.0753C2.52661 11.2831 0.462453 8.45188 1.20164 5.16736C1.89899 2.12692 4.51406 1.04603 6.54335 1.04603Z"
                fill="#0D2945"
              />
            </svg>
            <h2>Адрес:</h2>
          </div>
          <p>
            744012, Туркменистан, <br /> город Ашхабад, 41, г. Кулиев (2127)
          </p>
        </div>
        <div className="contact-info-item">
          <div className="contact-text">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 13 13"
              fill="none"
            >
              <path
                d="M0.650244 1.625V2.92928C0.650244 8.13456 4.86996 12.3543 10.0752 12.3543H11.3752C11.9137 12.3543 12.3502 11.9178 12.3502 11.3793V9.71199C12.3502 9.29232 12.0817 8.91973 11.6836 8.78702L9.61445 8.09732C9.19734 7.95828 8.73877 8.11562 8.49488 8.48145L8.02105 9.19219C7.77716 9.55803 7.31859 9.71536 6.90148 9.57633L5.90997 9.24582C4.89319 8.9069 4.11307 8.08224 3.83107 7.04822L3.42348 5.55374C3.28733 5.05451 3.5649 4.53587 4.05581 4.37223L4.44747 4.24168C4.85722 4.10509 5.10671 3.69071 5.03571 3.26467L4.73571 1.46471C4.65736 0.994578 4.2506 0.65 3.77398 0.65H1.62524C1.08677 0.65 0.650244 1.08652 0.650244 1.625ZM0.000244141 1.625C0.000244141 0.727537 0.727781 0 1.62524 0H3.77398C4.56834 0 5.24628 0.574296 5.37687 1.35785L5.67686 3.15781C5.80045 3.89935 5.3662 4.62059 4.65302 4.85832L4.26135 4.98888C4.09772 5.04342 4.0052 5.2163 4.05058 5.38271L4.45817 6.8772C4.68299 7.70154 5.30492 8.35898 6.11552 8.62918L7.10703 8.95968C7.24607 9.00603 7.39892 8.95358 7.48022 8.83164L7.95405 8.12089C8.36053 7.51117 9.12481 7.24894 9.82 7.48067L11.8891 8.17038C12.5527 8.39156 13.0002 9.01254 13.0002 9.71199V11.3793C13.0002 12.2767 12.2727 13.0043 11.3752 13.0043H10.0752C4.51098 13.0043 0.000244141 8.49354 0.000244141 2.92928V1.625Z"
                fill="#0D2945"
              />
            </svg>
            <h2>Телефоны:</h2>
          </div>
          <p>+993 12 754802</p>
          <p>+993 64 772777</p>
          <p>+993 62 449444</p>
        </div>
        <div className="contact-info-item">
          <div className="contact-text">
            <svg
              width="20"
              height="20"
              viewBox="0 0 13 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.50024 13C2.91466 13 0.000244141 10.0856 0.000244141 6.5C0.000244141 2.91442 2.91466 0 6.50024 0C10.0858 0 13.0002 2.91442 13.0002 6.5C13.0002 10.0856 10.0858 13 6.50024 13ZM6.50024 0.906977C3.41652 0.906977 0.907221 3.41628 0.907221 6.5C0.907221 9.58372 3.41652 12.093 6.50024 12.093C9.58397 12.093 12.0933 9.58372 12.0933 6.5C12.0933 3.41628 9.58397 0.906977 6.50024 0.906977Z"
                fill="#0D2945"
              />
              <path
                d="M8.74328 8.87619C8.66467 8.87619 8.58607 8.85805 8.51351 8.80968L6.63909 7.69107C6.17351 7.41293 5.82886 6.80223 5.82886 6.2641V3.78503C5.82886 3.53712 6.03444 3.33154 6.28235 3.33154C6.53025 3.33154 6.73583 3.53712 6.73583 3.78503V6.2641C6.73583 6.48177 6.91723 6.80223 7.10467 6.91107L8.97909 8.02968C9.19676 8.15665 9.26328 8.43479 9.1363 8.65247C9.0456 8.79758 8.89444 8.87619 8.74328 8.87619Z"
                fill="#0D2945"
              />
            </svg>
            <h2>График работы:</h2>
          </div>
          <p>
            Пн-пт – 08:00-18:00 <br /> Сб – 08:00-13:00
          </p>
        </div>
        <Link href="tel:+99362449444">
        <Button text="Заказать звонок" />
        </Link>
      </div>
    </section>
  );
};
