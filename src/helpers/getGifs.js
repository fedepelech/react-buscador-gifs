export const getGifs = async (category) => {
    const offset = Math.floor(Math.random() * 500) + 1;
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=9&offset=${offset}&api_key=DFQK26LJ21H2swDjMUhyzCtufUtJskLs`;
    const resp = await fetch(url);
    const {data} = await resp.json();

    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        }
    })

    console.log(gifs);
    return gifs;
}