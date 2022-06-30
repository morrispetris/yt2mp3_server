import axios from "axios";

const SERVER_URL = window.location.hostname + ":5000";

export type DownloadStatus = {
  status: string;
  eta?: string;
  percent_progress?: string;
};

export async function requestDownload(url: string): Promise<string> {
  const endpoint = "/download/request";
  const res = await axios.post(`http://${SERVER_URL}${endpoint}`, { url });
  return res.data.id;
}

export async function getDownloadStatus(
  identifier: string
): Promise<DownloadStatus> {
  const endpoint = `/downloads/${identifier}/status`;
  const res = await axios.get(`http://${SERVER_URL}${endpoint}`);
  return res.data;
}
