import { Cards } from "../../container";
import images from "../../constants/images";
import "./Comments.css";

const Comments = () => {
  const comment = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est laborum repellat dolorum inventore eveniet, error unde illo repellendus, atque nostrum odio nisi. Veniam adipisci non iste itaque quos ex similique."
  return (
    <div id="Comments" className="h-dvh bg-white colors flex justify-center items-center gap-20">
      <div className=" w-96  flex flex-col gap-10">
        <h2 className=" font-bold text-4xl text-white text-justify ">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        </h2>
        <p className="text-justify text-pretty text-slate-200">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
          porro quaerat aperiam blanditiis adipisci omnis nemo recusandae
          accusantium deleniti doloremque minima non provident exercitationem,
          quis, dolor amet molestiae expedita necessitatibus?
        </p>
      </div>
      <div className="flex flex-col gap-10">
        <Cards image={images.Person_1} name="John Doe" post="Enginner" comment={comment} />
        <Cards image={images.Person_2} name="Jena Doe" post="Enginner"  comment={comment} />
        <Cards image={images.Person_3} name="Michel Felps" post="Enginner"  comment={comment} />
      </div>
    </div>
  );
};
export default Comments;
