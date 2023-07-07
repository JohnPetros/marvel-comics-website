type HeadingProps = {
  subtitle: string;
  title: string;
};

export function Heading({ subtitle, title }: HeadingProps) {
  return (
    <div>
      <small className="uppercase block text-sm text-red text-center font-bold">
        {subtitle}
      </small>
      <h2 className="uppercase text-black text-6xl text-center mt-2">
        {title}
      </h2>
    </div>
  );
}
