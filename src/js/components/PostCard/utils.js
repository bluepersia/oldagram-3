/* PURE */

function toggleLike(state) {
  return {
    ...state,
    isLiked: !state.isLiked,
    likes: state.isLiked ? state.likes - 1 : state.likes + 1,
  };
}

function generateHTML(data) {
  return `
    <article class="post-card">
            <header class="post-card__header">
              <div class="container post-card__header-inner">
                <img
                  src="${data.avatar}"
                  alt=""
                  class="post-card__avatar"
                />
                <div class="post-card__user-info">
                  <h3 class="post-card__user-name">${data.name}</h3>
                  <p class="post-card__user-location">${data.location}</p>
                </div>
              </div>
            </header>
            <img
              src="${data.post}"
              alt=""
              class="post-card__image"
              data-post-img
            />
            <div class="container post-card__content">
              <div class="post-card__actions">
                <button class="post-card__action" aria-label="Like this post" 
                    data-like-btn>
                  <img
                    src="images/icon-heart.png"
                    alt=""
                    class="post-card__action-icon"
                  />
                </button>
                <button
                  class="post-card__action"
                  aria-label="Comment on this post"
                >
                  <img
                    src="images/icon-comment.png"
                    alt=""
                    class="post-card__action-icon"
                  />
                </button>
                <button class="post-card__action" aria-label="Share this post">
                  <img
                    src="images/icon-dm.png"
                    alt=""
                    class="post-card__action-icon"
                  />
                </button>
              </div>
              <p class="post-card__likes" aria-live="polite" data-like-counter>${data.likes} likes</p>
              <p class="post-card__comment">
                <span class="post-card__comment-author">${data.username}</span>
                <span class="post-card__comment-text"
                  >${data.comment}</span
                >
              </p>
            </div>
          </article>
          `;
}

/* SIDE EFFECTS */

function renderLikes(dom, state) {
  dom.counter.textContent = `${state.likes} likes`;
  dom.btn.setAttribute("aria-pressed", String(state.isLiked));
}

export { toggleLike, generateHTML, renderLikes };
