import React from "react";

import ConvertButton from "./ConvertButton";
import UrlInput from "./UrlInput";

type Props = {
  onConvert: (url: string) => void;
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

  const onClick = () => {
    onConvert(url);
  };

  const error = React.useMemo(
    () => !isValidHttpUrl(url) && !(url === ""),
    [url]
  );

  return (
    <div className="InputView">
      <p className="InsertText">Please insert url</p>
      <UrlInput error={error} setUrl={setUrl} onEnter={onClick} />
      <ConvertButton error={error} onClick={onClick} />
    </div>
  );
}

export default ConverterView;
