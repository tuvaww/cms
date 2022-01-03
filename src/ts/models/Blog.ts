export class Blog {
  id: number;
  name: string;
  author: string;

  constructor(id: number, name: string, authour: string) {
    this.id = id;
    this.name = name;
    this.author = authour;
  }
}
