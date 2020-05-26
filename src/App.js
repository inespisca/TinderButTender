import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Settings from './Settings';
import Messages from './Messages';
import NavBar from './NavBar';
import Chat from './Chat';
import Profile from './Profile';
import { withRouter } from "react-router-dom";
import faker from 'faker';


const ourselves = [
  {
    name: {
      first: 'Alexandra',
      last: 'Santos',
    },
    picture: {
      thumbnail: 'https://i.imgur.com/EkLnHof.jpg',
      large: 'https://i.imgur.com/fKVgPRR.jpg',
    },
    message: 'Hey handsome! How are you?',
    date: '5 nov.',
    contact: {
      LinkedIn: 'https://www.linkedin.com/in/alexandrapatriciosantos/',
      GitHub: 'https://github.com/alexandrapatriciosantos',
    },
    description: "I like long walks on the beach, MDN web docs, and proper indentation. Dislikes: infinite loops, \"failed to render\" messages, and coding in the master branch.",
    dob: {
      age: 25
    }
  },
  {
    name: {
      first: 'Angélina',
      last: 'Riet',
    },
    picture: {
      thumbnail: 'https://i.imgur.com/t4iBPv7.jpg',
      large: 'https://i.imgur.com/knxzOV6.jpg',
    },
    message: 'Voulez-vous coucher avec moi ce soir? ;)',
    date: '31 oct.',
    contact: {
      LinkedIn: 'https://www.linkedin.com/in/angelinariet/',
      GitHub: 'https://github.com/AngelinaRIET',
    },
    description: 'Driven by curiosity and striving for new challenges I’m currently changing my career path to Web Development which captured my attention.',
    dob: {
      age: 28
    }
  },
  {
    name: {
      first: 'Inês',
      last: 'Oliveira',
    },
    picture: {
      thumbnail: 'https://i.imgur.com/v7zP5R8.jpg',
      large: 'https://i.imgur.com/Brhn4Tn.jpg',
    },
    message: "You make my booleans come true!!",
    date: '4 nov.',
    contact: {
      LinkedIn: 'https://www.linkedin.com/in/inesfpoliveira/',
      GitHub: 'https://github.com/inespisca',
    },
    description: 'Life is a paradox. I love languages but I hate how complicated they can be. I love IT but I hate it when devices take a break. I hate rain but I love walking in the rain.',
    dob: {
      age: 26
    }
  },
  {
    name: {
      first: 'Elena',
      last: 'Ortega',
    },
    picture: {
      thumbnail: 'https://i.imgur.com/p9fIRKM.jpg',
      large: 'https://i.imgur.com/wuUXt6P.jpg',
    },
    message: '¡Hola, mundo!',
    date: '3 nov.',
    contact: {
      LinkedIn: 'https://www.linkedin.com/in/elenaortegabaura/',
      GitHub: 'https://github.com/eobwebdevelop',
    },
    description: "Always happy to translate mockups to HTML5 and CSS3. Now learning a lot about javaScript and React at Wild Code School of Lisbon.",
    dob: {
      age: 28
    }
  },

]

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedUser: {
        picture: {},
        name: {},
        dob: {},
        description: ''

      },
      randomUsers: [],
      settings: {
        smoker: false,
        vegetarian: false,
        single: false,
        female: true,
        male: true

      },
    };
  }

  componentDidMount() {
    this.getUser();
    this.getUsers();

  }

  getGenderSelection = () => {
    if (this.state.settings.female === true && this.state.settings.male === false) {
      return '&gender=female'
    } else if (this.state.settings.female === false && this.state.settings.male === true) {
      return '&gender=male'
    } else {
      return ''
    }
  }

  getUser = () => {
    //get quote at the same time as a new user
    fetch("https://api.chucknorris.io/jokes/random")
      .then(response => response.json())
      .then(chuckAPI => {
        const url = `https://randomuser.me/api/?inc=gender,name,dob,picture${this.getGenderSelection()}`;
        fetch(url)
          .then(res => res.json())
          .then(randomUserAPI => {
            this.setState({
              selectedUser: { ...randomUserAPI.results[0], description: chuckAPI.value },
            })
          })
      })
  }

  getUsers = () => {
    fetch("https://randomuser.me/api/?results=10")
      .then(response => response.json())
      .then(data => {
        const usersWithMessages = data.results.map((item) => {
          const fakerMessage = faker.lorem.sentences();
          const fakerDescription = faker.lorem.sentences();
          return { ...item, message: fakerMessage, description: fakerDescription };
        })
        this.setState({
          randomUsers: [...ourselves, ...usersWithMessages],
        })
      }
      )
  }

  handleChangeSetting = (settingName) => {
    this.setState((state) => {
      return {
        ...state,
        settings: {
          ...state.settings,
          [settingName]: !state.settings[settingName],
        }
      }
    })
  };

  handleSelectUser = (clickedUser, nextRoute) => {
    this.setState({ selectedUser: clickedUser }, () => {
      if (nextRoute) {
        this.props.history.push(nextRoute);
      }
    });
  }

  render() {
    return (
      <>
        <NavBar 
          newUser={this.getUser}
        />
        <Switch>
          <Route exact path="/" render={() =>
            <Home
              randomUser={this.state.selectedUser}
              user={this.state.selectedUser}
              onSelectUser={this.handleSelectUser}
              newUser={this.getUser}
              settings={this.state.settings} />}
          />
          <Route exact path="/settings" render={() =>
            <Settings
              settings={this.state.settings}
              onChange={this.handleChangeSetting} />}
          />
          <Route exact path="/messages" render={() =>
            <Messages
              randomUsers={this.state.randomUsers}
              onSelectUser={this.handleSelectUser} />}
          />
          <Route exact path="/chat" render={() =>
            <Chat
              randomUsers={this.state.randomUsers}
              user={this.state.selectedUser}
              onSelectUser={this.handleSelectUser} />}
          />
          <Route exact path="/profile" render={() =>
            <Profile
              user={this.state.selectedUser}
              settings={this.state.settings} />}
          />
        </Switch>
      </>
    );
  }
}

export default withRouter(App);