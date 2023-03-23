import podcasts from "./data.js";


function getFreePodcasts(data) {
    // filtering all the free podcasts
    const freePod = data.filter(pod => pod.paid === false)
    const freePodArray = []
    // pushing the free podcasts into an array with the required properties
    freePod.map(pod => {
        freePodArray.push({
            title: pod.title,
            rating: pod.rating,
            paid: pod.paid
        })
    })
    return freePodArray
}

console.log(getFreePodcasts(podcasts))
