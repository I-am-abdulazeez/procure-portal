import { LinearProgress } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { FileHeader } from "./FileHeader";

const FileUpload = ({ file, onUpload }) => {
  // Track Progress
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const upload = async () => {
      const url = await uploadFile(file, setProgress);
      console.log(url);
      onUpload(file, url);
    };

    upload();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <FileHeader file={file} />
      <LinearProgress variant="determinate" value={progress} />
    </div>
  );
};

function uploadFile(file, onProgress) {
  // Cloudinary
  const url = "https://api.cloudinary.com/v1_1/demo/image/upload";
  const key = "docs_upload_example_us_preset";

  // Fetch API
  return new Promise((res, rej) => {
    const xhr = new XMLHttpRequest();
    xhr.open("POST", url);

    xhr.onload = () => {
      const resp = JSON.parse(xhr.responseText);
      res(resp.secure_url);
    };
    xhr.onerror = (evt) => rej(evt);
    xhr.upload.onprogress = (event) => {
      if (event.lengthComputable) {
        const percentage = (event.loaded / event.total) * 100;
        onProgress(Math.round(percentage));
      }
    };

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", key);

    xhr.send(formData);
  });
}

export default FileUpload;
