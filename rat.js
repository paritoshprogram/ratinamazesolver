let btnget = document.querySelector('button');
let mytable = document.querySelector('#table');

btnget.style.height ="50px";
btnget.style.width = "75px";
btnget.style.backgroundColor="yellow";

btnget.addEventListener('click',(e) => {  

function createTable(tableData) {
   var p=1;
   var table = document.createElement('table');
   var tableBody = document.createElement('tbody');
 
   tableData.forEach(function(rowData) {
     var row = document.createElement('tr');
      
     rowData.forEach(function(cellData) {
       var cell = document.createElement('td');
       cell.appendChild(document.createTextNode(cellData));
       row.appendChild(cell);

       cell.setAttribute("id",p);

      
      
       
      if( cellData ===1)
      {
       cell.style.backgroundColor ='lightcyan'; }

       if(p===1 || p===25)
       {
          
         cell.style.backgroundColor ='blue';
       }


       p=p+1;
       
        
     });

     
 
     tableBody.appendChild(row);
   });
 
   table.appendChild(tableBody);
   document.body.appendChild(table);
 }

 
 arr= [[1, 0, 1, 0,1], [1, 1,1,1,0], [0,1,0,1,0],[1,0,0,1,1],[1,1,1,0,1]];
 sol = [[0, 0, 0, 0,0], [0, 0,0,0,0], [0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]];
 createTable(arr);

 function isSafe(arr, x, y) {
   
   if (x >= 0 && x < 5 && y >= 0 && y < 5 && arr[x][y] === 1) {
     return true;
   }
   return false;
 }
 
 function solveMazeUtil(arr, x, y, sol) {
   
   if (x === 4 && y === 4) {
     // Goal!
     // When it arrived at the bottom-right, return true.
     sol[x][y] = 1;
 
     return true;
   }
   if (isSafe(arr, x, y)) {
     sol[x][y] = 1;
     if (solveMazeUtil(arr, x + 1, y, sol)) return true;
     if (solveMazeUtil(arr, x, y + 1, sol)) return true;
     // If none of above movements work, then BACKTRACK: Unmark x, y as part of solution path.
     sol[x][y] = 0;
     return false;
   }
   return false;
 }


let btn = document.createElement("button");
btn.innerHTML = "Solution of Maze";
document.body.appendChild(btn);

btn.style.marginTop = "30px";
btn.style.height= "50px";
btn.style.backgroundColor= "yellow";

solveMazeUtil(arr,0,0,sol);


btn.addEventListener('click',() =>{

   

   var q=1;
   var inputs;
for(var i = 0; i < 5; i++) {
 for(var z = 0; z < 5; z++) {
    
    inputs = document.getElementById(q);
    if(sol[i][z]===1)
    {
       
        inputs.style.backgroundColor='green'; }
       
    q=q+1;
    }

 
 
}

alert("If you click the solution button the program will find the path through which rat can reach it's destination !!"); 
})


alert("Blue color is start and destination cell, red color cell is where rat can't move and light cyan cell is where rat can move !!");

});


