import React, { useEffect, useState } from "react";
import ImageIcon from "@material-ui/icons/Image";
import LoadingOverlay from "react-loading-overlay";

import { API } from "../api/backend";
import { getMediaUrl } from "../api/functions";
import axios from "axios";

function ImageDrop(props) {
  const [file, setFile] = useState("");
  const [url, setUrl] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  function handleImageChange(e) {
    setLoading(true);
    e.preventDefault();
    let reader = new FileReader();
    let file = e.target.files[0];
    if (file) {
      reader.onloadend = () => {
        setFile(file);
        // setUrl(reader.result)
      };
      reader.readAsDataURL(file);
      let formData = new FormData();
      formData.append("media", file);
      axios
        .post(API + "media/product", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((response) => {
          console.log(response.data);
          setUrl(
            getMediaUrl("product/" + response.data._id + "?placeholder=true")
          );
          props.imageUploaded(response.data._id);
          setLoading(false);
        })
        .catch((err) => {
          setLoading(false);
          setError("provided image format invalid,please upload another image");
          console.log(err);
        });
    } else {
      setLoading(false);
    }
  }
  return (
    <div>
      <LoadingOverlay active={loading} text="Uploading Image...">
        <div className="previewComponent">
          <ImageIcon></ImageIcon>
          <small className="text-danger">{error}</small>
          <input
            className="fileInput"
            type="file"
            onChange={(e) => handleImageChange(e)}
          />
          <div className="imgPreview">
            {url && <img style={{ height: "70px" }} src={url} />}
          </div>
        </div>
      </LoadingOverlay>
    </div>
  );
}

export default ImageDrop;
