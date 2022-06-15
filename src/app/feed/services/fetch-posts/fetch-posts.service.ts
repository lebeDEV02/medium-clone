import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FetchPostsService {


  fetchUserPosts(){
    return this.httpClient.get('http://localhost:3000/posts?author=Vova')
  }

  fetchAllPosts(){
    return this.httpClient.get('http://localhost:3000/posts')
  }

  constructor(private readonly httpClient: HttpClient) { }
}
