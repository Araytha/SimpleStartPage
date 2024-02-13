
const dateContainer = document.getElementById('date');

function getMonthWords(month) {
  const monthArray = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  return monthArray[month];
}

function addDateSuffix(date){
  const suffixArray = ['st', 'nd', 'rd', 'th'];
  let string;
  switch (date) {
    case 1:
      string = date+suffixArray[0]
      break;
    case 2:
      string = date+suffixArray[1]
      break;
    case 3:
      string = date+suffixArray[2]
      break;
    default:
      string = date+suffixArray[3]
      break;
  }
  return string;
}

window.onload = () => {
  const date = addDateSuffix(new Date().getDate());
  const month =  getMonthWords(new Date().getMonth());
  
  const item = document.createElement('span');
  item.innerHTML =  month + ' <br> ' +date;
  dateContainer.append(item);
}