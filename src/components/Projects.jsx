import React from "react";
import ecom from "../images/Clothing_ss2.png"
import keeper from "../images/keeper-app-ss.png"
import simongame from "../images/the-simon-game-ss.png"
import famtravtrack from "../images/travel-tracker-ss.png"

function Projects() {
    return (
        <div name="projects-page" class="pt-5">

            <h1 class="container">Check out some of my works:</h1>

    
    <div class="container my-5 project">
      <div class="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
        <div class="col-lg-7 p-3 p-lg-5 pt-lg-3">
          <h1 class="display-4 fw-bold lh-1 text-body-emphasis">E-Commerce Website</h1>
          <p class="lead">A dynamic e-commerce platform tailored for clothing businesses, allowing them to showcase and sell their products online. With a user-friendly shopping cart, both business owners and customers can easily manage selected items. The platform also features secure, hassle-free payment processing to ensure a smooth and trustworthy checkout experience.</p>
          <div class="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">

            <a href="https://ecommerce-beta-six-77.vercel.app/" target="_blank">
            <button type="button" class="btn btn-primary btn-lg px-4 me-md-2 fw-bold">Demo</button>
            </a>

            <a href="https://gitlab.com/jdjtan/ecommerce" target="_blank">
            <button type="button" class="btn btn-outline-secondary btn-lg px-4">Code</button>
            </a>
          </div>
        </div>
        <div class="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg project-img">
            <a href="https://ecommerce-beta-six-77.vercel.app/" target="_blank"><img class="rounded-lg-3" src={ecom} alt="website_pic" width="600"/></a>
        </div>
      </div>
    </div>

    
    <div class="container my-5 project">
      <div class="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
        <div class="col-lg-7 p-3 p-lg-5 pt-lg-3">
          <h1 class="display-4 fw-bold lh-1 text-body-emphasis">Keeper (A notes taking app)</h1>
          <p class="lead">Keeper is a similar app to Google's note taking app "Google Keep" where users can list their notes to be remembered and done in their leisure. Made using Vite React</p>
          <div class="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
            <a href="https://jdjtan01.github.io/keeper-app/" target="_blank">
                <button type="button" class="btn btn-primary btn-lg px-4 me-md-2 fw-bold">Demo</button>
            </a>

            <a href="https://github.com/jdjtan01/keeper-app.git" target="_blank">
            <button type="button" class="btn btn-outline-secondary btn-lg px-4">Code</button>
            </a>
          </div>
        </div>
        <div class="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg project-img">
            <a href="https://jdjtan01.github.io/keeper-app/" target="_blank"><img class="rounded-lg-3" src={keeper} alt="keeper_app_pic" width="600"/></a>
        </div>
      </div>
    </div>



    <div class="container my-5 project">
      <div class="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
        <div class="col-lg-7 p-3 p-lg-5 pt-lg-3">
          <h1 class="display-4 fw-bold lh-1 text-body-emphasis">Family Travel Tracker</h1>
          <p class="lead">A travel tracker app that can be used by multiple users. Utilizes the use of PostgreS database for the storing of data.</p>
          <div class="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
                <button type="button" class="btn btn-secondary btn-lg px-4 me-md-2 fw-bold" disabled>Demo</button>

            <a href="https://github.com/jdjtan01/family-travel-tracker.git" target="_blank">
            <button type="button" class="btn btn-outline-secondary btn-lg px-4">Code</button>
            </a>
          </div>
        </div>
        <div class="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg project-img">
            <img class="rounded-lg-3" src={famtravtrack} alt="keeper_app_pic" width="500"/>
        </div>
      </div>
    </div>

    
    <div class="container my-5 project">
      <div class="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
        <div class="col-lg-7 p-3 p-lg-5 pt-lg-3">
          <h1 class="display-4 fw-bold lh-1 text-body-emphasis">The Simon Game</h1>
          <p class="lead">The Simon game is an electronic memory game where players repeat sequences of flashing lights and tones. This game is made purely of HTML, CSS, and Javascript to demonstrate proficiency and flexibility with using said methods.</p>
          <div class="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
            <a href="https://jdjtan01.github.io/The-Simon-Game/" target="_blank">
                <button type="button" class="btn btn-primary btn-lg px-4 me-md-2 fw-bold">Demo</button>
            </a>

            <a href="https://github.com/jdjtan01/The-Simon-Game.git" target="_blank">
            <button type="button" class="btn btn-outline-secondary btn-lg px-4">Code</button>
            </a>
          </div>
        </div>
        <div class="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg project-img">
            <a href="https://jdjtan01.github.io/The-Simon-Game/" target="_blank"><img class="rounded-lg-3" src={simongame} alt="simon_game" width="500"/></a>
        </div>
      </div>
    </div>

        </div>
    )
}

export default Projects;