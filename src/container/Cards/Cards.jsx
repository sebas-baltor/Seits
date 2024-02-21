const Cards = ({image, name, post, comment,extraClass}) => {
  return (
    <>
      <div className={`flex flex gap-6 px-6 py-3 items-center bg-gradient-to-r from-zinc-900 to-slate-900 rounded-lg ${extraClass}`}>
        <div className="flex flex-col items-center justify-center text-left ">
          <div className="w-20 object-cover rounded-full flex">
            <img className="w-full h-full rounded-full" src={image} alt="" />
          </div>
          <div className="min-w-32">
            <p className="font-bold text-white text-xl text-center">{name}</p>
            <p className="text-sm text-white text-center">{post}</p>
          </div>
        </div>
        <div className="text-white text-justify">
            <p>{comment}</p>
        </div>
      </div>
    </>
  );
}

export default Cards;
