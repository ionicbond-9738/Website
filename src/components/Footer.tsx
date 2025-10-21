import Image from "next/image";
import {IconButton} from "@/components/Icon";

export default function Footer() {
    const iconSize = 28;


    return (
        <div className={"flex w-180"}>
            <footer
                className="footer sm:footer-horizontal text-base-content p-10 flex items-center justify-between w-full">
                <aside>
                    <Image src="/logo-hr.png" width={100} height={100} alt="Logo"/>
                    <h3 className={"font-bold"}>
                        Ionic Bond 9738
                    </h3>
                </aside>
                <nav>
                    <h6 className="footer-title">Contact Us</h6>
                    <a
                        className="link link-hover"
                        href="mailto:frctelmond@gmail.com"
                    >
                        &#102;&#114;&#99;&#116;&#101;&#108;&#109;&#111;&#110;&#100;&#64;&#103;&#109;&#97;&#105;&#108;&#46;&#99;&#111;&#109;
                    </a>
                </nav>
                {/* Right: Social icons */}


                <div className="flex items-center spacing-2">
                    <IconButton icon="/icons/github.svg" alt="GitHub" size={iconSize}
                                link="https://github.com/ionicbond-9738"/>
                    <IconButton icon="/icons/instagram.svg" alt="Instagram" size={iconSize}
                                link="https://www.instagram.com/ionic_bond_9738/"/>
                    <IconButton icon="/icons/alliance.svg" alt="The Blue Alliance" size={iconSize}
                                link="https://www.thebluealliance.com/team/9738"/>
                    <IconButton icon="/icons/tiktok.svg" alt="Tiktok" size={iconSize}
                                link="https://www.tiktok.com/@ionic.bond9738"/>
                    <IconButton icon="/icons/facebook.svg" alt="Facebook" size={iconSize}
                                link="https://www.facebook.com/IonicBond9738/"/>
                    <IconButton icon="/icons/youtube.svg" alt="YouTube" size={iconSize}
                                link="https://www.youtube.com/@IonicBond9738"/>
                </div>
            </footer>
        </div>
    );
}
