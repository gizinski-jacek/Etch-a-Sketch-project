const mainGridContainer = document.querySelector('#mainGridContainer');

function makeGrid(columns, rows) {
    mainGridContainer.style.setProperty('--grid-columns', columns);
    mainGridContainer.style.setProperty('--grid-rows', rows);
    for (let c = 1; c <= (columns * rows); c++) {
        let gridElement = document.createElement('div');
        gridElement.className = 'gridElement';
        mainGridContainer.appendChild(gridElement);
    }
}

makeGrid(16, 16);
