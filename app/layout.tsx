import "./styles.css";

export const metadata = {
  title: "ONQIVA | Computational Oncology",
  description: "A fictional research simulation for allocating limited vitamin D testing in cancer survivorship programs.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
