import "./globals.css";

export const metadata = {
  title: "Easy Bank website",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="mx-auto">{children}</body>
    </html>
  );
}
