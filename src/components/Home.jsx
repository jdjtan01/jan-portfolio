import avatarLogo from '../images/2x2.jpg'
import Resume from "../files/RESUME_TAN.pdf"

function Home() {
    var i = 0;
    var txt = "I'm a Full-Stack Web Developer"; /* The text */
    var speed = 90; /* The speed/duration of the effect in milliseconds */

    window.onload = function typeWriter() {
    if (i < txt.length) {
        document.getElementById("my-description-2").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
    }

    // setTimeout(typeWriter, 3000);

    return (
        <div name="landing-page" id="landing-page" class="px-4 py-5 my-5 text-center container">
               
            <div class="row justify-content-md-center mx-0 px-0 align-items-center">
                <div class="col-lg-4 col-sm-9">
                    <h1 id="hey-there" class="display-4 fw-bold text-body-emphasis">Hey There!</h1>
                    <p id="my-description" class="lead mb-0">My name is <strong> Jan Daniele Tan</strong>.</p>
                    <p id="my-description-2" class="lead"></p>
                </div>
                <div class="col-lg-3 col-sm-12">
                    <img id="my-avatar" class="mb-2" src={avatarLogo} alt="my_avatar" width="250" height="250"/>
                </div>
            </div>
            
            {/* Buttons */}
            <div class="d-grid gap-3 d-sm-flex justify-content-sm-center">
                <div class="dropdown nav-link px-2 link-body-emphasis">
                    <button type="button" class="btn btn-outline-primary btn-lg">My Contacts</button>
                    <div class="dropdown-content">
                                 <a>My Email: 
                                    <div class="copy-link">
                                    <input type="text" class="copy-link-input" value="jdjtan01@gmail.com" readonly />
                                    <button type="button" class="copy-link-button">
                                        <span class="material-icons">content_copy</span>
                                    </button>
                                    </div>
                                 </a>


                                <a class="text-body-secondary" href="https://github.com/jdjtan01" aria-label="Github" target="_blank">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
                                    </svg> Github
                                </a>


                                <a class="text-body-secondary" href="https://gitlab.com/jdjtan" aria-label="Gitlab" target="_blank">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-gitlab" viewBox="0 0 16 16">
                                    <path d="m15.734 6.1-.022-.058L13.534.358a.57.57 0 0 0-.563-.356.6.6 0 0 0-.328.122.6.6 0 0 0-.193.294l-1.47 4.499H5.025l-1.47-4.5A.572.572 0 0 0 2.47.358L.289 6.04l-.022.057A4.044 4.044 0 0 0 1.61 10.77l.007.006.02.014 3.318 2.485 1.64 1.242 1 .755a.67.67 0 0 0 .814 0l1-.755 1.64-1.242 3.338-2.5.009-.007a4.05 4.05 0 0 0 1.34-4.668Z"/>
                                    </svg> GitLab
                                </a>
                            </div>
                </div>


                    <a href={Resume} download="RESUME_TAN.pdf" target="_blank">
                        <button type="button" class="btn btn-outline-secondary btn-lg px-4">Download CV</button>
                    </a>
                
            </div>
        </div>
    )
}

export default Home