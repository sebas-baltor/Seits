import { Title } from "../../container";
import { Formik, Field, Form } from 'formik';

const Contact = () => {
  return (
    <div id="contacts" className="relative pb-40 text-white flex flex-col justify-center items-center px-12">
      <div className="z-[10] flex flex-col gap-6 py-6 rounded-xl isolate bg-white/5 shadow-xl ring-1 ring-black/5 backdrop-blur-md">
        <Title title="Contacto" extraClass={"text-center"} />
        <p className="w-1/2 mx-auto text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet totam cum voluptatum doloribus soluta minima!</p>
        <Formik
          initialValues={{
            name: '',
            budget: '',
            email: '',
            about: '',
          }}
          onSubmit={async (values) => {
            await new Promise((r) => setTimeout(r, 500));
            alert(JSON.stringify(values, null, 2));
          }}
        >
          <Form className="flex flex-col items-center gap-6 w-1/2 mx-auto">
            <label htmlFor="name" className="text-bold flex flex-col w-full">
              <span className="tracking-wider text-neutral-300">Nombre:</span>
              <Field id="name" name="name" placeholder="Steban" className="rounded-xl isolate  bg-white/5 shadow-xl ring-1 ring-black/5 backdrop-blur-md px-6 py-3 outline-none rounded-md text-neutral-300 shadow-sm border border-neutral-600 hover:bg-black/10 focus:bg-black/10" />
            </label>

            <label htmlFor="budget" className="text-bold flex flex-col w-full">
              <span className="tracking-wider text-neutral-300">
                Presupuesto:
              </span>

              <Field id="budget" name="budget" placeholder="Hernandez"
                as="select" className="rounded-xl isolate  bg-white/5 shadow-xl ring-1 ring-black/5 backdrop-blur-md px-6 py-3 outline-none rounded-md text-neutral-300 shadow-sm border border-neutral-600 hover:bg-black/10 focus:bg-black/10"
              >
                <option value="5000" className="text-black">Menos de 7,000</option>
                <option value="10,000" className="text-black">Mas de 10,000</option>
                <option value="otro" className="text-black">Mas de 15,000</option>
              </Field>
            </label>

            <label htmlFor="email" className="text-bold flex flex-col w-full">
              <span className="tracking-wider text-neutral-300">Email:</span>
              <Field
                id="email"
                name="email"
                placeholder="steban@empresa.com"
                type="email"
                className="rounded-xl isolate  bg-white/5 shadow-xl ring-1 ring-black/5 backdrop-blur-md px-6 py-3 outline-none rounded-md text-neutral-300 shadow-sm border border-neutral-600 hover:bg-black/10 focus:bg-black/10"
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
                placeholder="Cuentanos mas sobre tu proyecto."
                type="about"
                className="rounded-xl isolate  bg-white/5 shadow-xl ring-1 ring-black/5 backdrop-blur-md px-6 py-3 outline-none rounded-md text-neutral-300 shadow-sm border border-neutral-600 hover:bg-black/10 focus:bg-black/10"
              />
            </label>
            <button type="submit" className="px-6 py-3 rounded-full bg-pink-200 uppercase bg-gradient-to-r from-purple-init via-pink-init to-yellow-init shadow-sm">Submit</button>
          </Form>
        </Formik>
      </div>
      <div className="z-[-2] absolute w-[40vh] h-[40vh] rounded-full top-0 inset-x-1/2 translate-x-1/2 -translate-y-1/2 bg-gradient-to-t from-purple-init via-pink-init to-yellow-init -rotate-45">
      </div>
      <div className="z-[-3] absolute w-[30vh] h-[30vh] rounded-full end-0 inset-x-1/4 -translate-x-1/2 translate-y-[100%] bg-gradient-to-t from-purple-init via-pink-init to-yellow-init">
      </div>
    </div>
  );
};

export default Contact;
