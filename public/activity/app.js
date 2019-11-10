const Http = new XMLHttpRequest();
const url = '/api/activity';
Http.open("GET", url);
Http.send();
Http.onreadystatechange = (e) => {
  if (e.target.readyState === 4) {
    const response = JSON.parse(e.target.responseText);
    console.log(response);
    $('#activity').html(response.activity.join('<br>'));
  }
}