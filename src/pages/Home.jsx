import { useState, useEffect } from "react";
import axios from "axios";
import Header from "../components/Header";
import Filter from "../components/Filter";
import Detail from "../components/Detail";
import Paginations from "../components/Pagination";

const Home = () => {
  const [data, setdata] = useState([]);
  const [loading, setloading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [datasPerPage] = useState(5);
  useEffect(() => {
    const dataRes = async () => {
      setloading(true);
      await axios
        .get("https://api.nobelprize.org/2.1/nobelPrizes")
        .then((res) => setdata(res.data.nobelPrizes));
      setloading(false);
    };
    dataRes();
  }, []);

  // Get current datas
  const indexOfLastData = currentPage * datasPerPage;
  const indexOfFirstData = indexOfLastData - datasPerPage;
  const currentDatas = data.slice(indexOfFirstData, indexOfLastData);

  //Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <div className="min-h-screen">
      <div>
        <Header data={data} />
      </div>
      <div className="flex">
        <Filter data={data} />
        <Detail data={currentDatas} loading={loading} />
      </div>

      <Paginations
        datasPerPage={datasPerPage}
        totalDatas={data.length}
        paginate={paginate}
      />
    </div>
  );
};

export default Home;
