import PostCard from "../PostCard/PostCard.js";
import { getFeedData } from "./api.js";

export default async function MainFeed(el) {
  el.innerHTML = "";

  const feedData = await getFeedData();

  for (let i = 0; i < feedData.length; i++) {
    const li = document.createElement("li");
    PostCard(li, feedData[i]);
    el.append(li);
  }
}
