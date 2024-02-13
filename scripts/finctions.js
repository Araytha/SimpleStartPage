// Other functions

window.onload = () => {
  linkTitles.forEach((element, index) => {
    document.getElementById("linkInput"+index).value = element;
  });
}

function saveLinkValues() {
  var array = [];
  [...Array(5)].forEach((element, index) => {
    var val = document.getElementById("linkInput"+index).value;
    array.push(val);
  });
  localStorage.setItem('linkTitles', JSON.stringify(array));
  window.linksDialog.close();
  location.reload();
}

function saveBookmarkValues() {
  var val = document.getElementById("bookMarkInput").value;
  var val2 = document.getElementById("containerType").value;
  localStorage.setItem(val2, val);
  window.bookmarksDialog.close();
  location.reload();
}