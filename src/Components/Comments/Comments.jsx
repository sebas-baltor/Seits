import { Cards,Title } from "../../container";
import images from "../../constants/images";

const Comments = () => {
  const comment = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est laborum repellat dolorum inventore eveniet, error unde illo repellendus, atque nostrum odio nisi."
  return (
    <div id="comments" className="min-h-[50vh] w-full bg-gradient-to-r from-indigo-500 via-purple-500 via-pink-500 to-orange-700">
      <div className="px-12 py-6 2xl:px-0 2xl:max-w-[1280px] w-full mx-auto grid grid-cols-2 items-center gap-20">
      <div>
        <Title title={'Que dicen nuestros clientes.'} extraClass={'text-white mb-5'}/>
        <p className="text-pretty text-lg lg:text-xl text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
          porro quaerat aperiam blanditiis adipisci omnis nemo recusandae.
        </p>
      </div>
      <div className="grid grid-rows-3 gap-6">
        <Cards image={images.Person_1} name="John Doe" post="Enginner" comment={comment} extraClass={"-translate-x-8"}/>
        <Cards image={images.Person_2} name="Jena Doe" post="Enginner"  comment={comment}  extraClass="translate-x-8"/>
        <Cards image={images.Person_3} name="Michel Felps" post="Enginner"  comment={comment} />
      </div>
      </div>
    </div>
  );
};
export default Comments;
