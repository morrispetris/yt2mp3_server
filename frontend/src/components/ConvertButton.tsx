import React from "react";
import Button from "@material-ui/core/Button";

type Props = {
  onClick: () => void;
  error: boolean;
};

export default function ConvertButton({ onClick, error }: Props) {
  return (
    <Button
      disabled={error}
      id="convert-button"
      color="primary"
      onClick={onClick}
      variant="contained"
    >
      Convert
    </Button>
  );
}
