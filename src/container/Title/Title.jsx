export default function Title({title,extraClass}){
    return (
        <h3 className={`text-2xl md:text-4xl lg:text-5xl font-poppins font-bold uppercase bg-gradient-to-r from-purple-init to-gray-100 text-transparent bg-clip-text inline-block ${extraClass}`}>{title}</h3>
    )
}