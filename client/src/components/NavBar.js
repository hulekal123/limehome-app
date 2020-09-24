import * as React from 'react';
import logo from '../icon/limehome_logo.svg' ;
import burger from '../icon/map_burger.svg' ;
import '../css/NavBar.css';

export class NavBar extends React.Component{
    render() { 
        return (
            <div class="nav">
              <div class = "logo"><img src={logo} /> </div> 
              <div class = "burger"><img src={burger} /> </div>
            </div>
        );
    }
}