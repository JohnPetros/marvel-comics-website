type PillarProps = {
  color: string;
  isSmall?: boolean;
};

export function Pillar({ color, isSmall = false }: PillarProps) {
  return (
    <span
      className={`h-${isSmall ? "12" : "32"} w-16 bg-${color} border border-${
        color === "yellow-500" ? "yellow-900" : "transparent"
      }`}
    ></span>
  );
}
