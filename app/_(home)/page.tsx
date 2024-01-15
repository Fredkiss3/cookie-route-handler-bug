import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "(home)"
};

/** Add your relevant code here for the issue to reproduce */
export default function Home() {
  return <div style={{
    display: 'flex',
    flexDirection: 'column'
  }}>
    <h1>HOMEPAGE</h1>
    <Link href="/child">go to /child</Link>
  </div>
}
