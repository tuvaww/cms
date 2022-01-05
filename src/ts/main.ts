import { Blog } from "./models/Blog";
import { Posts } from "./models/Posts";
import { UserPost } from "./models/UserPost";

window.onload = function () {
  showForm();
  hideForms();
  createNewAuthor();
  addAuthour();
  addPost();
  // checkAuthour();
  //createNewPost();
  //createPost();
};

function hideForms() {
  hideNewForm();

  hideOldForm();
}

function hideNewForm() {
  let newForm: HTMLFormElement = document.getElementsByClassName(
    "newB"
  )[0] as HTMLFormElement;
  newForm.style.display = "none";
}

function showNewForm() {
  let newForm: HTMLFormElement = document.getElementsByClassName(
    "newB"
  )[0] as HTMLFormElement;
  newForm.style.display = "";
}

function hideOldForm() {
  let oldForm: HTMLFormElement = document.getElementsByClassName(
    "oldB"
  )[0] as HTMLFormElement;
  oldForm.style.display = "none";
}

function showOldForm() {
  let oldForm: HTMLFormElement = document.getElementsByClassName(
    "oldB"
  )[0] as HTMLFormElement;
  oldForm.style.display = "";
}

function showForm() {
  let newRadio: HTMLInputElement = document.getElementById(
    "newBlog"
  ) as HTMLInputElement;
  let oldRadio: HTMLInputElement = document.getElementById(
    "oldBlog"
  ) as HTMLInputElement;

  newRadio.addEventListener("click", () => {
    hideOldForm();
    showNewForm();
  });

  oldRadio.addEventListener("click", () => {
    hideNewForm();
    showOldForm();
  });
}

let listOfBlogs: Blog[] =
  JSON.parse(localStorage.getItem("savedAuthours")) || [];

function createNewAuthor() {
  let createNewBlogButton: HTMLInputElement = document.getElementById(
    "createNewBlog"
  ) as HTMLInputElement;
  createNewBlogButton.addEventListener("click", () => {
    let newID: number[] = [];

    for (let i = 0; i < 10; i++) {
      let randomID = Math.floor(Math.random() * 10);
      newID.push(randomID);
    }
    let newestId = parseInt(newID.join(""));

    let newName: HTMLInputElement = document.getElementById(
      "name"
    ) as HTMLInputElement;
    let newNameValue = newName.value;

    let newAuthour: HTMLInputElement = document.getElementById(
      "authour"
    ) as HTMLInputElement;
    let newAuthourValue = newAuthour.value;

    let p = new Blog(newestId, newNameValue, newAuthourValue);
    listOfBlogs.push(p);
    console.log("lista med objekt", listOfBlogs);

    newName.value = "";
    newAuthour.value = "";
    updateStorage();
    addAuthour();
    hideNewForm();
    showOldForm();
  });
}

function addAuthour() {
  for (let i = 0; i < listOfBlogs.length; i++) {
    // listOfBlogs[i].author
    let optionsElement: HTMLOptionElement = document.createElement("option");
    optionsElement.classList.add("options");
    optionsElement.value = listOfBlogs[i].author;
    let dropDown: HTMLSelectElement = document.getElementById(
      "wichAuthor"
    ) as HTMLSelectElement;
    optionsElement.innerText = listOfBlogs[i].author;

    dropDown.appendChild(optionsElement);
  }
}

export let listOfUserPosts: UserPost[] =
  JSON.parse(localStorage.getItem("savedUserPosts")) || [];

function createNewPost() {
  let chooseA: HTMLSelectElement = document.getElementById(
    "wichAuthor"
  ) as HTMLSelectElement;
  let chooseAValue = chooseA.value;

  let titelNewPost: HTMLInputElement = document.getElementById(
    "titel"
  ) as HTMLInputElement;
  let titelNewvalue = titelNewPost.value;

  for (let i = 0; i < listOfBlogs.length; i++) {
    if (chooseAValue === listOfBlogs[i].author) {
      // for (let j = 0; j < listOfPost.length; j++) {
      let test = listOfBlogs[i];
      let test2 = listOfPost[i];
      let newUserPost = new UserPost(test, test2);

      listOfUserPosts.push(newUserPost);
      console.log("user posts objekt", listOfUserPosts);
      console.log("objekt som är valt", listOfBlogs[i]);
      updateStorageUser();
    }
    //console.log("lista med ")

    //listOfUserPosts.push(listOfBlogs[i]);
    //}
  }
}

let listOfPost: Posts[] = JSON.parse(localStorage.getItem("savedPosts")) || [];

function addPost() {
  let cratePostButton: HTMLInputElement = document.getElementById(
    "createPost"
  ) as HTMLInputElement;
  cratePostButton.addEventListener("click", () => {
    let titel: HTMLInputElement = document.getElementById(
      "titel"
    ) as HTMLInputElement;
    let titelValue = titel.value;

    let post: HTMLTextAreaElement = document.getElementById(
      "post"
    ) as HTMLTextAreaElement;
    let postValue = post.value;

    let aID = JSON.parse(localStorage.getItem("savedAuthours")).id;

    let savedPost = new Posts(postValue, titelValue);

    listOfPost.push(savedPost);

    console.log("lista med posts", listOfPost);
    updateStoragePosts();
    createNewPost();
  });
}

function updateStoragePosts() {
  let lista = JSON.stringify(listOfPost);
  localStorage.setItem("savedPosts", lista);
}

function updateStorage() {
  let listaAsText = JSON.stringify(listOfBlogs);
  localStorage.setItem("savedAuthours", listaAsText);
}

function updateStorageUser() {
  let listUser = JSON.stringify(listOfUserPosts);
  localStorage.setItem("savedUserPosts", listUser);
}
