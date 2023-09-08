import * as times from './times'
import * as DiscordRPC from 'discord-rpc';
import { Data } from './Form';



const ClientID = Data.xAppId;
const RPC = new DiscordRPC.Client({transport: 'ipc'});

RPC.login({ clientId: ClientID }).catch(console.error);

RPC.on("ready", () => {
  console.log("CUSTOM DISCORD STATUS BY CINARKK");
        RPC.setActivity({
            details: Data.xDetails,
            state: Data.xState,
            largeImageKey: Data.xLargeImageKey,
            largeImageText: Data.xLargeImageText,
            smallImageKey: Data.xSmallImageKey,
            smallImageText: Data.xSmallImageText,
            startTimestamp: Data.xTime,
            endTimestamp: Data.xTimeUntil,
            instance: true,
            buttons: [
                {
                    label: Data.xButtonText,
                    url: Data.xButtonLink,
                },
                {
                    label: "Get Custom Status Maker By CinarKK",
                    url: "https://github.com/CinarKK9/custom-discord-status-maker",
                }
            ],
        });
});