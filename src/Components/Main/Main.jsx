import { Blob } from "../../container";
const Main = () => {
  return (
    <div className="relative text-white flex h-screen shadow-xl overflow-hidden">
      <div className="z-[10] px-12 2xl:px-0 2xl:max-w-[1280px] w-full mx-auto h-full grid grid-cols-2 items-center">
        <div>
          <h1 className="text-3xl md:text-6xl lg:text-8xl font-poppins font-bold uppercase">Software a medida</h1>
          <p className="text-pretty text-lg lg:text-xl mb-5">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias expedita, quidem numquam voluptatem vitae illo incidunt error eaque labore cupiditate?
          </p>
          <a href="#companies" className="px-6 py-3 rounded-full uppercase bg-gradient-to-r from-purple-init via-pink-init to-yellow-init shadow-sm">ver mas</a>
        </div>
      </div>
      <div className="absolute top-0 left-0 flex items-center z-[5] h-full w-2/3 isolate aspect-video rounded-r-2xl bg-white/5 shadow-xl ring-1 ring-black/5 backdrop-blur-md">
      </div>
      <div className="absolute w-2/3 right-0 top-0 h-screen z-[-1]">
        <Blob />
      </div>
    </div>
  );
};

export default Main;
