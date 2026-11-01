import { activeLogoId, logoConcepts } from "@/data/brand";

export default function BrandMark({
  variant = activeLogoId,
  className = "",
  label,
  ...props
}) {
  const concept =
    logoConcepts.find((item) => item.id === variant) || logoConcepts[0];
  return (
    <svg
      viewBox={concept.viewBox}
      className={className}
      role={label ? "img" : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {concept.paths.map((path, index) => (
        <path key={index} {...path} />
      ))}
    </svg>
  );
}
