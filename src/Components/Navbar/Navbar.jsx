
import images from "../../constants/images";
const Navbar = () => {
  return (
    <div className="flex  bg-transparent absolute size-full h-20  z-20 text-white px-5  ">
      <div className="flex size-full justify-between m-auto max-w-7xl">
        <div className="flex gap-2.5 items-center h-5 self-center">
          <a href="">
            <img className="w-11" src={images.Logo} alt="" />
          </a>
        </div>
        <div className="flex gap-6 items-center h-5 self-center ">
          <a href="#Companies" className="hover px-3 py-1 rounded-full">Empresas</a>
          <a href="#Comments" className="hover px-3 py-1 rounded-full">Opiniones</a>
          <a href="" className="hover px-3 py-1 rounded-full">Contacto</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
