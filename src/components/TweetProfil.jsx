import { Link } from "react-router-dom";
import Btn from "./Btn";
import fleche from "../assets/fleche-gauche.png";
import ProfileTweet from "../assets/ProfileTweet.png";
import couverture from "../assets/couverture.jpeg";
export default function TweetProfil() {
  return (
    <>
      <div className="ml-2 mt-2 ">
        <div className="flex">
          <Link to="/">
            <img src={fleche} alt="" className="w-4 ml-2 mt-5" />
          </Link>
          <div className="ml-5">
            <h2 className="text-white flex flex-row">
              New York Times
              <div className="w-4">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22.5 12.5C22.5 10.92 21.625 9.55 20.352 8.9C20.506 8.465 20.59 7.995 20.59 7.5C20.59 5.29 18.88 3.502 16.772 3.502C16.302 3.502 15.852 3.586 15.436 3.752C14.818 2.415 13.51 1.5 12 1.5C10.49 1.5 9.18402 2.417 8.56302 3.75C8.14802 3.585 7.69702 3.5 7.22702 3.5C5.11702 3.5 3.40902 5.29 3.40902 7.5C3.40902 7.994 3.49202 8.464 3.64602 8.9C2.37402 9.55 1.49902 10.918 1.49902 12.5C1.49902 13.995 2.28102 15.298 3.44102 15.986C3.42102 16.156 3.40902 16.326 3.40902 16.5C3.40902 18.71 5.11702 20.5 7.22702 20.5C7.69702 20.5 8.14702 20.414 8.56202 20.25C9.18202 21.584 10.488 22.5 11.999 22.5C13.511 22.5 14.817 21.584 15.436 20.25C15.851 20.413 16.301 20.498 16.772 20.498C18.882 20.498 20.59 18.708 20.59 16.498C20.59 16.324 20.578 16.154 20.557 15.985C21.715 15.298 22.5 13.995 22.5 12.501V12.5ZM15.884 9.166L11.55 15.666C11.405 15.883 11.168 16 10.925 16C10.782 16 10.637 15.96 10.509 15.874L10.394 15.78L7.97902 13.365C7.68602 13.072 7.68602 12.597 7.97902 12.305C8.27202 12.013 8.74702 12.011 9.03902 12.305L10.809 14.072L14.634 8.332C14.864 7.987 15.33 7.896 15.674 8.125C16.02 8.355 16.114 8.821 15.884 9.165V9.166Z"
                    fill="#D9D9D9"
                  />
                </svg>
              </div>
              {/* <img className="w-4" src="src/assets/Verified.svg" alt="" /> */}
            </h2>
            <small className="text-white text-xs opacity-50">1,720 posts</small>
          </div>
        </div>
        <div className="w-full relative">
          <img className="w-full" src={couverture} alt="" />
          <div className="absolute top-24 ">
            <img
              className="border-solid border-white border-4 rounded-full w-40"
              src={ProfileTweet}
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
            <p className="text-white text-xs flex flex-row">
              <img
                className="w-4 h-3 mr-2 mt-1"
                src="src/assets/calendrier.png"
                alt=""
              />
              Lorem ipsum dolor sit amet consectetur adipiselit.{" "}
            </p>
            <p className="text-white text-xs flex flex-row">
              <img
                className="w-4 h-3 mr-2 mt-1"
                src="src/assets/lien.png"
                alt=""
              />
              consectetur adipisicing elit
            </p>
            <p className="text-cyan-500 text-xs flex flex-row">
              <img
                className="w-4 h-3 mr-2 mt-1"
                src="src/assets/calendrier.png"
                alt=""
              />
              amet consectetur adipisicing elit
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
