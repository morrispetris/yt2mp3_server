#!/usr/bin/python3
from typing import Dict, List

from flask import Flask, request, jsonify, send_file, after_this_request, send_from_directory
from flask_cors import CORS  # comment this on deployment
import os
import pathlib

import backend.youtube_dl_wrapper as youtube_dl
import uuid

app = Flask(__name__, static_url_path='/', static_folder='frontend/build')
CORS(app)  # comment this on deployment

downloads: Dict[str, youtube_dl.Downloader] = {}

@app.post('/download/request')
def download():
    print(request)
    content = request.json
    print(content)
    identifier = str(uuid.uuid4())
    downloader = youtube_dl.Downloader(content['url'])
    downloader.start()
    downloads[identifier] = downloader
    return jsonify({'id': identifier})

@app.get('/downloads/<id>/status')
def get_download_status(id: str):
    print('**********')
    print(id)
    print(downloads[id].get_status())
    print('**********')
    if id in downloads:
        return jsonify(downloads[id].get_status())


@app.get('/downloads')
def list_downloads():
    downloads = [f for f in os.listdir('uploads') if os.path.isfile(os.path.join('uploads', f))]
    return jsonify(downloads)

@app.route('/downloads/<filename>')
def download_from_uploads(filename: str):
    d = pathlib.Path.cwd()
    path = d / 'uploads' / filename
    file_handle = open(path, 'rb')
    return send_file(file_handle, as_attachment=True, download_name= filename)

@app.get('/downloads/<filename>/delete')
def remove_from_uploads(filename: str):
    d = pathlib.Path.cwd()
    path = d / 'uploads' / filename
    os.remove(path)
    return 'ok'


@app.route('/downloads/<id>/download')
def download_file(id: str) -> None:
    if id in downloads:
        filename = downloads[id].filename
        filename = os.path.basename(filename)
        filename, _ = os.path.splitext(filename)
        filename = f"{filename}.mp3"
        d = pathlib.Path.cwd()
        path = d / 'uploads' / filename
        file_handle = open(path, 'rb')
        # @after_this_request
        # def remove_file(response):
        #     try:
        #         os.remove(path)
        #         file_handle.close()
        #     except Exception as e:
        #         print()
        return send_file(file_handle, as_attachment=True, download_name= filename)

# serve frontend
@app.route("/", defaults={'path': ''})
def serve(path):
    return app.send_static_file('index.html')

app.run(debug=True)
