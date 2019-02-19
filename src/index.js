/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation
  let count = 0;
  for (let i = 0; i<preferences.length; i++){
    let trianglePassage=preferences[i];
    trianglePassage = preferences[trianglePassage-1];
    if(preferences[trianglePassage-1]-1 === i && i !== preferences[i]-1)
      count++;
  }
  return count/3;
};
