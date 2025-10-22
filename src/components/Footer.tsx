import Image from "next/image";
import { IconButton } from "@/components/Icon";

export default function Footer() {
    const socialIcons = [
        { icon: "/icons/github.svg", alt: "GitHub", link: "https://github.com/ionicbond-9738" },
        { icon: "/icons/instagram.svg", alt: "Instagram", link: "https://www.instagram.com/ionic_bond_9738/" },
        { icon: "/icons/alliance.svg", alt: "The Blue Alliance", link: "https://www.thebluealliance.com/team/9738" },
        { icon: "/icons/tiktok.svg", alt: "Tiktok", link: "https://www.tiktok.com/@ionic.bond9738" },
        { icon: "/icons/facebook.svg", alt: "Facebook", link: "https://www.facebook.com/IonicBond9738/" },
        { icon: "/icons/youtube.svg", alt: "YouTube", link: "https://www.youtube.com/@IonicBond9738" },
    ];

    return (
        <div className="flex lg:w-180">
            <footer className="footer sm:footer-horizontal text-base-content p-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 sm:gap-0 w-full">
                {/* Left: Logo and Team Name */}
                <aside className="flex flex-col items-start">
                    <div className="hidden sm:block">
                        <Image src="/logo-hr.png" width={100} height={100} alt="Logo" />
                        <h3 className="font-bold">Ionic Bond 9738</h3>
                    </div>
                </aside>

                {/* Middle: Contact */}
                <nav>
                    <h6 className="footer-title">Contact Us</h6>
                    <a className="link link-hover" href="mailto:frctelmond@gmail.com">
                        &#102;&#114;&#99;&#116;&#101;&#108;&#109;&#111;&#110;&#100;&#64;&#103;&#109;&#97;&#105;&#108;&#46;&#99;&#111;&#109;
                    </a>
                </nav>

                {/* Right: Social Icons */}
                <div className="flex flex-wrap items-center">
                    {socialIcons.map(({ icon, alt, link }, index) => (
                        <IconButton
                            key={index}
                            icon={icon}
                            alt={alt}
                            link={link}
                        />
                    ))}
                </div>
            </footer>
        </div>
    );
}
