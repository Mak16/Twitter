import TweetTitle from "./Tweet-title"
function Tweet(props){
    return(
        <>
            <div className="flex flex-row w-full pt-4 ">
                <img className="w-10 h-10 self-start rounded-full " src={props.src} alt={props.alt} />
                <div>
                    <div className="flex flex-row">
                        <TweetTitle></TweetTitle>
                        <div className="w-2/7"></div>
                        <div className="w-4/7">
                            <img className="w-60 h-35" src="src/assets/IMG_7333.jpg" alt="Tweet" />
                        </div>
                    </div>
                    <div className="flex flex-row justify-between">
                        <div className="">
                            <img className="mr-3 w-4" src="src/assets/Reply.svg" alt="Reply" />
                            <small className="text-white text-xs">19</small>
                        </div>
                        <div>
                            <img className="mr-3 w-4" src="src/assets/Retweet.svg" alt="Retweet" />
                            <small className="text-white text-xs">19</small>
                        </div>
                        <div>
                            <img className="mr-3 w-4" src="src/assets/React.svg" alt="React" />
                            <small className="text-white text-xs">19</small>
                        </div>
                        <div>
                            <img className="mr-3 w-4" src="src/assets/Share.svg" alt="Share" />
                            <small className="text-white text-xs">19</small>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Tweet