import axios from "axios";

const instance = axios.create({
  baseURL: "https://pixabay.com/api",
  params: {
    key: "20944860-c17ba5e7d5700a2a7880c4ee2",
    image_type: "photo",
    orientation:"horizontal"
  }
});

export const getPagePictures = ({ query = "", page, limit }) => {

  return instance.get("/", {
    params: {
      q:query,
      page,
      limit
}})
}


