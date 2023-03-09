document.addEventListener("DOMContentLoaded", function(){
  // Get the grid containers
  var gridContainer1 = document.getElementById('grid-container1');
  var gridContainer2 = document.getElementById('grid-container2');

  // Create the grid items for both grids
  for (var i = 0; i < 36; i++) {
    var gridItem = document.createElement('div');
    gridItem.classList.add('grid-item');
    gridContainer1.appendChild(gridItem);

    var gridItem2 = document.createElement('div');
    gridItem2.classList.add('grid-item');
    gridContainer2.appendChild(gridItem2);
  }

  // Add the 'gravity' text above the second grid
  var gravityText = document.createElement('p');
  gravityText.innerText = 'Gravity';
  gridContainer2.parentElement.insertBefore(gravityText, gridContainer2);

  // Get all the grid items and convert them to an array for both grids
  var gridItems1 = document.querySelectorAll('#grid-container1 .grid-item');
  var gridItemsArray1 = Array.from(gridItems1);

  var gridItems2 = document.querySelectorAll('#grid-container2 .grid-item');
  var gridItemsArray2 = Array.from(gridItems2);

  // Function to toggle the 'clicked' class on the grid item for both grids
  function toggleClickedGrid(gridItem) {
    if (gridItem.classList.contains('clicked')) {
      gridItem.classList.remove('clicked');
    } else {
      gridItem.classList.add('clicked');
    }
  }

  // Add a click event listener to each grid item for both grids
  for (let j = 0; j < gridItemsArray1.length; j++) {
    gridItemsArray1[j].addEventListener('click', function () {
      toggleClickedGrid(gridItemsArray1[j]);
      applyGravity(gridItemsArray1);
    });
  }

  for (let j = 0; j < gridItemsArray2.length; j++) {
    gridItemsArray2[j].addEventListener('click', function () {
      toggleClickedGrid(gridItemsArray2[j]);
      applyGravity(gridItemsArray2);
    });
  }

  // Function to apply gravity to the grid items for both grids
  function applyGravity(gridItems) {
    for (let i = gridItems.length - 1; i >= 0; i--) {
      if (gridItems[i].classList.contains('clicked')) {
        // If the grid item is at the bottom of the grid, stop applying gravity
        if (i >= 30) {
          return;
        }

        // If the grid item below is not clicked, move the clicked grid item down and remove the clicked class
        if (!gridItems[i + 6].classList.contains('clicked')) {
          gridItems[i].classList.remove('clicked');
          gridItems[i + 6].classList.add('clicked');
        }
      }
    }
  }

  // Function to reset the grid for both grids
  function resetGrid(gridContainer) {
    let divs = gridContainer.querySelectorAll('div');
    for (let i = 0; i < divs.length; i++) {
      divs[i].classList.remove('clicked');
    }
  }

  // Add event listeners to the reset buttons for both grids
  document.getElementById('reset1').addEventListener('click', function() {
    resetGrid(gridContainer1);
  });

  document.getElementById('reset2').addEventListener('click', function() {
    resetGrid(gridContainer2);
  });
});
