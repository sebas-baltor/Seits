import { Blob } from "../../container";
const Main = () => {
  return (
    <div className="relative text-white flex h-[100vh] w-screen shadow-xl overflow-hidden">
      <div className="flex items-center absolute z-10 w-1/2 h-full isolate aspect-video rounded-r-2xl bg-white/5 shadow-xl ring-1 ring-black/5 backdrop-blur-md">
        <div className="px-12 2xl:px-0 2xl:max-w-[640px] w-full mx-auto">
          <h1 className="text-8xl font-poppins font-bold uppercase">Software a medida.</h1>
          <p className="text-justify text-xl mb-5">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias expedita, quidem numquam voluptatem vitae illo incidunt error eaque labore cupiditate?
          </p>
          <a href="#companies" className="px-6 py-3 rounded-full bg-pink-200 uppercase bg-gradient-to-r from-indigo-500 via-purple-500 via-pink-500 to-amber-700">ver mas</a>
        </div>
      </div>
      <div className="absolute w-screen h-screen z-[-1]">
        <Blob />
      </div>
    </div>
  );
};

export default Main;
