import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";
import { useEffect, useState } from "react";

// components
import Navbar from "./components/Navbar/Navbar";
import Card from "./components/Card/Card";
import Loading from "./components/Loading/Loading";

function App() {
  const [items, setItems] = useState([]);
  const [limit, setLimit] = useState(20);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    axios
      .get("http://api.sampleapis.com/codingresources/codingResources")
      .then((res) => {
        const limitedItems = res.data.slice(0, limit);
        setItems(limitedItems);
      })
      .catch((err) => console.log(err));
  }, [limit]);

  const fetchMoreData = () => {
    setTimeout(() => {
      const newLimit = limit + 20;
      setLimit(newLimit);
      axios
        .get("http://api.sampleapis.com/codingresources/codingResources")
        .then((res) => {
          const limitedItems = res.data.slice(0, newLimit);
          setItems(limitedItems);
          res.data.length < 0 ? setHasMore(false) : setHasMore(true);
        })
        .catch((err) => console.log(err));
    }, 1000);
  };

  console.log(items);
  return (
    <>
      <Navbar />
      <div className="min-h-screen pt-20 pb-10">
        <InfiniteScroll
          dataLength={items.length}
          next={fetchMoreData}
          hasMore={hasMore}
          loader={<Loading />}
        >
          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4 px-5 lg:px-10">
            {items.map((item) => {
              return <Card key={item.id} data={item} />;
            })}
          </div>
        </InfiniteScroll>
      </div>
    </>
  );
}

export default App;
