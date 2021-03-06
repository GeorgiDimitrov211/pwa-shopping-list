import React from "react";
import Lists from "./Lists";
import List from "./List";
import { Router, Redirect } from "@reach/router";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      lists: []
    };
  }

  componentDidMount() {}

  // From the video
  componentWillMount() {}

  componentWillUnmount() {
    if (this._asyncRequest) {
      this._asyncRequest.cancel();
    }
  }

  // End of the video code

  render() {
    return (
      <div className="app-wrapper">
        <Router>
          <Redirect from="/" to="/lists" noThrow />
            <Lists
              path="/lists"
              lists={this.state.lists}
              addNewList={id => this.addNewList(id)}
              getAllLists={() => this.getAllLists()}
            />
            <List
              path="/lists/:id"
              getList={id => this.getList(id)}
              addListItem={(listId, newItem) => this.addListItem(listId, newItem)}
              deleteItem={(itemIndex, listId) => this.deleteItem(itemIndex, listId)}
            />
        </Router>
      </div>
    );
  }
}

export default App;
