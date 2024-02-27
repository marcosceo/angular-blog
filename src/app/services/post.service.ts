import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})

export class PostService {

  private url = 'https://api.jikan.moe/v4/'

  constructor(private httpClient: HttpClient) { }

  getPosts() {
    return this.httpClient.get(this.url + 'manga?page=1&limit=4')
  }

  getPost(id:any){
    return this.httpClient.get(this.url + `manga/${id}/full`)
  }

  // https://api.jikan.moe/v4/manga/{id}/full
}
