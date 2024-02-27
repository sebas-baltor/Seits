export default function AnchorBtn({ href, text }) {
  return (
    <a
      href={href}
      className="text-white text-md 2xl:text-lg py-1 px-6 lg:py-2 rounded-full uppercase bg-gradient-to-r from-purple-init via-pink-init to-yellow-init shadow-sm hover:bg-gradient-to-tr ease-in transition-all"
    >
      {text}
    </a>
  );
}
