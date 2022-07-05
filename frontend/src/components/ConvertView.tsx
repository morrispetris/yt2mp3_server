import React from "react";
import * as youtubeDlApi from "../api/api";

import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

import ConvertButton from "./ConvertButton";
import UrlInput from "./UrlInput";

type Props = {
  onConvert: (url: string, format: youtubeDlApi.Format) => void;
};

function isValidHttpUrl(maybeUrl: string): boolean {
  let url;
  try {
    url = new URL(maybeUrl);
  } catch (_) {
    return false;
  }
  return url.protocol === "http:" || url.protocol === "https:";
}

function ConverterView({ onConvert }: Props) {
  const [url, setUrl] = React.useState("");
  const [asVideo, setAsVideo] = React.useState(false);

  const onClick = () => {
    const format = asVideo ? youtubeDlApi.Format.mp4 : youtubeDlApi.Format.mp3;
    onConvert(url, format);
  };

  const error = React.useMemo(
    () => !isValidHttpUrl(url) && !(url === ""),
    [url]
  );

  const onToggleAsVideo = () => {
    setAsVideo((currentState) => !currentState);
  };

  return (
    <div className="InputView">
      <p className="InsertText">Please insert url</p>
      <UrlInput error={error} setUrl={setUrl} onEnter={onClick} />
      <FormControlLabel
        control={<Checkbox checked={asVideo} onChange={onToggleAsVideo} />}
        label="As video"
      />
      <ConvertButton error={error} onClick={onClick} />
    </div>
  );
}

export default ConverterView;
