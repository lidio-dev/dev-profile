import Linkedin from "../assets/icons/linkedin.svg"
import Facebook from "../assets/icons/facebook.svg"
import GitHub from "../assets/icons/github.svg"

const Menu = () => {
  return (
    <nav className="w-full bg-[#0c4a6e] shadow-md py-3 px-6 flex justify-between items-center">
      <div className="text-xl font-bold text-gray-800"></div>
      <div className="flex gap-6">
        <button className="hover:opacity-75 transition">
          <img  src={Linkedin} alt="Home" className="w-6 h-6" />
        </button>
        <button className="hover:opacity-75 transition">
          <img src={Facebook} alt="Search" className="w-6 h-6" />
        </button>
        <button className="hover:opacity-75 transition">
          <img src={GitHub} alt="Notifications" className="w-6 h-6" />
        </button>
      </div>
    </nav>
  );
};

export default Menu;