export default function SideNav() {
  return <div class="sidenav">
            <img src="/uofc.png" alt="UofC logo" class="logo"/>
            <h1 id="header">ICT Explorer + Room Finder</h1>


            <form>
            <h2>External view options:</h2>
                <div className="row">
                    <input type="radio" id="ict" name="which_view" value="ict" checked="checked"/>
                    <label for="ict">ICT building only</label>
                </div>
                <div className="row">
                    <input type="radio" id="full" name="which_view" value="full"/>
                    <label for="full"> Full campus satellite view (loads longer)</label>
                </div>
                <div className="row" id="tileOption">
                    <input type="checkbox" id="tileset" value="none"/>
                    <label for="tileset">Show default tileset</label>
                </div>
            </form>

            <div className="dropdowns">
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
