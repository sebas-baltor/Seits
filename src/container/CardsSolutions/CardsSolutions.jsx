import AnchorBtn from "../AnchorBtn/AnchorBtn";
export default function CardsSolutions({ title, description, icon, iconAlt,extraClass }) {
  return (
    <div className={`overflow-hidden w-full h-full rounded-xl isolate bg-gradient-to-tr from-white/10 to-black/5 shadow-xl ring-1 ring-white/10 backdrop-blur-md p-6 ${extraClass}`}>
      <div className="relative z-10 flex flex-col justify-center md:flex-row items-start md:items-center gap-6 h-full">
        <img
          src={icon}
          alt={iconAlt}
          className="max-w-16 max-h-16 object-cover"
        />
        <div className="flex flex-col items-start justify-evenly h-full">
            <h5
              className={`mb-6 text-xl md:text-2xl lg:text-3xl font-poppins font-bold uppercase text-white`}
              >
              {title}
            </h5>
            <div>
            {description.map((i) => (
              <p className="mb-12 text-pretty text-sm lg:text-md 2xl:text-lg text-neutral-300 font-releway">
                {i}
              </p>
            ))}
          <AnchorBtn href={"#contact"} text={"elegir"} />
          </div>
        </div>
      </div>
      <div className="blur-3xl absolute top-0 left-0 w-[300px] h-[300px] rounded-full bg-purple-init/30 z[-10] translate-y-1/2"></div>
    </div>
  );
}
