import React from "react";

import { useParams } from "react-router-dom";
//#NOTE : Learn More ABout useParams Hook
function User() {
  const { userid } = useParams(); //using useParams() to access user id from Route
  return (
    <div className="flex items-center justify-center h-screen bg-gray-300">
      <h1 className="text-6xl font-bold flex gap-3 justify-center items-center text-white">
        User: {userid}
      </h1>
    </div>
  );
}

export default User;
