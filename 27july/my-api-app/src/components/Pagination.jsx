import React, { useEffect, useState } from "react";
import { use } from "react";

const Pagination = () => {
  const [data, setData] = useState([]);
  const [pageSize, setPageSize] = useState(4);
  const [startingIndex, setStartingIndex] = useState(0);
  const [endingIndex, setEndingIndex] = useState(pageSize);
  const [toatalPage, setToatalPage] = useState(1);

  const fetchData = async () => {
    try {
      var res = await fetch("https://fakestoreapi.com/products");
      var jsonData = await res.json();
      console.log(jsonData);
      setData(jsonData);
      setToatalPage(Math.ceil(jsonData.lenght / pageSize));
    } catch (err) {
      console.log("error occured", err);
    }
  };

  const handleIndex = (pageNo) => {
    setStartingIndex((pageNo - 1) * pageSize);
    setEndingIndex(pageNo * pageSize);
  };

  const pagination = new Array(Math.ceil(data.length / pageSize)).fill(undefined);
  console.log(pagination);

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div>
      <div className="row justify-content-center mx-0">
        <div className="col-md-9">
          {data.slice(startingIndex, endingIndex).map((items, index) => (
            <div className="block" key={index}>
              {items.id} : <strong>{items.title}</strong>
            </div>
          ))}

          {pagination.map((items, index) => (
            <button
              key={index}
              className="btn btn-danger mx-1"
              onClick={() => handleIndex(index + 1)}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pagination;
