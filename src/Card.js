import React, { useState } from "react";
import { BsFillPlusSquareFill } from "react-icons/bs";
import { AiFillMinusSquare } from "react-icons/ai";
import { IoChevronDown,IoChevronUp } from "react-icons/io5";
const Card = ({ question }) => {

  const change = () => {
    setIsHidden(!isHidden);
  }


  var [isHidden, setIsHidden] = useState(true);

  return (
    <div className="card">
      <div className="card__heading">
        <h1 className="card__tittle">{question.title}</h1>
        {(isHidden) ? <IoChevronDown className="icon" onClick={change} /> : <IoChevronUp className="icon" onClick={change} />}
      </div>
      {!isHidden && <div className="card__details">{question.info}</div>}
    </div>
  )
}

export default Card;