import { listOfUserPosts } from "./main";

window.onload = function () {
  //createPost();
  hideMenu();
  // showAuthours();
  clickMenu();
  //showMenu();
};

/* 
 <section class="postsContainer">
<article class="post">
<div class="postHeader">
  <span class="headerinfo" id="postAuthor"> Authour: Tuvis</span>
  <span class="headerinfo" id="postID"> PostID: 123456789</span>
  <span class="headerinfo" id="postName">Name: olof</span>
</div>

<div class="postContent">
  <span class="postText"
    >Lorem ipsum används ofta som exempeltext inom
    trycksaksframställning och grafisk design för att visa hur till
    exempel ett dokument kommer att se ut när väl den riktiga texten är
    på plats</span
  >
</div>
</article> */

/* function createPost() {
  for (let i = 0; i < listOfUserPosts.length; i++) {
    let containerPosts: HTMLElement = document.getElementsByClassName(
      "postsContainer"
    )[0] as HTMLElement;
    let post: HTMLElement = document.createElement("article");
    post.classList.add("post");

    let postHeader: HTMLDivElement = document.createElement("div");
    postHeader.classList.add("postHeader");

    let headerInfoA: HTMLSpanElement = document.createElement("span");
    headerInfoA.classList.add("headerinfo");
    headerInfoA.id = "postAuthor";
    headerInfoA.innerHTML = "Authour: " + listOfUserPosts[i].user.author;

    let headerInfoN: HTMLSpanElement = document.createElement("span");
    headerInfoN.classList.add("headerinfo");
    headerInfoN.id = "postID";
    headerInfoN.innerHTML = "ID: " + listOfUserPosts[i].user.id;

    let headerInfoI: HTMLSpanElement = document.createElement("span");
    headerInfoI.classList.add("headerinfo");
    headerInfoI.id = "postName";
    headerInfoI.innerHTML = "Name: " + listOfUserPosts[i].user.name;

    let postContent: HTMLDivElement = document.createElement("div");
    postContent.classList.add("postContent");

    let postText: HTMLSpanElement = document.createElement("span");
    headerInfoN.classList.add("postText");
    postText.innerHTML = listOfUserPosts[i].post.post;

    postHeader.appendChild(headerInfoA);
    postHeader.appendChild(headerInfoN);
    postHeader.appendChild(headerInfoI);

    post.appendChild(postHeader);

    postContent.appendChild(postText);
    post.appendChild(postContent);
    containerPosts.appendChild(post);
  }
} */

function hideMenu() {
  let authourNames: HTMLElement = document.getElementsByClassName(
    "authourNames"
  )[0] as HTMLElement;
  authourNames.style.display = "none";

  let pIcon: HTMLElement = document.getElementsByClassName(
    "bi-person-x-fill"
  )[0] as HTMLElement;
  pIcon.style.display = "none";
}

function clickMenu() {
  let menu: HTMLElement = document.getElementsByClassName(
    "menuA"
  )[0] as HTMLElement;

  menu.addEventListener("click", () => {
    let authourNames: HTMLElement = document.getElementsByClassName(
      "authourNames"
    )[0] as HTMLElement;
    authourNames.style.display = "";
    let pIcon: HTMLElement = document.getElementsByClassName(
      "bi-person-x-fill"
    )[0] as HTMLElement;
    pIcon.style.display = "";

    /* menu.classList.add("clicked");
    menu.classList.add("clickedMenu"); */

    /* let icon: HTMLElement = document.createElement("i");
    icon.classList.add("bi");
    icon.classList.add("bi-person-x-fill");

    menu.appendChild(icon); */

    let menuIcons = document.getElementsByClassName("menuIcon");
    for (let i = 0; i < menuIcons.length; i++) {
      menuIcons[i].classList.add("hideIcons");
    }
  });
}

function showMenu() {
  let personIcon: HTMLElement = document.getElementsByClassName(
    "bi-person-x-fill"
  )[0] as HTMLElement;
  personIcon.addEventListener("click", () => {
    hideMenu();

    let menuIcons = document.getElementsByClassName("menuIcon");
    for (let i = 0; i < menuIcons.length; i++) {
      menuIcons[i].classList.remove("hideIcons");
    }
    let pIcon: HTMLElement = document.getElementsByClassName(
      "bi-person-x-fill"
    )[0] as HTMLElement;
    pIcon.style.display = "none";
  });
}

/* function showAuthours() {
  let menu: HTMLElement = document.getElementsByClassName(
    "menuA"
  )[0] as HTMLElement;

  menu.addEventListener("click", () => {
    let authourNames: HTMLElement = document.getElementsByClassName(
      "authourNames"
    )[0] as HTMLElement;
    authourNames.style.display = "";
    menu.classList.add("clicked");
    menu.classList.add("clickedMenu");

    let icon: HTMLElement = document.createElement("i");
    icon.classList.add("bi");
    icon.classList.add("bi-person-x-fill");
    icon.id = "removeThis";

    menu.appendChild(icon);

    let menuIcons = document.getElementsByClassName("menuIcon");
    for (let i = 0; i < menuIcons.length; i++) {
      menuIcons[i].classList.add("hideIcons");
    }
    hideAuthours();
  });
}

function hideAuthours() {
  let clicked: HTMLElement = document.getElementsByClassName(
    "clicked"
  )[0] as HTMLElement;
  clicked.addEventListener("click", () => {
    clicked.classList.remove("clickedMenu");

    hideMenu();
    let picons = document.getElementById("removeThis");
    picons.style.display = "none";

    let removeClass = document.getElementsByClassName("menuIcon");
    for (let i = 0; i < removeClass.length; i++) {
      removeClass[i].classList.remove("hideIcons");
    }
  });
} */
