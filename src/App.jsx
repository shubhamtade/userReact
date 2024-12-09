import { useEffect, useState } from "react";
import Card from "./components/card/card";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((data) => {
        setData(data.users);
      })
      .catch((e) => {
        console.log("Error : ", e);
      });
  }, []);

  return (
    <div className="p-3">
      {/* <div className="p-2">
        <h1 className="text-[30px] font-bold text-left">User List</h1>
        {data.map((user, index) => (
          <p key={index} className="text-left">
            {user.firstName}
          </p>
        ))}
      </div> */}

      <Card data={data} />
    </div>
  );
}

export default App;
