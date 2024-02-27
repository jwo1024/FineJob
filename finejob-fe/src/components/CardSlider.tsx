"use client";

import styles from "@/styles/components/CardSlider.module.scss";
import { useState, useRef, ReactNode, useEffect } from "react";

export default function CardSlider({
  children,
  width,
  height,
}: {
  children: ReactNode[];
  scrollSize?: number;
  scrollCardNumber?: number;
  gap?: number;
  width?: number;
  height?: number;
}) {
  const [isFirstCard, setIsFirstCard] = useState(true);
  const [isLastCard, setIsLastCard] = useState(false);

  const cardContainerRef = useRef<HTMLDivElement>(null);

  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  useEffect(() => {
    cardRefs.current = children.map(
      (_, index) => cardRefs.current[index] || null
    );
  }, [children]);
  // const cardRefs = useRef(
  //   Array(children.length)
  //     .fill(null)
  //     .map(() => useRef<HTMLDivElement>(null))
  // );

  const withStyle = {
    width: width ? width : "100%",
    height: height ? height : "100%",
  };

  const cardWidth = 48; // rem
  const defaultgap = 1;
  const defaultScrollSize = cardWidth + defaultgap;

  const [currentSlide, setCurrentSlide] = useState(0);

  const showSlide = (slideIndex: number) => {
    cardRefs.current.forEach((cardRef, index) => {
      if (index === slideIndex) {
        cardRef?.classList.add(styles.activeCard);
        cardRef?.classList.remove(styles.deactiveCard);
      } else {
        cardRef?.classList.remove(styles.activeCard);
        cardRef?.classList.add(styles.deactiveCard);
      }
    });

    setCurrentSlide(slideIndex);
    let currentScrollSize = cardWidth / 2 + defaultScrollSize * slideIndex;
    cardContainerRef.current!.style.transform = `translateX(-${currentScrollSize}rem)`;

    if (slideIndex <= 0) setIsFirstCard(true);
    else setIsFirstCard(false);
    if (slideIndex >= children.length - 1) setIsLastCard(true);
    else setIsLastCard(false);
  };

  const handleLeftClick = () => {
    if (isFirstCard) return;
    showSlide(currentSlide - 1);
  };

  const handleRightClick = () => {
    if (isLastCard) return;
    showSlide(currentSlide + 1);
  };

  return (
    <section style={withStyle} className={styles.cardSlider}>
      {/* Card Container */}
      <div className={styles.cardContainer} ref={cardContainerRef}>
        {children?.map((child, index) => {
          if (index === 0) {
            return (
              <article
                key={index}
                className={styles.activeCard}
                // ref={cardRefs.current[index]}
                ref={(el) => (cardRefs.current[index] = el as HTMLDivElement)}
              >
                {child}
              </article>
            );
          }
          return (
            <article
              key={index}
              className={styles.deactiveCard}
              // ref={cardRefs.current[index]}
              ref={(el) => (cardRefs.current[index] = el as HTMLDivElement)}
            >
              {child}
            </article>
          );
        })}
      </div>
      {/* Left Button */}
      {!isFirstCard ? (
        <button className={styles.leftButton} onClick={handleLeftClick}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5 8.25 12l7.5-7.5"
            />
          </svg>
        </button>
      ) : (
        <button className={styles.leftButtonDisabled} onClick={handleLeftClick}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5 8.25 12l7.5-7.5"
            />
          </svg>
        </button>
      )}
      {/* Right Button */}
      {!isLastCard ? (
        <button className={styles.rightButton} onClick={handleRightClick}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      ) : (
        <button
          className={styles.rightButtonDisabled}
          onClick={handleRightClick}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      )}
    </section>
  );
}
