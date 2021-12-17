export const getGif = async(category)=> {
    let baseUrl = `https://api.giphy.com/v1/gifs/search?api_key=ktkUOIC31BfR1Ecdene72D1wHDcG85NB&limit=10&q=${ encodeURI(category) }`;
    const resp = await fetch(baseUrl);
    const {data} = await resp.json();
    
    const gifs = data.map( img =>{
        return {
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        };
    });
    return gifs;
};