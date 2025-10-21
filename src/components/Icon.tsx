import Image from "next/image";

interface IconBoxProps {
    icon: string;
    alt?: string;
    size?: number;
    link: string;
}

export function IconButton({ icon, alt = "icon", size = 40, link }: IconBoxProps) {
    const boxSize = size + 20;

    return (
        <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={alt}
        >
            <div
                className="
                    bg-[#ff69b4]
                    p-3
                    rounded-md
                    flex
                    items-center
                    justify-center
                    transition
                    duration-300
                    ease-in-out
                    transform
                    hover:scale-110
                    hover:shadow-lg
                    hover:shadow-[#f7abd1]/20
                    hover:bg-[#f7abd1]
                "
                style={{
                    width: boxSize,
                    height: boxSize,
                }}
            >
                <Image src={icon} alt={alt} width={size} height={size} />
            </div>
        </a>
    );
}
