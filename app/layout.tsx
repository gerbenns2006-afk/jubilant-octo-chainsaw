import "./styles.css";

export const metadata = {
  title: "ONQIVA | Vitamin D and Cancer Survivorship Research",
  description:
    "An independent exploratory analysis of NHANES data, shown beside a separate fictional clinic-allocation simulation.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
