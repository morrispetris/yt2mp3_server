import React from "react";
import LinearProgress from "@material-ui/core/LinearProgress";
import * as youtubeDlApi from "../api/api";
import loadCat from "../assets/loadcat.gif";
import { useParams } from "react-router-dom";

function LoadingView() {
  const params = useParams();
  const downloadId = params.downloadId;
  const [status, setStatus] =
    React.useState<youtubeDlApi.DownloadStatus | null>(null);

  React.useEffect(() => {
    const pollStatus = () => {
      if (downloadId) {
        youtubeDlApi
          .getDownloadStatus(downloadId)
          .then((downloadStatus) => setStatus(downloadStatus));
      }
    };

    const intervalId = setInterval(pollStatus, 1000);
    return () => clearInterval(intervalId);
  }, [downloadId]);

  const info = status?.is_playlist
    ? `${status.info}  ${status.playlist_index}/${status.playlist_count}`
    : status?.info
    ? `${status?.info} `
    : "Loading";

  const size = status?.size ? `${status?.size} ` : "0"

  React.useEffect(() => {
    if (status?.status === "finished") {
      window.location.href = "/view/downloads";
    }
  }, [status]);

  return (
    <>
      <div className="LoadingWrapper">
        <img src={loadCat} alt="loading_cat" className="LoadingCat" />
        <div className="LoadingText">{info || "Loading"}, converting {size || "0"}MB</div>
      </div>
      <LinearProgress style={{ margin: "10%", width: "80%" }} />
    </>
  );
}

export default LoadingView;
