import { Title } from "../../container"
export default function Solutions() {
    return (
        <div id="solutions" className="h-screen">
            <div className="h-full px-12 py-40 2xl:px-0 2xl:max-w-[1280px] w-full mx-auto grid grid-cols-2 gap-20 items-center">
                <div>

                </div>
                <div className="flex flex-col gap-6 justify-start">
                    <Title title={"Soluciones"} extraClass={"text-white"} />
                    <p className="text-pretty text-lg lg:text-xl text-neutral-300">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam facere architecto ratione praesentium distinctio et, officia voluptatem natus ut! Quasi.</p>

                    <ul className="flex flex-col gap-3 text-lg lg:text-xl text-neutral-300">
                        <li className="flex gap-3 items-center font-bold tracking-wide italic">
                            <span className="before:content-[''] before:bg-black before:w-[10px] before:h-[10px] before:rounded-full w-[20px] h-[20px] rounded-full bg-gradient-to-r from-purple-init via-pink-init to-yellow-init flex items-center justify-center"></span>
                            Desarrollo de Software
                        </li>
                        <li className="flex gap-3 items-center font-bold tracking-wide italic">
                            <span className="before:content-[''] before:bg-black before:w-[10px] before:h-[10px] before:rounded-full w-[20px] h-[20px] rounded-full bg-gradient-to-r from-purple-init via-pink-init to-yellow-init flex items-center justify-center"></span>
                            Desarrollo Web
                        </li>
                        <li className="flex gap-3 items-center font-bold tracking-wide italic">
                            <span className="before:content-[''] before:bg-black before:w-[10px] before:h-[10px] before:rounded-full w-[20px] h-[20px] rounded-full bg-gradient-to-r from-purple-init via-pink-init to-yellow-init flex items-center justify-center"></span>
                            Aplicaciónes Empresariales
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}