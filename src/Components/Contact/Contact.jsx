import { Title } from "../../container";
import { Formik, Field, Form } from 'formik';
import Blob from "../../container/Blob/Blob"

const Contact = () => {
  return (
    <div className="h-screen bg-black text-white flex flex-col justify-center items-center px-12">
      <div className="relative isolate rounded-r-2xl bg-white/5 ring-1 ring-black/5 rounded-2xl shadow-xl flex flex-col gap-6 py-6 overflow-hidden">
        <Title title="Contacto." extraClass={"text-center"} />
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
              <span className="tracking-wider text-white">Nombre:</span>
              <Field id="name" name="name" placeholder="Steban" className="italic placeholder:text-neutral-300 isolate rounded-r-2xl bg-white/30 ring-1 ring-black/5 px-6 py-3 outline-none rounded-lg text-white shadow-sm focus:bg-zinc-800" />
            </label>

            <label htmlFor="budget" className="text-bold flex flex-col w-full">
              <span className="tracking-wider text-white">
                Presupuesto:
              </span>

              <Field id="budget" name="budget" placeholder="Hernandez"
                as="select" className="italic placeholder:text-neutral-300 isolate rounded-r-2xl bg-white/20 ring-1 ring-black/5 px-6 py-3 outline-none rounded-lg text-white shadow-sm focus:bg-zinc-800"
              >
                <option value="5000" className="italic">Menos de 7,000</option>
                <option value="10,000">Mas de 10,000</option>
                <option value="otro">Mas de 15,000</option>
              </Field>
            </label>

            <label htmlFor="email" className="text-bold flex flex-col w-full">
              <span className="tracking-wider text-white">Email:</span>
              <Field
                id="email"
                name="email"
                placeholder="steban@empresa.com"
                type="email"
                className="italic placeholder:text-neutral-300 isolate rounded-r-2xl bg-white/20 ring-1 ring-black/5 px-6 py-3 outline-none rounded-lg text-white shadow-sm focus:bg-zinc-800"
              />
            </label>
            <label htmlFor="about" className="text-bold flex flex-col w-full">
              <span className="tracking-wider text-white">
                Cuentanos mas:
              </span>
              <Field
                as="textarea"
                id="about"
                name="about"
                placeholder="Cuentanos mas sobre tu proyecto."
                type="about"
                className="italic placeholder:text-neutral-300 isolate rounded-r-2xl bg-white/20 ring-1 ring-black/5 px-6 py-3 outline-none rounded-lg text-white shadow-sm focus:bg-zinc-800"
              />
            </label>
            <button type="submit" className="px-6 py-3 rounded-full bg-pink-200 uppercase bg-gradient-to-r from-indigo-500 via-purple-500 via-pink-500 to-amber-700 shadow-sm">Submit</button>
          </Form>
        </Formik>
        <div className="absolute w-[50vw] h-[40vw] rounded-full right-0 top-0 translate-y-[-30%] z-[-10] blur-3xl bg-gradient-to-t from-indigo-500 via-purple-500 via-pink-500 to-orange-700">
        </div>
        <div className="absolute w-[50vw] h-[40vw] rounded-full end-0 left-0 -translate-x-2/3 translate-y-[90%] z-[-10] blur-3xl bg-gradient-to-t from-indigo-500 via-purple-500 via-pink-500 to-orange-700">
        </div>
        {/* <div className="absolute z-[-1] w-full h-full blur-lg">
          <Blob />
        </div> */}
      </div>
    </div>
  );
};

export default Contact;
