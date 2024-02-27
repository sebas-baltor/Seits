import AnchorBtn from "../AnchorBtn/AnchorBtn";
export default function CardsSolutions({ title, description, icon, iconAlt }) {
  return (
    <div className="w-full h-full isolate bg-gradient-to-tr from-white/15 to-black/10 shadow-xl ring-1 ring-white/15 backdrop-blur-md rounded-xl p-6 flex flex-col md:flex-row items-start gap-6">
      <img
        src={icon}
        alt={iconAlt}
        className="max-w-16 max-h-16 lg:max-h-24 object-cover lg:max-w-24"
      />
      <div className="flex flex-col gap-4 items-start justify-between h-full">
        <div>
          <h5
            className={`mb-6 text-xl md:text-2xl lg:text-3xl font-poppins font-bold uppercase text-white`}
          >
            {title}
          </h5>
          {description.map((i) => (
            <p className="text-pretty text-sm lg:text-md 2xl:text-lg text-neutral-300 font-releway">
              {i}
            </p>
          ))}
        </div>
        <AnchorBtn href={"#contact"} text={"elegir"}/>
        {/* <a
          href="#contact"
          className=". text-white px-6 py-2 rounded-full uppercase bg-gradient-to-r from-purple-init via-pink-init to-yellow-init shadow-sm"
        >
          elegir
        </a> */}
      </div>
    </div>
  );
}
