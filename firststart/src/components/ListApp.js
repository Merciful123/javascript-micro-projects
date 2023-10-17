import {Component} from "react";

class ListApp extends Component {
  state = {
    list: []
  };
  componentDidUpdate = prevProps => {
    if (prevProps.task !== this.props.task && this.props.task !== "") {
      const updatedList = [
        {
          id: new Date().getTime(),
          task: this.props.task
        },
        ...this.state.list
      ];
      this.setState({
        list: updatedList
      });
    }
  };
  remove = id => {
    const newList = this.state.list.filter(i => i.id !== id);
    this.setState({
      list: newList
    });
  };
  render = () =>
    this.props.children({list: this.state.list, remove: this.remove});
}

export default ListApp;
