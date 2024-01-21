import { IconCirclePlus } from "@/components/Icons";
import styles from "@/styles/SuitabilityForms.module.scss";

export default function AddButton({ onClick, text }: { onClick?: () => void; text?: string }) {
  return (
    <button className={styles.addButton} onClick={onClick}>
      <IconCirclePlus />
      <span>{text}</span>
    </button>
  );
}
