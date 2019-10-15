///module.exports = function solveSudoku(matrix) {
  
//}


function sudoku(matrix) {
  let reviseArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let numb = 0;
  for (let i = 0; i < matrix.length; i++){
    for (let j = 0; j < matrix[i].length; j++){
      if (!matrix[i][j]) {
         
        for (let k = 0; k < matrix[i].length; k++) {
          if (matrix[i][k]) {
            numb = reviseArray.indexOf(matrix[i][k]);
            if (numb > -1) {
              reviseArray.splice(numb, 1);
            }
          }
        }
        for (let k = 0; k < matrix.length; k++) {
          if (matrix[k][j]) {
            numb = reviseArray.indexOf(matrix[k][j]);
            if (numb > -1) {
              reviseArray.splice(numb, 1);
            }
          }
        }


        if (reviseArray.length === 1) {
          matrix[i][j] = reviseArray[0];
          i = 0;
          j = 0;
        }
        reviseArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
      }
    }
  } 
  return matrix;
}


 const initial = [
    [6, 5, 0, 7, 3, 0, 0, 8, 0],
    [0, 0, 0, 4, 8, 0, 5, 3, 0],
    [8, 4, 0, 9, 2, 5, 0, 0, 0],
    [0, 9, 0, 8, 0, 0, 0, 0, 0],
    [5, 3, 0, 2, 0, 9, 6, 0, 0],
    [0, 0, 6, 0, 0, 0, 8, 0, 0],
    [0, 0, 9, 0, 0, 0, 0, 0, 6],
    [0, 0, 7, 0, 0, 0, 0, 5, 0],
    [1, 6, 5, 3, 9, 0, 4, 7, 0]
  ];
  
console.log(initial)
console.log(sudoku(initial));