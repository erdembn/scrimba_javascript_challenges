import podcasts from "./data.js";



function sortByDuration(data, flightLength) {
    if (flightLength <= 60) {
        const fromShorttoLong = data.sort((a, b) => a.duration - b.duration)
        for (let podcast of fromShorttoLong) {
            console.log(`${fromShorttoLong.indexOf(podcast) + 1}. ${podcast.title}, ${podcast.duration}`)
        }

    }
    else {
        const fromLongToShort = data.sort((a, b) => b.duration - a.duration)
        for (let podcast of fromLongToShort) {
            console.log(`${fromLongToShort.indexOf(podcast) + 1}. ${podcast.title}, ${podcast.duration}`)
        }

    }
}




sortByDuration(podcasts, 60);
