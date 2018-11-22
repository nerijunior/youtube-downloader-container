const ProgressBar = require("progress");
const YoutubeMp3Downloader = require("youtube-mp3-downloader");

const progressBar = new ProgressBar('Downloading :bar :percent :etas', {
    incomplete: ' ',
    total: 100
});

// Configure YoutubeMp3Downloader with your settings
const YD = new YoutubeMp3Downloader({
    "ffmpegPath": "/usr/bin/ffmpeg",        // Where is the FFmpeg binary located?
    "outputPath": "/app/output",    // Where should the downloaded and encoded files be stored?
    "youtubeVideoQuality": "highest",       // What video quality should be used?
    "queueParallelism": 2,                  // How many parallel downloads/encodes should be started?
    "progressTimeout": 2000                 // How long should be the interval of the progress reports
});

//Download video and save as MP3 file
YD.download(process.env.YOUTUBE_VIDEO_ID);

YD.on("finished", function(err, data) {
    console.log(JSON.stringify(data, null, 2));
});

YD.on("error", function(error) {
    console.error(error);
});

YD.on("progress", function(progress) {
    const length = progress.progress.percentage - progressBar.curr
    progressBar.tick(length)
    // console.log(JSON.stringify(progress));
});