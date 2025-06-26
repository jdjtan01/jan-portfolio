import React from "react";
import ecom from "../images/Clothing_ss2.png"
import keeper from "../images/keeper-app-ss.png"
import simongame from "../images/the-simon-game-ss.png"
import famtravtrack from "../images/travel-tracker-ss.png"
import bookSearch from "../images/book-search-ss.png"
import mernBlog from "../images/mern-blog-ss.png"
import foodDell from "../images/food-del-ss.png"

function Projects() {
    return (
        <div name="projects-page" class="pt-5  col-sm-12">

            <h1 class="container">Check out some of my works:</h1>

    
    <div class="container my-5 project">
      <div class="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
        <div class="col-lg-6 p-3 p-lg-5 pt-lg-3">
          <h1 class="display-4 fw-bold lh-1 text-body-emphasis mb-3">Food Delivery</h1>
          <p class="lead">A dynamic food delivery website where users can add their choice of food to their own cart for delivery. Food check-out and payment has been made safe and hassle-free thru Stripe. With the use of the admin functionality, business owners can easily track and update orders, and add and remove products from their menu. </p>
          <div class="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">

            <a href="https://food-del-1fuq.onrender.com/" target="_blank">
            <button type="button" class="btn btn-primary btn-lg px-4 me-md-2 fw-bold">Demo</button>
            </a>

            <a href="https://food-del-admin-c7jf.onrender.com/" target="_blank">
            <button type="button" class="btn btn-success btn-lg px-2 me-md-2 fw-bold">Admin</button>
            </a>

            <a href="https://github.com/jdjtan01/food-del.git" target="_blank">
            <button type="button" class="btn btn-outline-secondary btn-lg px-4">Code</button>
            </a>
          </div>
        </div>
        <div class="col-lg-5 offset-lg-1 p-0 overflow-hidden shadow-lg project-img">
            <a href="https://food-del-1fuq.onrender.com/" target="_blank"><img class="rounded-lg-3" src={foodDell} alt="website_pic" width="700"/></a>
        </div>
      </div>
    </div>


    
    <div class="container my-5 project">
      <div class="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
        <div class="col-lg-6 p-3 p-lg-5 pt-lg-3">
          <h1 class="display-4 fw-bold lh-1 text-body-emphasis mb-3">E-Commerce Website</h1>
          <p class="lead">A dynamic e-commerce platform tailored for clothing businesses, allowing them to showcase and sell their products online. With a user-friendly shopping cart, both business owners and customers can easily manage selected items. The platform also features secure, hassle-free payment processing to ensure a smooth and trustworthy checkout experience. Made using ReactJS</p>
          <div class="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">

            <a href="https://ecommerce-beta-six-77.vercel.app/" target="_blank">
            <button type="button" class="btn btn-primary btn-lg px-4 me-md-2 fw-bold">Demo</button>
            </a>

            <a href="https://gitlab.com/jdjtan/ecommerce" target="_blank">
            <button type="button" class="btn btn-outline-secondary btn-lg px-4">Code</button>
            </a>
          </div>
        </div>
        <div class="col-lg-5 offset-lg-1 p-0 overflow-hidden shadow-lg project-img">
            <a href="https://ecommerce-beta-six-77.vercel.app/" target="_blank"><img class="rounded-lg-3" src={ecom} alt="website_pic" width="700"/></a>
        </div>
      </div>
    </div>


  <div class="container my-5 project">
      <div class="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
        <div class="col-lg-6 p-3 p-lg-5 pt-lg-3">
          <h1 class="display-4 fw-bold lh-1 text-body-emphasis mb-3">MyBlog (A blog site)</h1>
          <p class="lead">A blog website with backend and frontend, built using MERN stack. Each user can make and edit their own post/s. Backend is build with Express, Node, and MongoDB, frontend is made using React. Deployed on Render.com.</p>
          <div class="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
            <a href="https://mern-blog-frontend-vq51.onrender.com/" target="_blank">
                <button type="button" class="btn btn-primary btn-lg px-4 me-md-2 fw-bold">Demo</button>
            </a>

            <a href="https://github.com/jdjtan01/mern-blog.git" target="_blank">
            <button type="button" class="btn btn-outline-secondary btn-lg px-4">Code</button>
            </a>
          </div>
        </div>
        <div class="col-lg-5 offset-lg-1 p-0 overflow-hidden shadow-lg project-img">
            <a href="https://mern-blog-frontend-vq51.onrender.com/" target="_blank"><img class="rounded-lg-3" src={mernBlog} alt="book_search_pic" width="500"/></a>
        </div>
      </div>
    </div>


    <div class="container my-5 project">
      <div class="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
        <div class="col-lg-6 p-3 p-lg-5 pt-lg-3">
          <h1 class="display-4 fw-bold lh-1 text-body-emphasis mb-3">Your Book (Book Catalog)</h1>
          <p class="lead">Search books by title, author, or subject. You can also be redirected to the book's page in the OpenLibrary website to see more details. Made using Vite React and using the OpenLibrary API.</p>
          <div class="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
            <a href="https://jdjtan01.github.io/book-search/" target="_blank">
                <button type="button" class="btn btn-primary btn-lg px-4 me-md-2 fw-bold">Demo</button>
            </a>

            <a href="https://github.com/jdjtan01/book-search.git" target="_blank">
            <button type="button" class="btn btn-outline-secondary btn-lg px-4">Code</button>
            </a>
          </div>
        </div>
        <div class="col-lg-5 offset-lg-1 p-0 overflow-hidden shadow-lg project-img">
            <a href="https://jdjtan01.github.io/book-search/" target="_blank"><img class="rounded-lg-3" src={bookSearch} alt="book_search_pic" width="700"/></a>
        </div>
      </div>
    </div>

    
    <div class="container my-5 project">
      <div class="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
        <div class="col-lg-6 p-3 p-lg-5 pt-lg-3">
          <h1 class="display-4 fw-bold lh-1 text-body-emphasis mb-3">Keeper (A notes taking app)</h1>
          <p class="lead">Keeper is a similar app to Google's note taking app "Google Keep" where users can list their notes to be remembered and done in their leisure. Made using Vite React.</p>
          <div class="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
            <a href="https://jdjtan01.github.io/keeper-app/" target="_blank">
                <button type="button" class="btn btn-primary btn-lg px-4 me-md-2 fw-bold">Demo</button>
            </a>

            <a href="https://github.com/jdjtan01/keeper-app.git" target="_blank">
            <button type="button" class="btn btn-outline-secondary btn-lg px-4">Code</button>
            </a>
          </div>
        </div>
        <div class="col-lg-5 offset-lg-1 p-0 overflow-hidden shadow-lg project-img">
            <a href="https://jdjtan01.github.io/keeper-app/" target="_blank"><img class="rounded-lg-3" src={keeper} alt="keeper_app_pic" width="700"/></a>
        </div>
      </div>
    </div>



    <div class="container my-5 project">
      <div class="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
        <div class="col-lg-6 p-3 p-lg-5 pt-lg-3">
          <h1 class="display-4 fw-bold lh-1 text-body-emphasis mb-3">Family Travel Tracker</h1>
          <p class="lead">A travel tracker app that can be used by multiple users. Utilizes the use of PostgreS database for the storing of data.</p>
          <div class="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
                <button type="button" class="btn btn-secondary btn-lg px-4 me-md-2 fw-bold" disabled>Demo</button>

            <a href="https://github.com/jdjtan01/family-travel-tracker.git" target="_blank">
            <button type="button" class="btn btn-outline-secondary btn-lg px-4">Code</button>
            </a>
          </div>
        </div>
        <div class="col-lg-5 offset-lg-1 p-0 overflow-hidden shadow-lg project-img">
            <img class="rounded-lg-3" src={famtravtrack} alt="keeper_app_pic" width="580"/>
        </div>
      </div>
    </div>

    
    <div class="container my-5 project">
      <div class="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
        <div class="col-lg-6 p-3 p-lg-5 pt-lg-3">
          <h1 class="display-4 fw-bold lh-1 text-body-emphasis mb-3">The Simon Game</h1>
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
        <div class="col-lg-5 offset-lg-1 p-0 overflow-hidden shadow-lg project-img">
            <a href="https://jdjtan01.github.io/The-Simon-Game/" target="_blank"><img class="rounded-lg-3" src={simongame} alt="simon_game" width="600"/></a>
        </div>
      </div>
    </div>

        </div>
    )
}

export default Projects;