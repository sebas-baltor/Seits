import { Blob,AnchorBtn } from "../../container";
const Main = () => {
  return (
    <div id="home" className="relative text-white flex h-screen shadow-xl overflow-hidden">
      <div className="z-[10] px-12 2xl:px-0 2xl:max-w-[1280px] w-full mx-auto h-full grid grid-cols-1 lg:grid-cols-2 items-start lg:items-center">
        <div className="flex flex-col gap-6 items-start lg:items-start mt-48 lg:mt-0">
          <h1 className="text-3xl md:text-6xl lg:text-8xl font-poppins font-bold uppercase">
            Software a medida.
          </h1>
          <p className="text-pretty text-lg lg:text-xl text-neutral-300 font-raleway">
          En Dapec, no solo desarrollamos software; creamos soluciones personalizadas que impulsan el crecimiento y el éxito de tu empresa. ¡Déjanos ser tu socio tecnológico y llevar tu negocio al siguiente nivel!</p>
          <AnchorBtn href="#solutions" text="mas"/>
          {/* <a
            href="#solutions"
            className="px-6 py-2 rounded-full uppercase bg-gradient-to-r from-purple-init via-pink-init to-yellow-init shadow-sm hover:bg-gradient-to-tr ease-in transition-all"
          >
            mas
          </a> */}
        </div>
      </div>
      <div className="absolute top-0 left-0 flex items-center z-[5] lg:h-full h-3/4 md:h-2/3 w-full lg:w-2/3 isolate aspect-video rounded-b-2xl lg:rounded-r-2xl bg-gradient-to-tr from-white/15 to-black/10 shadow-xl ring-1 ring-white/10 backdrop-blur-md"></div>
      <div className="absolute w-full h-1/3 lg:w-2/3 bottom-0 right-0 lg:top-0 lg:h-screen z-[-1] object-cover">
        <Blob />
      </div>
    </div>
  );
};

export default Main;
