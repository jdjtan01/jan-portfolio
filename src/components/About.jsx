import React from "react";
import HTML from "../images/html.png";
import CSS from "../images/css.png";
import JavaScript from "../images/javascript.png";
import ReactImg from "../images/react.png";
import Node from "../images/node.png";
import Github from "../images/github-mark.png";
import Mongo from "../images/mongo.png";
import Express from "../images/express.png";
import PostgreSQL from "../images/postgresql.png";
import MySQL from "../images/msql-logo.png"


function About() {
    return (
        <div name="about-page" id="about-page">
            <div class="container col-12 pt-4">

                <div class="row justify-content-md-center mx-0 px-0 align-items-center">
                    <h1 class="lead display-4 pb-2 border-bottom text-center text-sm-start mb-5">About Me</h1>
                    <div class="col-5">
                        <p class="display-6 text-sm-end mx-4">Hi! Again, I'm Jan, nice to meet you! Please take a look around!</p>
                    </div>

                    <div div class="col-5">
                        <p id="my-description-3" class="lead">I spent the last two years in full stack development going through highly recommended online courses and bootcamps and building an array of personal projects some of which you'll see on the next page. I enjoy programming at either end of the tech stack whether it be designing data models or optimizing database queries.</p>
                    </div>
                </div>

            </div>

            <div class="container px-4 py-5" id="icon-grid">
                <h2 class="pb-2 border-bottom">My Tools</h2> 

                <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5 g-4 py-5"> 

                    <div class="col d-flex align-items-center pb-3 tool-div">
                        <img src={HTML} class="img-fluid mx-1" alt="html"  width="45px"/>
                        <div> 
                            <h3 class="fw-bold mb-0 fs-4 text-body-emphasis">HTML</h3> 
                        </div> 
                    </div> 
                    
                    <div class="col d-flex align-items-center pb-3 tool-div"> <img src={CSS} class="img-fluid mx-1" alt="html"  width="45px"/>
                        <div>
                            <h3 class="fw-bold mb-0 fs-4 text-body-emphasis">CSS</h3>
                        </div> 
                    </div> 
                    
                    <div class="col d-flex align-items-center pb-3 tool-div"> <img src={JavaScript} class="img-fluid mx-1" alt="html"  width="45px"/> 
                        <div>
                            <h3 class="fw-bold mb-0 fs-4 text-body-emphasis">JavaScript</h3>
                        </div>
                    </div> 
                    
                    <div class="col d-flex align-items-center pb-3 tool-div"> <img src={Express} class="img-fluid mx-1" alt="html"  width="45px"/>
                        <div>
                            <h3 class="fw-bold mb-0 fs-4 text-body-emphasis">Express</h3>
                        </div>
                    </div> 
                    
                    <div class="col d-flex align-items-center pb-3 tool-div"> <img src={ReactImg} class="img-fluid mx-1" alt="html"  width="45px"/>
                        <div>
                            <h3 class="fw-bold mb-0 fs-4 text-body-emphasis">React</h3>
                        </div>
                    </div>
                    
                    <div class="col d-flex align-items-center pb-3 tool-div"><img src={Node} class="img-fluid mx-1" alt="html"  width="45px"/>
                        <div>
                            <h3 class="fw-bold mb-0 fs-4 text-body-emphasis">Node</h3>
                        </div>
                    </div> 
                    
                    <div class="col d-flex align-items-center pb-3 tool-div"><img src={Github} class="img-fluid mx-1" alt="html"  width="45px"/>
                        <div>
                            <h3 class="fw-bold mb-0 fs-4 text-body-emphasis">Github</h3>
                        </div>
                    </div> 
                    
                    <div class="col d-flex align-items-center pb-3 tool-div"><img src={Mongo} class="img-fluid mx-1" alt="html"  width="45px"/>
                        <div>
                            <h3 class="fw-bold mb-0 fs-4 text-body-emphasis">MongoDB</h3>
                        </div>
                    </div> 

                    <div class="col d-flex align-items-center pb-3 tool-div"><img src={PostgreSQL} class="img-fluid mx-1" alt="html"  width="45px"/>
                        <div>
                            <h3 class="fw-bold mb-0 fs-4 text-body-emphasis ">PostgreSQL</h3>
                        </div>
                    </div>

                    <div class="col d-flex align-items-center pb-3 tool-div"><img src={MySQL} class="img-fluid mx-1" alt="html"  width="45px"/>
                        <div>
                            <h3 class="fw-bold mb-0 fs-4 text-body-emphasis">MySQL</h3>
                        </div>
                    </div>
                </div> 
            </div>
    </div>
        
    )
}

export default About;