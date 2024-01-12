function Menu(props){
    return(
        <>
        <div className="flex flex-row gap-x-2 pt-5" >
            <img className="w-4" src={props.src} alt={props.alt} />
            <span className="text-white text-xs font-bold" > {props.children} </span>
        </div>
        </>
    )
}
export default Menu