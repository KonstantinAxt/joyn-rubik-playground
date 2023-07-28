import { CustomButton } from "@/components/CustomButton/CustomButton";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.Home}>
      <CustomButton>Button</CustomButton>
    </div>
  );
}
