import styles from "@/styles/RecruitmentInfo.module.scss";
import Image from "next/image";
import Link from "next/link";
import { IconStar } from "@/components/Icons";

export default function RecruitmentMain() {
  return (
    <section>
      <RecruitmentSection titleText="다이아 채용관" />
      <RecruitmentSection titleText="플래티넘 채용관" />
      <RecruitmentSection titleText="골드 채용관" />
      <RecruitmentSection titleText="실버 채용관" />
    </section>
  );
}

function RecruitmentSection({ titleText }: { titleText: string }) {
  return (
    <section className={styles.recruitmentSection}>
      <h3>{titleText}</h3>
      <ul>
        <RecruitmentCard
          companyImg=""
          companyName="롯데오토케어(주)"
          recruitmentInfo="대물보상기획/AOS관리자 경력 채용"
          dDay="D-3"
        />
        <RecruitmentCard
          companyImg=""
          companyName="롯데오토케어(주)"
          recruitmentInfo="대물보상기획/AOS관리자 경력 채용"
          dDay="D-3"
        />
        <RecruitmentCard
          companyImg=""
          companyName="롯데오토케어(주)"
          recruitmentInfo="대물보상기획/AOS관리자 경력 채용"
          dDay="D-3"
        />
        <RecruitmentCard
          companyImg=""
          companyName="롯데오토케어(주)"
          recruitmentInfo="대물보상기획/AOS관리자 경력 채용"
          dDay="D-3"
        />
        <RecruitmentCard
          companyImg=""
          companyName="롯데오토케어(주)"
          recruitmentInfo="대물보상기획/AOS관리자 경력 채용"
          dDay="D-3"
        />
        <RecruitmentCard
          companyImg=""
          companyName="롯데오토케어(주)"
          recruitmentInfo="대물보상기획/AOS관리자 경력 채용"
          dDay="D-3"
        />
        <RecruitmentCard
          companyImg=""
          companyName="롯데오토케어(주)"
          recruitmentInfo="대물보상기획/AOS관리자 경력 채용"
          dDay="D-3"
        />
        <RecruitmentCard
          companyImg=""
          companyName="롯데오토케어(주)"
          recruitmentInfo="대물보상기획/AOS관리자 경력 채용"
          dDay="D-3"
        />
        <RecruitmentCard
          companyImg=""
          companyName="롯데오토케어(주)"
          recruitmentInfo="대물보상기획/AOS관리자 경력 채용"
          dDay="D-3"
        />
        <RecruitmentCard
          companyImg=""
          companyName="롯데오토케어(주)"
          recruitmentInfo="대물보상기획/AOS관리자 경력 채용"
          dDay="D-3"
        />
        <RecruitmentCard
          companyImg=""
          companyName="롯데오토케어(주)"
          recruitmentInfo="대물보상기획/AOS관리자 경력 채용"
          dDay="D-3"
        />
        <RecruitmentCard
          companyImg=""
          companyName="롯데오토케어(주)"
          recruitmentInfo="대물보상기획/AOS관리자 경력 채용"
          dDay="D-3"
        />
        <RecruitmentCard
          companyImg=""
          companyName="롯데오토케어(주)"
          recruitmentInfo="대물보상기획/AOS관리자 경력 채용"
          dDay="D-3"
        />
        <RecruitmentCard
          companyImg=""
          companyName="롯데오토케어(주)"
          recruitmentInfo="대물보상기획/AOS관리자 경력 채용"
          dDay="D-3"
        />
        <RecruitmentCard
          companyImg=""
          companyName="롯데오토케어(주)"
          recruitmentInfo="대물보상기획/AOS관리자 경력 채용"
          dDay="D-3"
        />
      </ul>
    </section>
  );
}

function RecruitmentCard({
  companyName,
  recruitmentInfo,
  dDay,
  companyImg,
}: {
  companyName: string;
  recruitmentInfo: string;
  dDay: string;
  companyImg: string;
}) {
  return (
    <li className={styles.recruitmentCard}>
      <Link href="/">
        <Image
          src="https://via.placeholder.com/300x140.png"
          alt=""
          width={300}
          height={140}
        />
      </Link>
      <section>
        <div>
          <h4 data-style="company-name">{companyName}</h4>
          <div data-style="recruitment-info">{recruitmentInfo}</div>
          <div data-style="d-day">{dDay}</div>
        </div>
        <IconStar />
      </section>
    </li>
  );
}
