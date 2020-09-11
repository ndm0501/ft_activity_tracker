let utils= {};
utils.formatDate = (dateString) => {
    const dateArray = dateString.split(' ')
    const [month, day, year] = dateArray;
    return new Date(`${month} ${day} ${year}`)

}

utils.getDateList = function (start, end) {
  for (
    var arr = [], dt = new Date(start); dt <= end; dt.setDate(dt.getDate() + 1)
  ) {
    arr.push(new Date(dt));
  }
  return arr;
};
export default utils;