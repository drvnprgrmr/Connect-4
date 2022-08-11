//TODO: Create array dict of arrays to hold R Y or ""
/**
 * create draw functionality that takes said array and generates html code
 * add x, y cooreinate syetem as ids
 *
 */
const unitLength = 40;
const mainEl = document.querySelector("main");
let curPlayer = 1; // 1 for red -1 for yellow

let gameBoard = [
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
];

function drawBoard() {
    const board = document.getElementById("board");

    gameBoard.forEach((_, y) => {
        const row = document.createElement("div");
        row.classList.add("row");
        board.appendChild(row);

        _.forEach((c, x) => {
            const circle = document.createElement("div");
            circle.classList.add("circle");

            // Add position indicators for each circle
            circle.id = `circle${x}${y}`;

            // Add event listener for adding circles
            circle.addEventListener("click", addCircle);

            row.appendChild(circle);
        });
    });
}

function drawBackground() {
    // Create the element to hold the game
    const bg = document.createElement("div");
    bg.setAttribute("id", "board");
    bg.style.backgroundColor = "blue";

    bg.style.width = `${7 * unitLength}px`;
    bg.style.height = `${6 * unitLength}px`;

    // Draw board to screen.
    mainEl.appendChild(bg);
}

function addCircle(e) {
    const circle = e.target;
    const pos = circle.id;

    const posY = pos[pos.length - 1];
    const posX = pos[pos.length - 2];

    let color = gameBoard[posY][posX];

    if (color === "") {
      console.log(color.length)
      // Update the board
      color = curPlayer === 1 ? "R" : "Y";
      gameBoard[posY][posX] = color

      // Update the circle's color
      circle.style.backgroundColor = color === "R" ? "red" : "yellow";

      curPlayer *= -1;
    }
}


function checkWin() {
  let diagonals
  // TODO: add winning logic
}


drawBackground();
drawBoard();
