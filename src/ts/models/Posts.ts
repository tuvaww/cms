import { Blog } from "./Blog";

export class Posts {
  titel: string;
  post: string;
  // theAuthour: Blog[];

  constructor(post: string, titel: string) {
    this.titel = titel;
    this.post = post;
    //this.theAuthour = JSON.parse(localStorage.getItem("savedAuthours")).id;
  }
}
