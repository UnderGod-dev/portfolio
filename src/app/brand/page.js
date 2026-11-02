import BrandStudio from "@/components/brand/BrandStudio";

export const metadata = {
  title: "Adekunle.cloud — Three A logo directions",
  description: "Structural A, Flow A, and Aperture A: original vector identity studies for adekunle.cloud.",
  robots: { index: false, follow: false },
  alternates: { canonical: "/brand" },
};

export default function BrandPage() {
  return <BrandStudio />;
}
