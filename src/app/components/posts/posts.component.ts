import { Component, OnInit } from '@angular/core';
// import service
import { PostService } from '../../services/post.service';
// import model interface
import { Post } from '../../models/Post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  // invoke interface
  posts: Post[];
  currentPost: Post = {
    id: 0,
    title: '',
    body: ''
  }
  isEdit: boolean = false;

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.postService.getPosts().subscribe(posts => {
      console.log(posts);
      this.posts = posts;
    });
  }

  onNewPost(post: Post) {
    this.posts.unshift(post);
  }

  editPost(post: Post) {
    this.currentPost = post;
    this.isEdit = true;
  }

  onUpdatedPost(post: Post) {
    this.posts.forEach((cur, index) => {

      if(post.id === cur.id) {
        // take out the matched entity
        this.posts.splice(index, 1);
        // move the updated entity to top and pass in post
        this.posts.unshift(post);
        // remove edit mode
        this.isEdit = false;
        // reset form
        this.currentPost = {
          id: 0,
          title: '',
          body: ''
        }
      }

    });
  }

  removePost(post: Post) {
    if(confirm('Are You Sure')) {
      this.postService.removePost(post.id).subscribe(() => {

        this.posts.forEach((cur, index) => {
          if(post.id === cur.id) {
            // take out the matched entity
            this.posts.splice(index, 1);
          }
        });

      });
    }
  }

}
