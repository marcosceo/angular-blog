import { Component, Input, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service: PostService) {}

  posts: any

  ngOnInit() {
     
    this.service.getPosts()
    .subscribe((response:any) => {
      this.posts = response.data

      console.log(this.posts[0].images.jpg.image_url)
    })
  }
}
