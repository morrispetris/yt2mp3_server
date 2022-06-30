FROM python:3.11.0b3-alpine3.16

# RUN apt update && apt install curl python3 -y
RUN apk add curl
# Install youtube-dl
RUN curl -L https://yt-dl.org/downloads/latest/youtube-dl -o /usr/local/bin/youtube-dl
RUN chmod a+rx /usr/local/bin/youtube-dl

ENTRYPOINT ["sh"]
