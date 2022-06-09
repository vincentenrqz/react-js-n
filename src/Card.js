import React from "react";

/* or can use props then call props.name etc. */

const Card = ({ name, age, gender, profession }) => {
  /* Can do this one / or assign name age and gender to props parameter*/
  //   const { name, age, gender, profession } = props;

  return (
    <div className="w-40 h-auto">
      <div className="bg-gray-200 px-3 py-10 text-center">
        <h1 className="text-lg text-gray-900 font-bold">{profession}</h1>
        <div>Name: {name}</div>
        <div>Age: {age}</div>
        <div>Gender: {gender}</div>
      </div>
    </div>
  );
};

export default Card;
