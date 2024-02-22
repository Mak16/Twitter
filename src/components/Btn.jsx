/* eslint-disable react/prop-types */
function Btn(props){
return(
    <>
    <button type={props.btnType} className={props.btnClass +" hover:opacity-90"} > {props.children} </button>
    </>
)
}
export default Btn