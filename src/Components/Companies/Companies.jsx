import images from "../../constants/bussines-logo"
import { Title } from "../../container";

const Companies = () => {
  return (
    <div>
      <div id="companies" className="px-12 py-40 2xl:px-0 2xl:max-w-[1280px] w-full mx-auto flex flex-col justify-center items-center">
        <div className="mb-12">
          <Title title={"Empresas"} extraClass={"text-center text-white"} />
        </div>
        <div className="flex gap-6 md:gap-12  flex-wrap items-center justify-evenly w-full">
          <img src={images.beniplas} alt="beniplas" className="max-h-16 md:max-h-24 lg:max-h-32 object-cover" />
          <img src={images.asfies} alt="beniplas" className="max-h-16 md:max-h-24 lg:max-h-32 object-cover" />
          <img src={images.sobetec} alt="beniplas" className="max-h-16 md:max-h-24 lg:max-h-32 object-cover" />
          <img src={images.faw} alt="beniplas" className="max-h-16 md:max-h-24 lg:max-h-32 object-cover" />
        </div>
      </div>
    </div>
  );
};

export default Companies;
