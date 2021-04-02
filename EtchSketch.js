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

// Watch for when mouse enters grid cell to change the cell color.
function attachListenerHoverColor() {
    let gridCell = document.querySelectorAll('.gridElement');
    gridCell.forEach((gridElement) => {
        gridElement.addEventListener('mouseenter', () => {
            if (!gridElement.classList.contains('randomColor')) {
                gridElement.classList.add('hoverColor');
            }
        })
    })
}

function attachListenerRandomColor() {
    let gridCell = document.querySelectorAll('.gridElement');
    gridCell.forEach((gridElement) => {
        gridElement.addEventListener('wheel', () => {
            gridElement.style.setProperty('--randomizedColor', randomizedColor());
            gridElement.classList.remove('hoverColor');
            gridElement.classList.add('randomColor');
        })
    })
}

//  Got stuck on this, I will come back to it some time later.
/*  Grab current cell color, increase transparency value by 0.1 making it darker.
function attachListenerDarkenColor() {
    let gridCell = document.querySelectorAll('.gridElement');
    gridCell.forEach((gridElement) => {
        gridElement.addEventListener('mousedown', () => {
            let rgbaColors = {};
            //  Grab RGBA value of clicked cell.
            let color = window.getComputedStyle(gridElement).backgroundColor;
            //  IndexOf parenthesis to pull out values and get rid of "rgba()"
            color = color.substring(color.indexOf('(')+1, color.indexOf(')'));
            rgbaColors = color.split(',', 4);
            //  Convert values to integer.
            rgbaColors[0] = parseInt(rgbaColors[0]);
            rgbaColors[1] = parseInt(rgbaColors[1]);
            rgbaColors[2] = parseInt(rgbaColors[2]);
            // Convert transparency value to one decimal point just in case.
            rgbaColors[3] = parseFloat(rgbaColors[3]).toFixed(1);
            rgbaColors[3] = parseFloat(rgbaColors[3]);
            //  Decrease transparency of color making it darker.
            rgbaColors[3] += 0.1;
            //  Works as I want it to up to here.
            //console.log(gridElement.style);
            gridElement.classList.remove('hoverColor');
            gridElement.classList.remove('randomColor');
            gridElement.removeAttribute('style');
            //rgbaColors = rgbaColors.toString();
            //console.log(rgbaColors.toString());
            gridElement.style.backgroundColor = rgbaColors.toString();
            //console.log(gridElement.style.backgroundColor);
        })
    })
}
*/

function attachAllEventListeners() {
    attachListenerHoverColor();
    attachListenerRandomColor();
//    attachListenerDarkenColor();
}

// Randomize number for event listener #2.
function randomizedColor() {
    var o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
}

function darkenCurrentColor(color) {
    console.log(color);
}

// Create default 16x16 grid and attach event listeners.
makeGrid(16, 16);
attachAllEventListeners();

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
        if (newColumns == null || newColumns == '') {
            newColumns = 16;
        }
    let newRows = newColumns;
    makeGrid(newColumns, newRows);
    attachAllEventListeners();
})
