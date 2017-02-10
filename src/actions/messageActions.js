import GiphyApiAdapter from '../adapter/giphyApiAdapter'

export function newMessageGiphySuccess(payload){ 
  return { type: 'NEW_MESSAGE', payload } 
}


export function newMessageWithGiphy(data){ 
  let adapter = new GiphyApiAdapter  
  let index = randomInt(0, 24) 
  return dispatch => { 
    return adapter.fetchRandomByMood(data.mood)
      .then((response) =>{ 
        let giphyUrl = response.data.data[index].images.fixed_height.url
        let payload = { user: data.user, message: data.message, imageSrc: giphyUrl} 
        dispatch(newMessageGiphySuccess(payload))
      }) 
  } 
}

function randomInt(min, max){
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min)) + min;

}
