import React, { useState } from "react";
import "./style.css";

function Index({values}) {
  const [input, setInput] = useState("");
  const [tags, setTags] = useState([]);
  const [isKeyReleased, setIsKeyReleased] = useState(false);

  const onChange = (e) => {
    const { value } = e.target;
    // console.log(value);
    setInput(value);
  };
  const onKeyDown = (e) => {
    // console.log(tags, e);
    const { key,code } = e;
    const trimmedInput = input.trim();

    if (
      (key === "," || key === "Enter" || code==="Space") &&
      trimmedInput.length &&
      !tags.includes(trimmedInput)
    ) {
      e.preventDefault();
      setTags((prevState) => [...prevState, trimmedInput]);
      values([...tags,trimmedInput])
      setInput("");
    }

    if (key === "Backspace" && !input.length && tags.length && isKeyReleased) {
      const tagsCopy = [...tags];
      const poppedTag = tagsCopy.pop();
      e.preventDefault();
      setTags(tagsCopy);
      values(tagsCopy)

      setInput(poppedTag);
    }
    setIsKeyReleased(false);
  };
  const deleteTag = (index) => {
    setTags((prevState) => prevState.filter((tag, i) => i !== index));
    values(tags.filter((tag, i) => i !== index))
 
  };
  const onKeyUp = () => {
    setIsKeyReleased(true);
  };
  return (
    <div>
      <div className="d-flex alert alert-info">
      <div className="container-fluid">
      <input
        className="taginput form-control"
        value={input}
        placeholder="Enter tags "
        onKeyDown={onKeyDown}
        onKeyUp={onKeyUp}
        onChange={onChange}
      />
      </div>
        
   <div className="container-fluid">
   {tags.map((tag, index) => (
        <div className="badge badge-success m-3" key={index}>
          {tag}
          <span
            className="badge badge-danger badge-sm "
            onClick={() => deleteTag(index)}
          >
            <i className="fa fa-times"></i>
          </span>
        </div>
      ))}
   </div>
     
      </div>
     
    </div>
  );
}

export default Index;
