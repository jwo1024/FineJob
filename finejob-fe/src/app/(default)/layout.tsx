import styles from "@/styles/layout/pageLayout.module.scss";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={styles.outerPageLayout}>
      <main className={styles.mainStyle}>{children}</main>
    </div>
  );
}
