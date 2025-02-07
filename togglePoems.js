function togglePoem(poemId) {
    var poem = document.getElementById(poemId);
    if (poem.style.display === "none" || poem.style.display === "") {
        poem.style.display = "block";
    } else {
        poem.style.display = "none";
    }
}
