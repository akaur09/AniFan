const searchBtn = document.querySelector("#searchBtn");
const animeHomeTitleEl = document.querySelector("#animeHomeTitle");
const animeHomePosterImageEl = document.querySelector("#animeHomePosterImage");


const url1 = "https://kitsu.io/api/edge/trending/anime";
// const url2 = "https://kitsu.io/api/edge/anime?filter[season]=winter"

const narutoShippuden = "naruto-shippuden";

const url3 = `https://kitsu.io/api/edge/anime?filter[text]=${narutoShippuden}`
// const url4 = `https://kitsu.io/api/edge/anime?filter[text]=${}`

// const url5 = `https://kitsu.io/api/edge/anime?filter[text]=${____%20_____}`

// const url6 = `https://kitsu.io/api/edge/anime/${id}/genres`

const url7 = "https://kitsu.io/api/edge/anime/1555/relationships/genres"

// btnSub.addEventListener("click", function () {
//   fetch(url3).then(function (response) {
//     if (response.ok) {
//       response
//         .json()

//         .then(function (act) {
//           console.log(act);
//         });
// }

searchBtn.addEventListener("click", function () {
    // let animeName = document.querySelector("#searchInput").value;
    // animeName.trim();

    // console.log(animeName);

    // firstApiCall(animeName);

    trendingAnime();
});

function firstApiCall(animeName) {
    const animeNameApi = `https://kitsu.io/api/edge/anime?filter[text]=${animeName}`
    
    fetch(animeNameApi).then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data);

        const animePosterImage = data.data[0].attributes.posterImage.tiny;
        const animeTitle = data.data[0].attributes.titles.en;

        // let animeGenres = data[0].relationships.genres.links.related;

        animeHomeTitleEl.textContent = animeTitle;
        animeHomePosterImageEl.setAttribute("src", animePosterImage);
    })
};

async function trendingAnime() {
    const response = await fetch('https://kitsu.io/api/edge/anime/44081/relationships/genres');

    const trendingAnime = await response.json();

    // console.log(trendingAnime.data[0].relationships.genres.links.related);
    console.log(trendingAnime.data[0]);

    // let animes = animeData.data.data;

    // const titleTestArr = [];
    // const imageTestArr = [];
    // for (let i = 0; i < animes.length; i++) {
    //     titleTestArr.push(animes[i].titles.en);
    //     imageTestArr.push(animes[i].posterImage.tiny);
    // };
    // console.log(titleTestArr);
    // console.log(imageTestArr);
};