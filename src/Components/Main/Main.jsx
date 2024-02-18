import { Blob } from "../../container";
import "./Main.css";

const Main = () => {
  return (
    <div className="relative text-white flex">
      <div className="glass absolute z-10 w-1/2  h-full m-auto flex ">
        <div className="m-auto flex flex-col gap-5">
          <h1 className="text-8xl w-96 h-min">LOREMP IMPSUM</h1>
          <p className="w-96 h-min text-justify">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error iste
            aut suscipit quam fuga delectus perspiciatis. Accusantium ipsa amet
            ab rem debitis. Numquam eum tenetur praesentium animi? Corrupti,
            repudiandae quo.
          </p>
        </div>
      </div>
      <Blob />
    </div>
  );
};

export default Main;
