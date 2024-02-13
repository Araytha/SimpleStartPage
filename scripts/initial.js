// localStorage.setItem('toolLinks', JSON.stringify(toolLinks));

let containerOneLinks = JSON.parse(localStorage.getItem('containerOneLinks'));
let containerTwoLinks = JSON.parse(localStorage.getItem('containerTwoLinks'));
let containerThreeLinks = JSON.parse(localStorage.getItem('containerThreeLinks'));
let containerFourLinks = JSON.parse(localStorage.getItem('containerFourLinks'));
let containerFiveLinks = JSON.parse(localStorage.getItem('containerFiveLinks'));
let linkTitles = JSON.parse(localStorage.getItem('linkTitles'));


// const template = [
//   {name: '', url: '', img: '', newTab: false},
// ]

const linksContainerOne = document.getElementById('containerOne');
const linksContainerTwo = document.getElementById('containerTwo');
const linksContainerThree = document.getElementById('containerThree');
const linksContainerFour = document.getElementById('containerFour');
const linksContainerFive = document.getElementById('containerFives');
const linksCol = document.getElementById('linksColumn');

linkTitles.forEach((link, index) => {
  const item = document.createElement('p');
  item.setAttribute("onClick","swapDiv("+index+")");
  item.classList.add('div-links');
  item.innerHTML = link;
  linksCol.append(item)
})


containerOneLinks.forEach(link => {



  // Main Element
  const item = document.createElement('div');
  item.classList.add('card');
  if (link.newTab) {
    item.setAttribute("onClick","window.open('"+link.url+"','mywindow');");
  } else {
    item.setAttribute("onClick","window.location.href='"+link.url+"';");
  }
  

  const imgContainer = document.createElement('div');
  imgContainer.classList.add('image-container');

  // Create image element
  const img = document.createElement('img');
  img.src = link.img;
  img.classList.add('link-logo');

  imgContainer.append(img);
  item.append(imgContainer);

  // Text
  const linkInner = document.createElement('p');
  linkInner.innerHTML = link.name;

  item.append(linkInner);
  
  linksContainerOne.append(item);

});

containerTwoLinks.forEach(link => {

  // Main Element
  const item = document.createElement('div');
  item.classList.add('card');
  if (link.newTab) {
    item.setAttribute("onClick","window.open('"+link.url+"','mywindow');");
  } else {
    item.setAttribute("onClick","window.location.href='"+link.url+"';");
  }
  

  const imgContainer = document.createElement('div');
  imgContainer.classList.add('image-container');

  // Create image element
  const img = document.createElement('img');
  img.src = link.img;
  img.classList.add('link-logo');

  imgContainer.append(img);
  item.append(imgContainer);

  // Text
  const linkInner = document.createElement('p');
  linkInner.innerHTML = link.name;

  item.append(linkInner);
  
  linksContainerTwo.append(item);

});
  
containerThreeLinks.forEach(link => {

  // Main Element
  const item = document.createElement('div');
  item.classList.add('card');
  if (link.newTab) {
    item.setAttribute("onClick","window.open('"+link.url+"','mywindow');");
  } else {
    item.setAttribute("onClick","window.location.href='"+link.url+"';");
  }
  

  const imgContainer = document.createElement('div');
  imgContainer.classList.add('image-container');

  // Create image element
  const img = document.createElement('img');
  img.src = link.img;
  img.classList.add('link-logo');

  imgContainer.append(img);
  item.append(imgContainer);

  // Text
  const linkInner = document.createElement('p');
  linkInner.innerHTML = link.name;

  item.append(linkInner);
  
  linksContainerThree.append(item);

});
  
containerFourLinks.forEach(link => {

  // Main Element
  const item = document.createElement('div');
  item.classList.add('card');
  if (link.newTab) {
    item.setAttribute("onClick","window.open('"+link.url+"','mywindow');");
  } else {
    item.setAttribute("onClick","window.location.href='"+link.url+"';");
  }
  

  const imgContainer = document.createElement('div');
  imgContainer.classList.add('image-container');

  // Create image element
  const img = document.createElement('img');
  img.src = link.img;
  img.classList.add('link-logo');

  imgContainer.append(img);
  item.append(imgContainer);

  // Text
  const linkInner = document.createElement('p');
  linkInner.innerHTML = link.name;

  item.append(linkInner);
  
  linksContainerFour.append(item);

});
  
containerFiveLinks.forEach(link => {

  // Main Element
  const item = document.createElement('div');
  item.classList.add('card');
  if (link.newTab) {
    item.setAttribute("onClick","window.open('"+link.url+"','mywindow');");
  } else {
    item.setAttribute("onClick","window.location.href='"+link.url+"';");
  }
  

  const imgContainer = document.createElement('div');
  imgContainer.classList.add('image-container');

  // Create image element
  const img = document.createElement('img');
  img.src = link.img;
  img.classList.add('link-logo');

  imgContainer.append(img);
  item.append(imgContainer);

  // Text
  const linkInner = document.createElement('p');
  linkInner.innerHTML = link.name;

  item.append(linkInner);
  
  linksContainerFive.append(item);

});