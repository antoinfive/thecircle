import GiphyApiAdapter from '../adapter/giphyApiAdapter'

export function newMessageGiphySuccess(payload){ 
  return { type: 'NEW_MESSAGE', payload } 
}


export function newMessageWithGiphy(data){ 
  let adapter = new GiphyApiAdapter  
   
  return dispatch => { 
    return adapter.fetchRandomByMood(data.mood)
      .then((response) =>{ 
        let giphyUrl = response.data.data[0].images.fixed_height.url
        let payload = { user: data.user, message: data.message, imageSrc: giphyUrl} 
        dispatch(newMessageGiphySuccess(payload))
      }) 
  } 
} 
