import React from "react";
import * as youtubeDlApi from "../api/api";

import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { blue } from "@material-ui/core/colors";
import ConvertView from "./ConvertView";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: blue[500],
    },
    secondary: {
      main: blue[800],
    },
  },
});

function Converter() {
  async function onConvert(url: string, format: youtubeDlApi.Format) {
    const downloadId = await youtubeDlApi.requestDownload(url, format);
    window.location.href = `/view/downloads/${downloadId}`;
  }

  return (
    <ThemeProvider theme={theme}>
      <div className="Converter">
        <ConvertView onConvert={onConvert} />
      </div>
    </ThemeProvider>
  );
}

export default Converter;
