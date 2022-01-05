import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Training from "./images/Training.jpg";
import Webinars from "./images/webinars.jpg";
import Videos from "./images/Videos.jpg";
import Podcast from "./images/Podcast.jpg";
import Pmspeakes from "./images/Pmspeaks.jpg";
import blogs from "./images/blogs.jpg";

const routes = [
  {
    path: "/Trainings",
    exact: true,
    sidebar: () => <div>Trainings</div>,
    main: () => <img src={Training} alt="training" />
  },
  {
    path: "/Meetups",
    sidebar: () => <div>Meetups</div>,
    main: () => <h2>Awesome Meetups will be here soon</h2>
  },
  {
    path: "/Webinars",
    sidebar: () => <div>Webinars</div>,
    main: () => <img src={Webinars} alt="training" />
  },
  {
    path: "/Conferences",
    sidebar: () => <div>Conferences</div>,
    main: () => <h2>Conferences</h2>
  },
  {
    path: "/Videos",
    sidebar: () => <div>Videos</div>,
    main: () => <img src={Videos} alt="training" />
  },
  {
    path: "/PM speak series",
    sidebar: () => <div>PM Speak Series</div>,
    main: () => <img src={Pmspeakes} alt="training" />
  },
  {
    path: "/Blogs",
    sidebar: () => <div>Blogs</div>,
    main: () => <img src={blogs} alt="training" />
  },
  {
    path: "/Podcasts",
    sidebar: () => <div>Podcasts</div>,
    main: () => <img src={Podcast} alt="training" />
  },
  {
    path: "/Be A Speaker",
    sidebar: () => <div>Be A Speaker</div>,
    main: () => <h2>Be A Speaker</h2>
  },
  {
    path: "/Be A Volunteer",
    sidebar: () => <div>Be A Volunteer</div>,
    main: () => <h2>Be A Volunteer</h2>
  },
  {
    path: "/About Us",
    sidebar: () => <div>About Us</div>,
    main: () => <h2>About Us</h2>
  }
];

export default function SidebarExample() {
  return (
    <Router>
      <div style={{ display: "flex" }}>
        <div
          style={{
            padding: "0px",
            width: "20%",
            background: "#f0f0f0"
          }}
        >
          <ul style={{ listStyleType: "none", padding: 0 }}>
            <li>
              <Link to="/Trainings">Trainings</Link>
            </li>
            <br />
            <li>
              <Link to="/Meetups">Meetups</Link>
            </li>
            <br />
            <li>
              <Link to="/Webinars">Webinars</Link>
            </li>
            <br />
            <li>
              <Link to="/Conferences">Conferences</Link>
            </li>
            <br />
            <li>
              <Link to="/Videos">Videos</Link>
            </li>
            <br />
            <li>
              <Link to="/PM Speak Series">PM Speak Series</Link>
            </li>
            <br />
            <li>
              <Link to="/Blogs">Blogs</Link>
            </li>
            <br />
            <li>
              <Link to="/Podcasts">Podcasts</Link>
            </li>
            <br />
            <li>
              <Link to="/Be A Speaker">Be A Speaker</Link>
            </li>
            <br />
            <li>
              <Link to="/Be A Volunteer">Be A Volunteer</Link>
            </li>
            <br />
            <li>
              <Link to="/About Us">About Us</Link>
            </li>
          </ul>
        </div>

        <div style={{ flex: 2, padding: "5px" }}>
          <Switch>
            {routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                children={<route.main />}
              />
            ))}
          </Switch>
        </div>
      </div>
    </Router>
  );
}
