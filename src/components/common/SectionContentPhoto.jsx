import React from "react";
const SectionContentPhoto = (props) => {
  return (
    <div className="flex justify-center items-center">
      <div className="image">
        <img src={props.src} className={props.styling} alt="image" />
      </div>
    </div>
  );
};

export default SectionContentPhoto;
