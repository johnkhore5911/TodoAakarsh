import React, { useState, useEffect } from "react";
import db from "../Styles/Dashboard.module.css";
import { Link } from "react-router-dom";
import { Loader } from "./Loader";
import { NewCrm_backend } from "../../../declarations/NewCrm_backend";
const Dashboard = () => {
  const [loader, setLoader] = useState();
  var k = 0;
  const [count, setCount] = useState();
  const [data, setData] = useState([]);
  useEffect(() => {
    console.log("fetch");
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const res = await NewCrm_backend.getCustomers();
      setData(res);
      setLoader(null);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    setLoader(<Loader />);
  }, []);
  function compare(a, b) {
    if (parseInt(a.id) < parseInt(b.id)) {
      return -1;
    } else if (parseInt(a.id) > parseInt(b.id)) {
      return 1;
    } else {
      return 0;
    }
  }
  const list = data.sort(compare);
  const table = list.map((a) => (
    <tr key={a.id}>
      <td>{a.id}</td>
      <td>{a.TaskName}</td>
      <td>{a.name}</td>
      <td>{a.Category}</td>
      <td>{a.Date}</td>
      <td>{a.Time}</td>
      <td>{a.Priority}</td>
    </tr>
  ));

  return (
    <>
      {loader}
      <div className={db.container}>

        <div className={db.createbtn}>
          <Link to="/createlead">
            <button>Add a new to-do</button>
          </Link>
        </div>

        <div className={db.tablecontainer}>
          <table>
            <thead>
              <tr>
                <th>ID </th>
                <th>Task</th>
                <th>Description</th>
                <th>Category</th>
                <th>Date</th>
                <th>Time</th>
                <th>Priority</th>

              </tr>
            </thead>
            <tbody>{table}</tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export { Dashboard };
