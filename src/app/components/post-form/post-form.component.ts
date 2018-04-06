import { Component, OnInit, EventEmitter, Output } from '@angular/core';
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

  // Define Properties
  post: Post;
  @Output() newPost: EventEmitter<Post> = new EventEmitter();

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
      this.postService.savePost({title, body} as Post).subscribe
      (post => {
        console.log(post);
        // emit the event that includes the new post
        // a link also needs to be introduced on the desired selector (e.g. post.component.html > app-post-form)
        // the commanding method for the post.component.html must be writen in the relative .ts file
        this.newPost.emit(post);
      });
    }

  }

}
