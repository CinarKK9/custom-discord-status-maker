import { useState } from "react";
import * as discord from "discord-rpc";
import * as times from "./times";
import swal from "sweetalert"
import { Client } from 'discord-rpc'

const rpc = new discord.Client({ transport: "ipc" });

function Form() {
  const [appId, setAppId] = useState('');
  const [state, setState] = useState('');
  const [deatils, setDetails] = useState('');
  const [largeImageKey, setLargeImageKey] = useState('');
  const [largeImageText, setLargeImageText] = useState('');

  const [smallImageKey, setSmallImageKey] = useState('');
  const [smallImageText, setSmallImageText] = useState('');
  const [buttonText, setButtonText] = useState('');
  const [buttonLink, setButtonLink] = useState('');
  const [time, setTime] = useState('')

  const activitySettings = {
    appId: appId,
    state: state,
    details: deatils,
    largeImageKey: largeImageKey,
    largeImageText: largeImageText,
    smallImageKey: smallImageKey,
    smallImageText: smallImageText,
    buttonLink: buttonLink,
    buttonText: buttonText,
    time: time
  }

  return (
    <>
      <div className="row">
        <div className="col">
            <div className="row mb-3">
              <div className="col">
                <label htmlFor="app-id" className="form-label">
                  application id
                </label>
                <input
                  value={appId}
                  onChange={e => setAppId(e.target.value)}
                  type="text"
                  name="app-id"
                  id="app-id"
                  className="form-control"
                />
              </div>
            </div>
            <div className="row mb-4">
              <div className="col">
                <label htmlFor="state" className="form-label">
                  State
                </label>
                <input
                  value={state}
                  onChange={e => setState(e.target.value)}
                  type="text"
                  name="state"
                  id="state"
                  className="form-control"
                />
              </div>
              <div className="col">
                <label htmlFor="details" className="form-label">
                  Details
                </label>
                <input
                  value={deatils}
                  onChange={e => setDetails(e.target.value)}
                  type="text"
                  name="details"
                  id="details"
                  className="form-control"
                />
              </div>
            </div>
            <div className="row mb-4">
              <div className="col d-flex align-items-center">
                <input
                  value={null}
                  checked={e => setTime(e.target.value)}
                  type="radio"
                  name="time"
                  className="form-check-input mx-1"
                />
                <label htmlFor="time" className="me-3">
                  None
                </label>
                <input
                  value={new Date()}
                  defaultChecked
                  checked={e => setTime(e.target.value)}
                  type="radio"
                  name="time"
                  className="form-check-input mx-1"
                />
                <label htmlFor="time" className="me-3">
                  default
                </label>
                <input
                  value={times.localTime}
                  type="radio"
                  checked={e => setTime(e.target.value)}
                  name="time"
                  className="form-check-input mx-1"
                />
                <label htmlFor="time" className="me-3">
                  local time
                </label>
              </div>
            </div>
            <div className="row mb-4">
              <div className="col">
                <label htmlFor="large-img-key" className="form-label">
                  large image key
                </label>
                <input
                  value={largeImageKey}
                  onChange={e => setLargeImageKey(e.target.value)}
                  type="text"
                  name="large-img-key"
                  id="large-img-key"
                  className="form-control"
                />
              </div>
              <div className="col">
                <label htmlFor="large-img-text" className="form-label">
                  large image text
                </label>
                <input
                  value={largeImageText}
                  onChange={e => setLargeImageText(e.target.value)}
                  type="text"
                  name="large-img-text"
                  id="large-img-text"
                  className="form-control"
                />
              </div>
            </div>
            <div className="row mb-4">
              <div className="col">
                <label htmlFor="small-img-key" className="form-label">
                  small image key
                </label>
                <input
                  value={smallImageKey}
                  onChange={e => setSmallImageKey(e.target.value)}
                  type="key"
                  name="small-img-key"
                  id="small-img-key"
                  className="form-control"
                />
              </div>
              <div className="col">
                <label htmlFor="small-img-text" className="form-label">
                  small image text
                </label>
                <input
                  value={smallImageText}
                  onChange={e => setSmallImageText(e.target.value)}
                  type="text"
                  name="small-img-text"
                  id="small-img-text"
                  className="form-control"
                />
              </div>
            </div>
            <div className="row mb-4">
              <div className="col">
                <label htmlFor="button1-text" className="form-label">
                  button text
                </label>
                <input
                  value={buttonText}
                  onChange={setButtonText}
                  type="text"
                  name="button1-text"
                  id="button1-text"
                  className="form-control"
                />
              </div>
              <div className="col">
                <label htmlFor="button-link" className="form-label">
                  button link
                </label>
                <input
                  value={buttonLink}
                  onChange={e => setButtonLink(e.target.value)}
                  type="text"
                  name="button-link"
                  id="button-link"
                  className="form-control"
                />
              </div>
            </div>
            <button onClick={setStatus} className="sm-btn rounded">
              <span>Set Status</span>
            </button>
        </div>
        <div className="col">
          <div className="profile-container">
            <div className="profile rounded-4 overflow-hidden">
              <div className="profile-banner"></div>
              <div className="avatar-container">
                <div className="avatar"></div>
                <div className="status"></div>
              </div>
              <div className="userinfo">
                <span>cinxrkk</span>
              </div>
              <div className="activity">
                <span className="activity-type">PLAYING A GAME</span>
                <div className="activity-details">
                  <img
                    src={
                      "https://i.pinimg.com/originals/97/57/67/975767e67adc18ad53d5a1a687cb6421.gif"
                    }
                    alt="ig"
                    className="rounded-4"
                  />
                  <div
                    className="activity-info"
                    style={{ color: "#c4c9ce", fontSize: "15px" }}
                  >
                    <div style={{ fontWeight: "bold" }}>CinarKK</div>
                    <div>Competitive</div>
                    <div>playing owo</div>
                    <div>00:00 elapsed</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );

function setStatus() {
    const client = new Client({transport: 'ipc'})
    client.setActivity({
      state: state,
      details: deatils,
      startTimestamp: time,
      largeImageKey: largeImageKey,
      smallImageKey: smallImageKey,
      largeImageText: largeImageText,
      smallImageText: smallImageText,
      buttons: [
        {
          label: buttonText,
          url: buttonLink,
        },
        {
          label: 'Made By CinarKK',
          url: 'https://github.com/CinarKK9'
        }
      ]
    }).then((result) => {
      swal({title: 'Activity Set', text:'Activity was set successfully', closeOnClickOutside: true, closeOnEsc: true, icon: 'success'})
    }).catch((err) => {
      swal({title: 'Error', text: `Error Setting Activity ${err}`})
    });
}

}

export default Form;