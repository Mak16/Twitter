/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import TweetTitle from "./Tweet-title";
import ReactIcon from "./ReactIcon";
import { useEffect, useState } from "react";
import axios from "axios";
function Tweet({ tweet}) {
  const [isLiked, setIsLiked] = useState(false);
  function FavoritesCounter() {
    setIsLiked(!isLiked);
   
  }
  const [userData,setuserData]=useState([])
  useEffect(() => {
    axios.get(`http://localhost:9000/users/${tweet.userId}`)
      .then(response => {
        setuserData(response.userData)
      })
      .catch(function (error) {
        console.log(error);
      }
      );
  }, [userData])
 
  return (
    <>
      <div className="flex flex-row w-full pt-4 border-b border-solid border-slate-800 pl-3 pr-10">
        <Link className="w-20 h-15" to="/TweetProfil ">
          <img
            className="w-full object-fill self-start rounded-full "
            // src={usersTweet.profil}
            // alt={props.alt}
          />
        </Link>
        <div>
          <div className="flex flex-col">
            {/* <TweetTitle userName={usersTweet.username} >{usersTweet.name}</TweetTitle> */}
            <p className="w-2/7 text-white text-xs m-2">{tweet.body}</p>
            <div className="w-4/7">
              {tweet.thumbnailUrl && (
                <img
                  className="w-full  object-cover h-60 rounded-3xl"
                  src={tweet.thumbnailUrl}
                />
              )}
            </div>
          </div>
          <div className="flex flex-row justify-between mt-4 mr-20 ml-5 mb-5">
            <ReactIcon
              viewBoxIcon="0 0 24 24"
              classReact="text-white text-xs opacity-50 mt-1 ml-1 hover:text-cyan-700  hover:opacity-100"
              fill="fill-[#D9D9D9] hover:fill-cyan-700"
              react={tweet.repost}
            >
              <path d="M14.0459 2.242L9.89795 2.232H9.89595C5.52195 2.232 2.09595 5.659 2.09595 10.034C2.09595 14.132 5.28195 17.24 9.56095 17.404V21.232C9.56095 21.34 9.60495 21.518 9.68095 21.635C9.82295 21.86 10.0649 21.982 10.3129 21.982C10.4509 21.982 10.5899 21.944 10.7149 21.864C10.9789 21.696 17.1879 17.724 18.8029 16.358C20.7049 14.748 21.8429 12.388 21.8459 10.046V10.029C21.8399 5.662 18.4159 2.242 14.0459 2.241V2.242ZM17.8329 15.214C16.6989 16.174 12.9709 18.619 11.0609 19.857V16.67C11.0609 16.256 10.7259 15.92 10.3109 15.92H9.91495C6.25495 15.92 3.59695 13.444 3.59695 10.034C3.59695 6.5 6.36495 3.732 9.89695 3.732L14.0439 3.742H14.0459C17.5779 3.742 20.3459 6.508 20.3479 10.038C20.3449 11.948 19.4059 13.882 17.8339 15.214H17.8329Z" />
            </ReactIcon>
            <ReactIcon
              viewBoxIcon="0 0 24 24"
              classReact="text-white text-xs opacity-50 mt-1 ml-1 hover:text-green-700  hover:opacity-100"
              fill="fill-[#D9D9D9] hover:fill-green-700"
              // react={tweet.retweets}
            >
              <path d="M23.77 15.67C23.478 15.377 23.003 15.377 22.71 15.67L20.49 17.89V7.65C20.49 5.582 18.807 3.9 16.74 3.9H10.89C10.476 3.9 10.14 4.236 10.14 4.65C10.14 5.064 10.476 5.4 10.89 5.4H16.74C17.98 5.4 18.99 6.41 18.99 7.65V17.89L16.77 15.67C16.477 15.377 16.002 15.377 15.71 15.67C15.418 15.963 15.416 16.438 15.71 16.73L19.21 20.23C19.355 20.377 19.547 20.45 19.74 20.45C19.933 20.45 20.123 20.378 20.27 20.23L23.77 16.73C24.064 16.438 24.064 15.963 23.77 15.67ZM13.11 18.95H7.25997C6.01997 18.95 5.00997 17.94 5.00997 16.7V6.46L7.22997 8.68C7.37797 8.827 7.56997 8.9 7.76197 8.9C7.95397 8.9 8.14597 8.827 8.29197 8.68C8.58497 8.387 8.58497 7.912 8.29197 7.62L4.79197 4.12C4.49897 3.826 4.02397 3.826 3.73197 4.12L0.231975 7.62C-0.0620254 7.912 -0.0620254 8.387 0.231975 8.68C0.525975 8.973 0.998975 8.973 1.29197 8.68L3.51197 6.46V16.7C3.51197 18.768 5.19497 20.45 7.26197 20.45H13.112C13.526 20.45 13.862 20.114 13.862 19.7C13.862 19.286 13.525 18.95 13.112 18.95H13.11Z" />
            </ReactIcon>
            {!isLiked ? (
              <ReactIcon
                viewBoxIcon="0 0 24 24"
                classReact="text-white text-xs opacity-50 hover:opacity-100 mt-1 ml-1 hover:text-red-700  hover:opacity-100"
                fill="fill-[#D9D9D9] hover:fill-red-700"
                onClickReact={FavoritesCounter}
                react={tweet.like}
              >
                <path d="M12 21.638H11.986C9.40295 21.59 1.94995 14.856 1.94995 8.478C1.94995 5.414 4.47495 2.724 7.35295 2.724C9.64295 2.724 11.183 4.304 11.999 5.454C12.813 4.306 14.353 2.724 16.644 2.724C19.524 2.724 22.048 5.414 22.048 8.479C22.048 14.855 14.594 21.589 12.011 21.636H12V21.638ZM7.35395 4.225C5.27395 4.225 3.45095 6.213 3.45095 8.48C3.45095 14.22 10.485 20.076 12.001 20.138C13.519 20.076 20.551 14.221 20.551 8.48C20.551 6.213 18.728 4.225 16.648 4.225C14.12 4.225 12.708 7.161 12.696 7.19C12.466 7.752 11.54 7.752 11.309 7.19C11.295 7.16 9.88395 4.225 7.35495 4.225H7.35395Z" />
              </ReactIcon>
            ) : (
              <ReactIcon
                onClickReact={FavoritesCounter}
                classReact="text-white text-xs opacity-50 mt-1 ml-1 hover:text-[#F00] hover:opacity-100"
                react={(tweet.like*1)+1}
                viewBoxIcon="0 0 512 512"
                fill="fill-[#f00]"
              >
                <path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" />
              </ReactIcon>
            )}
            <ReactIcon
              viewBoxIcon="0 0 24 24"
              classReact="text-white text-xs opacity-50 mt-1 ml-1 hover:text-green-700"
              fill="fill-[#D9D9D9] hover:fill-green-900"
            >
              <path d="M17.53 7.47L12.53 2.47C12.237 2.177 11.762 2.177 11.47 2.47L6.47001 7.47C6.17601 7.763 6.17601 8.238 6.47001 8.53C6.76401 8.822 7.23701 8.824 7.53001 8.53L11.25 4.81V15C11.25 15.414 11.586 15.75 12 15.75C12.414 15.75 12.75 15.414 12.75 15V4.81L16.47 8.53C16.616 8.677 16.808 8.75 17 8.75C17.192 8.75 17.384 8.678 17.53 8.53C17.823 8.237 17.823 7.763 17.53 7.47Z" />
              <path d="M19.708 21.944H4.292C3.028 21.944 2 20.916 2 19.652V14C2 13.586 2.336 13.25 2.75 13.25C3.164 13.25 3.5 13.586 3.5 14V19.652C3.5 20.089 3.855 20.444 4.292 20.444H19.708C20.145 20.444 20.5 20.089 20.5 19.652V14C20.5 13.586 20.836 13.25 21.25 13.25C21.664 13.25 22 13.586 22 14V19.652C22 20.916 20.972 21.944 19.708 21.944Z" />
            </ReactIcon>
          </div>
        </div>
      </div>
    </>
  );
}
export default Tweet;
