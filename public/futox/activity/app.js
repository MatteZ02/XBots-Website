const url = '/api/activity?api_key=12345';
let activity = [
  {
    command: 'sup',
    args: [],
    responses: ['hey!'],
    error: null,
  },
];
async function fetchActivity() {
  const response = await fetch(url);
  const json = await response.json();
  return json.activity;
}

class Command {
  constructor(param) {
    this.command = param.command;
    this.args = param.args ? param.args : [''];
    this.responses = param.responses ? param.responses : [''];
    this.error = param.error ? param.error : null;
  }
  render() {
    const wrapper = document.createElement('div');
    $(wrapper).attr('class', 'grey-border wrapper');

    const yellowborder = document.createElement('div');
    $(yellowborder).attr('class', 'yellowborder');

    const text = document.createElement('div');
    $(text).attr('class', 'text-div');

    const prefix = document.createElement('p');
    $(prefix).attr('class', 'text text-darker').text('!');

    const command = document.createElement('p');
    $(command).attr('class', 'text text-lighter').text(this.command);

    const args = document.createElement('p');
    $(args).attr('class', 'text text-darker').text(this.args.join(' '));

    $(text).append(prefix);
    $(text).append(command);
    $(text).append(args);

    $(wrapper).append(yellowborder).append(text);

    $('#activity').append(wrapper);
  }
}

function updateActivity() {
  activity.forEach(x => {
    console.log('thing');
    new Command(x).render()
  });
}

fetchActivity().then(json => {
  activity = json;
  updateActivity();
});