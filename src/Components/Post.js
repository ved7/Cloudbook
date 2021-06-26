import React from "react";
import { Button } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import { useState } from "react";
import { storage } from "../firebase";

import "../style/post.css";
function Post() {
  const [image, setImage] = useState(null);
  const [load, setLoad] = useState(false);

  const handleChange = (e) => {
    const reader = new FileReader();
    let file = e.target.files[0]; // get the supplied file
    // if there is a file, set image to that file
    if (file) {
      reader.onload = () => {
        if (reader.readyState === 2) {
          console.log(file);
          setImage(file);
        }
      };
      reader.readAsDataURL(e.target.files[0]);
      // if there is no file, set image back to null
    } else {
      setImage(null);
    }
  };

  console.log("image : ", image);

  const handleUpload = (e) => {
    if (image) {
      const imageRef = storage.ref().child(image.name);
      imageRef.put(image).then(() => {
        alert("Image uploaded successfully to Firebase.");
        setLoad(true);
      });
    } else {
      alert("Please upload something");
    }
  };

  return (
    <div className="post">
      <div className="form-input">
        <form>
          <div className="field-1">
            <TextField
              id="filled-textarea"
              placeholder="What's happening "
              multiline
              variant="filled"
              className="textfield"
            />
          </div>
          <div className="field-2">
            <input
              type="file"
              accept="image/x-png,image/jpeg"
              onChange={(e) => {
                handleChange(e);
              }}
            />
            <Button variant="outlined" onClick={handleUpload}>
              Upload
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Post;
