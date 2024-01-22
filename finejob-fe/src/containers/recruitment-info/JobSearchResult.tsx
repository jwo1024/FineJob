import { IconStar, IconCircleCheck } from "@/components/Icons";
import styles from "@/styles/JobSearchResult.module.scss";

export default function JobSearchResult({
  searchResultList,
  searchResultCnt,
}: {
  searchResultList: any[]; // any 타입으로 임시로 설정
  searchResultCnt: number; // any 타입으로 임시로 설정
}) {
  return (
    <section className={styles.jobSearchResult}>
      <div className={styles.resultText}>
        <span>{searchResultCnt}</span>건의 검색 결과
      </div>
      <ul className={styles.cardContainer}>
        {searchResultList.map((cardData, key) => {
          return <RecruimentCard key={key} cardData={cardData} />;
        })}
      </ul>
      <div>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
        <button>5</button>

        <button>{"다음 >"}</button>
      </div>
    </section>
  );
}

import { ISearchResult } from "./JobSearch";

function RecruimentCard({ cardData }: { cardData: ISearchResult }) {
  return (
    <li>
      <section>
        <h5>{cardData.companyName ? cardData.companyName : "companyName"}</h5>
        <div>
          {cardData.companyGroup ? cardData.companyGroup : "companyGroup"}
        </div>
      </section>
      <section>
        <h5>
          <span>{cardData.jobTitle ? cardData.jobTitle : "jobTitle"}</span>
          <IconStar />
        </h5>
        <div>{cardData.jobTag ? cardData.jobTag : "jobTag"}</div>
        {cardData.tag ? <RedTag tag={cardData.tag} /> : undefined}
      </section>
      <section>
        <div>
          <IconCircleCheck />
          <span>{cardData.region ? cardData.region : "region"}</span>
        </div>
        <div>
          <IconCircleCheck />
          <span>{cardData.career ? cardData.career : "career"}</span>
        </div>
        <div>
          <IconCircleCheck />
          <span>{cardData.education ? cardData.education : "education"}</span>
        </div>
      </section>
      <section>
        <button>입사지원</button>
        <div>{`${cardData.date ? cardData.date : "date"} 까지`}</div>
      </section>
    </li>
  );
}

function RedTag({ tag }: { tag: string }) {
  return <div className={styles.redTag}>{tag}</div>;
}
