import Field from "../assets/Field";
import Btn from "./Btn";
import Media from "../assets/Media.svg";
import Gif from "../assets/Gif.svg";
import Poll from "../assets/Poll.svg";
import Emoji from "../assets/Emoji.svg";
import Schedule from "../assets/Schedule.svg";

function Profile(props) {
  return (
    <>
      <div className="flex flex-row w-full pt-4 border-b border-solid border-slate-800 pl-3 pr-3">
        <img
          className="w-10 h-10 self-start rounded-full "
          src={props.src}
          alt={props.alt}
        />
        <div className="flex flex-col ml-5 ">
          <Field className="w-full bg-black resize-none ">
            What’s happening
          </Field>
          <div className="flex flex-row justify-between">
            <div className="flex flex-row justify-between">
              <img className="mr-3 w-4" src={Media} alt="Media" />
              <img className="mr-3 w-4" src={Gif} alt="Gif" />
              <img className="mr-3 w-4" src={Poll} alt="Poll" />
              <img className="mr-3 w-4" src={Emoji} alt="Emoji" />
              <img className="mr-3 w-4" src={Schedule} alt="Schedule" />
            </div>
            <Btn btnClass=" bg-sky-200 w-20 h-7 text-white text-xs rounded-full mb-3 self-center">
              Tweet
            </Btn>
          </div>
        </div>
      </div>
    </>
  );
}
export default Profile;
