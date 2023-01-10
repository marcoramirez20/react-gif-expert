export const getGifts = async(category) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${category}&limit=10&api_key=gxyUfvaTZ4UbWNY81WF3HDaQwLPp0hTJ`
    const resp = await fetch(url)
    const {data} = await resp.json()
    const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }))
    return gifs;
}