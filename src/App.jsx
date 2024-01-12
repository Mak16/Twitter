import "./App.css";
import Menu from "./components/Menu";
import Profile from "./assets/Profile";
import "./App.css";
import Btn from "./components/Btn";
import Tweet from "./assets/Tweet";
import Field from "./assets/Field";
import UserProfil from "./components/UserProfil";
Field;
function App() {
  return (
    <>
      <div className="bg-black w-screen m-auto justify-center flex  ">
        <div className="w-1/5">
          <div className="fixed ml-24">
            <Menu src="src/assets/Twitter.svg" alt="Twitter" />
            <Menu src="src/assets/Home.svg" alt="Home">
              Home
            </Menu>
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
                  verifiedSrc="src/assets/Verified.svg"
                  src="src/assets/IMG_7333.jpg"
                  userName="Makban16"
                >
                  Makeda Banza
                </UserProfil>
                <img
                  className="w-4 mt-72 mb-4 ml-2"
                  src="src/assets/More-2.svg"
                  alt="More"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-2/5  border-solid border-slate-800 border-2">
          <div className="flex justify-between mt-2 border-b border-solid border-slate-800 pl-3 pr-3 ">
            <a className="text-white">Home</a>
            <img
              className="w-4"
              src="src/assets/Timeline-Prop.svg"
              alt="Timeline"
            />
          </div>
          <Profile src="src/assets/IMG_7333.jpg" alt="Profile" />
          <Tweet src="src/assets/IMG_7333.jpg" alt="Profile">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
            quisquam debitis unde impedit reiciendis aut tempora molestiae
            cupiditate dolorem quae nisi, soluta voluptates! Minima optio,
            repellendus repellat tenetur deserunt officia?
          </Tweet>
          <Tweet
            src="src/assets/Profile.svg"
            srcTweet="src/assets/famille.JPG"
            alt="Profile"
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus,
            saepe porro odit consectetur quidem incidunt nobis facere quod
            obcaecati voluptas? Tempore esse nisi sunt ipsa, optio delectus
            laudantium obcaecati aspernatur.
          </Tweet>
          <Tweet
            srcTweet="src/assets/IMG_7333.jpg"
            src="src/assets/Profile.svg"
            alt="Profile"
          ></Tweet>
        </div>
        <div className="w-1/5">
          <Field className="w-full bg-slate-800 rounded-full h-10 text-center resize-none ">
            What’s happening
          </Field>
        </div>
      </div>
    </>
  );
}

export default App;
