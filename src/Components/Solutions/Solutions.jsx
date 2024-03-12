import { Title,CardsSolutions } from "../../container"
import icons from "../../constants/images"
export default function Solutions() {
    const text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, earum perferendis neque voluptates odit aperiam?";
    return (
        <section id="solutions" className="min-h-screen relative overflow-hidden px-12 py-40 z-[-4]">
            <div className="2xl:px-0 2xl:max-w-[1280px] w-full mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-rows-2 gap-6 items-center">
                <div className="text-white">
                    <Title title={"Soluciones a la medida para cada sector"} extraClass={"text-white text-start"} />
                </div>
                <CardsSolutions title={"Soluciones Web Personalizadas"} description={["Confía en Dapec para crear una presencia en línea impactante que refleje la esencia y la visión de tu empresa. ¡Déjanos ayudarte a destacarte en el competitivo mundo digital de hoy!"]} icon={icons.web}/>
                <CardsSolutions title={"Desarrollo de Aplicaciones Móviles Innovadoras"} description={["Nos especializamos en el desarrollo de aplicaciones móviles innovadoras que cautivan a tus usuarios y llevan la experiencia de tu marca a la palma de sus manos."]} icon={icons.mobile}/>
                <CardsSolutions title={"Soluciones Tecnológicas a Medida de tus Necesidades"} description={["En Dapec, entendemos que cada empresa tiene desafíos únicos y requerimientos específicos que no siempre pueden ser abordados con soluciones preexistentes. Es por eso que ofrecemos soluciones tecnológicas personalizadas, diseñadas para adaptarse perfectamente a las necesidades y objetivos de tu negocio."]} icon={icons.custome}/>
            </div>
            <div className="absolute z-[-2] bottom-0 left-0 -translate-x-1/2 w-[50vw] h-[50vw] rounded-full bg-gray-950 blur-3xl"></div>
            <div className="absolute z-[-1] right-0 top-0 translate-x-1/2 w-[50vw] h-[50vw] rounded-full bg-gray-950 blur-3xl"></div>
        </section>
    )
}