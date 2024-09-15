import { data } from "autoprefixer";
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function GitHub() {
  //calling useDataLoader
  const response = useLoaderData();

  //api call
  // const [response, setResponse] = useState([]);
  // //   State (useState): React monitors state variables, re-renders the component when they change, and is essential for handling asynchronous data like API responses.
  // // Regular Variable: React doesn't monitor regular variables, so changes to them won't trigger re-renders, making them unsuitable for storing data that affects the UI.
  // useEffect(() => {
  //   fetch("https://api.github.com/users/gauravxroy")
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((data) => {
  //       setResponse(data);
  //       console.log(data);
  //     })
  //     .catch((err) => {
  //       console.log("Error: ", err);
  //     });
  //   console.log("called ");
  // }, []);

  return (
    <div className=" h-screen flex  items-center flex-col bg-gray-500 ">
      {/* //relative in parent and absolute in child , then child is positioned in context of parent div where relative is included */}
      <div className=" relative">
        <img
          src={response.avatar_url}
          alt=""
          className="h-[100px] w-[100px] rounded-full mb-4 mt-4"
        />
        <span className="bg-green-600 rounded-full h-3 w-3 absolute top-7 left-20"></span>
      </div>
      <h1 className="text-3xl font-bold flex gap-3  text-white">
        {response.login}
      </h1>
      <p className="text-white gap-3 flex text-md font-medium">
        {response.bio}
      </p>
      <p className="text-white gap-3 flex text-md font-medium">
        {response.location}
      </p>
      <div className="text-white gap-3 flex text-md font-medium">
        <p>Follower:{response.followers} </p>
        <p>Following:{response.following} </p>
      </div>
      <div></div>
    </div>
  );
}

export default GitHub;

//this is the api call by which the api call is happens when we onhover of the route , and it will not show that data is loaded , optimised
// eslint-disable-next-line react-refresh/only-export-components
export const dataInfo = async () => {
  const res = await fetch("https://api.github.com/users/gauravxroy");
  return res.json();
};
