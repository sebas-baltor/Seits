
import images from "../../constants/images";
const Navbar = () => {
  return (
    <nav className="px-12 2xl:px-0 sticky top-0 text-white z-[11] bg-[#06000a]">
      <div className="flex justify-between 2xl:max-w-[1280px] mx-auto py-3">
      <a href="">
            <img className="w-8" src={images.Logo} alt="" />
        </a>
        <ul className="flex items-center gap-6">
          <li>
          <a href="#companies" className="hover px-3 py-1 rounded-full">Empresas</a>
          </li>
          <li>
          <a href="comments" className="hover px-3 py-1 rounded-full">Opiniones</a>
          </li>
          <li>
          <a href="" className="hover px-3 py-1 rounded-full">Contacto</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
