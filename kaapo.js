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

  	if (mess.substring(0,3) === 'wow') {
    	    message.channel.send('Its a nice city.');
  	    }
	else if ((wordInString(mess,'praise be')== 1)) {
		message.channel.send('Praise be :praisebe:');
  	    }
            break;
     }
});

client.login(process.env.BOT_TOKEN);
