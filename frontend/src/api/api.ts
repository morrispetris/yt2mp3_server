import axios from "axios";

const SERVER_PORT = 80;
const SERVER_URL = `${window.location.protocol}//${window.location.hostname}`;
export enum Format {
  mp3 = "mp3",
  mp4 = "mp4",
}

export type DownloadStatus = {
  status: string;
  info: string;
  is_playlist: boolean;
  playlist_index: number;
  playlist_count: number;
};

export function getDownloadUrl(fileName: string) {
  return `${SERVER_URL}/downloads/${fileName}`;
}

export async function requestDownload(
  url: string,
  format: Format
): Promise<string> {
  const endpoint = "/download/request";
  const res = await axios.post(`${SERVER_URL}${endpoint}`, { url, format });
  return res.data.id;
}

export async function getDownloadStatus(
  identifier: string
): Promise<DownloadStatus> {
  const endpoint = `/downloads/${identifier}/status`;
  const res = await axios.get(`${SERVER_URL}${endpoint}`);
  return res.data;
}

export async function listDownloads(): Promise<string[]> {
  const endpoint = "/downloads";
  const res = await axios.get(`${SERVER_URL}${endpoint}`);
  return res.data;
}

export async function deleteDownload(fileName: string) {
  const endpoint = `/downloads/${fileName}/delete`;
  await axios.get(`${SERVER_URL}${endpoint}`);
}
