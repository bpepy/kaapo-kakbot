const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    switch(message.author.bot) {
	case true:
	break;
	case false:

function wordInString(s, word){
  return new RegExp( '\\b' + word + '\\b', 'i').test(s);
}

//wordInString('did you, or did you not, get why?', 'you')

var mess=message.content.toLowerCase();

	if (message.content.toLowerCase() === 'wow') {
		message.channel.send('Wow, it\'s a nice city.');
	}
  	else if (mess.substring(0,4) === 'wow-') {
		var what = message.content.substring(4)
    		message.channel.send('Wow, it\'s a nice '+what+'.');
  	}
	else if ((wordInString(mess,'praise be')== 1)) {
		message.channel.send('Praise be <:praisebe:591786087219724288>');
  	}
	else if (mess.substring(0,4) === 'test') {
		var kak = message.content.substring(4);
		console.log(kak);
	}
            break;
     }
});

client.login(process.env.BOT_TOKEN);
