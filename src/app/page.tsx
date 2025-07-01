import Image from "next/image";
import styles from "./page.module.css";
import NewsBlock from "@/components/News/NewsBlock";

export default function Home() {
  return (
    <div>
      <NewsBlock/>
    </div>
  );
}
