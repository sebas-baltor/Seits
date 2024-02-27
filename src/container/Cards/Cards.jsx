import { BiSolidQuoteSingleLeft } from "react-icons/bi";
const Cards = ({ image, name, possition, comment, extraClass }) => {
  return (
    <>
      <div className={`${extraClass}`}>
        <div>
          <div className="w-full h-full flex flex-wrap justify-evenly gap-6 p-6 items-center isolate bg-gradient-to-tr from-black/15 via-black/5 to-black/15 shadow-xl ring-1 ring-black/15 backdrop-blur-md rounded-xl">
            <div className="max-w-1/3 flex flex-col gap-3 items-center justify-center">
              <div className="relative w-[80px] lg:w-[100px] flex items-center justify-center">
                <img
                  className="w-[70px] lg:w-[90px] object-cover rounded-full shadow-sm"
                  src={image}
                  alt=""
                />
                <div className="absolute w-[80px] h-[80px] lg:w-[100px] lg:h-[100px] z-[-1] rounded-full bg-gradient-to-tr from-purple-init via-pink-init to-yellow-init"></div>
              </div>
              <div className="flex flex-col text-left">
                <h6 className="font-bold text-white text-lg text-center">
                  {name}
                </h6>
                <span className="text-sm text-slate-100 italic text-center lowercase">
                  {possition}
                </span>
              </div>
            </div>
            <div className="max-w-[400px]">
              <div className="flex">
                <BiSolidQuoteSingleLeft className="text-white/20 text-4xl" />
                <BiSolidQuoteSingleLeft className="text-white/20 text-4xl -translate-x-1/2" />
              </div>
              <p className="text-center text-sm lg:text-md 2xl:text-lg text-white/80 font-releway">
                {comment}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
