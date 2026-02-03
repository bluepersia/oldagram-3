import { generateHTML, renderLikes, toggleLike } from "./utils.js";

export default function PostCard(el, data) {
  el.innerHTML = generateHTML(data);

  /* FIELDS */
  let state = {
    isLiked: false,
    likes: data.likes,
  };

  const imgEl = el.querySelector("[data-post-img]");
  const likeBtn = el.querySelector("[data-like-btn]");
  const likeCounter = el.querySelector("[data-like-counter]");

  /* CONSTRUCTION */

  imgEl.addEventListener("click", handleLikeClick);
  likeBtn.addEventListener("click", handleLikeClick);

  /* ORCHESTRATION */

  function handleLikeClick() {
    state = toggleLike(state);
    renderLikes(
      {
        counter: likeCounter,
        btn: likeBtn,
      },
      state
    );
  }
}
