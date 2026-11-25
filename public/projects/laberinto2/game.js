
"use strict";

const ROWS = 27;
const COLS = 39;
const SHORTCUT_FACTOR = 0.10;

const START = { row: 1, col: 1 };
const GOAL = { row: ROWS - 2, col: COLS - 2 };

const mazeElement = document.getElementById("maze");
const stepsElement = document.getElementById("steps");
const distanceElement = document.getElementById("distance");
const statusElement = document.getElementById("game-status");
const hintButton = document.getElementById("hint-button");
const restartButton = document.getElementById("restart-button");
const victoryElement = document.getElementById("victory");
const victoryMessage = document.getElementById("victory-message");
const playAgainButton = document.getElementById("play-again");

let maze = [];
let player = { ...START };
let steps = 0;
let shortestDistance = 0;
let hintPath = [];
let hintTimeout = null;
let gameOver = false;
let cells = [];

const directions = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1]
];

// Generación procedural mediante DFS y backtracking.
function generateMaze() {
  const map = Array.from(
    { length: ROWS },
    () => Array(COLS).fill(1)
  );

  const stack = [{ ...START }];
  map[START.row][START.col] = 0;

  while (stack.length > 0) {
    const current = stack[stack.length - 1];
    const neighbors = [];

    for (const [dr, dc] of directions) {
      const nr = current.row + dr * 2;
      const nc = current.col + dc * 2;

      if (
        nr >= 1 && nr < ROWS - 1 &&
        nc >= 1 && nc < COLS - 1 &&
        map[nr][nc] === 1
      ) {
        neighbors.push({
          row: nr,
          col: nc,
          dr,
          dc
        });
      }
    }

    if (neighbors.length > 0) {
      const next = neighbors[
        Math.floor(Math.random() * neighbors.length)
      ];

      map[current.row + next.dr][current.col + next.dc] = 0;
      map[next.row][next.col] = 0;

      stack.push({
        row: next.row,
        col: next.col
      });
    } else {
      stack.pop();
    }
  }

  // Crear atajos para añadir rutas alternativas.
  const walls = [];

  for (let r = 1; r < ROWS - 1; r++) {
    for (let c = 1; c < COLS - 1; c++) {
      if (map[r][c] === 1) {
        walls.push({ row: r, col: c });
      }
    }
  }

  const shortcutCount = Math.floor(
    walls.length * SHORTCUT_FACTOR
  );

  for (let i = 0; i < shortcutCount; i++) {
    const index = Math.floor(Math.random() * walls.length);
    const wall = walls.splice(index, 1)[0];

    const r = wall.row;
    const c = wall.col;

    const horizontal =
      map[r][c - 1] === 0 && map[r][c + 1] === 0;

    const vertical =
      map[r - 1][c] === 0 && map[r + 1][c] === 0;

    if (horizontal || vertical) {
      map[r][c] = 0;
    }
  }

  return map;
}

// Búsqueda del camino más corto mediante BFS.
function findShortestPath(start, goal) {
  const queue = [[start.row, start.col]];
  const visited = new Map();

  const key = (r, c) => `${r},${c}`;

  visited.set(key(start.row, start.col), null);

  let found = false;

  while (queue.length > 0) {
    const [r, c] = queue.shift();

    if (r === goal.row && c === goal.col) {
      found = true;
      break;
    }

    for (const [dr, dc] of directions) {
      const nr = r + dr;
      const nc = c + dc;
      const nextKey = key(nr, nc);

      if (
        nr >= 0 && nr < ROWS &&
        nc >= 0 && nc < COLS &&
        maze[nr][nc] === 0 &&
        !visited.has(nextKey)
      ) {
        visited.set(nextKey, key(r, c));
        queue.push([nr, nc]);
      }
    }
  }

  if (!found) return [];

  const path = [];
  let current = key(goal.row, goal.col);

  while (current !== null) {
    const [r, c] = current.split(",").map(Number);
    path.push({ row: r, col: c });
    current = visited.get(current);
  }

  return path.reverse();
}

function renderMaze() {
  mazeElement.innerHTML = "";
  cells = [];

  const fragment = document.createDocumentFragment();

  for (let r = 0; r < ROWS; r++) {
    cells[r] = [];

    for (let c = 0; c < COLS; c++) {
      const cell = document.createElement("div");
      cell.className = "cell";

      if (maze[r][c] === 1) {
        cell.classList.add("wall");
      }

      if (r === GOAL.row && c === GOAL.col) {
        cell.classList.add("goal");
      }

      cells[r][c] = cell;
      fragment.appendChild(cell);
    }
  }

  mazeElement.appendChild(fragment);
  renderPlayer();
}

function renderPlayer() {
  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
      cells[r][c].classList.remove("player", "hint");
    }
  }

  for (const position of hintPath) {
    if (
      (position.row !== player.row || position.col !== player.col) &&
      (position.row !== GOAL.row || position.col !== GOAL.col)
    ) {
      cells[position.row][position.col].classList.add("hint");
    }
  }

  cells[player.row][player.col].classList.add("player");
}

function updateStats() {
  stepsElement.textContent = steps;
  distanceElement.textContent = shortestDistance;
}

function movePlayer(dr, dc) {
  if (gameOver) return;

  const nr = player.row + dr;
  const nc = player.col + dc;

  if (
    nr < 0 || nr >= ROWS ||
    nc < 0 || nc >= COLS ||
    maze[nr][nc] === 1
  ) {
    return;
  }

  player = { row: nr, col: nc };
  steps++;

  // Actualizar la distancia mínima desde la nueva posición.
  const remainingPath = findShortestPath(player, GOAL);
  shortestDistance = Math.max(0, remainingPath.length - 1);

  hintPath = [];
  clearTimeout(hintTimeout);

  renderPlayer();
  updateStats();

  if (player.row === GOAL.row && player.col === GOAL.col) {
    winGame();
  }
}

function showHint() {
  if (gameOver) return;

  hintPath = findShortestPath(player, GOAL);
  renderPlayer();

  clearTimeout(hintTimeout);

  hintTimeout = setTimeout(() => {
    hintPath = [];
    renderPlayer();
  }, 3000);
}

function winGame() {
  gameOver = true;
  statusElement.textContent = "COMPLETADO";
  victoryMessage.textContent =
    `Has llegado a la salida en ${steps} pasos.`;

  victoryElement.classList.remove("hidden");
}

function restartGame() {
  clearTimeout(hintTimeout);

  maze = generateMaze();
  player = { ...START };
  steps = 0;
  hintPath = [];
  gameOver = false;

  const initialPath = findShortestPath(player, GOAL);
  shortestDistance = Math.max(0, initialPath.length - 1);

  statusElement.textContent = "JUGANDO";
  victoryElement.classList.add("hidden");

  renderMaze();
  updateStats();
}

// Movimiento con flechas y WASD.
document.addEventListener("keydown", (event) => {
  const key = event.key.toLowerCase();

  const movement = {
    arrowup: [-1, 0],
    w: [-1, 0],
    arrowdown: [1, 0],
    s: [1, 0],
    arrowleft: [0, -1],
    a: [0, -1],
    arrowright: [0, 1],
    d: [0, 1]
  };

  if (movement[key]) {
    event.preventDefault();
    movePlayer(...movement[key]);
  }

  if (key === "h") {
    showHint();
  }

  if (key === "r") {
    restartGame();
  }
});

hintButton.addEventListener("click", showHint);
restartButton.addEventListener("click", restartGame);
playAgainButton.addEventListener("click", restartGame);

// Iniciar juego.
restartGame();
