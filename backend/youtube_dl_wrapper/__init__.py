from __future__ import unicode_literals
from typing import Any, Callable, Dict
from enum import Enum
import youtube_dl
from threading import Thread

class Logger(object):
    def debug(self, msg):
        pass

    def warning(self, msg):
        pass

    def error(self, msg):
        print(msg)

class Status(Enum):
    DOWNLOADING = 'downloading'
    FINISHED = 'finished'
    ERROR = 'error'

def download(url: str, on_progress: Callable[[Dict[str, str]],None], on_error: Callable) -> None:
    ydl_opts = {
        'format': 'bestaudio/best',
        'postprocessors': [{
            'key': 'FFmpegExtractAudio',
            'preferredcodec': 'mp3',
            'preferredquality': '192',
        }],
        'logger': Logger(),
        'progress_hooks': [on_progress],
    }

    try:
        with youtube_dl.YoutubeDL(ydl_opts) as ydl:
            ydl.download([url])
    except Exception as e:
        on_error(e)


class Downloader:
    def __init__(self, url: str) -> None:
        self.url = url
        self.status = None

    def start(self) -> None:
        self.thread = Thread(target=download, args=(self.url, self.on_progress, self.on_error))
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
            'eta': self.eta,
            'percent_progress': self.percent_progress,
        }

    def on_progress(self, progress: Dict[str,str]) -> None:
        print(progress)
        self.status = progress.get('status')
        self.eta = progress.get('_eta_str')
        self.percent_progress = progress.get( '_percent_str' )
        if progress['status'] == Status.FINISHED.value:
            print('****** FINISHED *******')
            self.filename = progress['filename']
    def __repr__(self) -> str:
        return str(self.__dict__)
