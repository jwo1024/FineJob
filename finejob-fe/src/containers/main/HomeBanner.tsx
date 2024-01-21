"use client";
import styles from "@/styles/HomeBanner.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/scss";
import "@/styles/swiperNavigation.scss";
import "swiper/scss/pagination";
import Image from "next/image";
import { CardBg } from "../../../public/png/png";

import { useState } from "react";

export default function HomeBanner() {
  const [swiperRef, setSwiperRef] = useState<null>(null);

  return (
    <section className={styles.homeBanner}>
      <Swiper
        slidesPerView={2}
        centeredSlides={true}
        spaceBetween={62}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <BannerCard />
        </SwiperSlide>
        <SwiperSlide>
          <BannerCard />
        </SwiperSlide>
        <SwiperSlide>
          <BannerCard />
        </SwiperSlide>
        <SwiperSlide>
          <BannerCard />
        </SwiperSlide>
      </Swiper>
    </section>
  );
}

function BannerCard() {
  return (
    <div>
      <Image src={CardBg} alt="banner" />
    </div>
  );
}
