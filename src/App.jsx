import axios from "axios";
// import InfiniteScroll from "react-infinite-scroll-component";
import { useEffect, useState } from "react";

// components
import Navbar from "./components/Navbar/Navbar";
import Card from "./components/Card/Card";

function App() {
  const [items, setItems] = useState([]);
  // const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    axios
      .get("http://api.sampleapis.com/codingresources/codingResources")
      .then((res) => setItems(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <Navbar />
      <div className="min-h-screen pt-20 pb-10">
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4 px-5 lg:px-10">
          {items.slice(0,20).map((item) => {
            return <Card key={item.id} data={item} />
          })}
        </div>
      </div>
    </>
  );
}

export default App;
