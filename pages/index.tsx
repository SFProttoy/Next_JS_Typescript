import { Inter } from "@next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <h3>Home</h3>
      <Link style={{ marginLeft: "5px", color: "blue" }} href="/blogs">
        Blogs
      </Link>
    </>
  );
}
