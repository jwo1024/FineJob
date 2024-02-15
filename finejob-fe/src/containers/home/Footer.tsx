import Link from "next/link";
import styles from "@/styles/container-home/Footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <ul>
        <li>
          <Link href="/">회사소개</Link>
        </li>
        <li>
          <Link href="/">인재채용</Link>
        </li>
        <li>
          <Link href="/">이용약관</Link>
        </li>
        <li>
          <Link href="/">개인정보처리방침</Link>
        </li>
        <li>
          <Link href="/">제휴 및 광고 문의</Link>
        </li>
        <li>
          <Link href="/">고객센터</Link>
        </li>
        <li>
          <Link href="/">이메일주소무단수집거부</Link>
        </li>
      </ul>
      <ul>
        <li>
          {
            "고객센터 1588-0000 (평일 09:00 ~ 19:00 토요일 09:00 ~ 15:00) FAX 02-000-0000 emailadress@finejob.co.kr"
          }
        </li>
        <li>
          {
            "대표 : 000 사업자등록번호 : 013-00-00000 사업자정보 확인 > 주소 : 서울시 00구 00대로 211 OO빌딩 15층"
          }
        </li>
        <li>
          {
            "통신판매업 신고번호 : 2016-서울OO-OOOO호 직업정보제공사업 신고번호 : 서울청 제2016-00호 유료직업소개업 등록번호 : 제0000-00000000-00-0-00000호"
          }
        </li>
      </ul>
    </footer>
  );
}
