const mainGridContainer = document.querySelector('#mainGridContainer');
const resetBtn = document.querySelector('#resetBtn');

// Create grid with specified sizes.
function makeGrid(columns, rows) {
    mainGridContainer.style.setProperty('--gridColumns', columns);
    mainGridContainer.style.setProperty('--gridRows', rows);
    for (let c = 1; c <= (columns * rows); c++) {
        let gridElement = document.createElement('div');
        gridElement.className = 'gridElement';
        mainGridContainer.appendChild(gridElement);
    }
}

// Create default 16x16 grid and attach event listeners.
makeGrid(16, 16);
reattachListener();

// Watch for when mouse enters grid cell to change the cell color.
function reattachListener() {
    let gridCell = document.querySelectorAll('.gridElement');
    gridCell.forEach((gridElement) => {
        gridElement.addEventListener('mouseenter', () => {
            gridElement.classList.add('hoverColor');
        })
    })
}

// Delete all grid cells.
function resetGrid(container) {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

// Button to delete grid, ask user how big new grid should be,
// make new grid, attach new event listeners.
resetBtn.addEventListener('click', function() {
    resetGrid(mainGridContainer);
    let newColumns = prompt('How many squares per side you want the grid to have?');
        while (newColumns > 99) {
            newColumns = prompt('Thats too many! Try less than 100.');
        }
    let newRows = newColumns;
    makeGrid(newColumns, newRows);
    reattachListener();
})
