import { IconStar, IconCircleCheck } from "@/components/Icons";
import styles from "@/styles/JobSearchResult.module.scss";


export default function JobSearchResult() {
  return (
    <section className={styles.jobSearchResult}>
      <div className={styles.resultText}>
        <span>62,272</span>건의 검색 결과
      </div>
      <ul className={styles.cardContainer}>
        <RecruimentCard />
        <RecruimentCard />
        <RecruimentCard />
        <RecruimentCard />
        <RecruimentCard />
        <RecruimentCard />
        <RecruimentCard />
        <RecruimentCard />
        <RecruimentCard />
        <RecruimentCard />
        <RecruimentCard />
        <RecruimentCard />
        <RecruimentCard />
        <RecruimentCard />
        <RecruimentCard />
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

function RecruimentCard() {
  return (
    <li>
      <section>
        <h5>(주)유니에스</h5>
        <div>유니에스그룹</div>
      </section>
      <section>
        <h5>
          <span>[보라매역] 신한카드 서울발급지원센터 서류심사직 채용</span>
          <IconStar />
        </h5>
        <div>사무직 | 사무보조 | 사무행정 | Excel | QA 외</div>
        <RedTag tag="금융 보험 조회 TOP 100" />
      </section>
      <section>
        <div>
          <IconCircleCheck />
          <span>서울 동작구 외</span>
        </div>
        <div>
          <IconCircleCheck />
          <span>경력 ・ 정규직</span>
        </div>
        <div>
          <IconCircleCheck />
          <span>학력무관</span>
        </div>
      </section>
      <section>
        <button>입사지원</button>
        <div>2일 전 등록</div>
      </section>
    </li>
  );
}

function RedTag({ tag }: { tag: string }) {
  return <div className={styles.redTag}>{tag}</div>;
}
