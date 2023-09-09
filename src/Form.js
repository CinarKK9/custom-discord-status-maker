import { useState, useEffect } from "react";
import * as discord from "discord-rpc";
import * as times from "./times";

const rpc = new discord.Client({ transport: "ipc" });

function Form() {
  const [formData, setFormData] = useState({
    appId: "",
    state: "",
    details: "",
    time: "default", // Set a default value for time
    untilTime: 0,
    lgImgKey: "",
    lgImgTxt: "",
    smImgKey: "",
    smImgTxt: "",
    btnTxt: "",
    btnLink: "",
  });

  // Handle changes for text inputs
  const handleTextChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle changes for radio buttons
  const handleRadioChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle changes for the custom-time input
  const handleCustomTimeChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: parseInt(value), // Parse the input as an integer
    });
  };

  useEffect(() => {
    const dclientId = formData.appId;
    rpc.login({ clientId: dclientId });
  }, [formData.appId]);
  

  const handleSubmit = (e) => {
    e.preventDefault();

    switch (formData.time) {
      case "none":
        formData.time = null;
        break;
  
      case "local":
        formData.time = times.localTime();
        break;
  
      case "custom":
        formData.time = formData.untilTime;
        break;
  
      default:
        formData.time = new Date();
        break;
    }
    rpc.on('ready', () => {
      console.log("custom status maker by cinarkk");
      try {
        rpc.setActivity({
          state: formData.state,
          details: formData.details,
          startTimestamp: formData.time,
          endTimestamp: formData.untilTime,
          largeImageKey: formData.lgImgKey,
          largeImageText: formData.lgImgTxt,
          smallImageKey: formData.smImgKey,
          smallImageText: formData.smImgTxt,
          buttons: [
            {
              label: formData.btnTxt,
              url: formData.btnLink,
            },
            {
              label: "Get Custom RPC By CinarKK",
              url: "https://github.com/CinarKK9/custom-discord-status-maker.git",
            },
          ],
        });
      } catch (error) {
        let errs = document.createElement("p")
        errs.innerHTML(`There Was an Error Setting Status ${error}`)
      }
    });

    // Clear the form after submission
    setFormData({
      appId: "",
      state: "",
      details: "",
      time: "default",
      untilTime: 0,
      lgImgKey: "",
      lgImgTxt: "",
      smImgKey: "",
      smImgTxt: "",
      btnTxt: "",
      btnLink: "",
    });
  };

  return (
    <>
      <div className="row">
        <div className="col">
          <form
            onSubmit={handleSubmit}
            method="post"
            style={{
              userSelect: "text",
              color: "#fff",
              fontSize: "14px",
              textTransform: "uppercase",
              fontFamily: "Rubik",
            }}
          >
            <div className="row mb-3">
              <div className="col">
                <label htmlFor="app-id" className="form-label">
                  application id
                </label>
                <input
                  value={formData.appId}
                  onChange={handleTextChange}
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
                  value={formData.state}
                  onChange={handleTextChange}
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
                  value={formData.details}
                  onChange={handleTextChange}
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
                  type="radio"
                  name="time"
                  value="none"
                  onChange={handleRadioChange}
                  checked={formData.time === "none"}
                  className="form-check-input mx-1"
                />
                <label htmlFor="time" className="me-3">
                  None
                </label>
                <input
                  defaultChecked
                  type="radio"
                  name="time"
                  value="default"
                  onChange={handleRadioChange}
                  checked={formData.time === "default"}
                  className="form-check-input mx-1"
                />
                <label htmlFor="time" className="me-3">
                  default
                </label>
                <input
                  type="radio"
                  name="time"
                  value="local"
                  onChange={handleRadioChange}
                  checked={formData.time === "local"}
                  className="form-check-input mx-1"
                />
                <label htmlFor="time" className="me-3">
                  local time
                </label>
                <input
                  type="radio"
                  name="time"
                  value="custom"
                  onChange={handleRadioChange}
                  checked={formData.time === "custom"}
                  className="form-check-input mx-1"
                />
                <label htmlFor="time" className="me-3">
                  until
                </label>
              </div>
              <div className="col">
                <input
                  type="text"
                  name="custom-time"
                  onChange={handleCustomTimeChange}
                  value={formData.untilTime}
                  id="custom-time"
                  className="form-control"
                  placeholder="ENTER UNIX TIME (UNTIL TIME)"
                />
              </div>
            </div>
            <div className="row mb-4">
              <div className="col">
                <label htmlFor="large-img-key" className="form-label">
                  large image key
                </label>
                <input
                  type="text"
                  value={formData.lgImgKey}
                  onChange={handleTextChange}
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
                  type="text"
                  value={formData.lgImgTxt}
                  onChange={handleTextChange}
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
                  type="key"
                  value={formData.smImgKey}
                  onChange={handleTextChange}
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
                  type="text"
                  value={formData.smImgTxt}
                  onChange={handleTextChange}
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
                  type="text"
                  value={formData.btnTxt}
                  onChange={handleTextChange}
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
                  type="text"
                  value={formData.btnLink}
                  onChange={handleTextChange}
                  name="button-link"
                  id="button-link"
                  className="form-control"
                />
              </div>
            </div>
            <button type="submit" className="sm-btn rounded">
              <span>Set Status</span>
            </button>
          </form>
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
}

export default Form;
