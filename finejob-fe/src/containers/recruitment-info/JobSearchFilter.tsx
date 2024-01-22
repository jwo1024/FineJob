"use client";

import styles from "@/styles/JobSearchFilter.module.scss";
import CheckBox from "@/components/CheckBox";
import {
  IconBriefCase,
  IconBuilding,
  IconMap,
  IconStack,
  IconToggleDown,
  IconToogleRight,
} from "@/components/Icons";
import { useEffect, useState } from "react";
import { ISearchResult } from "./JobSearch";

export default function JobSearchFilter({
  setSearchResultList,
  setSearchResultCnt,
}: {
  setSearchResultList: React.Dispatch<React.SetStateAction<ISearchResult[]>>;
  setSearchResultCnt: React.Dispatch<React.SetStateAction<number>>;
}) {
  const normalClassName = `${styles.categoryType}`;
  const activeClassName = `${styles.categoryType} ${styles.active}`;

  const [regionClassName, setRigionClassName] = useState(normalClassName);
  const [industryClassName, setIndustryClassName] = useState(activeClassName);
  const [jobClassName, setJobClassName] = useState(normalClassName);
  const [detailClassName, setDetailClassName] = useState(normalClassName);

  const [category, setCategory] = useState("산업");

  const [selectedData, setSelectedData] = useState<ISubCategory[]>([]);

  const handleClick = (nowCategory: string) => {
    setCategory((category) => {
      if (category === nowCategory) nowCategory;
      if (category === "지역") setRigionClassName(normalClassName);
      else if (category === "산업") setIndustryClassName(normalClassName);
      else if (category === "직업") setJobClassName(normalClassName);
      else if (category === "상세") setDetailClassName(normalClassName);

      if (nowCategory === "지역") setRigionClassName(activeClassName);
      else if (nowCategory === "산업") setIndustryClassName(activeClassName);
      else if (nowCategory === "직업") setJobClassName(activeClassName);
      else if (nowCategory === "상세") setDetailClassName(activeClassName);

      return nowCategory;
    });
  };
  function searchHandler() {
    // console.log(selectedData);
    // 이 부분 에서 데이터 보내기
    // TODO BE api 연결
    fetch(`http://localhost:8080/api/selectCompany`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(selectedData),
    })
      .then((res) => res.json())
      .then((data) => {
        const resultData = data.map((item: any) => {
          // 결과 데이터 형식에 맞게 수정
          item.companyName = item.companyName;
          item.companyGroup = item.companyGroup;
          item.jobTitle = item.jobTitle;
          item.jobTag = item.jobTag;
          item.region = item.region;
          item.career = item.career;
          item.education = item.education;
          item.date = item.date;
          item.tag = item.tag;
        });
        setSearchResultList(resultData);
        setSearchResultCnt(resultData.length); // 총 검색 결과 개수
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <section className={styles.jobSearchFilter}>
      <ul className={styles.category}>
        <li className={regionClassName} onClick={() => handleClick("지역")}>
          <IconMap />
          <button>지역 선택</button>
          <IconToggleDown />
        </li>
        <li className={industryClassName} onClick={() => handleClick("산업")}>
          <IconBuilding />
          <button>산업 선택</button>
          <IconToggleDown />
        </li>
        <li className={jobClassName} onClick={() => handleClick("직업")}>
          <IconBriefCase />
          <button>직업 선택</button>
          <IconToggleDown />
        </li>
        <li className={detailClassName} onClick={() => handleClick("상세")}>
          <IconStack />
          <button>상세 선택</button>
          <IconToggleDown />
        </li>
      </ul>

      <FilterLists category={category} setSelectedData={setSelectedData} />
      <div className={styles.searchButton}>
        <button onClick={searchHandler}>선택된 조건의 채용공고 검색하기</button>
      </div>
    </section>
  );
}

// FilterLists
// import mainCategorylist from "@/data/main-categorylist.json";
// import majorCategorylist from "@/data/major-categorylist.json";
// import subCategoryList from "@/data/sub-categorylist.json";

interface IMainCategory {
  id: number;
  typeOfBusinessCode: string;
  typeOfBusiness: string;
}

interface IMajorCategory {
  id: number;
  typeOfBusiness: string; //이부분 변경
  relatedMainCategory: IMainCategory;
}

interface ISubCategory {
  id: number;
  typeOfBusiness: string;
  relatedMaJorCategory: IMajorCategory; // TODO MaJor 일부로 이렇게 수정하신건지 확인하기
}

function FilterLists({
  category,
  setSelectedData,
}: {
  category: string;
  setSelectedData: React.Dispatch<React.SetStateAction<ISubCategory[]>>;
}) {
  const [mainList, setMainList] = useState<IMainCategory[]>([]);
  const [majorList, setMajorList] = useState<IMajorCategory[]>([]);
  const [subList, setSubList] = useState<ISubCategory[]>([]);

  const [checkedMainId, setCheckedMainId] = useState<number | null>(0);
  const [checkedMajorId, setCheckedMajorId] = useState<number[] | null>(null);
  const [checkedSubId, setCheckedSubId] = useState<number[] | null>(null);

  // useEffect(() => {
  //   // 임시 json 파일 연결
  //   setMainList(mainCategorylist);
  //   setMajorList(majorCategorylist);
  //   setSubList(subCategoryList);
  //   setCheckedMainId(0);
  //   setCheckedMajorId([0]);
  //   setCheckedSubId([0]);
  // }, []);

  useEffect(() => {
    const mainCategories = "mainCategories";
    fetch(`http://localhost:8080/api/${mainCategories}`)
      .then((res) => res.json())
      .then((data) => {
        setMainList(data);
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });

    const majorCategories = "majorCategories";
    fetch(`http://localhost:8080/api/${majorCategories}`)
      .then((res) => res.json())
      .then((data) => {
        setMajorList(data);
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });

    const subCategories = "subCategories";
    fetch(`http://localhost:8080/api/${subCategories}`)
      .then((res) => res.json())
      .then((data) => {
        setSubList(data);
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [category]);

  const handleMainClick = (id: number) => {
    setCheckedMainId(id);
    setCheckedMajorId(
      majorList
        .filter((major) => major.relatedMainCategory.id === id)
        .map((major) => major.id)
    );
  };

  const handleMajorClick = (id: number) => {
    setCheckedMajorId((checkedMajorId) => {
      if (checkedMajorId?.includes(id)) {
        return checkedMajorId.filter((checkedId) => checkedId !== id);
      } else {
        return checkedMajorId ? [...checkedMajorId, id] : [id];
      }
    });
  };

  const handleSubClick = (id: number) => {
    setCheckedSubId((checkedSubid) => {
      if (checkedSubId?.includes(id)) {
        return checkedSubId.filter((checkedId) => checkedId !== id);
      } else {
        return checkedSubId ? [...checkedSubId, id] : [id];
      }
    });
    setSelectedData(subList.filter((sub) => checkedSubId?.includes(sub.id)));
  };

  return (
    <section className={styles.filter}>
      {/* Main */}
      <ul className={styles.filterMain}>
        {mainList?.map((main) => (
          <li
            className={checkedMainId == main.id ? styles.active : ""}
            key={main.id}
            onClick={() => handleMainClick(main.id)}
          >
            <span className={styles.name}>{main.typeOfBusiness}</span>
            <span className={styles.number}>(54,232)</span>
            {checkedMainId == main.id ? (
              <span className={styles.toggle}>
                <IconToogleRight />
              </span>
            ) : undefined}
          </li>
        ))}
      </ul>

      {/* Major */}
      <ul className={styles.filterMajor}>
        {majorList
          ?.filter((major) => checkedMainId === major.relatedMainCategory.id)
          .map((major) => (
            <li key={major.id} onClick={() => handleMajorClick(major.id)}>
              <CheckBox
                checked={checkedMajorId?.includes(major.id)}
                id={`major.${major.id}`}
              >
                <span className={styles.name}>{major.typeOfBusiness}</span>
                <span className={styles.number}>(54,232)</span>
              </CheckBox>
            </li>
          ))}
      </ul>

      {/* Sub */}
      <ul className={styles.filterSub}>
        {checkedMajorId &&
          subList
            ?.filter((sub) =>
              checkedMajorId.includes(sub.relatedMaJorCategory.id)
            )
            .map((sub) => (
              <li key={sub.id} onClick={() => handleSubClick(sub.id)}>
                {/* checked={true} */}
                <CheckBox
                  checked={checkedSubId?.includes(sub.id)}
                  id={`sub${sub.id}`}
                >
                  <span className={styles.name}>{sub.typeOfBusiness}</span>
                  <span className={styles.number}>(54,232)</span>
                </CheckBox>
              </li>
            ))}
      </ul>
    </section>
  );
}
