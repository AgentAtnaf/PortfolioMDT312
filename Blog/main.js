let postCounter = 0;

function postFunction() {
    const text = document.getElementById("text1").value;

    if (text.trim() == "") {
        alert("Please enter a message before posting.");
        return;
    }

    if (postCounter == 0) {
        // Post to topic1
        const topic1 = document.getElementById("topic1");
        const newPost = document.createElement("p");
        newPost.textContent = text;
        topic1.appendChild(newPost);
    } else if (postCounter == 1) {
        // Reply to comment1
        const comment1 = document.getElementById("comment1");
        const newComment = document.createElement("p");
        newComment.textContent = text;
        comment1.appendChild(newComment);
    } else if (postCounter == 2) {
        // Reply to commentz
        const comment2 = document.getElementById("comment2");
        const newComment = document.createElement("p");
        newComment.textContent = text;
        comment2.appendChild(newComment);
    }

    // Increment the post counter
    postCounter++;

    // Clear the input field
    document.getElementById("text1").value = "";
}

function clearFunction() {
    document.getElementById("topic1").querySelectorAll("p").forEach(function(p) {
        p.remove();
    });
    document.getElementById("comment1").querySelectorAll("p").forEach(function(p) {
        p.remove();
    });
    document.getElementById("comment2").querySelectorAll("p").forEach(function(p) {
        p.remove();
    });

    postCounter = 0;

    document.getElementById("text1").value = "";
}





