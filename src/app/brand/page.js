import BrandStudio from "@/components/brand/BrandStudio";

export const metadata = {
  title: "WA — Logo directions for Adekunle",
  description: "Six original WA monogram directions for Warith Adekunle.",
  robots: { index: false, follow: false },
  alternates: { canonical: "/brand" },
};

export default function BrandPage() {
  return <BrandStudio />;
}
