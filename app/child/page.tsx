import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Child"
  };

  /** Add your relevant code here for the issue to reproduce */
export default function Child() {
    return <div>
        <h1>child</h1>
        <Link href="/">go to /</Link>
    </div>
  }