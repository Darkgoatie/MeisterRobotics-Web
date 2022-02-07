const Projects = () => {
  return (
    <div className="section" id="Projects">
      <div className="jumbotron">
        <p className="display-3">Projects</p>
        <p className="lead">
          <ul>
            <li>
              <details>
                <summary>
                  <b>Alumni Chats</b>
                </summary>
                With our Alumni project, which we run as 6989 Kaiser Robotics
                and 8754 Meister, we aim to meet former German High School
                graduates with FRC experiences online and organize enjoyable and
                useful conversations to allow sharing experiences.
              </details>
            </li>
            <li>
              <details>
                <summary>
                  <b>First Library</b>
                </summary>
                In our "First Library" project, which we started as the robotics
                teams of our school, we are translating science and technology
                resources from English to German, Turkish, French and Japanese
                in order to spread them all over the world.
              </details>
            </li>
            <li>
              <details>
                <summary>
                  <b>Learntech</b>
                </summary>
                As Private German High School Robotics Teams, we provide free
                coding, design and game design trainings to our primary and
                secondary school friends on online platforms.
              </details>
            </li>
            <li>
              <details>
                <summary>
                  <b>Scientist Videos</b>
                </summary>
                Believing in the power of visual learning, we have set ourselves
                the goal of delivering videos about science, technology,
                engineering, art and mathematics to the largest audience we can
                reach.
              </details>
            </li>
          </ul>
        </p>
      </div>
    </div>
  );
};

export default Projects;
