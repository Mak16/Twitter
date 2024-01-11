import "./App.css";
import Menu from "./Menu";
import Profile from "./Profile";
import "./App.css";
import Btn from "./Btn";
import Tweet from "./Tweet";
function App() {
  return (
    <>
      <div className="bg-black w-screen h-screen m-auto justify-center flex ">
        <div className="w-1/5">
          <Menu
            imgClass="w-4"
            menuClass="flex flex-row gap-x-2 pt-5"
            clas="text-white text-xs font-bold"
            src="src/assets/Twitter.svg"
            alt="Twitter"
          />
          <Menu
            imgClass="w-4"
            menuClass="flex flex-row gap-x-2 pt-5"
            clas="text-white text-xs font-bold"
            src="src/assets/Home.svg"
            alt="Home"
          >
            Home
          </Menu>
          <Menu
            imgClass="w-4"
            menuClass="flex flex-row gap-x-2 pt-5"
            clas="text-white text-xs font-bold"
            src="src/assets/Explore.svg"
            alt="Home"
          >
            Explore
          </Menu>
          <Menu
            imgClass="w-4"
            menuClass="flex flex-row gap-x-2 pt-5"
            clas="text-white text-xs font-bold"
            src="src/assets/Notifications.svg"
            alt="Notifications"
          >
            Notifications
          </Menu>
          <Menu
            imgClass="w-4"
            menuClass="flex flex-row gap-x-2 pt-5"
            clas="text-white text-xs font-bold"
            src="src/assets/Messages.svg"
            alt="Messages"
          >
            Messages
          </Menu>
          <Menu
            imgClass="w-4"
            menuClass="flex flex-row gap-x-2 pt-5"
            clas="text-white text-xs font-bold"
            src="src/assets/Bookmarks.svg"
            alt="Bookmarks"
          >
            Bookmarks
          </Menu>
          <Menu
            imgClass="w-4"
            menuClass="flex flex-row gap-x-2 pt-5"
            clas="text-white text-xs font-bold"
            src="src/assets/Lists.svg"
            alt="Lists"
          >
            Lists
          </Menu>
          <Menu
            imgClass="w-4"
            menuClass="flex flex-row gap-x-2 pt-5"
            clas="text-white text-xs font-bold"
            src="src/assets/Profile.svg"
            alt="Home"
          >
            Profile
          </Menu>
          <Menu
            imgClass="w-4"
            menuClass="flex flex-row gap-x-2 pt-5"
            clas="text-white text-xs font-bold"
            src="src/assets/More.svg"
            alt="More"
          >
            More
          </Menu>
          <Btn btnClass=" bg-sky-500 w-40 h-10 text-white text-xs rounded-full mt-5 self-center">
            Tweet
          </Btn>
        </div>
        <div className="w-2/5 pt-4">
          <div className="flex justify-between ">
            <a className="text-white">Home</a>
            <img className="w-4" src="src/assets/Timeline-Prop.svg" alt="Timeline" />
          </div>
          <hr />
          <Profile src="src/assets/IMG_7333.jpg" alt="Profile" />
          <hr />
          <Tweet src="src/assets/Profile.svg" alt="Profile"></Tweet>
        </div>
        <div className="w-1/5"></div>
      </div>
    </>
  );
}

export default App;
