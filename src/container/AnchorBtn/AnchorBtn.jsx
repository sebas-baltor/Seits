export default function AnchorBtn({ href, text }) {
  return (
    <a
      href={href}
      className="text-white py-1 px-6 rounded-full uppercase bg-gradient-to-r from-purple-init via-pink-init to-yellow-init shadow-sm hover:bg-gradient-to-tr ease-in transition-all"
    >
      {text}
    </a>
  );
}
