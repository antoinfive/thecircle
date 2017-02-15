import GiphyApiAdapter from '../adapter/giphyApiAdapter'
import randomInteger from '../services/randomInteger'

export function newMessageGiphySuccess(payload){ 
  debugger
  return { type: 'NEW_MESSAGE', payload } 
}

export function updateMessage(id){
  return { type: 'UPDATE_MESSAGE', id } 
}

export function newMessageWithGiphy(data){ 
  let adapter = new GiphyApiAdapter  
  let index = randomInteger(0, 24) 
  return dispatch => { 
    return adapter.fetchRandomByMood(data.mood)
      .then((response) => { 
        let giphyUrl = response.data.data[index].images.fixed_height.url
        let payload = {id: data.id, user: data.user, message: data.message, imageSrc: giphyUrl, likes: data.likes} 
        dispatch(newMessageGiphySuccess(payload))
      }) 
  } 
}

