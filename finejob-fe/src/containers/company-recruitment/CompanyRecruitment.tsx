"use client";

import styles from "@/styles/container-company-recruitment/CompanyRecruitment.module.scss";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { IconStar } from "@/components/Icons";

export default function CompanyRecruitment() {
  const [companyRecruitmentId, setCompanyRecruitmentId] = useState<
    number | null
  >(null);

  const searchParam = useSearchParams();
  useEffect(() => {
    const param = searchParam.get("companyRecruitmentId");
    console.log(param);
    setCompanyRecruitmentId(param ? Number(param) : null);
  }, []);
  return (
    <>
      <div className={styles.companyRecruitmentTitle}>
        <span>주식회사 플랜비마케팅</span>
        <h2>
          {"[월급 250만/성과급+입사지원금 100만] 플랜비마케팅 신입채용"}
          <IconStar />
        </h2>
      </div>
      <div className={styles.discriptionList}>
        <Description
          term="경력"
          description="무관(신입포함)"
          className={styles.active}
        />
        <Description term="급여" description="월급 250만 (주 40시간)" />
        <Description
          term="학력"
          description="학력무관"
          className={styles.active}
        />
        <Description term="근무일시" description="10:00 ~ 19:00" />
        <Description
          term="근무형태"
          description="정규직, 계약직, 프리랜서"
          className={styles.active}
        />
        <Description
          term="근무지역"
          description="서울 금천구, 강남구, 관악구, 구로구, 마포구, 경기 광명시, 군포시, 부천시, 수원시, 안산시"
        />
      </div>
      <div className={styles.buttonContainer}>
        <button>입사지원</button>
        <Link
          href={`/job-suitability?companyRecruitmentId=${companyRecruitmentId}`}
        >
          지원 적합도 측정
        </Link>
      </div>
    </>
  );
}

const Description = ({
  term,
  description,
  className,
}: {
  term: string;
  description: string;
  className?: string;
}) => {
  return (
    <dl className={className}>
      <dt>{term}</dt>
      <dd>{description}</dd>
    </dl>
  );
};
