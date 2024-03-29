import { FaTwitter, FaGithub, FaLinkedin, FaDiscord } from "react-icons/fa";

const SOCIALS = [
  {
    url: "https://github.com/DouglasDelavy",
    icon: <FaGithub size={20} />,
  },
  {
    url: "https://twitter.com/DouglasDelavy",
    icon: <FaTwitter size={20} />,
  },
  {
    url: "https://www.linkedin.com/in/douglas-delavy-0804b8205/",
    icon: <FaLinkedin size={20} />,
  },
  {
    url: "https://discord.com/invite/qEjUwvj5TQ",
    icon: <FaDiscord size={20} />,
  },
];

export const Footer = () => {
  return (
    <footer className="flex gap-4 text-neutral-400 text-sm">
      {SOCIALS.map(({ icon, url }, index) => (
        <a key={index} href={url}>
          {icon}
        </a>
      ))}
    </footer>
  );
};
