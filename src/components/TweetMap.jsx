/* eslint-disable react/jsx-key */
import Tweet from "./Tweet";
import Profile from "./Profile";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import profile from "../assets/IMG_7333.jpg";

export default function TweetMap() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:9000/tweets")
      .then((response) => {
        setData(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [data]);

  return (
    <>
      <div className="flex justify-between mt-2 border-b border-solid border-slate-800 pl-3 pr-3 ">
        <Link to="/" className="text-white">
          Home
        </Link>
        <img
          className="w-4"
          src="src/assets/Timeline-Prop.svg"
          alt="Timeline"
        />
      </div>
      <div>
        <Profile src={profile} alt="Profile" />
      </div>
      {data.map((tweetTab) => (
        <Tweet tweet={tweetTab} />
      ))}
      {/* {userTabs.map((array) => (
        <Tweet usersTweet={array} />
      ))} */}
    </>
  );
}
