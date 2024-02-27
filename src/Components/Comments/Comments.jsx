import { Cards,Title } from "../../container";
import images from "../../constants/images";

const Comments = () => {
  const comment = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est laborum repellat dolorum inventore eveniet, error unde illo repellendus."
  return (
    <section id="testimonial" className="min-h-[50vh] w-full bg-gradient-to-br from-purple-init via-pink-init to-yellow-init">
      <div className="px-12 py-40 2xl:px-0 2xl:max-w-[1280px] w-full mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-20">
      <div>
        <Title title={'Testimonios de Clientes Satisfechos'} extraClass={'text-white mb-6 text-start'}/>
        <p className="text-pretty text-lg lg:text-xl text-white text-start">
        En Dapec, nos enorgullece el éxito y la satisfacción de nuestros clientes. Aquí te presentamos algunas de las experiencias que han compartido con nosotros:
        </p>
      </div>
      <div className="grid grid-rows-1 lg:grid-rows-2 grid-cols-1 md:grid-cols-3 lg:grid-cols-2 gap-6 items-center">
        <Cards image={images.Person_1} name="John Doe" possition="Enginner" comment={comment} extraClass={" lg:self-end"}/>
        <Cards image={images.Person_2} name="Jena Doe" possition="Enginner"  comment={comment} extraClass={" lg:self-end"}/>
        <Cards image={images.Person_3} name="Michel Felps" possition="Enginner"  comment={comment}  extraClass={"lg:col-span-2"}/>
      </div>
      </div>
    </section>
  );
};
export default Comments;
