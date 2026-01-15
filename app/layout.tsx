import "./globals.css";
import IntroReveal from "@/components/IntroReveal";
import VerticalNav from "@/components/VerticalNav";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black">
        <IntroReveal />
        <VerticalNav />
        {children}
      </body>
    </html>
  );
}
