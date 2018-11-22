# MP3 Youtube Downloader

Node.Js + Alpine docker + [ytb2mp3/youtube-mp3-downloader lib](https://github.com/ytb2mp3/youtube-mp3-downloader)

## Running

```
docker build . --tag youtube-downloader
docker run --rm \
    -v ~/Desktop/youtube-downloader/output:/app/output \
    -e YOUTUBE_VIDEO_ID={ Put the youtube video id here } \
    youtube-downloader
```

### Example

Youtube video url [https://www.youtube.com/watch?v=60llTxTVIQw](https://www.youtube.com/watch?v=60llTxTVIQw) extract the video id `60llTxTVIQw` and insert in run script like:

```
docker run --rm \
    -v ~/Desktop/youtube-downloader/output:/app/output \
    -e YOUTUBE_VIDEO_ID=60llTxTVIQw \
    youtube-downloader
```