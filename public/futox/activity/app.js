const url = '/api/activity?api_key=12345';
let activity = [];
async function fetchActivity() {
  const response = await fetch(url);
  const json = await response.json();
  return json.activity;
}

class Command {
  constructor(param) {
    this.command = param.command;
    this.args = param.args ? param.args : [''];
    this.responses = param.responses ? param.responses.map(x => x.replace(new RegExp('\\*\\*', 'g'), '')).reverse() : [''];
    this.error = param.error ? param.error : null;
  }
  render() {
    const wrapper = document.createElement('div');
    $(wrapper).attr('class', 'grey-border wrapper');

    const text = document.createElement('div');
    $(text).attr('class', 'text-div');

    const prefix = document.createElement('p');
    $(prefix).attr('class', 'text text-darker').text('!');

    const command = document.createElement('p');
    $(command).attr('class', 'text text-lighter').text(this.command);

    const args = document.createElement('p');
    $(args).attr('class', 'text text-darker').text(this.args.join(' '));

    const responsesTitle = document.createElement('p');
    $(responsesTitle).attr('class', 'other-text text-lighter').text('FutoX Responses:');

    const responses = document.createElement('p');
    $(responses).attr('class', 'other-text text-darker').html(this.responses.join('<br>'));

    $(text).append(prefix);
    $(text).append(command);
    $(text).append(args);

    $(wrapper).append(text).append(responsesTitle).append(responses);

    $('#activity').append(wrapper);
  }
}

function updateActivity() {
  $('#activity').html('');
  activity.slice(0, 20).forEach(x => {
    new Command(x).render();
  });
}

fetchActivity().then(json => {
  activity = json;
  updateActivity();
});

setInterval(() => {
  fetchActivity().then(json => {
    activity = json;
    updateActivity();
  });
}, 60000);