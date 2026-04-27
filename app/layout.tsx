import "./globals.css";

export const metadata = {
  title: "Differ Checkout Fixture",
  description: "A small checkout app for Differ import and adaptation testing.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
