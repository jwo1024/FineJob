import { IconCirclePlus, IconCheckCircle } from "@/components/Icons";
import styles from "@/styles/container-job-suitability/SuitabilityForms.module.scss";

export default function AddButton({
  complete,
  onClick,
  achivePercent,
}: {
  complete: boolean;
  onClick?: () => void;
  achivePercent?: number;
}) {
  return (
    <>
      {!complete ? (
        <button className={styles.addButton} onClick={onClick}>
          <IconCirclePlus />
          <span>{"경력 추가"}</span>
        </button>
      ) : (
        <button className={styles.addButton} disabled>
          <IconCheckCircle />
          <span className={achivePercent === 100 ? styles.active : undefined}>
            {achivePercent === 100 ? "요건 충족" : `${achivePercent}% 달성`}
          </span>
        </button>
      )}
    </>
  );
}
