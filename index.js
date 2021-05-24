var rpc = require("discord-rpc")
const client = new rpc.Client({transport: 'ipc'})

client.on('ready', () => {
client.request('SET_ACTIVITY', {
pid: process.pid,

activity: {
	details: "mew!",
	state: "petting the foofy",
	assets: {
		large_image: "uwu", 
		large_text: "rawr!",
		small_image: "paws",
		small_text: "mew",
	},

	buttons: [{label: "pet the foofy!", url: "http://floofe.ml"}, {label: "ur dad", url: "https://http.cat/410"}]

	}
})
})

client.login({clientId: "845809484961677313"}).catch(console.error);