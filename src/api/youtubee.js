import axios from "axios";

export default function Youtubee() {
  const base = axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: { key: process.env.REACT_APP_YOUTUBE_API_KEY },
  });

  async function search(keyword) {
    return keyword ? searchByKeyword(keyword) : mostPopular();
  }

  async function searchByKeyword(keyword) {
    return base
      .get("search", {
        params: {
          part: "snippet",
          maxResults: 25,
          type: "video",
          q: keyword,
        },
      })
      .then((res) => res.data.items)
      .then((items) => items.map((item) => ({ ...item, id: item.id.videoId })));
  }

  async function mostPopular() {
    return base
      .get("videos", {
        params: {
          part: "snippet",
          maxResults: 25,
          chart: "mostPopular",
        },
      })
      .then((res) => res.data.items);
  }
}
