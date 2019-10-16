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
        let posX = (Math.floor(i/3))*3;
        let posY = (Math.floor(j/3))*3;
        for (let l = posX; l < posX + 3; l++) {
          for (let m = posY; m < posY + 3; m++) {
            if (matrix[l][m]) {
              numb = reviseArray.indexOf(matrix[l][m]);
              if (numb > -1) {
                reviseArray.splice(numb, 1);
              }
            }
          }
        }
/////////////////////////////////////////////////////

       if (reviseArray.length != 1 ) {

        let array1 = [[0,0,0,0,0,0,0,0,0],
                      [0,0,0,0,0,0,0,0,0],
                      [0,0,0,0,0,0,0,0,0],
                      [0,0,0,0,0,0,0,0,0],
                      [0,0,0,0,0,0,0,0,0],
                      [0,0,0,0,0,0,0,0,0],
                      [0,0,0,0,0,0,0,0,0],
                      [0,0,0,0,0,0,0,0,0],
                      [0,0,0,0,0,0,0,0,0]];
        let count = 0;
        for (let p = 0; p < reviseArray.length; p++){

          for (let aa = 0; aa < matrix.length; aa++){
            for (let bb = 0; bb < matrix[aa].length; bb++){
              array1[aa][bb] = matrix[aa][bb];
            }
          }

          for (let l = posX; l < posX + 3; l++) {
            for (let m = posY; m < posY + 3; m++) {
              if (i === l && j === m) continue;
              if (array1[l][m] === 0) {
                for (let q = 0; q < array1.length; q++) {
                  if (array1[l][q] === reviseArray[p]) {
                    array1[l][m] = -1;
                    count++
                  } 
                }
                for (let q = 0; q < array1.length; q++) {
                  if (array1[q][m] === reviseArray[p] && array1[l][m] !== -1) {
                    array1[l][m] = -1;
                    count++;
                  } 
                }
              } else {
                count++
              }
              
            }
          }
          if (count === 8) {
            matrix[i][j] = reviseArray[p];
            i=0;
            j=0;
          }
          count= 0;
          array1 = [[0,0,0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0,0,0]];
        }

      }
        /*for (let n = 0; n < reviseArray.length; n++) {
          if (i-posX === 0) {
            for (let p = posX; p < posX + 3; p++) {
              if(array1[i+1][p] == 0) {
                for (let s = 0; s < posX; s++) {
                  if (array1[i+1][s] === array1[n]) {
                    array1[i+1][p] = -1;
                  }
                }
              }
            }
          }
        }*/


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
  ]
  
console.log(initial)
console.log(sudoku(initial));