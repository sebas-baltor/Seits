import logos from "../../constants/logo";
const Navbar = () => {
  return (
    <nav className="px-12 2xl:px-0 fixed w-full top-0 text-white z-[11]">
      <div className="flex justify-between 2xl:max-w-[1280px] mx-auto py-3">
        <a href="">
          <img className="hidden lg:block h-8" src={logos.white} alt="dapec large" />
          <img className="lg:hidden h-8" src={logos.sm} alt="dapec mobile" />

        </a>
        <ul className="flex items-center gap-6">
        
          <li>
            <a href="#companies" className="px-3 py-1 rounded-full text-neutral-300 hover:text-neutral-200">
              Empresas
            </a>
          </li>
          {/* <li>
            <a href="#testimonial" className="px-3 py-1 rounded-full text-neutral-300 hover:text-neutral-200">
              Testimonios
            </a>
          </li> */}
          
          <li>
            <a href="#contact" className="px-3 py-1 rounded-full text-neutral-300 hover:text-neutral-200">
              Contacto
            </a>
          </li>
          <li>
            <a href="#home" className="px-3 py-1 rounded-full text-neutral-300 hover:text-neutral-200 bg-gradient-to-t from-white/10 to-black/10 hover:from-white/15 hover:via-white/10 hover:to-black/5 ring-1 ring-white/10">
              Home
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
