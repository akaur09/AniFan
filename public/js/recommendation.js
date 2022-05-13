const recommendMe = async (event) => {
    event.preventDefault();
    const ageRating = document.querySelector('input[name="ageRating"]:checked').value;
    const animeGenre = document.querySelector('input[name="animeGenre"]:checked').value;
    const animeSeason = document.querySelector('input[name="animeSeason"]:checked').value;
    // const animeYears = document.querySelector('input[name="animeYears"]:checked').value;
    
    // const fetchUrl = `https://kitsu.io/api/edge/anime?&filter[categories]=${animeGenre}&filter[ageRating]=${ageRating}&filter[season]=${animeSeason}&filter[seasonYear]=${animeYears}`
    const fetchUrl = `https://kitsu.io/api/edge/anime?&filter[categories]=${animeGenre}&filter[ageRating]=${ageRating}&filter[season]=${animeSeason}`

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
    
document.querySelector('#recommenFormSubmitBtn').addEventListener('submit', recommendMe);