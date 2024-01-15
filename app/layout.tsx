import { Metadata } from "next";

export default function RootLayout({ children }) {
  return (
    <html>
      <head />
      <body>{children}</body>
    </html>
  )
}

export const metadata: Metadata = {
  title: {
    template:  "%s - metadata bug",
    default: 'Layout - metadata bug',
  },
  description: "This is a bug for the metadata"
};
