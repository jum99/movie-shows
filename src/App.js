import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import BookingForm from "./components/Booking/BookingForm";
import ShowDetails from "./components/ShowDetails/ShowDetails";
import Shows from "./components/Shows/Shows";
import AuthProvider from "./context/AuthProvider";
import NotFound from "./components/NotFound/NotFound";

function App() {
  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <Shows></Shows>
            </Route>
            <Route path="/showDetails/:id">
              <ShowDetails></ShowDetails>
            </Route>
            <Route path="/BookingForm/:id">
              <BookingForm></BookingForm>
            </Route>
            <Route exact path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
