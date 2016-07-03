var colorArr = ['red', 'blue', 'green', 'lime', 'brown', 'yellow', 'purple', 'orange'];
var open = []; // array to store tiles open
var open2Tiles = 0; // counter for open pair of tiles
var roundCount = 1;

var tilesArr = []; // array to control the creation of two tiles of each color
for (i = 0; i < 8; i++) {
    tilesArr.push(2);
}

for (var i = 0; i < 16; i++) {
    var check = 0;
    do { // this loop controls that each iteration of the parental loop(for), created one tile, even if the randomly number repeated
        var rand = Math.floor((Math.random() * 8));
        if (tilesArr[rand] > 0) {
            tilesArr[rand]--;
            $('ul').append('<li style="background-color: #555" class="' + colorArr[rand] + '">' + i + '</li>');
            check = 1;
        }
    } while (check == 0);
}

$('li').click(function () {

    if ($(this).attr('class') == "noClick") return; // "click" does not work, if the tile has the attribute "noClick"
    if ((open.length == 1) && (open[0] == this)) return; // "re-click" does not work, if the tile "open"

    $(this).css("background-color", $(this).attr('class')); // show hidden color tiles
    open.push(this);

    if (open.length == 2) {
        setTimeout(function () {
            if ($(open[0]).attr('class') == $(open[1]).attr('class')) {
                for (var i = 0; i < 2; i++) {
                    $(open[i]).css("background-color", 'white');
                    $(open[i]).removeClass($(open[i]).attr('class'));
                    $(open[i]).addClass("noClick");
                }
                ++open2Tiles;
                if (open2Tiles == 8) {
                    alert("You win with " + roundCount + " rounds!!!");
                    window.location = "index.html";
                }
            }
            else {
                $(open[0]).css("background-color", "#555");
                $(open[1]).css("background-color", "#555");
            }
            open = [];
            roundCount++;
        }, 400);
    }
});


