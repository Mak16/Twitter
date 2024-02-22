function Menu(props){
    return(
        <>
        <div className="flex flex-row gap-x-2 pt-2 pl-3 hover:bg-slate-700 rounded-full pb-2 " >
            <img className="w-4" src={props.src} alt={props.alt} />
            <span className="text-white text-base " > {props.children} </span>
        </div>
        </>
    )
}
export default Menu