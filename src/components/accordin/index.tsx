import { useState } from "react";
import data from "./data";
import "./style.css";
const Accordin = () => {
  const [selected, setSelected] = useState();
  const handelOpen = (id: any) => {
    setSelected(id === selected ? null : id);
  };
  return (
    <div>
      <div className='wrapper'>
        <div className='accordin'>
          {data.length === 0
            ? "Data not found"
            : data.map((item) => {
                return (
                  <div className='item' key={item.id}>
                    <div className='ques'>
                      <h3>{item.qes}</h3>
                      <span onClick={() => handelOpen(item.id)}>+</span>
                    </div>
                    <div>{selected === item.id ? <p>{item.ans}</p> : null}</div>
                  </div>
                );
              })}
        </div>
      </div>
    </div>
  );
};

export default Accordin;
