const Cards = ({ image, name, post, comment, extraClass }) => {
  return (
    <>
      <div className={`relative  ${extraClass}`}>
        <div className="flex pl-12 pr-6 py-3 items-center isolate rounded-r-2xl bg-black/30 backdrop-blur-md rounded-2xl shadow-xl ring-1 ring-black/40">
          <img className="absolute z[10] w-[80px] lg:w-[100px] -translate-x-full object-cover rounded-full shadow-sm" src={image} alt="" />
          <div className="w-16"></div>
          <div className="flex flex-col text-left">
            <h6 className="font-bold text-slate-100 text-lg">{name}</h6>
            <span className="text-sm text-slate-300 italic">{post}</span>
            <p className="text-slate-100 font-light text-sm text-pretty">{comment}</p>
          </div>
        </div>
        <div className="absolute w-24 h-24 rounded-full top-0 right-0 z-[-10] bg-black">
        </div>
      </div>
    </>
  );
}

export default Cards;
