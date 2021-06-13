var c = console["log"];
function getUserInfo() {
    var totalPgs = window.prompt('How many pages does the book have?');
    var auth = window.prompt('What is the name of the author?');
    var title = window.prompt('What is the title of the book?');
    document.getElementById("author").innerHTML = auth;
    document.getElementById("title").innerHTML = title;
    return totalPgs;
}
function pageCalculator(totalPgs) {
    var pg = Number(totalPgs) / 100;
    for (var i = 1; i < 101; i++) {
        var box = document.getElementById("box" + i);
        !!box ? box.innerHTML = String(Math.round(pg * i)) : '';
    }
}
pageCalculator(getUserInfo());
