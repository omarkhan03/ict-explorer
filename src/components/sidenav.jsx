import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';

export default function SideNav() {
  return <div class="sidenav">
            <img src="/uofc.png" alt="UofC logo" class="logo"/>
            <h1 id="header">Campus Explorer + Room Finder</h1>
          
            <div class="currently-selected">
                Selected building:
                <span id="selected-building">Information and Communications Technology (ICT)</span>
                <br/>
                <br/>
            </div>
          
            <div class="dropdowns">
              <div class="dropdown buildings">
                  <span>Select building</span>
                  <div class="dropdown-content">
                      <p class="b1">Information and Communications Technology (ICT)</p>
                      <p>Earth Sciences</p>
                      <p>Mathematical Sciences</p>
                      <p>-</p>
                      <p>-</p>
                      <p>-</p>
                      <p>-</p>
                      <p>-</p>
                      <p>-</p>
                  </div>
              </div>
              
              <div class="dropdown floors">
                  <span>Select floor</span>
                  <div class="dropdown-content">
                      <p class="f1">Floor 1</p>
                      <p class="f2">Floor 2</p>
                      <p class="f3">Floor 3</p>
                      <p class="f4">Floor 4</p>
                      <p class="f5">Floor 5</p>
                      <p class="f6">Floor 6</p>
                      <p class="f7">Floor 7</p>
                  </div>
              </div>
          </div>
          
          <p id="goto" class="goto-inactive">Select a floor</p>
          <p id="error" class="error"></p> 
          <a class="source-code" target="_blank" href="https://github.com/omarkhan03/ICT-Explorer">Source code</a> 
        </div>
}