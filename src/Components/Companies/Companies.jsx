import images from "../../constants/bussines-logo";
import { Title } from "../../container";

const Companies = () => {
  return (
    <section>
      <div
        id="companies"
        className="px-12 py-40 2xl:px-0 2xl:max-w-[1280px] w-full mx-auto flex flex-col justify-center items-center"
      >
        <div className="overflow-hidden py-12 px-12 lg:px-24 rounded-xl isolate bg-gradient-to-tr from-white/10 to-black/5 shadow-xl ring-1 ring-white/10 backdrop-blur-md w-full">
          <div className="relative z-10">
            {/* <div className="mb-12">
              <Title
                title={"Empresas satisfechas"}
                extraClass={"text-white"}
              />
            </div> */}
            <div className="flex gap-6 md:gap-24 flex-wrap items-center justify-center w-full">
              <img
                src={images.beniplas}
                alt="beniplas"
                className="max-h-16 lg:max-h-24 object-cover grayscale hover:grayscale-0"
              />
              <img
                src={images.asfies}
                alt="beniplas"
                className="max-h-16 lg:max-h-24 object-cover grayscale hover:grayscale-0"
              />
              <img
                src={images.sobetec}
                alt="beniplas"
                className="max-h-16 lg:max-h-24 object-cover grayscale hover:grayscale-0"
              />
              <img
                src={images.faw}
                alt="beniplas"
                className="max-h-16 lg:max-h-24 object-cover grayscale hover:grayscale-0"
              />
            </div>
          </div>
          <div className="blur-3xl absolute end-0 left-0 w-[300px] h-[300px] rounded-full bg-purple-init/30 z[-10] -translate-y-1/2"></div>
          <div className="blur-3xl absolute top-0 right-0 w-[300px] h-[300px] rounded-full bg-yellow-init/30 z[-10] -translate-y-1/2"></div>
        </div>
      </div>
    </section>
  );
};

export default Companies;
