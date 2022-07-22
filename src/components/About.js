import React from "react";

function About() {
        return (
            <div>
            <p className="content is-medium">Developing coding skills</p>
            <hr />
            <img className="my-pic" src={process.env.PUBLIC_URL + '/img/profile.jpg'} alt="Brynn Kiloran"/>
            <p className="content is-italic mt-4">
                I'm Brynn, a devloping coder. I recently started my coding journey. I am still studying code everyday.
            </p>
            <p className="content">
                I have been working on this bootcamp for a few months. I have learned many things. I enjoy coding and learning 
                all the new ways that the world wide web functions. 
            </p>
        </div>
          );
        }
   
export default About;