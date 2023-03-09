
window.onload = function() {

  //////////////GRID 3 with gravity /////////
    // add the borders to the grid custom for tutorial
    const thickerBordersRight = [1, 4, 7, 10, 13, 16, 19, 22, 25, 28, 31, 34];
    for (let i = 0; i < thickerBordersRight.length; i++) {
    const index = thickerBordersRight[i];
    const item = document.querySelector(`.cgrid-item:nth-child(${index})`);
    item.style.borderRightWidth = '3px';
    item.style.borderRightColor = 'rgb(244, 93, 93)';
    item.classList.add('typeR')} // now the code knows there is a border on the right

    
    const thickerBorders = [36, 15,31,34]; 
    for (let i = 0; i < thickerBorders.length; i++) {
    const index = thickerBorders[i];
    const item = document.querySelector(`.cgrid-item:nth-child(${index})`);
    item.style.borderWidth = '5px';
    item.style.borderColor = 'rgb(244, 93, 93)';
    item.classList.add('typeF')} // now the code knows that the block fully bordered


    const thickerBordersDown = [11,12]; 
    for (let i = 0; i < thickerBordersDown.length; i++) {
    const index = thickerBordersDown[i];
    const item = document.querySelector(`.cgrid-item:nth-child(${index})`);
    item.style.borderBottomWidth = '5px';
    item.style.borderColor = 'rgb(244, 93, 93)';
    item.classList.add('typeF') }// now the code knows that the block fully bordered


    

  



    ////////////////// GRID 2 with gravity ////////////////

    // Get all the ggrid items and convert them to an array
    var ggridItems = document.querySelectorAll('.ggrid-item');
    var ggridItemsArray = [];
    for (var i = 0; i < ggridItems.length; i++) {
      ggridItemsArray.push(ggridItems[i]);
    }

  
    function check(ggridItem){
      let valuetoret = true
      label = parseInt(ggridItem.id)
      if (parseInt(ggridItem.id) < 6){
        valuetoret = true
      }
      else if (document.getElementById((label - 6).toString()).classList.contains('clicked')){
        valuetoret = false
      }
      else{
        valuetoret = true 
      }
      return valuetoret
    }
  
    function fix(ggridItem){ // we know: block is not at top and at least 1 block above it
      let label = parseInt(ggridItem.id)
      let boxAbove = document.getElementById((label - 6).toString())
      boxAboveCount = 0;
      while (boxAbove != null /* or undefined */ && boxAbove.classList.contains('clicked')){
        boxAboveCount += 1;
        label -= 6;
        boxAbove = document.getElementById((label - 6).toString())
      }
      //a(boxAboveCount)
      return boxAboveCount
      
    }
  
  
    function toggleClickedGrid2(ggridItem) {
      if (ggridItem.classList.contains('clicked')) {
        if (check(ggridItem) === true){
          ggridItem.classList.remove('clicked');
        }
        else {
          let label = parseInt(ggridItem.id);
          let boxAboveCount = fix(ggridItem);
          for (let i = 0; i < boxAboveCount; i++) { // loop to time
            let currentId = label - (6 * (i + 1));
            let currentBlock = document.getElementById(currentId.toString());
            let belowBlock = document.getElementById((currentId + 6).toString());
            belowBlock.classList.add('clicked');
            currentBlock.classList.remove('clicked');
          }
        }
        }
      else {
          let label = parseInt(ggridItem.id);
          let belowElement = document.getElementById((label + 6).toString());
          //console.log(belowElement);
          let path =  [label] //this is the path of the water block
          while ((label < 30) && !(belowElement === null) && !(belowElement.classList.contains('clicked'))) {
            label += 6 
            belowElement = document.getElementById((label + 6).toString())
            path.push(label) // something like [0,6,12,18,24,30]
          }
  
          for (let k = 0; k < path.length; k++) {  /// loop to time
          if (k==0){
          let position = document.getElementById((path[k]).toString()) // this gives us the approprite div
          position.classList.add('clicked')
          }
          else{
          let position = document.getElementById((path[k]).toString()) // this gives us the approprite div
          let preposition = document.getElementById((path[k-1]).toString()) // this gives us the approprite div above 
          position.classList.add('clicked')
          preposition.classList.remove('clicked')
  
      }}
      }
    }        
      
  
    // Add a click event listener to each ggrid item using a for loop
    //the ggrid is labelled 0 to 35, starting from the top left and going right then down
    for (let j = 0; j < ggridItemsArray.length; j++) {
      ggridItemsArray[j].addEventListener('click', function() {
        toggleClickedGrid2(ggridItemsArray[j]);
      });
    }
  
      function resetGrid1() {
        let grid1 = document.getElementById('grid-container');
        let divs = grid1.querySelectorAll('div');
    for (let i = 0; i < divs.length; i++) {
    divs[i].classList.remove('clicked');
  }}
  
    document.getElementById('reset1').addEventListener("click", resetGrid1);

                                                     /////GRID 1/////
  // Get all the grid items and convert them to an array
  var gridItems = document.querySelectorAll('.grid-item');
  var gridItemsArray = [];
  for (var i = 0; i < gridItems.length; i++) {
    gridItemsArray.push(gridItems[i]);
  }

  function toggleClickedGrid1(gridItem) {

    // Toggle the 'clicked' class on the grid item
    if (gridItem.classList.contains('clicked')) {
      gridItem.classList.remove('clicked');
    } else {
      gridItem.classList.add('clicked');
    }
  }

  // Add a click event listener to each grid item using a for loop
  //the grid is labelled 0 to 35, starting from the top left and going right then down
  console.log(gridItemsArray[0])
  for (let j = 0; j < gridItemsArray.length; j++) {
    gridItemsArray[j].addEventListener('click', function() {
      toggleClickedGrid1(gridItemsArray[j]);
    });
  }

  //reset grid fucntion//
  function resetGrid() {
    let grid2 = document.getElementById('ggrid-container');
    let divs = grid2.querySelectorAll('div');
for (let i = 0; i < divs.length; i++) {
divs[i].classList.remove('clicked');
}}

document.getElementById('reset2').addEventListener("click", resetGrid);

  
  }
  
  