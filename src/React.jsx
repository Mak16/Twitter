function React(props) {
  return (
    <>
      <div className="flex flex-row">
        <img className="mr-4 w-4" src={props.src} alt={props.alt} />
        <small className="text-white text-xs ">19</small>
      </div>
    </>
  );
}
export default React
