import './App'
const DiscordRPC = require('discord-rpc');

const ClientID = "client-id-here";

const RPC = new DiscordRPC.Client();

let JSONdetails;
let JSONstate;
let JSONstartTimeStamp;
let JSONlargeImageKey;
let JSONsmallImageKey;

RPC.on('ready', () => {
    console.log("CUSTOM DISCORD STATUS BY CINARKK");

    RPC.setActivity({
        details: JSONdetails,
        state: JSONstate,
        startTimestamp: JSONstartTimeStamp,
        largeImageKey: JSONlargeImageKey,
        smallImageKey: JSONsmallImageKey,
    });
});

RPC.login({ ClientID }).catch(console.error);