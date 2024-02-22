/* eslint-disable react/jsx-key */
import Tweet from "./Tweet";
import Profile from "./Profile";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function TweetMap() {
  const [data,setData]=useState([])
  useEffect(() => {
    axios.get("https://my-json-server.typicode.com/amare53/twiterdb/posts")
      .then(response => {
        setData(response.data)
      })
      .catch(function (error) {
        console.log(error);
      });
  });

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
        <Profile src="src/assets/IMG_7333.jpg" alt="Profile" />
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
