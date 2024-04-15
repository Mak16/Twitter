function TweetTitle(props) {
  return (
    <>
      <div className="w-1/7 flex ">
        <h2 className="text-white flex flex-row ml-2">
          {props.children}
          <img
            className="w-4 self-start mt-1 ml-1"
            src="src/assets/Verified.svg"
            alt="Verified"
          />{" "}
        </h2>
        <small className="text-white ml-1 mt-1">{props.userName} . 2h</small>
      </div>
    </>
  );
}
export default TweetTitle;
