console.log('hello');
const Http = new XMLHttpRequest();
const url='/api';
Http.open("GET", url);
Http.send();

Http.onreadystatechange = (e) => {
  console.log(Http.responseText)
}