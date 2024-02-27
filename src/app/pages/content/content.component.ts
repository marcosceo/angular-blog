import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {dataFake} from '../../data/dataFake'
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {
  
  private id:string |  null = "0"

  constructor(private route: ActivatedRoute, private service: PostService) {

  }

  post:any

  ngOnInit(): void {
    this.route.paramMap.subscribe( value => this.id = value.get("id")
    )

    this.service.getPost(this.id)
    .subscribe((response:any) => {
      this.post = response.data
    })
  }


}
