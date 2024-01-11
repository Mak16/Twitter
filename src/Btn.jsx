function Btn(props){
return(
    <>
    <button type={props.btnType} className={props.btnClass} > {props.children} </button>
    </>
)
}
export default Btn