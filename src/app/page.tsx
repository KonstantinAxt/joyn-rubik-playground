import { CustomButton } from "@/components/CustomButton/CustomButton";
import styles from "./page.module.css";
import InheritedButton from "@/components/InheritedButton/InheritedButton";

export default function Home() {
  return (
    <div className={styles.Home}>
      <CustomButton>CustomButton</CustomButton>

      {/* Uncomment the following line shows an error. "Error: No tokens have been found" */}
      {/* <InheritedButton>InheritedButton</InheritedButton> */}
    </div>
  );
}
