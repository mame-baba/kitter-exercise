import React from "react";
import meows from "../meows.json";
import Hashtag from "./Hashtag";
import Icon from "./Icon";
import Profile from "./Profile";

const Meow = ({ user, text, hashtags, replies, likes }) => (
  <div className="Meow">
    <div className="top-section">
      <Profile photo={user.photo} displayName={user.displayName} userName={user.username}/>
    </div>
    <div className="mid-section">
      <p>{text}</p>
       {hashtags.map((hashtag) => (
         <Hashtag>{hashtag}</Hashtag>
         ))}
    </div>
     <div className="bottom-section">
     <Icon type="replies"  number={replies} />
     <Icon type="likes" number={likes}/>
     </div>
     </div>
)
export default Meow;