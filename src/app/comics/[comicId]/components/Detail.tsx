interface DetailProps {
  title: string;
  description: string | number;
}

export function Detail({ title, description }: DetailProps) {
  return (
    <div className="">
      <dt className="text-white text-xl capitalize font-bold">{title}</dt>
      <dd className="text-white text-md">{description}</dd>
    </div>
  );
}
