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
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e.target.checked);
    }
  };

  return (
    <label className={styles.label} htmlFor={id}>
      <input
        id={id}
        className={styles.checkBox}
        type="checkbox"
        disabled={disabled}
        checked={checked}//
        onChange={handleChange}
      />
      {children}
    </label>
  );
}
