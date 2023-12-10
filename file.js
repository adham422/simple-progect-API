// function to get all posts
function getallposts(userid){
    let request = new XMLHttpRequest;
    request.open("GET",`https://jsonplaceholder.typicode.com/posts?userId=${userid}`);
    request.responseType = "json";
    request.send();
    request.onload = function(){
        if(request.status>=200 && request.status<300){
            let posts = request.response;
            document.getElementById("posts").innerHTML ="";
            for(post of posts){
               let content =`
               <div class="post">
               <h2>${post.title}</h2>
              <hr>
               <h4>${post.body}</h4>
          </div>
              `
              document.getElementById("posts").innerHTML +=content;
            }
        }
    }
}
getallposts(1);

// function to get all users

function getallusers(){
    let request = new XMLHttpRequest;
    request.open("GET","https://jsonplaceholder.typicode.com/users");
    request.responseType = "json";
    request.send();
    request.onload = function(){
        if(request.status>=200 && request.status<300){
            let users = request.response;
            document.getElementById("users").innerHTML ="";
            for(user of users){
               let content =`
               <div id="user" onclick="usercliclked(${user.id},this)">
               <h2>${user.name}</h2>
              <hr>
               <h4>${user.email}</h4>
             </div>
              `
              document.getElementById("users").innerHTML +=content;
            }
        }
    }
}
getallusers();

function usercliclked(id,el){
    let selectedelement=document.getElementsByClassName("selected");
    for(element of selectedelement){
        element.classList.remove("selected");
    }
  getallposts(id);
  el.classList.add("selected");
}