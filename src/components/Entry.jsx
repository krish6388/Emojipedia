import React from "react";

export default function Entry(props) {
  return (
    <>
      <div className="term">
        <dt>
          <span className="emoji" role="img" aria-label="Tense Biceps">
            {props.img}
          </span>
          <span>{props.name}</span>
        </dt>
        <dd>{props.dis}</dd>
      </div>
    </>
  );
}
