import React, { useEffect } from "react";
import { Link } from 'react-scroll'

function NavBar() {
    useEffect(() => {
      document.querySelectorAll(".copy-link").forEach((copyLinkParent) => {
            const inputField = copyLinkParent.querySelector(".copy-link-input");
            const copyButton = copyLinkParent.querySelector(".copy-link-button");
            const text = inputField.value;

            inputField.addEventListener("focus", () => inputField.select());

            copyButton.addEventListener("click", () => {
            // inputField.select();
            navigator.clipboard.writeText(text);

            inputField.value = "Copied!";
            setTimeout(() => (inputField.value = text), 1500);
            });
        });
    }, [])
    

    return (<header class="p-3 mb-3 border-bottom">
            <div class="container">
            <div class>
                <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                    <li><Link to="landing-page" smooth={true} duration={200} offset={-200} class="nav-link px-2 link-body-emphasis">Home</Link></li>
                    <li><Link to="about-page" smooth={true} duration={200} offset={-55} class="nav-link px-2 link-body-emphasis">About Me</Link></li>
                    <li><Link to="projects-page" smooth={true} duration={200} offset={-55} class="nav-link px-2 link-body-emphasis">Work</Link></li>
                    
                    <li>
                        <div class="dropdown nav-link px-2 link-body-emphasis">
                        <button class="dropbtn">Contact Me</button>
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
                    </li>

                </ul>
            </div>
            </div>
        </header>)
}

export default NavBar;