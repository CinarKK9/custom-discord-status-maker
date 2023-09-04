import "./App.css";

function App() {
  return (
    <>
      <div
        className="container-fluid d-flex justify-content-center align-items-center main">
        <h1 className="text-center">
          Custom Discord Status Maker By CinarKK
        </h1>
      </div>
      <div className="container container-fluid d-flex justify-content-start align-items-center h-auto mt-5">
        <form className="rounded w-50">
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
                />
                <label htmlFor="button-url">Button Url</label>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="row">
              <div className="col text-center mb-2">
                <span className="form-text text-light">
                  Select 'Custom Time' To Enable Date Picker
                </span>
              </div>
            </div>
            <div className="col">
              <select name="time" id="time" className="form-select">
                <option defaultValue={"Select"}>Select Time</option>
                <option value="none">None</option>
                <option value="local-time">Local Time</option>
                <option value="activity-time">Activity Time</option>
                <option value="custom-time" id="cts">
                  Custom Time
                </option>
              </select>
            </div>
            <div className="col">
              <input
                type="date"
                name="custom-time"
                id="custom-time"
                className="form-control mb-4"
              />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <button type="submit" className="btn btn-primary w-25">
                Set Status
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default App;
