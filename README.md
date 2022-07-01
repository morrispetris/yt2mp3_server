
# Goal

Don't you love having to use <INSERT ONLINE VIDEOS PLATFORM>TO_MP3 hpublic websites riddled with pop ups, crappy ads, fake downloads links and whatnot?

If so here's the solution: get your very own youtube_to_mp3 website!

Create a yt2mp3 converter self hostable website.
Backend relying on [youtube-dl](https://github.com/ytdl-org/youtube-dl), this is essentially a frontend for this tool.

# Requirements
- [`docker`](https://docs.docker.com/get-docker/)

# Instructions
TBD

# NTH

# Legal requirements ⚠️
Restricted to fair use. Always respect terms and conditions of video platforms. Dont break the law.
Be nice with each other. Etc..

# NTH/ROADMAP
- [] Download playlist:
- [] playlist progress
- [] show progress

# API

## POST `/download`
```
url: URL of the video to download.
---
status: "ACCEPTED" | "DENIED" whether request and download has started.
request_id: ID of request (used for polling status).
```

## GET `/downloads/<id>/status`
```
request_id: ID of request.
---
status: "DOWNLOADING" | "FINISHED" | "ERROR"
eta?: string time estimate (e.g. "02:22"). Only for DOWNLOADING status
percent_progress?: string progress in percent (e.g. "86.3%"). Only for DOWNLOADING status
```

## GET `/downloads/<id>/download`

URL to download the file.


