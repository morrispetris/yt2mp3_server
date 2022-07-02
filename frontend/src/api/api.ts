import axios from "axios";

// COMMENT THIS before deploy
const SERVER_URL = window.location.hostname;

export type DownloadStatus = {
  status: string;
  info: string;
  is_playlist: boolean;
  playlist_index: number;
  playlist_count: number;
};

export function getDownloadUrl(fileName: string) {
  return `https://${SERVER_URL}/downloads/${fileName}`;
}

export async function requestDownload(url: string): Promise<string> {
  const endpoint = "/download/request";
  const res = await axios.post(`https://${SERVER_URL}${endpoint}`, { url });
  return res.data.id;
}

export async function getDownloadStatus(
  identifier: string
): Promise<DownloadStatus> {
  const endpoint = `/downloads/${identifier}/status`;
  const res = await axios.get(`https://${SERVER_URL}${endpoint}`);
  return res.data;
}

export async function listDownloads(): Promise<string[]> {
  const endpoint = "/downloads";
  const res = await axios.get(`https://${SERVER_URL}${endpoint}`);
  return res.data;
}

export async function deleteDownload(fileName: string) {
  const endpoint = `/downloads/${fileName}/delete`;
  await axios.get(`https://${SERVER_URL}${endpoint}`);
}
