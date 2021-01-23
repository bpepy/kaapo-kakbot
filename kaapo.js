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
		message.channel.send('It\'s a nice city.');
	}
  	else if (mess.substring(0,4) === 'wow-') {
		var what = message.content.substring(4)
    		message.channel.send('Wow, it\'s a nice '+what+'.');
  	}
	else if ((wordInString(mess,'praise be')== 1)) {
		message.channel.send('Praise be <:praisebe:591786087219724288>');
  	}
	else if ((wordInString(mess,'just arrived in new york')== 1) || (wordInString(mess,'just arrive in new york')== 1) || (wordInString(mess,'just arrive in ny')== 1) || (wordInString(mess,'just arrive in nyc')== 1) || (wordInString(mess,'just arrived in ny')== 1) || (wordInString(mess,'just arrived in nyc')== 1)) {
		message.channel.send('Wow, it\'s a nice city.');
	}
	else if ((wordInString(mess,'just arrived in new jersey')== 1) || (wordInString(mess,'just arrive in new jersey')== 1) || (wordInString(mess,'just arrive in nj')== 1) || (wordInString(mess,'just arrive in nj')== 1) || (wordInString(mess,'just arrived in philly')== 1) || (wordInString(mess,'just arrived in philly')== 1) || (wordInString(mess,'just arrived in philadelphia')== 1) || (wordInString(mess,'just arrived in philadelphia')== 1)) {
		var loc = message.content.indexOf('just arrive in');
		var place = message.content.substring(loc + 15);
		message.channel.send('Wow, it\'s a shit hole');
	}
	else if ((wordInString(mess,'just arrived in')== 1)) {
		var loc = mess.indexOf('just arrived in');
		var place = message.content.substring(loc + 16);
		message.channel.send('Wow, it\'s a nice '+place+'.');
	}
	else if ((wordInString(mess,'just arrive in')== 1)) {
		var loc = mess.indexOf('just arrive in');
		var place = message.content.substring(loc + 15);
		message.channel.send('Wow, it\'s a nice '+place+'.');
	}
	else if ((wordInString(mess,'testt')== 1)) {
		var loc = mess.indexOf('just arrive in');
		var place = message.content.substring(loc + 6);
		message.channel.send('Wow, it\'s a nice '+place+'.');
	}
	
            break;
     }
});

client.login(process.env.BOT_TOKEN);
