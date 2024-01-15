export default function Trends(props) {
  return (
    <>
      <div className="w-full flex flex-col justify-between bg-slate-800 rounded-lg mt-3 p-4">
        <div className="w-full flex justify-between">
          <h2 className="text-white"> {props.title} </h2>
          {props.src && <img className="w-4" src={props.src} alt="" />}
        </div>
        {props.children}
        <a className="text-blue-500 " href="">Show more</a>
      </div>
    </>
  );
}
