function ReactIcon(props) {
  return (
    <>
      <div className="flex flex-row">
        <svg
          onClick={props.onClickReact}
          width="20"
          height="20"
          viewBox={props.viewBoxIcon}
          className={props.fill}
          xmlns="http://www.w3.org/2000/svg"
        >
          {props.children}
        </svg>
        <small className={props.classReact}>{props.react}</small>
      </div>
    </>
  );
}
export default ReactIcon;
// "fill-cyan-700 hover:fill-red-700" "text-white text-xs opacity-50 mt-1 ml-1 "
