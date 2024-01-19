// import {Link } from "react-router-dom";
export default function UserProfil(props) {
  return (
    <>
      <div className="flex flex-row mt-72">
        <img
          className="w-10 h-10 self-start rounded-full "
          src={props.src}
          alt="Profil"/>
        <div>
          <h2 className="text-white flex flex-row ml-2">
            {props.children}{" "}
            <img className="w-4" src={props.verifiedSrc} alt="Verified" />
          </h2>
          <small className="text-white mb-15 ml-3 opacity-25">@{props.userName}</small>
        </div>
      </div>
    </>
  );
}
