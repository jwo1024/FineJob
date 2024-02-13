"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import CardSlider from "@/components/CardSlider";
import "swiper/scss";
import "swiper/scss/pagination";
import "@/styles/customSwiperNavigation.scss";
import styles from "@/styles/HomeBanner.module.scss";
import Image from "next/image";

export default function HomeBanner() {
  return (
    <section className={styles.homeBannerContainer}>
      {/* <div className={styles.homeBanner}> */}
      {/* <Swiper
          slidesPerView={1.5}
          centeredSlides={true}
          spaceBetween={100}
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
        </Swiper> */}
      <CardSlider scrollCardNumber={1.5} gap={100}>
        {/* <EmptyCard /> */}
        <BannerCard />
        <BannerCard />
        <BannerCard />
        <BannerCard />
        {/* <EmptyCard /> */}
      </CardSlider>
    </section>
  );
}

function EmptyCard() {
  return <div className={styles.bannerCard}></div>;
}

function BannerCard() {
  return (
    <div className={styles.bannerCard}>
      <Image
        src="/svg/FineJob-logo-horizontal.svg"
        alt="ribbon"
        width={120}
        height={100}
      />
      <h2>
        <strong>파인잡</strong>으로 취업도 하고 <br />
        <strong>합격 축하금</strong>도 받자!
      </h2>
      <p>취업에 성공하신 분들께 취업축하금을 드리고 있습니다!</p>
      <button>{"자세히보기 >"}</button>
    </div>
  );
}
