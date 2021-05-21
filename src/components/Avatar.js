import React from "react";


const Avatar = ({ photo, displayName}) =>{
return(<div>
<div className="Avatar"> <img src={photo} alt="avatarimage"/></div>
<div>{displayName}</div>
</div>
)}
export default Avatar;
