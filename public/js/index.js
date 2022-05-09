var btnSub = document.querySelector("#submit");
const url = "https://kitsu.io/api/edge/anime";
// const url = "https://kitsu.io/api/edge/anime/1555/genres"

// const url = `https://kitsu.io/api/edge/anime/${id}/genres`

btnSub.addEventListener("click", function () {
  fetch(url).then(function (response) {
    if (response.ok) {
      response
        .json()

        .then(function (act) {
          console.log(act);
        });
    }
  });
});