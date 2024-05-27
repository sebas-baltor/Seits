import Spline from "@splinetool/react-spline";
import { Title } from "../../container";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const Contact = () => {
  return (
    <>

      <section
        id="contact"
        className="relative py-40 h-sreen text-white flex justify-center items-center px-12 "
      >
        <div className="z-[10] flex flex-col gap-8 py-12 px-12 lg:px-24 rounded-xl isolate bg-gradient-to-tr from-white/10 to-black/5 shadow-xl ring-1 ring-white/10 backdrop-blur-md">
          <Title title="¡Contáctanos!" extraClass={"text-center"} />
          <p className="px-6 w-full md:w-2/3 mx-auto text-center text-neutral-300">
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
            validationSchema={Yup.object({
              name: Yup.string().required("campo requerido"),
              budget: Yup.string("opcion invalida").required("selecciona una opcion"),
              email: Yup.string().email("correo invalido").required("campo requerido"),
              about: Yup.string().max(450, "solo se permiten 450 caracteres").required("campo requerido")
            })}
            onSubmit={(values, { resetForm }) => {
              fetch("http://localhost:3000/v1/email/store", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(values)
              }).then(res => res.json()).then(json => { console.log(json); resetForm() }).catch(error => console.error(error))

            }}
          >
            <Form className="flex flex-col items-center gap-3 w-full md:w-2/3 px-6 mx-auto">
              <label htmlFor="name" className="text-bold flex flex-col w-full">
                <span className="tracking-wider text-neutral-300">Nombre:</span>
                <Field
                  id="name"
                  name="name"
                  className="rounded-xl isolate bg-slate-200/10 shadow-xl ring-1 ring-black/5 backdrop-blur-md px-6 py-3 outline-none rounded-md placeholder:text-neutral-300 text-neutral-300 shadow-sm border border-neutral-600 hover:bg-black/10 focus:bg-black/10"
                />
                <ErrorMessage name="name" component="span" className="text-red-500 text-sm" />
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
                  <option value="10000" className="text-neutral-700">
                    Mas de 10,000
                  </option>
                  <option value="15000" className="text-neutral-700">
                    Mas de 15,000
                  </option>
                </Field>
                <ErrorMessage name="budget" component="span" className="text-red-500 text-sm" />
              </label>

              <label htmlFor="email" className="text-bold flex flex-col w-full">
                <span className="tracking-wider text-neutral-300">Email:</span>
                <Field
                  id="email"
                  name="email"
                  type="email"
                  className="rounded-xl isolate bg-slate-200/10 shadow-xl ring-1 ring-black/5 backdrop-blur-md px-6 py-3 outline-none rounded-md placeholder:text-neutral-300 text-neutral-300 shadow-sm border border-neutral-600 hover:bg-black/10 focus:bg-black/10"
                />
                <ErrorMessage name="email" component="span" className="text-red-500 text-sm" />
              </label>
              <label htmlFor="about" className="text-bold flex flex-col w-full">
                <span className="tracking-wider text-neutral-300">
                  Cuentanos mas:
                </span>
                <Field
                  as="textarea"
                  id="about"
                  name="about"
                  type="about"
                  rows="6"
                  className="rounded-xl isolate bg-slate-200/10 shadow-xl ring-1 ring-black/5 backdrop-blur-md px-6 py-3 outline-none rounded-md placeholder:text-neutral-300 text-neutral-300 shadow-sm border border-neutral-600 hover:bg-black/10 focus:bg-black/10"
                />
                <ErrorMessage name="about" component="span" className="text-red-500 text-sm" />
              </label>
              <button
                type="submit"
                className="mt-6 text-white text-md 2xl:text-lg px-6 py-1 rounded-full uppercase bg-gradient-to-r from-purple-init via-pink-init to-yellow-init shadow-sm hover:bg-gradient-to-tr ease-in transition-all"
              >
                enviar
              </button>
            </Form>
          </Formik>
        </div>

        {/* <div className="z-[-2] absolute top-0 right-0 translate-x-1/2 -translate-y-1/2">
          <Spline scene="https://prod.spline.design/75yBKrIAeybNReyZ/scene.splinecode"/>
        </div>
        <div className="z-[-3] absolute rounded-full bottom-0 left-0 -translate-x-1/2 translate-y-1/2">
          <Spline scene="https://prod.spline.design/NTU7vn-Cmpa07VHz/scene.splinecode" />
        </div> */}


        <div className="z-[-1] absolute w-[100%] h-[150vh]">
          <Spline scene="https://prod.spline.design/Rfd08kNT7qTpFx09/scene.splinecode" />
        </div>
      </section>
    </>
  );
};

export default Contact;
