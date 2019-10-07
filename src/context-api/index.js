import React, { Component } from "react";
import "./styles.css";

const ProfileContext = React.createContext();

class Profile extends Component {
    constructor(props) {
        super(props);

        this.changeName = this.changeName.bind(this);

        this.state = {
            user: {
                name: "Davis Jones"
            },
            changeName: this.changeName
        };
    }

    changeName() {
        this.setState({ user: { name: "Travis MCcoy" } });
    }

    render() {
        return (
            <ProfileContext.Provider value={this.state}>
                <Dashboard />
            </ProfileContext.Provider>
        );
    }
}

function Dashboard(props) {
    return (
        <div className="main">
            <div className="sidebar-section">
                <SideBar />
            </div>
            <div className="main-section">
                <Main />
            </div>
        </div>
    );
}

function Main(props) {
    return (
        <ProfileContext.Consumer>
            {value => (
                <React.Fragment>
                    <TopBar />
                    <h1>Main</h1>
                    <button onClick={value.changeName}>Change Name</button>
                </React.Fragment>
            )}
        </ProfileContext.Consumer>
    );
}

function TopBar(props) {
    return (
        <ProfileContext.Consumer>
            {value => (
                <div className="topbar">
                    <span>{value.user.name}</span>
                </div>
            )}
        </ProfileContext.Consumer>
    );
}

function SideBar(props) {
    return (
        <ProfileContext.Consumer>
            {value => (
                <React.Fragment>
                    <h2>Hello, {value.user.name}</h2>
                    <h1>Sidebar</h1>
                </React.Fragment>
            )}
        </ProfileContext.Consumer>
    );
}

export default Profile;