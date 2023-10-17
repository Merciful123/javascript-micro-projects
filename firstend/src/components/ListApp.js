import {Component} from "react";

class ListApp extends Component {
  state = {
    list: []
  };
  componentDidMount = () => {
    const getData = this.props.read && this.props.read("shopping_list");
    this.setState({
      list: getData ? getData : []
    });
  };
  componentDidUpdate = prevProps => {
    if (prevProps.task !== this.props.task && this.props.task !== "") {
      // Update list
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
      this.props.save && this.props.save("shopping_list", updatedList);
    }
  };
  remove = id => {
    const newList = this.state.list.filter(i => i.id !== id);
    this.setState({
      list: newList
    });
    this.props.save && this.props.save("shopping_list", newList);
  };
  render = () =>
    this.props.children({list: this.state.list, remove: this.remove});
}

export default ListApp;
