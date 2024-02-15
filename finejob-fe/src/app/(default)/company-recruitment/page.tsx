import styles from "@/styles/layout/pageLayout.module.scss";
import CompanyRecruitment from "@/containers/company-recruitment/CompanyRecruitment";
import Image from "next/image";

export default function Page() {
  return (
    <section className={styles.innerPageLayout}>
      <h3>채용정보</h3>
      <CompanyRecruitment />
      <h3>상세요강</h3>
      <Image
        src="/jpg/dummy-recruitment-img.jpg"
        alt="company-recruitment"
        width={1000}
        height={500}
      />
    </section>
  );
}
