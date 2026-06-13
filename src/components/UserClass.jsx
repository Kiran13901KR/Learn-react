import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      toy: "click me",
      userInfo: [],
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/kiran13901KR");
    const json = await data.json();
    console.log(json);
    this.setState({ userInfo: [json] });
  }

  render() {
    const { name } = this.props;
    const { toy, userInfo } = this.state;
    return (
      <div>
        <h2>User Class Component</h2>
        <p>This is a simple class component.</p>
        <button
          onClick={() => {
            console.log("Button Clicked", toy);
            this.setState({ toy: "Clicked" });
          }}
        >
          {toy}
        </button>
        {userInfo.length === 0 ? (
          <h2>Waiting for user Info.....</h2>
        ) : (
          userInfo.map((user) => (
            <div key={user.id}>
              <h2>{user.name}</h2>
              <h3>{user.login}</h3>
            </div>
          ))
        )}

        <h2>Name: {name}</h2>
      </div>
    );
  }
}

export default UserClass;
