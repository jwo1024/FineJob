"use client";

import Link from "next/link";
import styles from "@/styles/NavBar.module.scss";
import { useState } from "react";

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

  return (
    <nav className={styles.navBar}>
      <ul>
        <li>
          <Link
            href="/recruitment-info"
            className={active[0] ? activeClassName : undefined}
            onClick={() => setActive([true, false, false, false, false, false])}
          >
            채용정보
          </Link>
        </li>
        <li>
          <Link
            href="/"
            className={active[1] ? activeClassName : undefined}
            onClick={() => setActive([false, true, false, false, false, false])}
          >
            신입 인턴
          </Link>
        </li>
        <li>
          <Link
            href="/"
            className={active[2] ? activeClassName : undefined}
            onClick={() => setActive([false, false, true, false, false, false])}
          >
            헤드헌팅
          </Link>
        </li>
        <li>
          <Link
            href="/"
            className={active[3] ? activeClassName : undefined}
            onClick={() => setActive([false, false, false, true, false, false])}
          >
            기업 연봉
          </Link>
        </li>
        <li>
          <Link
            href="/"
            className={active[4] ? activeClassName : undefined}
            onClick={() => setActive([false, false, false, false, true, false])}
          >
            커리어
          </Link>
        </li>
        <li>
          <Link
            href="/job-application-suitability"
            className={active[5] ? activeClassName : undefined}
            onClick={() => setActive([false, false, false, false, false, true])}
          >
            지원 적합도(tmp)
          </Link>
        </li>
      </ul>
    </nav>
  );
}
