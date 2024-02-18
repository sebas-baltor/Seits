import { IoIosSend } from "react-icons/io";

const Contact = () => {
  return (
    <div className="h-96 bg-black text-white flex flex-col justify-center items-center gap-10">
      <div className="w-2/4 flex flex-col items-center">
        <h2 className="text-2xl text-bold">Contactanos</h2>
        <p className="text-center">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum est
          eligendi, impedit explicabo quisquam minus perspiciatis iste iure
          error adipisci quae praesentium, totam nesciunt quo earum aut odio, ab
          asperiores.
        </p>
      </div>
      <div className="flex gap-5">
        <input placeholder="Escribenos un mensaje" type="text" className="h-10 w-96 rounded-md bg-black border-white border text-white p-2" />
        <button className="w-10 h-10 flex justify-center items-center bg-white rounded-full text-black hover:bg-black hover:text-white hover:border-white border">
          <span className="flex justify-center items-center">
            <IoIosSend />
          </span>
        </button>
      </div>
    </div>
  );
};

export default Contact;
