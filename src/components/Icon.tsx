import Image from "next/image";

interface IconBoxProps {
  icon: string;
  alt?: string;
  link: string;
}

export function IconButton({ icon, alt = "icon", link }: IconBoxProps) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" aria-label={alt}>
      <div
        className="
          bg-[#ff69b4] p-2 rounded-md flex items-center justify-center
          transition duration-300 ease-in-out transform
          hover:scale-110 hover:shadow-lg hover:shadow-[#f7abd1]/20 hover:bg-[#f7abd1]
          w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12
        "
      >
        <Image
          src={icon}
          alt={alt}
          width={16}
          height={16}
          className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 object-contain"
        />
      </div>
    </a>
  );
}
