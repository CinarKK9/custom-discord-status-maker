import "./App";
import TimeFunc from "./DatePicker";
const DiscordRPC = require("discord-rpc");

const ClientID = "client-id-here";

const RPC = new DiscordRPC.Client();

function SetStatusForm() {
    return (
        <form className="rounded mb-5">
          <h3 className="form-label text-light">Set Custom Status</h3>
          <div className="row">
            <div className="col">
              <div className="form-floating mb-4">
                <input
                  type="text"
                  name="dc-token"
                  id="dc-token"
                  className="form-control"
                  placeholder="Discord token"
                  autoComplete="off"
                />
                <label htmlFor="dc-token">Discord User Token</label>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="form-floating mb-4">
                <input
                  type="text"
                  name="activity-details"
                  id="activity-details"
                  className="form-control"
                  placeholder="Activity Details"
                  autoComplete="off"
                />
                <label htmlFor="activity-details">Activity Details</label>
              </div>
            </div>
            <div className="col">
              <div className="form-floating mb-4">
                <input
                  type="text"
                  name="activity-state"
                  id="activity-state"
                  className="form-control"
                  placeholder="Activity State"
                  autoComplete="off"
                />
                <label htmlFor="activity-state">Activity State</label>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="form-floating mb-4">
                <input
                  type="text"
                  name="button-text"
                  id="button-text"
                  className="form-control"
                  placeholder="Button Text"
                  autoComplete="off"
                />
                <label htmlFor="button-text">Button Text</label>
              </div>
            </div>
            <div className="col">
              <div className="form-floating mb-4">
                <input
                  type="text"
                  name="button-url"
                  id="button-url"
                  className="form-control"
                  placeholder="Button Text"
                  autoComplete="off"
                />
                <label htmlFor="button-url">Button Url</label>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col text-center mb-2">
              <span className="form-text text-light">
                Select 'Custom Time' To Enable Date Picker
              </span>
            </div>
          </div>
          <div className="row">{TimeFunc()}</div>
          <div className="row">
            <div className="col">
              <button type="submit" className="btn w-25 sm-btn">
                <span>Set Status</span>
              </button>
            </div>
          </div>
        </form>
    )
}


let xdetails;
let xstate;
let xstartTimeStamp;
let xbuttonText;
let xbuttonUrl;
let xlargeImageKey;
let xsmallImageKey;

RPC.on("ready", () => {
  console.log("CUSTOM DISCORD STATUS BY CINARKK");

  RPC.setActivity({
    details: xdetails,
    state: xstate,
    startTimestamp: xstartTimeStamp,
    largeImageKey: xlargeImageKey,
    smallImageKey: xsmallImageKey,
    buttons: [
      {
        label: xbuttonText,
        url: xbuttonUrl,
      },
    ],
  });
});

RPC.login({ ClientID }).catch(console.error);
