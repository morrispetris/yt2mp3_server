from __future__ import unicode_literals
from typing import Any, Callable, Dict
from enum import Enum
import yt_dlp
from threading import Thread
import pathlib
import os
import json
import subprocess
import time

class Logger(object):
    def info(self, msg):
        print(msg)
        
    def debug(self, msg):
        print(msg)

    def warning(self, msg):
        print(msg)

    def error(self, msg):
        print(msg)

class Status(Enum):
    DOWNLOADING = 'downloading'
    FINISHED = 'finished'
    ERROR = 'error'

class Format(Enum):
    MP3 = 'mp3'
    #MP4 = 'mp4'

def download(url: str, format: str, on_progress: Callable[[Dict[str, str]],None], on_error: Callable) -> None:
    d = os.getcwd()
    ydl_opts = {
        'outtmpl': d + '/uploads/%(title)s.%(ext)s',
        #'outtmpl': d + '/uploads/%(title)s.mp3',
        'logger': Logger(),
        'progress_hooks': [on_progress],
    }

    if format == Format.MP3.value:
        ydl_opts['postprocessors'] = [{
                'key': 'FFmpegExtractAudio',
                'preferredcodec': 'mp3',
                'preferredquality': '192',
        }]
        #ydl_opts['format'] = 'bestaudio/best'
        ydl_opts['format'] = 'mp3/bestaudio/best'
        #ydl_opts['format'] = 'mp3/best'
        #ydl_opts['format'] = 'worstaudio'
        ydl_opts['audioformat'] = 'mp3'
        ydl_opts['extractaudio'] = True
        ydl_opts['keepvideo'] = False
        ydl_opts['quiet'] = False
        ydl_opts['prefer_ffmpeg'] = True
        ydl_opts['verbose'] = True
        
               
    try:
        with yt_dlp.YoutubeDL(ydl_opts) as ydl:
            ydl.download([url])
    except Exception as e:
        on_error(e)


class Downloader:
    def __init__(self, url: str, format: str) -> None:
        self.url = url
        self.format = format
        self.status = None
        self.info = ''
        self.is_playlist = False
        self.playlist_count = 0
        self.playlist_index = 0

    def start(self) -> None:

        self.thread = Thread(target=download, args=(self.url, self.format, self.on_progress, self.on_error))
        self.thread.start()

    def on_error(self, error):
        print('')
        print('------------ ERRRRORORROROROROOROR------')
        print(error)
        print('')
        self.status = Status.ERROR.value

    def get_status(self) -> Dict[str,str]:
        if self.status is None:
            return {'status': 'downloading'}
        if self.status == Status.ERROR.value:
            return {'status': self.status}
        return {
            'status': self.status,
            'info': self.info,
            'playlist_index': self.playlist_index,
            'playlist_count': self.playlist_count,
            'is_playlist': self.is_playlist,
        }

    def on_progress(self, progress: Dict[str,str]) -> None:
        print('###################')
        # self.eta = progress.get('_eta_str')
        # self.percent_progress = progress.get( '_percent_str' )
        self.info = progress.get('_default_template')
        # with open('test.json', 'w') as fp:
        #     json.dump(progress, fp)
        #     raise RuntimeError('boooom')

        info_dict: Dict[str,str] = progress.get('info_dict')
        #print(progress.get('info_dict'))

        self.is_playlist = info_dict.get('playlist') is not None
        if self.is_playlist:
            print('its a playlist')
            self.playlist_count = info_dict.get('playlist_count')
            self.playlist_index = info_dict.get('playlist_index')
            finished =  progress.get('status') == Status.FINISHED.value
            is_last = self.playlist_index == self.playlist_index
            if finished and is_last:
                print('****** FINISHED *******')
                self.status = Status.FINISHED.value
            elif not finished:
                self.status = progress.get('status')
            return
        # Single files
        print('its not a playlist')
        time.sleep(100/1000)
        self.status = progress.get('status')
        if progress['status'] == Status.FINISHED.value:
            print('****** FINISHED *******')
            self.filename = progress['filename']
            
                        
    def __repr__(self) -> str:
        return str(self.__dict__)
