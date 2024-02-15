import styles from "@/styles/components/CheckBox.module.scss";

export default function CheckBox({
  children,
  disabled,
  value,
  checked,
  id,
  onChange,
}: {
  children?: React.ReactNode;
  disabled?: boolean;
  value?: string;
  checked?: boolean;
  id: string;
  onChange?: (checked: boolean) => void;
}) {
  return (
    <label className={styles.label} htmlFor={id}>
      <input
        id={id}
        className={styles.checkBox}
        type="checkbox"
        disabled={disabled}
        checked={checked}
        // onChange={() => onChange(!checked)}
      />
      {children}
    </label>
  );
}
