//const Http = new XMLHttpRequest();
console.log('hello');
const url = '/api/activity';
const activity = [
  {
    command: 'sup',
    args: [],
    responses: ['hey!'],
    error: null,
  },
  {
    command: 'userinfo',
    args: ['38400'],
    responses: ['[Embed]'],
    error: null,
  },
  {
    command: 'weather',
    args: ['helsinki'],
    responses: ['[Embed]'],
    error: null,
  }
];
/*
Http.open("GET", url);
Http.send();
Http.onreadystatechange = (e) => {
  if (e.target.readyState === 4) {
    const response = JSON.parse(e.target.responseText);
    console.log(response);
    activity = response.activity;
  }
}*/

class Command {
  constructor(param) {
    this.command = param.command;
    this.args = param.args ? param.args : [''];
    this.responses = param.responses ? param.responses : [''];
    this.error = param.error ? param.error : null;
  }
  render() {
    console.log('thibg');
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

activity.forEach(x => {
  console.log('thing');
  new Command(x).render()
});