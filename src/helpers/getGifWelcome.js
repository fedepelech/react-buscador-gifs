export const getGifWelcome = async () => {
    const offset = Math.floor(Math.random() * 500) + 1;
    const url = `https://api.giphy.com/v1/gifs/random?tag=happy&offset=${offset}&limit=1&api_key=DFQK26LJ21H2swDjMUhyzCtufUtJskLs`;
    const resp = await fetch(url);
    const {data} = await resp.json();
    console.log(data);
    const gif = {
      id: data.id,
      title: data.title,
      url: data.images.fixed_height.url,
    };

    return gif;
}