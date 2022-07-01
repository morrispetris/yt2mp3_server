import axios from "axios";

const SERVER_URL = window.location.hostname + ":5000";

export type DownloadStatus = {
  status: string;
  info: string;
  is_playlist: boolean;
  playlist_index: number;
  playlist_count: number;
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

export async function listDownloads(): Promise<string[]> {
  const endpoint = "/downloads";
  const res = await axios.get(`http://${SERVER_URL}${endpoint}`);
  return res.data;
}

export async function deleteDownload(fileName: string) {
  const endpoint = `/downloads/${fileName}/delete`;
  await axios.get(`http://${SERVER_URL}${endpoint}`);
}
