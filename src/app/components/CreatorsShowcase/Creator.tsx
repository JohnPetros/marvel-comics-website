import Image from "next/image";

type CreatorProps = {
  name: string;
  image: string;
};

export function Creator({ name, image }: CreatorProps) {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="relative w-48 h-48 rounded-full bg-gray-100 p-2 overflow-hidden">
        <Image src={`/images/${image}`} alt={name} fill />
      </div>
      <strong className="text-red-500 mt-5">{name}</strong>
    </div>
  );
}
