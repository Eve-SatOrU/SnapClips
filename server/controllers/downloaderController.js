const path = require('path');
const puppeteer = require('puppeteer');
// const fetch = require('node-fetch'); // Import 'node-fetch' library

const getIdVideo = (url) => {
  const matching = url.includes("/video/");
  if (!matching) process.exit();
  const idVideo = url.substring(url.indexOf("/video/") + 7, url.length);
  return (idVideo.length > 19) ? idVideo.substring(0, idVideo.indexOf("?")) : idVideo;
}

const getVideoWM = async (url) => {
  const idVideo = await getIdVideo(url);
  const API_URL = `https://api16-normal-c-useast1a.tiktokv.com/aweme/v1/feed/?aweme_id=${idVideo}`;
  const request = await fetch(API_URL, { // Use 'fetch' to make the API request
    method: "GET",
    headers: { 'Content-Type': 'application/json' }
  });
  const body = await request.text();
  try {
    var res = JSON.parse(body);
  } catch (err) {
    console.error("Error:", err);
    console.error("Response body:", body);
  }
  const urlMedia = res.aweme_list[0].video.download_addr.url_list[0];
  const data = {
    url: urlMedia,
    id: idVideo
  };
  return data;
}

const getVideoNoWM = async (url) => {
  const idVideo = await getIdVideo(url);
  const API_URL = `https://api16-normal-c-useast1a.tiktokv.com/aweme/v1/feed/?aweme_id=${idVideo}`;
  const request = await fetch(API_URL, {
    method: "GET",
    headers: { 'Content-Type': 'application/json' } // Use 'fetch' with 'headers'
  });
  const body = await request.text();
  try {
    var res = JSON.parse(body);
  } catch (err) {
    console.error("Error:", err);
    console.error("Response body:", body);
  }
  const urlMedia = res.aweme_list[0].video.play_addr.url_list[0];
  const data = {
    url: urlMedia,
    id: idVideo
  };
  return data;
}

exports.getVedios = (req, res, next) => {
  res.render('tiktok-download-form', { videoData: null });
};

exports.postVideos = async (req, res, next) => {
  const url = req.body.url;
  if (url) {
    const videoWithWM = await getVideoWM(url);
    const videoWithoutWM = await getVideoNoWM(url); // Add logic to get the video without watermark
    res.render('tiktok-download-form', { videoData: { withWM: videoWithWM, withoutWM: videoWithoutWM } });
  } else {
    res.render('tiktok-download-form', { videoData: null });
  }
};
