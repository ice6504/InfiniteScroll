import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";
import { useEffect, useState } from "react";

// components
import Navbar from "./components/Navbar/Navbar";

function App() {
  const [items, setItems] = useState([]);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    axios
      .get("http://api.sampleapis.com/codingresources/codingResources")
      .then((res) => setItems(res.data))
      .catch((err) => console.log(err));
  }, []);

  console.log(items);
  return (
    <>
      <Navbar />
      <div className="min-h-screen pt-20">
        <h1 className="text-5xl text-center">Hello world</h1>
      </div>
    </>
  );
}

export default App;
