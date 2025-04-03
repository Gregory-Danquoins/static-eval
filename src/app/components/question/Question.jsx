"use client";

import { useState } from "react";

const Question = ({ question, answer }) => {
  const [open, setOpen] = useState(false);

  const handleClickPlus = () => {
    setOpen(!open);
  };

  return (
    <>
      <h3
        className="question text-lg/5 font-semibold pt-4"
        onClick={handleClickPlus}
      >
        {question}
      </h3>
      <h3
        className="text-3xl text-btn-primary text-right"
        onClick={handleClickPlus}
      >
        +
      </h3>
      {open && <div className="answer">{answer}</div>}
    </>
  );
};

export default Question;
