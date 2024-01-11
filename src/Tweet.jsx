import TweetTitle from "./Tweet-title";
import React from "./React";
function Tweet(props) {
  return (
    <>
      <div className="flex flex-row w-full pt-4 border-b border-solid border-slate-800 pl-3 pr-10">
        <img
          className="w-10 h-10 self-start rounded-full "
          src={props.src}
          alt={props.alt}
        />
        <div>
          <div className="flex flex-col">
            <TweetTitle>Makeda Banza</TweetTitle>
            <p className="w-2/7 text-white text-xs m-2">
              {props.children}
            </p>
            <div className="w-4/7">
              <img
                className="w-full object-contain rounded-3xl"
                src={props.srcTweet}
                alt="Tweet"
              />
            </div>
          </div>
          <div className="flex flex-row justify-between mt-4 mr-20 ml-5 mb-5">
            <React  src="src/assets/Reply.svg" alt="Reply" />
            <React  src="src/assets/Retweet.svg" alt="Retweet" />
            <React  src="src/assets/React.svg" alt="React" />
            <React  src="src/assets/Share.svg" alt="Share" />
          </div>
        </div>
      </div>
    </>
  );
}
export default Tweet;
