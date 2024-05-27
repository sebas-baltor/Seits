import logos from "../../constants/logo";
const Footer = () => {
  return (
    <footer className="isolate rounded-t-2xl bg-white/5 shadow-xl ring-1 ring-black/5 backdrop-blur-md text-slate-300">
      <div className="px-12 2xl:px-0 2xl:max-w-[1280px] w-full mx-auto flex flex-col gap-3 justify-between py-3 lg:py-6">
        <div className="w-full h-full pt-3 lg:pt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-col-3 gap-6">
        <div>
            <ul className="flex flex-col gap-3">
              <li>
                <span className="text-neutral-200 font-bold">Apartados</span>
              </li>
              {/* <li>
                <a
                  href="#home"
                  className="text-neutral-400 hover:text-neutral-200"
                >
                  Home
                </a>
              </li> */}
              <li>
                <a
                  href="#solutions"
                  className="text-neutral-400 hover:text-neutral-200"
                >
                  Soluciones
                </a>
              </li>
              <li>
                <a
                  href="#testimonial"
                  className="text-neutral-400 hover:text-neutral-200"
                >
                  Testimonios
                </a>
              </li>
              <li>
                <a
                  href="#companies"
                  className="text-neutral-400 hover:text-neutral-200"
                >
                  Empresas
                </a>
              </li>

              <li>
                <a
                  href="#contact"
                  className="text-neutral-400 hover:text-neutral-200"
                >
                  Contacto
                </a>
              </li>
            </ul>
          </div>
          <div className="max-w-1/2 lg:max-w-1/3">
            <img className="h-8" src={logos.sm} alt="dapec" />
            <p className="mt-3 lg:t 6">
              Deja que nuestros expertos sean partidarios en tu evolución
              tecnologica.
            </p>
          </div>
          
        </div>
        <hr className="border-neutral-500" />
        <span className="text-neutral-500">© 2024 Dapec, Inc. All rights reserved.</span>
      </div>
    </footer>
  );
};

export default Footer;
