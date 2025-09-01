const boxes = document.querySelectorAll(".buttons");
let currentPlayer = "O";
boxes.forEach(function(box){
    box.addEventListener("click", function() {
       
        const displayPlayer = document.querySelector(".turn");
        if(displayPlayer) {
            displayPlayer.textContent = currentPlayer;
        }
        if (currentPlayer === "O"){
            currentPlayer = "X";
        } else {
            currentPlayer = "O";
        }
         if (box.textContent === ""){
            box.textContent = currentPlayer;
        }

    })
}
);

function newGame() {
    boxes.forEach(box => (box.textContent = "") )

    }


