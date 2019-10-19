module.exports = function solveSudoku(matrix) {







//function solveSudoku(matrix) {

  let reviseArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let reviseArray1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let numb = 0;
  let numb1 = 0;
  let value = 0;
  let valueI = 0;
  let valueJ = 0;
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

        if (reviseArray.length === 1) {
          matrix[i][j] = reviseArray[0];
          i = 0;
          j = -1;
          value = 0;
        }
        if (reviseArray.length !== 1)
          if (value === 0) {
            value = reviseArray[0];
            valueI = i;
            valueJ = j;
          }
        reviseArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
      }
    }
  } 
  if (value) {
    matrix[valueI][valueJ] = value;
    solveSudoku(matrix);
  }
  if (typeof(value === 'undefined')) {
    for (let a = 0; a < 9; a++) {
      numb1 = reviseArray1.indexOf(matrix[a][valueJ]);
            if (numb1 > -1) {
              reviseArray1.splice(numb1, 1);
            }
          }
    for (let b = 0; b < 9; b++) {
      if (matrix[valueI][b] === reviseArray1[0]) {
        matrix[valueI][b] = reviseArray1[0];
        console.log('matrix[valueI][b]', matrix[valueI][b]);
        matrix[valueI][valueJ] = 0;
      }
    }

    }
  console.log(valueI);
  console.log(valueJ);
  console.log(value);
  console.log('matrix', matrix);
  return matrix;
}


 
