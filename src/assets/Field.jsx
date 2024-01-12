function Field (props){
    return(
        <>
         <textarea
            name=""
            className={props.className}
            id=""
            cols="65"
            rows="1.5"
            placeholder={props.children}
          ></textarea>
        </>
    )
}
export default Field