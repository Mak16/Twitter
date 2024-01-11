function Menu(props){
    return(
        <>
        <div className={props.menuClass} >
            <img className={props.imgClass} src={props.src} alt={props.alt} />
            <span className={props.clas} > {props.children} </span>
        </div>
        </>
    )
}
export default Menu