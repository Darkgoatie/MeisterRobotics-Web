import './projects.css';

const Projects = () => {
  return (
    <div className="section" id="Projects">
      <div className="jumbotron" style={{ width: "100%" }}>
        <p className="display-3">Projects</p>
        <p className="lead">
          <ul style={{ listStyleType: "none" }}>
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
                  <b>Roots of Stem Videos</b>
                </summary>
                Believing in the power of visual learning, we have set ourselves
                the goal of delivering videos about science, technology,
                engineering, art and mathematics to the largest audience we can
                reach.
              </details>
            </li>
            <li>
              <details>
                <summary>
                  <b>Support for Life Association</b>
                </summary>
                By completing the "support for the prevention of gender-based violence"
                training of the life support association, we became conscious as a
                team about one of today's most important current problems.
              </details>
            </li>
            <li>
              <details>
                <summary>
                  <b>Riders</b>
                </summary>
                We had the chance to learn and experience many things on the way
                to the "Riders trainings" that we entered with many FRC teams in
                order to add new ones to the previous experiences of our team.
              </details>
            </li>
          </ul>
        </p>
      </div>
    </div>
  );
};

export default Projects;
