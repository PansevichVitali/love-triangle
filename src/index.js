module.exports = function getLoveTrianglesCount(preferences = []) {
  let count = 0;
  for (let i = 0, trianglePassage; i < preferences.length; i++){
    trianglePassage = preferences[i];
    trianglePassage = preferences[trianglePassage-1];
    if(preferences[trianglePassage-1]-1 === i && i !== preferences[i]-1)
      count++;
  }
  return count/3;
};
