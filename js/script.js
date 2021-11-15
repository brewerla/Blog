let div = document.getElementById("content-container");


let tempDiv;
let tempAnchor;
let tempSen;

for(let user of database.users) {
    for(let post of user.posts) {
        tempDiv = document.createElement("Div");

        //Title
        tempSen = document.createElement("p");
        tempSen.innerHTML = post.title;
        tempDiv.appendChild(tempSen);
        tempSen.className = "blog-title";

        //content
        tempSen = document.createElement("p");
        tempSen.innerHTML = post.content;
        tempDiv.appendChild(tempSen);
        tempSen.className = "blog-content";


        //Date
        tempSen = document.createElement("p");
        tempSen.innerHTML = "| " + post.posted;
        tempDiv.appendChild(tempSen);
        tempSen.className = "blog-date";


        //Anchor Tag
        tempAnchor = document.createElement("a");
        tempAnchor.href = "./author.html?name=" + user.username;
        tempAnchor.appendChild(document.createTextNode(user.username));
        tempSen = document.createElement("p");
        tempSen.innerHTML = "Author: ";
        tempSen.appendChild(tempAnchor);
        tempDiv.appendChild(tempSen);



        tempDiv.className = "blog-post"
        
        div.appendChild(tempDiv);
        
    }

}
