import { Cards,Title } from "../../container";
import images from "../../constants/images";

const Comments = () => {
  const comment = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est laborum repellat dolorum inventore eveniet, error unde illo repellendus."
  return (
    <div id="comments" className="min-h-[50vh] w-full bg-gradient-to-r from-purple-init via-pink-init to-yellow-init">
      <div className="px-12 pb-40 py-24 2xl:px-0 2xl:max-w-[1280px] w-full mx-auto grid grid-cols-2 items-center gap-20">
      <div>
        <Title title={'Que dicen nuestros clientes'} extraClass={'text-white mb-6'}/>
        <p className="text-pretty text-lg lg:text-xl text-neutral-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
          porro quaerat aperiam blanditiis adipisci omnis nemo recusandae.
        </p>
      </div>
      <div className="grid grid-rows-3 grid-cols-2 gap-6 items-center">
        <Cards image={images.Person_1} name="John Doe" post="Enginner" comment={comment} extraClass={"row-span-2 self-end"}/>
        <Cards image={images.Person_2} name="Jena Doe" post="Enginner"  comment={comment} extraClass={"row-span-2 self-end"}/>
        <Cards image={images.Person_3} name="Michel Felps" post="Enginner"  comment={comment}  extraClass={"col-span-2"}/>
      </div>
      </div>
    </div>
  );
};
export default Comments;
