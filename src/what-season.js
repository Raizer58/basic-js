module.exports = function getSeason(date) {
  if(date == undefined){
    return "Unable to determine the time of year!"
  }
  else if (date.getTime()){
    let season =["winter", "winter", "spring", "spring", "spring", "summer", "summer", "summer", "autumn", "autumn", "autumn", "winter"]
    let month = date.getMonth();
    return season[month];
  }
};