import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import Logo from "../assets/logo.png";

const linkGroups = [
  {
    title: "Product",
    links: ["Home", "Technologies", "Projects"],
  },
  {
    title: "Company",
    links: ["About", "Contact", "Careers"],
  },
  {
    title: "Legal",
    links: ["Privacy Policy", "Terms of Service"],
  },
];

const Footer = () => {
  return (
    <footer className="border-t border-base-300">
      <div className="container mx-auto grid grid-cols-1 gap-10 px-4 py-14 md:grid-cols-4">
        
        <div className="md:col-span-1">
          <img src={Logo} alt="Dev Stack" className="h-8" />
          <p className="mt-4 max-w-xs text-sm text-base-content/60">
            Curated tools, technologies, and resources for developers
            building modern software.
          </p>

          <div className="mt-5 flex items-center gap-4 text-lg text-base-content/60">
            <a href="#" aria-label="GitHub" className="hover:text-pink-600">
              <FaGithub />
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-pink-600">
              <FaTwitter />
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:text-pink-600">
              <FaLinkedin />
            </a>
          </div>
        </div>

     
        {linkGroups.map((group, ind) => (
          <div key={ind}>
            <h3 className="text-xs font-semibold tracking-wide text-base-content/80">
              {group.title}
            </h3>
            <ul className="mt-4 flex flex-col gap-2">
              {group.links.map((link, linkInd) => (
                <li
                  key={linkInd}
                  className="cursor-pointer text-sm text-base-content/60 hover:text-pink-600"
                >
                  {link}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>


      <div className="border-t border-base-300 py-5">
        <div className="container mx-auto flex flex-col items-center justify-between gap-3 px-4 text-xs text-base-content/50 md:flex-row">
          <p>© 2026 Dev Stack. All rights reserved.</p>
          <div className="flex gap-5">
            <span className="cursor-pointer hover:text-pink-600">
              Privacy
            </span>
            <span className="cursor-pointer hover:text-pink-600">Terms</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
