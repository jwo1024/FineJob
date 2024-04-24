"use client";

import Link from "next/link";
import styles from "@/styles/container-home/NavBar.module.scss";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const activeClassName = styles.active;
  const [active, setActive] = useState([
    false,
    true,
    false,
    false,
    false,
    false,
  ]);

  const pathName = usePathname();

  useEffect(() => {
    console.log(pathName);
    if (pathName === "/") setActive([false, true, false, false, false, false]);
    else if (pathName === "/job-search")
      setActive([true, false, false, false, false, false]);
    else if (pathName === "/job-suitability")
      setActive([false, false, false, false, false, true]);
  }, [pathName]);

  return (
    <nav className={styles.navBar}>
      <ul>
        <li>
          <Link
            href="/job-search"
            className={active[0] ? activeClassName : undefined}
          >
            채용정보
          </Link>
        </li>
        <li>
          <Link href="/" className={active[1] ? activeClassName : undefined}>
            신입 인턴
          </Link>
        </li>
        <li>
          <Link href="/" className={active[2] ? activeClassName : undefined}>
            헤드헌팅
          </Link>
        </li>
        <li>
          <Link href="/" className={active[3] ? activeClassName : undefined}>
            기업 연봉
          </Link>
        </li>
        <li>
          <Link href="/" className={active[4] ? activeClassName : undefined}>
            커리어
          </Link>
        </li>
        <li>
          <Link
            href="/job-suitability"
            className={active[5] ? activeClassName : undefined}
          >
            지원 적합도
          </Link>
        </li>
      </ul>
    </nav>
  );
}
