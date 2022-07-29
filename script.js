//TODO: Create array dict of arrays to hold R Y or ""
/**
 * create draw functionality that takes said array and generates html code
 * add x, y cooreinate syetem as ids
 * 
 */
const unitLength = 40
const mainEl = document.getElementsByTagName("main")[0]


let gameBoard = [
    ['', '', '', '', '', '', ''],
    ['', '', '', '', '', '', ''],
    ['', '', '', '', '', '', ''],
    ['', '', '', '', '', '', ''],
    ['', '', '', '', '', '', ''],
    ['', '', '', '', '', '', ''],
  ]

function drawBoard() {
  gameBoard.forEach(
    (_, j) => { y.forEach(
      (c, i) => {
        let circle = document.createElement("div")
        
    })
  })
}

function drawBackground() {
  // Create the element to hold the game 
  const bg = document.createElement('div')
  bg.setAttribute("id", 'board')
  bg.style.backgroundColor = "blue"

  bg.style.width = `${7 * unitLength}px`
  bg.style.height = `${6 * unitLength}px`
  
  // Draw board to screen.
  mainEl.appendChild(bg)
  
}

drawBackground()
