import { Link, Route, Routes } from "react-router-dom";
import Menu from "./Menu";
import Btn from "./Btn";
import UserProfil from "./UserProfil";
import TweetMap from "./TweetMap";
import TweetProfil from "./TweetProfil";
import Field from "../assets/Field";
import Trends from "./Trends";
import Squid from "./Squid";
import Follow from "./Follow";

const Home = () => {
    return (
        <div>
            
      <div className=" w-full m-auto justify-center flex">
        <div className="w-1/5 mr-20">
          <div className="fixed ml-24">
            <Menu src="src/assets/Twitter.svg" alt="Twitter" />
            <Link to="/">
              <Menu src="src/assets/Home.svg" alt="Home">
                Home
              </Menu>
            </Link>
            <Menu src="src/assets/Explore.svg" alt="Home">
              Explore
            </Menu>
            <Menu src="src/assets/Notifications.svg" alt="Notifications">
              Notifications
            </Menu>
            <Menu src="src/assets/Messages.svg" alt="Messages">
              Messages
            </Menu>
            <Menu src="src/assets/Bookmarks.svg" alt="Bookmarks">
              Bookmarks
            </Menu>
            <Menu src="src/assets/Lists.svg" alt="Lists">
              Lists
            </Menu>
            <Menu src="src/assets/Profile.svg" alt="Home">
              Profile
            </Menu>
            <Menu src="src/assets/More.svg" alt="More">
              More
            </Menu>
            <div className="flex flex-col justify-between">
              <Btn btnClass=" bg-sky-500 w-40 h-10 text-white text-xs rounded-full mt-5 self-center">
                Tweet
              </Btn>
              <div className="flex flex-row">
                <UserProfil
                  verifiedSrc="src/assets/Private.svg"
                  src="src/assets/IMG_7333.jpg"
                  userName="Makban16"
                >
                  Makeda Banza
                </UserProfil>
                <Link to='/login' ><img
                  className="w-4 mt-72 mb-4 ml-2"
                  src="src/assets/More-2.svg"
                  alt="More"
                /></Link>
              </div>
            </div>
          </div>
        </div>
        <div className="w-2/5  border-solid border-slate-800 border-2">
          <Routes>
            <Route path="/" element={<TweetMap />} />
            <Route path="/TweetProfil" element={<TweetProfil />} />
          </Routes>
        </div>
        <div className="w-1/5 pl-3 ">
          <div className="fixed w-1/5">
            <Field
              fieldcontenair="flex flex-row bg-slate-800 rounded-full p-2 justify-center"
              SearchImg="src/assets/Search.svg"
              className="w-full bg-slate-800 rounded-full  text-center resize-none "
            >
              What’s happening
            </Field>
            <Trends
              trendClassName="w-full flex flex-col justify-between bg-slate-800 rounded-lg mt-3 p-4"
              title="Trends for you"
              src="src/assets/Settings.svg"
            >
              <Squid title="Trending in Turkey" subTitle="2,066 Tweets" />
              <Squid title="Trending in Turkey" subTitle="2,066 Tweets" />
              <Squid title="Trending in Turkey" subTitle="2,066 Tweets" />
              <Squid title="Trending in Turkey" subTitle="2,066 Tweets" />
            </Trends>
            <Trends
              trendClassName="w-full flex flex-col bg-slate-800 rounded-lg mt-3 p-4 h-60 "
              title="Who to follow"
            >
              <Follow
                src="src/assets/Profile-Fill.svg"
                userName="@NYT"
                verifiedSrc="src/assets/Verified.svg"
              >
                New York Times
              </Follow>
              <Follow
                src="src/assets/Profile-Fill.svg"
                userName="@NYT"
                verifiedSrc="src/assets/Verified.svg"
              >
                New York Times
              </Follow>
              <Follow
                src="src/assets/Profile-Fill.svg"
                userName="@NYT"
                verifiedSrc="src/assets/Verified.svg"
              >
                New York Times
              </Follow>
            </Trends>
          </div>
        </div>
      </div>

        </div>
    );
};

export default Home;