function Field(props) {
  return (
    <>
    className=""
      <div className={props.fieldcontenair} >
        {props.SearchImg && <img className="w-4" src={props.SearchImg} alt="" />}
        <textarea
          name=""
          className={props.className}
          id=""
          cols="65"
          rows="1.5"
          placeholder={props.children}
        ></textarea>
      </div>
    </>
  );
}
export default Field;
