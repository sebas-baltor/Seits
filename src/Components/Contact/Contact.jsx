import Spline from "@splinetool/react-spline";
import { Title } from "../../container";
import { Formik, Field, Form } from "formik";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-40 text-white flex flex-col justify-center items-center px-12"
    >
      <div className="relative">
        <div className="z-[10] flex flex-col gap-8 py-6 rounded-xl isolate bg-gradient-to-tr from-white/15 to-black/10 shadow-xl ring-1 ring-white/15 backdrop-blur-md">
          <Title title="¡Contáctanos!" extraClass={"text-center"} />
          <p className="px-6 w-full md:w-2/3 lg:w-1/2 mx-auto text-center text-neutral-300">
            ¿Tienes alguna pregunta, solicitud de información o simplemente
            deseas ponerte en contacto con nosotros?
          </p>
          <Formik
            initialValues={{
              name: "",
              budget: "",
              email: "",
              about: "",
            }}
            onSubmit={async (values) => {
              await new Promise((r) => setTimeout(r, 500));
              alert(JSON.stringify(values, null, 2));
            }}
          >
            <Form className="flex flex-col items-center gap-3 w-full md:w-2/3 lg:w-1/2 px-6 mx-auto">
              <label htmlFor="name" className="text-bold flex flex-col w-full">
                <span className="tracking-wider text-neutral-300">Nombre:</span>
                <Field
                  id="name"
                  name="name"
                  placeholder="Esteban"
                  className="rounded-xl isolate bg-slate-200/10 shadow-xl ring-1 ring-black/5 backdrop-blur-md px-6 py-3 outline-none rounded-md placeholder:text-neutral-300 text-neutral-300 shadow-sm border border-neutral-600 hover:bg-black/10 focus:bg-black/10"
                />
              </label>

              <label
                htmlFor="budget"
                className="text-bold flex flex-col w-full"
              >
                <span className="tracking-wider text-neutral-300">
                  Presupuesto:
                </span>

                <Field
                  id="budget"
                  name="budget"
                  // placeholder="Hernandez"
                  as="select"
                  className="rounded-xl isolate bg-slate-200/10 shadow-xl ring-1 ring-black/5 backdrop-blur-md px-6 py-3 outline-none rounded-md placeholder:text-neutral-300 text-neutral-300 shadow-sm border border-neutral-600 hover:bg-black/10 focus:bg-black/10"
                >
                  <option value="6000" className="text-neutral-700">
                    Menos de 6,000
                  </option>
                  <option value="10,000" className="text-neutral-700">
                    Mas de 10,000
                  </option>
                  <option value="otro" className="text-neutral-700">
                    Mas de 15,000
                  </option>
                </Field>
              </label>

              <label htmlFor="email" className="text-bold flex flex-col w-full">
                <span className="tracking-wider text-neutral-300">Email:</span>
                <Field
                  id="email"
                  name="email"
                  placeholder="esteban@empresa.com"
                  type="email"
                  className="rounded-xl isolate bg-slate-200/10 shadow-xl ring-1 ring-black/5 backdrop-blur-md px-6 py-3 outline-none rounded-md placeholder:text-neutral-300 text-neutral-300 shadow-sm border border-neutral-600 hover:bg-black/10 focus:bg-black/10"
                />
              </label>
              <label htmlFor="about" className="text-bold flex flex-col w-full">
                <span className="tracking-wider text-neutral-300">
                  Cuentanos mas:
                </span>
                <Field
                  as="textarea"
                  id="about"
                  name="about"
                  placeholder="Como podemos ayudarte?"
                  type="about"
                  className="rounded-xl isolate bg-slate-200/10 shadow-xl ring-1 ring-black/5 backdrop-blur-md px-6 py-3 outline-none rounded-md placeholder:text-neutral-300 text-neutral-300 shadow-sm border border-neutral-600 hover:bg-black/10 focus:bg-black/10"
                />
              </label>
              <button
                type="submit"
                className="mt-6 text-white text-md 2xl:text-lg px-6 py-1 lg:py-2 rounded-full uppercase bg-gradient-to-r from-purple-init via-pink-init to-yellow-init shadow-sm hover:bg-gradient-to-tr ease-in transition-all"
              >
                enviar
              </button>
            </Form>
          </Formik>
        </div>
        <div className="z-[-2] absolute top-0 right-0 translate-x-1/2 -translate-y-1/2">
          <Spline scene="https://prod.spline.design/NTU7vn-Cmpa07VHz/scene.splinecode" />
        </div>
        <div className="z-[-3] absolute rounded-full  bottom-0 left-0 -translate-x-1/2 translate-y-1/2">
          <Spline scene="https://prod.spline.design/J1hQ8AL9D79wZ2q7/scene.splinecode" />
        </div>
      </div>
    </section>
  );
};

export default Contact;
