export default function Title({title,extraClass}){
    return (
        <h3 className={`text-2xl md:text-4xl lg:text-5xl font-poppins font-bold uppercase ${extraClass}`}>{title}</h3>
    )
}