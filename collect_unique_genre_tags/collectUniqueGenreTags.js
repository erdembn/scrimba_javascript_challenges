import mediaData from "./data.js";


function getUniqueTags(data) {
    const showsArray = data.map(show => {
        return show.tags
    })
    const newArray = []
    for (let tags of showsArray) {
        for (let tag of tags) {
            newArray.push(tag)
        }
    }

    return [...new Set(newArray)]

}

// another way to do it

// function getUniqueTags(data) {
//     const showsArray = data.map(show => {
//         return show.tags
//     })
//     const newArray = showsArray.flat()


//     return [...new Set(newArray)]

// }





console.log(getUniqueTags(mediaData));

