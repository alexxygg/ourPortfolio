function BfterNav() {
  return (
    <div id="allProjects">
      <div id="topAfterQuote">
        <h2 className="mysteryh2">
          <a
            // target for open link in new tab
            target="_blank"
            className="btn btn-success"
            type="button"
            href="https://github.com/alexxygg"
          >
            ***Check my GitHub profile out!***
          </a>
        </h2>
        <p className="mb-5">(Opens in a NEW TAB)</p>
      </div>
      <h2 className="mb-5 techs">Technologies I've worked with:</h2>
      <div id="main1">
        <nav>
          <div class="div">
            <img src="html.png" alt=""></img>
          </div>
          <div class="div">
            <img src="css3.png" alt=""></img>{" "}
          </div>
          <div class="div ">
            <img class="mr-4" src="javascript.png" alt=""></img>{" "}
          </div>
          <span></span>
          <div class="div">
            <img src="bootstrap.png" alt=""></img>{" "}
          </div>{" "}
          <div class="div">
            <img src="react.png" alt=""></img>{" "}
          </div>
          <div class="div">
            <img src="node-js.png" alt=""></img>{" "}
          </div>
          <div class="div">
            <img src="express.png" alt=""></img>{" "}
          </div>
          <div class="div">
            <img src="mongodb.png" alt=""></img>{" "}
          </div>
        </nav>
      </div>
      <div id="main2">
        <h2 className="mb-5">My projects </h2>
        <div id="projectsDiv" className="col-10 col-lg-6 m-auto">
          <div>
            <h2 className="text-center">Calculator (Netlify)</h2>
            <a href="https://alexxyggcalculator.netlify.app/" target="_blank">
              <img src="./calculatorDemoPic.png" />
            </a>
          </div>
          <div>
            <h2 className="text-center">Etch-a-Sketch (Netlify)</h2>
            <a
              href="https://alexxygg-etch-a-sketch.netlify.app/"
              target="_blank"
            >
              <img src="./etchAsketchDemoPic.png" />
            </a>
          </div>{" "}
          <div>
            <h2 className="text-center">Rock Paper Scissors (Netlify)</h2>
            <a
              href="https://alexxygg-rock-paper-scissors.netlify.app/"
              target="_blank"
            >
              <img src="./rpsDemoPic.png" />
            </a>
          </div>{" "}
          <div>
            <h2 className="text-center">yelpCamp Clone (Heroku)</h2>
            <a href="https://alexxygg-yelpcamp.herokuapp.com/" target="_blank">
              <img src="./yelpCampDemoPic.png" />
            </a>
          </div>{" "}
          <div>
            <h2>Calculator</h2>
            <a href="https://alexxyggcalculator.netlify.app/" target="_blank">
              <img src="./calculatorDemoPic.png" />
            </a>
          </div>{" "}
          <div>
            <h2>Calculator</h2>
            <a href="https://alexxyggcalculator.netlify.app/" target="_blank">
              <img src="./calculatorDemoPic.png" />
            </a>
          </div>{" "}
        </div>
      </div>
    </div>
  );
}

export default BfterNav;
