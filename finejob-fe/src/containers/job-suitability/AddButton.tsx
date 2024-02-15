import { IconCirclePlus } from "@/components/Icons";
import styles from "@/styles/container-job-suitability/SuitabilityForms.module.scss";

export default function AddButton({ onClick, text }: { onClick?: () => void; text?: string }) {
  return (
    <button className={styles.addButton} onClick={onClick}>
      <IconCirclePlus />
      <span>{text}</span>
    </button>
  );
}
