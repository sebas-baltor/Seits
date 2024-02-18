import "./Card.css"


const Cards = ({image, name, post, comment}) => {
  return (
    <>
      <div className="h-44 flex rounded-xl glass border-gray-300 border p-2.5 gap-5 text-white card even:ml-24">
        <div className="flex flex-col items-center justify-center text-left ">
          <div className="w-20 object-cover rounded-full flex">
            <img className="w-full h-full rounded-full" src={image} alt="" />
          </div>
          <div>
            <p className=" font-bold">{name}</p>
            <p className=" text-sm">{post}</p>
          </div>
        </div>
        <div className="w-80 text-justify">
            <p>{comment}</p>
        </div>
      </div>
    </>
  );
};

export default Cards;
