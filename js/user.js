window.onload = function() {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(urlSearchParams.entries());

    let user = getUser(params.name);
    console.log(getUser(params.name))

    document.getElementById("title").innerHTML = "Welcome to " + user.username + "\'s page";
    document.getElementById("profile_image_background").style.backgroundImage = `url(${user.profile_image})`;

    document.getElementById("dob").innerHTML = "Born on " + user.dob;
    document.getElementById("full_name").innerHTML = "Full name is " + user.name;
    document.getElementById("joined").innerHTML = "Joined this blog on " + user.joined;
    document.getElementById("amountOfPosts").innerHTML = user.username + " has " + user.posts.length + " posts";

    let container = document.getElementById("all_posts");

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




        tempDiv.className = "blog-post"
        
        container.appendChild(tempDiv);
    }


    console.log(user.profile_image);
}

function getUser(username) {
    for(let user of database.users) {
        if(user.username == username) {
            return user;
        }
    }
    return null;
}
