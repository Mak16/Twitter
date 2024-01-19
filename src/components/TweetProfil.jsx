import { Link } from "react-router-dom";
import Btn from "./Btn";
export default function TweetProfil() {
  return (
    <>
      <div className="ml-2 mt-2 ">
        <div className="flex">
          <Link to="/">
            <img
              src="src/assets/fleche-gauche.png"
              alt=""
              className="w-4 ml-2 mt-5"
            />
          </Link>
          <div className="ml-5">
            <h2 className="text-white flex flex-row">
              New York Times
              <img className="w-4" src="src/assets/Verified.svg" alt="" />
            </h2>
            <small className="text-white text-xs opacity-50">1,720 posts</small>
          </div>
        </div>
        <div className="w-full relative">
          <img className="w-full" src="src/assets/couverture.jpeg" alt="" />
          <div className="absolute top-24 ">
            <img
              className="border-solid border-white border-4 rounded-full w-40"
              src="src/assets/ProfileTweet.png"
              alt=""
            />
          </div>
        </div>
        <div className="flex justify-end mt-5">
          <div className="flex justify-between">
            <img className="w-10 flex mr-5" src="src/assets/More.svg" alt="" />
            <Btn btnClass="bg-white pt-2 pb-2 pl-5 pr-5 mr-2 rounded-full">
              Follow
            </Btn>
          </div>
        </div>
        <div>
          <div className="mt-10 w-full">
            <h2 className="text-white flex flex-row">
              New York Times
              <img className="w-4" src="src/assets/Verified.svg" alt="" />
            </h2>
            <small className="text-white text-xs opacity-50">1,720 posts</small>
          </div>
          <p className="text-white text-xs pb-4 pt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
            animi velit porro maiores rem nisi veniam.
          </p>
          <div className="grid grid-cols-2 justify-between">
            <p className="text-white text-xs flex flex-row"><img className="w-4 h-3 mr-2 mt-1" src="src/assets/calendrier.png" alt="" />Lorem ipsum dolor sit amet consectetur adipiselit. </p>
            <p className="text-white text-xs flex flex-row"><img className="w-4 h-3 mr-2 mt-1" src="src/assets/lien.png" alt="" />consectetur adipisicing elit</p>
            <p className="text-cyan-500 text-xs flex flex-row"><img className="w-4 h-3 mr-2 mt-1" src="src/assets/calendrier.png" alt="" />amet consectetur adipisicing elit</p>
          </div>
        </div>
      </div>
    </>
  );
}
