export default function Trends(props) {
  return (
    <>
      <div className="w-full flex justify-between">
        <div className="w-full flex justify-between">
          <h2 className="text-white"> {props.title} </h2>
          {props.src && <img className="w-4" src={props.src} alt="" />}
        </div>
        {props.children}
      </div>
    </>
  );
}
