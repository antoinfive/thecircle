import axios from 'axios' 

export default class GiphyApiAdapter {
  constructor(){
    this.token = 'dc6zaTOxFJmzC'
    this.rating = 'pg-13'
    this.baseUrl = 'https://api.giphy.com/v1/gifs'
  }

  fetchRandomByMood(mood){
    let url = `${this.baseUrl}/search?q=${mood}&api_key=${this.token}` 
    return axios.get(url)
  } 
   
} 


