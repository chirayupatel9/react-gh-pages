import * as React from "react";
import {Avatar} from 'react-lorem-ipsum';
import * as Datetime from 'react-datetime';
export const Header = () => (
  <header>
    <h1>Today</h1>
    <span className="date">{ Date.parse}{new Date().toDateString()}
    </span>

    <div className="avatar">
     <Avatar src="https://avatars.githubusercontent.com/u/22398921?v=4"/>
    </div>
  </header>
);
