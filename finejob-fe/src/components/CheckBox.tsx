import styles from "@/styles/components/CheckBox.module.scss";

export default function CheckBox({
  children,
  disabled,
  checked,
  onChange,
}: {
  children?: React.ReactNode;
  disabled?: boolean;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
}) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e.target.checked);
    }
  };

  return (
    <label className={styles.label}>
      <input
        className={styles.checkBox}
        type="checkbox"
        disabled={disabled}
        checked={checked ?? false}
        onChange={handleChange}
      />
      {children}
    </label>
  );
}
