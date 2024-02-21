import images from "../../constants/bussines-logo"
import { Title } from "../../container";

const Companies = () => {
  return (
    <div id="companies" className="py-12">
      <div className="min-h-[50vh] px-12 py-6 2xl:px-0 2xl:max-w-[1280px] w-full mx-auto flex flex-col justify-center items-center">
        <div className="mb-12">
          <Title title={"Empresas."} extraClass={"text-center text-white"}/>
        </div>
        <div className="flex gap-20 items-center justify-evenly w-full">
        <img src={images.beniplas} alt="beniplas" className="saturate-0 hover:saturate-100 max-h-32 object-cover"/>
        <img src={images.asfies} alt="beniplas" className="saturate-0 hover:saturate-100 max-h-32"/>
        <img src={images.sobetec} alt="beniplas" className="saturate-0 hover:saturate-100 max-h-32"/>
        <img src={images.faw} alt="beniplas" className="saturate-0 hover:saturate-100 max-h-32"/>
      
        </div>
        </div>
    </div>
  );
};

export default Companies;
