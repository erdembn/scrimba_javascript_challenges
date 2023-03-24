import postData from "./data.js";



function calcAverageLikes(data) {
    const totalLikes = data.reduce((acc, { likes }) => acc + likes, 0)
    const totalPosts = data.length
    return (totalLikes / totalPosts).toFixed(2)
}


console.log(calcAverageLikes(postData))
