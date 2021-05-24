var rpc = require("discord-rpc")
const client = new rpc.Client({transport: 'ipc'})

client.on('ready', () => {
client.request('SET_ACTIVITY', {
pid: process.pid,

activity: {
	details: "-", // Top text - text directly below application name
	state: "-", // Text below top text
	assets: {
		large_image: "(large image key here)", // Large status image (main one)
		large_text: "-", // Text that appears when hovering over large image
		small_image: "(small image key here)", // Small status image (circle corner one)
		small_text: "-", // Text that appears when hovering over small image
	},

	buttons: [{label: "(label here)", url: "(url here)"}, {label: "(label here)", url: "(url here)"}] // Status buttons, optional

	}
})
})

client.login({clientId: "(client id here)"}).catch(console.error); // Discord Developer Portal > Selected Application > OAuth2
