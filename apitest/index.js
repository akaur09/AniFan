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

    // trendingAnime();

    years();
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

const getyearFormHandler = async (event) => {
    event.preventDefault();

    const checkbox1 = document.querySelector('#checkbox1').checked;
    const checkbox2 = document.querySelector('#checkbox2').checked;
    const checkbox3 = document.querySelector('#checkbox3').checked;

    const actionGenre = document.querySelector('#checkbox3').checked;
    

    if (checkbox1) {
        console.log("checkbox1");

        // let counter1 = 1929;
        // let years1 = []
    
        // for (let i = 0; i < 10; i++) {
        //     counter1++;
        //     let year1 = counter1.toString();
        //     years1.push(year1);
        // };
    
        // console.log(years1);
        // const randomElement1 = years1[Math.floor(Math.random() * years1.length)];
        // console.log(randomElement1);
        // JSON.stringify(randomElement1);

        // const category = "action"

        // const response1 = await fetch(`https://kitsu.io/api/edge/anime?filter[seasonYear]=${randomElement1}&filter[categories]=${category}`);
        // const response1 = await fetch(`https://kitsu.io/api/edge/anime?include=%5Bcategories%5D`);
        const response1 = await fetch(`https://kitsu.io/api/edge/anime?filter[seasonYear]=2015&filter[categories]=action`);
        const data1 = await response1.json();
        console.log(data1);
        
    } else if(checkbox2) {
        console.log("checkbox2");

        let counter2 = 1939;
        let years2 = []
    
        for (let i = 0; i < 40; i++) {
            counter2++;
            let year2 = counter2.toString();
            years2.push(year2);
        }
    
        console.log(years2);
        const randomElement2 = years2[Math.floor(Math.random() * years2.length)];
        console.log(randomElement2);
        JSON.stringify(randomElement2);

        const response2 = await fetch(`https://kitsu.io/api/edge/anime?filter[seasonYear]=${randomElement2}&page[limit]=1&page[offset]=0`);
        const data2 = await response2.json();
        console.log(data2);

    } else if (checkbox3) {
        console.log("checkbox3");

        let counter3 = 1979;
        let years3 = []
    
        for (let i = 0; i < 43; i++) {
            counter3++;
            let year3 = counter3.toString();
            years3.push(year3);
        }
    
        console.log(years3);
        const randomElement3 = years3[Math.floor(Math.random() * years3.length)];
        console.log(randomElement3);
        JSON.stringify(randomElement3);

        const response3 = await fetch(`https://kitsu.io/api/edge/anime?filter[seasonYear]=${randomElement3}&page[limit]=1&page[offset]=0`);
        const data3 = await response3.json();
        console.log(data3);

    }
};



// const actionBtn = document.querySelector("#actionBtn").checked;
// const comedyBtn = document.querySelector("#comedyBtn").checked;
// const fantasyBtn = document.querySelector("#fantasyBtn").checked;
// const romanceBtn = document.querySelector("#romanceBtn").checked;
// const sciFiBtn = document.querySelector("#sciFiBtn").checked;
// const sliceOfLifeBtn = document.querySelector("#sliceOfLifeBtn").checked;
// const horrorBtn = document.querySelector("#horrorBtn").checked;
// const mysteryBtn = document.querySelector("#mysteryBtn").checked;
// const sportsBtn = document.querySelector("#sportsBtn").checked;
// const adventureBtn = document.querySelector("#adventureBtn").checked;
// const dramaBtn = document.querySelector("#dramaBtn").checked;
// const genreAllBtn = document.querySelector("#genreAllBtn").checked;

// const ratingPGBtn = document.querySelector("#ratingPG").checked;
// const ratingGBtn = document.querySelector("#ratingG").checked;
// const ratingRBtn = document.querySelector("#ratingR").checked;
// const ageRatingAllBtn = document.querySelector("#ageRatingAllBtn").checked;

// const springBtn = document.querySelector("#springBtn").checked;
// const summerBtn = document.querySelector("#summerBtn").checked;
// const fallBtn = document.querySelector("#fallBtn").checked;
// const winterBtn = document.querySelector("#winterBtn").checked;
// const seasonAllBtn = document.querySelector("#seasonAllBtn").checked;

// const earlyDateBtn = document.querySelector("#earlyDateBtn").checked;
// const midDateBtn = document.querySelector("#midDateBtn").checked;
// const newDateBtn = document.querySelector("#newDateBtn").checked;
// const dateAllBtn = document.querySelector("#dateAllBtn").checked;

const recommendMe = async (event) => {
    event.preventDefault();
    const ageRating = document.querySelector('input[name="ageRating"]:checked').value;
    const animeGenre = document.querySelector('input[name="animeGenre"]:checked').value;
    const animeSeason = document.querySelector('input[name="animeSeason"]:checked').value;
    const animeYears = document.querySelector('input[name="animeYears"]:checked').value;
    
    const fetchUrl = `https://kitsu.io/api/edge/anime?&filter[categories]=${animeGenre}&filter[ageRating]=${ageRating}&filter[season]=${animeSeason}&filter[seasonYear]=${animeYears}`

    console.log(fetchUrl);
    // if (ageRating !== )
    //     fetchUrl += '&filter[categories]=${*whatever they selected*}' 
    // if (ratingPGBtn || ratingGBtn || ratingRBtn)
    //     fetchUrl +=  '&filter[ageRating]=${*whatever they selected*}'
    // if (springBtn || summerBtn || fallBtn || winterBtn)
    //     fetchUrl +=  '&filter[season]=${*whatever they selected*}'
    // if (earlyDateBtn || midDateBtn || newDateBtn)
    //     fetchUrl +=  '&filter[seasonYear]=${*whatever they selected*}'

    const response = await fetch(fetchUrl);

    const recommendedAnime = await response.json();

    console.log(recommendedAnime);
};
    
document.querySelector('#recommenFormSubmitBtn').addEventListener('click', recommendMe);