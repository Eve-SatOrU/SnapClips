const path = require('path');
const puppeteer = require('puppeteer');
// const fetch = require('node-fetch'); // Import 'node-fetch' library
const dotenv = require('dotenv');
require('dotenv').config();


const getIdVideo = (url) => {
  const matching = url.includes("/video/");
  if (!matching) process.exit();
  const idVideo = url.substring(url.indexOf("/video/") + 7, url.length);
  return (idVideo.length > 19) ? idVideo.substring(0, idVideo.indexOf("?")) : idVideo;
}

const getVideoWM = async (url) => {
  const idVideo = await getIdVideo(url);
  const API_URL = process.env.API_URL;

  const response = await fetch(`${API_URL}?aweme_id=${idVideo}`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  });

  if (!response.ok) {
    console.error('Error:', response.statusText);
    return { error: response.statusText };
  }

  const body = await response.text();
  const parsedResponse = JSON.parse(body);
  const urlMedia = parsedResponse.aweme_list[0].video.download_addr.url_list[0];

  const data = {
    url: urlMedia,
    id: idVideo
  };

  return { withWM: data };
};

const getVideoNoWM = async (url) => {
  const idVideo = await getIdVideo(url);
  const API_URL = process.env.API_URL;

  const response = await fetch(`${API_URL}?aweme_id=${idVideo}`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  });

  if (!response.ok) {
    console.error('Error:', response.statusText);
    return { error: response.statusText };
  }

  const body = await response.text();
  const parsedResponse = JSON.parse(body);
  const urlMedia = parsedResponse.aweme_list[0].video.play_addr.url_list[0];

  const data = {
    url: urlMedia,
    id: idVideo
  };

  return { withoutWM: data };
};

exports.getVedios = (req, res, next) => {
  res.json({ videoData: null });
};

exports.postVideos = async (req, res, next) => {
  const url = req.body.url;
  if (url) {
    try {
      const videoWithWM = await getVideoWM(url);
      const videoWithoutWM = await getVideoNoWM(url);

      res.json({ videoData: { withWM: videoWithWM, withoutWM: videoWithoutWM } });
    } catch (error) {
      console.error("Error:", error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    res.json({ videoData: null });
  }
};


//API_URL=if u wanna the url contect me :")