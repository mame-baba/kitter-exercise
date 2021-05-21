import React from "react";
import Username from "./Username";
import Avatar from "./Avatar";

const Profile = ({ photo, displayName, userName}) =>{
return(<div>
< Avatar  photo={photo} displayName={displayName}/>
<Username userName={userName}/>
</div>
)}
export default Profile;