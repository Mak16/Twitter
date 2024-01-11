import Btn from "./Btn";
function Profile(props) {
  return (
    <>
      <div className="flex flex-row w-full pt-4 border-b border-solid border-slate-800 pl-3 pr-3">
        <img className="w-10 h-10 self-start rounded-full " src={props.src} alt={props.alt} />
        <div className="flex flex-col ml-5 ">
          <textarea
            name=""
            className="w-full bg-black resize-none "
            id=""
            cols="65"
            rows="1.5"
            placeholder="What’s happening?"
          ></textarea>
          <div className="flex flex-row justify-between">
            <div className="flex flex-row justify-between">
              <img className="mr-3 w-4" src="src/assets/Media.svg" alt="Media" />
              <img className="mr-3 w-4" src="src/assets/Gif.svg" alt="Gif" />
              <img className="mr-3 w-4" src="src/assets/Poll.svg" alt="Poll" />
              <img className="mr-3 w-4" src="src/assets/Emoji.svg" alt="Emoji" />
              <img className="mr-3 w-4" src="src/assets/Schedule.svg" alt="Schedule" />
            </div>
            <Btn btnClass=" bg-sky-200 w-20 h-7 text-white text-xs rounded-full mb-3 self-center">
              Tweet
            </Btn>
          </div>
        </div>
      </div>
      <div></div>
    </>
  );
}
export default Profile;
