import React from "react";
import { Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';

export default function Projects() {
    return (
      <div>
        <div style={{ width: "100%", margin: "auto" }}>
          <Grid className="projects">
            <Cell col={12}>
              <br />
              <br />
              <div className="projects-banner">
                <Card shadow={0} style={{ width: "512px", margin: "auto" }}>
                  <CardTitle
                    style={{
                      color: "#000000",
                      height: "176px",
                      background:
                        "url(images/gaScreen.png) center",
                    }}
                  >
                  </CardTitle>
                  <CardText>
                    An easy to use Movie Search App. Just enter a movie and search and it will provide you with details along with where to stream the movie.
                  </CardText>
                  <CardActions border>
                    <Button colored href="https://skylar-harwell.github.io/Movie_Project/">Live Demo</Button>
                    <Button colored href="https://github.com/Skylar-Harwell/Movie_Project">GitHub Repo</Button>
                  </CardActions>
                  <CardMenu style={{ color: "#fff" }}>
                    <IconButton name="share" />
                  </CardMenu>
                </Card>
                    <br/>
                <Card shadow={0} style={{ width: "512px", margin: "auto" }}>
                  <CardTitle
                    style={{
                      color: "#000000",
                      height: "176px",
                      background:
                        "url(images/passwordGen.png) center",
                    }}
                  >
                  </CardTitle>
                  <CardText>
                    Password Generator app that asks questions regarding length, type of characters, and other factors then spits out a randomly generated password for you to use. 
                  </CardText>
                  <CardActions border>
                    <Button colored href="https://skylar-harwell.github.io/Password_Generator/">Live Demo</Button>
                    <Button colored href="https://github.com/Skylar-Harwell/Password_Generator">GitHub Repo</Button>
                  </CardActions>
                  <CardMenu style={{ color: "#fff" }}>
                    <IconButton name="share" />
                  </CardMenu>
                </Card>
                <br/>
                <Card shadow={0} style={{ width: "512px", margin: "auto" }}>
                  <CardTitle
                    style={{
                      color: "#fff",
                      height: "176px",
                      background:
                        "url(images/note_taker_home.png)",
                    }}
                  >
                  </CardTitle>
                  <CardText>
                    App that allows you to store, track, and delete notes.
                  </CardText>
                  <CardActions border>
                    <Button colored href="https://lit-ocean-24826.herokuapp.com/">Live Demo</Button>
                    <Button colored href="https://github.com/Skylar-Harwell/Express_Note_Taker">GitHub Repo</Button>
                  </CardActions>
                  <CardMenu style={{ color: "#fff" }}>
                    <IconButton name="share" />
                  </CardMenu>
                </Card>
                <br/>
                <Card shadow={0} style={{ width: "512px", margin: "auto" }}>
                  <CardTitle
                    style={{
                      color: "#fff",
                      height: "176px",
                      background:
                        "url(images/workdaySch.png) center",
                    }}
                  >
                  </CardTitle>
                  <CardText>
                    Scheduleing app that allows you to add, remove, and update events and meetings. Realtime time tracking to make sure you stay up to date to all your appointments. 
                  </CardText>
                  <CardActions border>
                    <Button colored href="https://skylar-harwell.github.io/Work_Day_Scheduler/">Live Demo</Button>
                    <Button colored href="https://github.com/Skylar-Harwell/Work_Day_Scheduler">GitHub Repo</Button>
                  </CardActions>
                  <CardMenu style={{ color: "#fff" }}>
                    <IconButton name="share" />
                  </CardMenu>
                </Card>
                <br/>
                <Card shadow={0} style={{ width: "512px", margin: "auto" }}>
                  <CardTitle
                    style={{
                      color: "#fff",
                      height: "176px",
                      background:
                        "url(images/employee_tracker_img.png)",
                    }}
                  >
                  </CardTitle>
                  <CardText>
                    Employee tracking app using the terminal line to View, Add, Update, and Delete Employees from departments, Managers, and Roles.
                  </CardText>
                  <CardActions border>
                    <Button colored href="https://github.com/Skylar-Harwell/Employee_Tracking_App">GitHub Repo</Button>
                  </CardActions>
                  <CardMenu style={{ color: "#fff" }}>
                    <IconButton name="share" />
                  </CardMenu>
                </Card>
              </div>
            </Cell>
          </Grid>
        </div>
      </div>
    );
}