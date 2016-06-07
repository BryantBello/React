class RobotItems extends React.Component {
  render() {
    const topics = ["React", "JSX", "JavaScript", "Programming"];
    return (
      <div>
        <h3>Topics I am  very interested in JavaScript</h3>
        <ul>
          {topics.map( topic => <li>{topic}</li>)}
        </ul>
      </div>
    );
  }
}
