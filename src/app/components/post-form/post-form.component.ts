import { Component, OnInit } from '@angular/core';
// import service
import { PostService } from '../../services/post.service';
// import model interface
import { Post } from '../../models/Post';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {

  constructor(private postService: PostService) { }

  ngOnInit() {
  }

  addPost(title, body) {
    console.log(title, body);

    // basic validation
    if (!title || !body) {
      alert('Please add post');
    } else {
      console.log('test passed');
      this.postService.savePost({title, body} as Post).subscribe(post => {
        console.log(post);
      });
    }

  }

}