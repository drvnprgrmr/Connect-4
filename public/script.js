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

    bg.style.width = `${8 * unitLength}px`;
    bg.style.height = `${7 * unitLength}px`;

    // Draw board to screen.
    mainEl.appendChild(bg);
}

function addCircle(e) {
    const circle = e.target;
    const pos = circle.id;

    const posY = Number(pos[pos.length - 1]);
    const posX = Number(pos[pos.length - 2]);

    let color = gameBoard[posY][posX];

    if (color === "") {
        // Update the board
        color = curPlayer === 1 ? "R" : "Y";
        gameBoard[posY][posX] = color;

        // Update the circle's color
        circle.style.backgroundColor = color === "R" ? "red" : "yellow";

        curPlayer *= -1;
    }
    checkWin(posY, posX, color);
}

function checkWin(y, x, color) {
    const possibleWins = [
        _top,
        left,
        bottom,
        right,
        topLeftDiagonal,
        topRightDiagonal,
        bottomLeftDiagonal,
        bottomRightDiagonal,
    ] = [[], [], [], [], [], [], [], []];

    for (let i = 1; i < 4; i++) {
        // Handle the top circles
        _top.push(checkNull(y - i, x));

        // Handle the bottom circles
        bottom.push(checkNull(y + i, x));

        // Handle the left circles
        left.push(checkNull(y, x - i));

        // Handle the right circles
        right.push(checkNull(y, x + i));

        // Handle circles to the top right diagonal
        topRightDiagonal.push(checkNull(y - i, x + i));

        // Handle circles to the top left diagonal
        topLeftDiagonal.push(checkNull(y - i, x - i));

        // Handle circles to the bottom left diagonal
        bottomLeftDiagonal.push(checkNull(y + i, x - i));

        // Handle circles to the bottom right diagonal
        bottomRightDiagonal.push(checkNull(y + i, x + i));
    }

    // Check if the other colors are the same
    possibleWins.forEach(win => {
        if (color.repeat(3) === win.join("")) {
            console.log(`${color} wins!`)
        }
    })
}

function checkNull(y, x) {
    try {
        const val = gameBoard[y][x];
        return val;
    } catch (err) {
        return "";
    }
}

drawBackground();
drawBoard();
