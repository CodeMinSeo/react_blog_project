import React from "react";


const UserContext = React.createContext('Guest');
UserContext.displayName = '유저_컨텍스트';

export default UserContext