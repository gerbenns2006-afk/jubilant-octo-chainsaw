import "./styles.css";

export const metadata = {
  title: "ONQIVA | Independent Biomedical Research",
  description:
    "A research portfolio spanning cancer survivorship, neurodegeneration hypotheses, cell science, and transparent methods.",
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
