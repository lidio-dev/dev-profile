import Linkedin from "../assets/icons/linkedin.svg";
import Facebook from "../assets/icons/facebook.svg";
import GitHub from "../assets/icons/github.svg";

const FooterMain = () => {
  return (
    <footer className="w-full bg-[#0c4a6e] py-4 px-6 flex justify-between items-center mt-auto">
    <div className="text-xl font-bold text-white">@2025</div>
      <div className="flex gap-6">
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-75 transition">
          <img src={Linkedin} alt="LinkedIn" className="w-6 h-6" />
        </a>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-75 transition">
          <img src={Facebook} alt="Facebook" className="w-6 h-6" />
        </a>
        <a href="https://www.github.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-75 transition">
          <img src={GitHub} alt="GitHub" className="w-6 h-6" />
        </a>
      </div>
    </footer>
  );
};

export default FooterMain;
