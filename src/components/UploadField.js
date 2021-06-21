import { makeStyles } from "@material-ui/core";
import { useField } from "formik";
import { useCallback, useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import FileUpload from "./FileUpload";

const useStyles = makeStyles((theme) => ({
  dropzone: {
    border: `1px dashed ${theme.palette.primary.main}`,
    borderRadius: theme.shape.borderRadius,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: theme.palette.background.default,
    height: theme.spacing(10),
    outline: "none",
  },
}));

const UploadField = ({ name, title }) => {
  const [files, setFiles] = useState([]);
  const [_, __, helpers] = useField(name);
  const classes = useStyles();

  useEffect(() => {
    helpers.setValue(files);
    // helpers.setTouched(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [files]);

  function onUpload(file, url) {
    setFiles((curr) =>
      curr.map((fw) => {
        if (fw.file === file) {
          return { ...fw, url };
        }
        return fw;
      })
    );
  }

  const onDrop = useCallback((accFiles, rejFiles) => {
    // Do something
    // eslint-disable-next-line no-empty-pattern
    const mappedAcc = accFiles.map((file) => ({ file, errors: [] }));
    setFiles((curr) => [...curr, ...mappedAcc, ...rejFiles]);
  }, []);

  const { getInputProps, getRootProps } = useDropzone({
    onDrop,
    multiple: false,
  });

  return (
    <section className="container">
      <div {...getRootProps({ className: classes.dropzone })}>
        <input {...getInputProps()} />
        <p>{title}</p>
        {files.map((fileWrapper, idx) => (
          <FileUpload onUpload={onUpload} key={idx} file={fileWrapper.file} />
        ))}
      </div>
    </section>
  );
};

export default UploadField;
