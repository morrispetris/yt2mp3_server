import React from "react";
import TextField from "@material-ui/core/TextField";

type Props = {
  setUrl: (input: string) => void;
  onEnter: () => void;
  error: boolean;
};

export default function UrlInput({ setUrl, onEnter, error }: Props) {
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(event.target.value);
  };

  const onKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      onEnter();
    }
  };

  return (
    <div className="UrlInput">
      <TextField
        className="UrlTextField"
        error={error}
        onKeyDown={onKeyPress}
        id="url-input"
        label="Video URL"
        onChange={onChange}
        variant="outlined"
        helperText={
          "Enter some URL (e.g. https://www.youtube.com/watch?v=dQw4w9WgXcQ) "
        }
      />
    </div>
  );
}
