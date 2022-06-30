import React from "react";
import Button from "@material-ui/core/Button";

type Props = {
  onClick: () => void;
  filename: string;
};
export default function DownloadView({ onClick, filename }: Props) {
  return (
    <div className="InputView">
      <p className="InsertText">
        👇 <span style={{ color: "red" }}>{filename}</span> ready for
        download!👇😁
      </p>
      <Button
        id="download-button"
        color="secondary"
        onClick={onClick}
        variant="contained"
      >
        Download
      </Button>
    </div>
  );
}
