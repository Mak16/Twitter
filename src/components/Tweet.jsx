import {Link } from "react-router-dom";
import TweetTitle from "./Tweet-title";
import React from "./React";
function Tweet({ tweet }) {
  return (
    <>
      <div className="flex flex-row w-full pt-4 border-b border-solid border-slate-800 pl-3 pr-10">
      <Link className="w-20 h-15" to='/TweetProfil '><img
          className="w-full object-fill self-start rounded-full "
          src={tweet.author_avatar}
          // alt={props.alt}
        />
        </Link>
        <div>
          <div className="flex flex-col">
            <TweetTitle>{tweet.source}</TweetTitle>
            <p className="w-2/7 text-white text-xs m-2">{tweet.text}</p>
            <div className="w-4/7">
              {tweet.image && (
                <img
                  className="w-full  object-cover h-60 rounded-3xl"
                  src={tweet.image}
                />
              )}
            </div>
          </div>
          <div className="flex flex-row justify-between mt-4 mr-20 ml-5 mb-5">
            <React
              react={tweet.replies}
              src="src/assets/Reply.svg"
              alt="Reply"
            />
            <React
              react={tweet.retweets}
              src="src/assets/Retweet.svg"
              alt="Retweet"
            />
            <React
              react={tweet.favorites}
              src="src/assets/React.svg"
              alt="React"
            />
            <React src="src/assets/Share.svg" alt="Share" />
          </div>
        </div>
      </div>
    </>
  );
}
export default Tweet;
