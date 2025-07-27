import React, { useEffect, useState } from "react";
import { use } from "react";

const Pagination = () => {
  const [data, setData] = useState([]);
  const [pageSize, setPageSize] = useState(5);
  const [startingIndex, setStartingIndex] = useState(0);
  const [endingIndex, setEndingIndex] = useState(pageSize);
  const [toatalPage, setToatalPage] = useState(1);

  const fetchData = async () => {
    try {
      var res = await fetch("https://fakestoreapi.com/products");
      var jsonData = await res.json();
      console.log(jsonData);
      setData(jsonData);
      setToatalPage(ceiling(jsonData.lenght / pageSize));
    } catch (err) {
      console.log("error occured", err);
    }
  };

  const handleIndex = (pageNo) => {
    setStartingIndex((pageNo -1 )*5)
    setEndingIndex((pageNo)*5)
  };


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
           
           
           
           
          <button className="btn btn-danger" onClick={() =>handleIndex(3)}>3</button>
          <button className="btn btn-danger" onClick={() =>handleIndex(1)}>1</button>
          <button className="btn btn-danger" onClick={() =>handleIndex(4)}>4</button>
          <button className="btn btn-danger" onClick={()=>handleIndex(2)}>2</button>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
