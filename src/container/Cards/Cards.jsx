import { BiSolidQuoteSingleLeft } from "react-icons/bi";
const Cards = ({ image, name, post, comment, extraClass }) => {
  return (
    <>
      <div className={`${extraClass}`}>
        <div>
        <div className="w-full h-full flex flex-wrap justify-evenly gap-6 p-6 items-center isolate rounded-r-2xl bg-neutral-800/30 backdrop-blur-md rounded-2xl shadow-xl ring-1 ring-neutral-800/40">
          <div className="max-w-1/3 flex flex-col gap-3 items-center justify-center">
            <img className="w-[80px] lg:w-[100px] object-cover rounded-full shadow-sm" src={image} alt="" />
            <div className="flex flex-col text-left">
              <h6 className="font-bold text-slate-100 text-lg text-center">{name}</h6>
              <span className="text-sm text-slate-300 italic text-center">{post}</span>
            </div>
          </div>
          <div className="max-w-[400px]">
            <div className="flex">
              <BiSolidQuoteSingleLeft className="text-neutral-800 text-4xl" />
              <BiSolidQuoteSingleLeft className="text-neutral-800 text-4xl -translate-x-1/2" />
            </div>
            <p className="text-slate-100 font-light text-sm text-center">{comment}</p>
          </div>
        </div>
        </div>
      </div>
    </>
  );
}

export default Cards;


