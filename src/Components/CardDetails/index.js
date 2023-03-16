import axios from "axios";
import React, { useState } from "react";

import "./index.css";

const CardDetails = ({ detail }) => {
  const [newData, setNewData] = useState([]);
  const [img, setImage] = useState();
  const [stats, setStats] = useState([]);
  const [name, setName] = useState();

  const newFunction = async () => {
    const res = await axios.get(detail);
    const data = await res.data;
    setNewData(data);
    setImage(newData.sprites.front_default);
    setStats(newData.stats);
    setName(newData.name.toUpperCase());
  };

  newFunction();

  return (
    <div className="cont">
      <p className="name">{name}</p>
      <img src={img} alt={newData.name} className="image" />
      <ul className="details-container">
        {stats.map((eachStat) => (
          <li key={eachStat.stat.name} className="each-details-container">
            {eachStat.stat.name} = {eachStat.base_stat}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CardDetails;
