import React from "react";

let Data = {
  xAppId: "asd",
  xState: "asd",
  xDetails: "asd",
  xTime: "asd",
  xTimeUntil: "",
  xLargeImageKey: "",
  xLargeImageText: "",
  xSmallImageKey: "",
  xSmallImageText: "",
  xButtonText: "",
  xButtonLink: "",
};

function Form() {
  return (
    <>
      <div className="row">
        <div className="col">
          <form
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
                  id="none"
                  className="form-check-input mx-1"
                />
                <label htmlFor="time" className="me-3">
                  None
                </label>
                <input
                  type="radio"
                  name="time"
                  id="default"
                  className="form-check-input mx-1"
                />
                <label htmlFor="time" className="me-3">
                  default
                </label>
                <input
                  type="radio"
                  name="time"
                  id="local"
                  className="form-check-input mx-1"
                />
                <label htmlFor="time" className="me-3">
                  local time
                </label>
                <input
                  type="radio"
                  name="time"
                  id="custom"
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
                  name="button-link"
                  id="button-link"
                  className="form-control"
                />
              </div>
            </div>
            <button type="submit" className="sm-btn rounded">
              <span>SET STATUS</span>
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

export { Data };
export default Form;
