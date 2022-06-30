import React from "react";
import { saveAs } from "file-saver";
import * as youtubeDlApi from "../api/api";

import DownloadView from "./DownloadView";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { blue } from "@material-ui/core/colors";
import Header from "./Header";
import ConvertView from "./ConvertView";
import LoadingView from "./LoadingView";

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
  const [status, setStatus] =
    React.useState<youtubeDlApi.DownloadStatus | null>(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const [downloadId, setDownloadId] = React.useState<string | null>(null);

  async function onConvert(url: string) {
    setIsLoading(true);
    youtubeDlApi
      .requestDownload(url)
      .then((identifier) => setDownloadId(identifier));
  }

  React.useEffect(() => {
    const pollStatus = () => {
      if (downloadId && isLoading) {
        youtubeDlApi
          .getDownloadStatus(downloadId)
          .then((downloadStatus) => setStatus(downloadStatus));
      }
    };

    const intervalId = setInterval(pollStatus, 1000);
    return () => clearInterval(intervalId);
  }, [isLoading, downloadId]);

  React.useEffect(() => {
    if (status?.status === "finished") {
      setIsLoading(false);
    }
    if (status?.status === "error") {
      alert("Something went wrong. Maybe try again?");
      setIsLoading(false);
      setStatus(null);
    }
  }, [status?.status]);

  const onDownload = () => {
    const linkLocation = `https://${window.location.hostname}/downloads/${downloadId}/download`;
    const link = document.createElement("a");
    link.href = linkLocation;
    link.click();
    setStatus(null);
  };

  return (
    <ThemeProvider theme={theme}>
      <div id="content" className="App">
        <Header />
        <div className="Converter">
          {status === null ? (
            <ConvertView onConvert={onConvert} />
          ) : isLoading ? (
            <LoadingView />
          ) : (
            <DownloadView filename={"test"} onClick={onDownload} />
          )}
        </div>
      </div>
    </ThemeProvider>
  );
}

export default Converter;
