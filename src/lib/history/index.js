/**
 * Created by thoriampas on 11/26/2018.
 */
import { createBrowserHistory } from "history";

export const history = createBrowserHistory();

// Get the current location.
const location = history.location;

// Listen for changes to the current location.
const unlisten = history.listen((location, action) => {
    // location is an object like window.location
    console.log(action, location.pathname, location.state);
});

// Use push, replace, and go to navigate around.
export const push =(location) => history.push(location)

// To stop listening, call the function returned from listen().
unlisten();