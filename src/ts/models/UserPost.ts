import { Blog } from "../models/Blog";
import { Posts } from "../models/Posts";

export class UserPost {
  user: Blog;
  post: Posts;

  constructor(user: Blog, post: Posts) {
    this.user = user;
    this.post = post;
    //this.user = JSON.parse(localStorage.getItem("savedAuthours")) || [];
    // this.post = JSON.parse(localStorage.getItem("savedPosts")) || [];
  }
}
