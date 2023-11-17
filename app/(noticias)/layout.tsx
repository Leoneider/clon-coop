import { AppInfo, Navbar } from "@/components";

export const metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <div className="h-28"></div>
      <div className="container mx-auto">{children}</div>
      <AppInfo />
    </>
  );
}
