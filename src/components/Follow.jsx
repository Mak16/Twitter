import Btn from "./Btn";
export default function Follow(props) {
  return (
    <>
      <div className="flex flex-row w-full mt-3 ">
        <img className="w-10 h-10 self-start rounded-full" src={props.src} alt="Profil" />
        <div className="w-48 flex flex-row justify-around">
            <div className="w-48 ml-8">
            <h2 className="text-white flex flex-row text-xs w-44 "> {props.children} <img className="w-4 " src={props.verifiedSrc} alt="" /> </h2>
            <small className="text-white mb-15 ml-3 opacity-25 text-xs "> {props.userName} </small>
            </div>
            <Btn btnClass="text-slate-800 bg-white h-7 pr-3 pl-3 text-xs rounded-full" >Follow</Btn>
        </div>
      </div>
    </>
  );
}
