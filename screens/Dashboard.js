import React from "react";
import { Text, View, Button } from "react-native";
import Api from '../services/api';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isFetching: false,
      dataSource: []
    };
  }

  componentDidMount = async () => {
    const headers = {
      Authorization: "Bearer " + this.props.jwt
    };
    const response = await Api.get("/user", {
      headers: headers
    });

    this.setState({ dataSource: response.data });
  }

  render() {
    const { username, email } = this.state.dataSource;
    return (
      <View>
        <Text>Hello, {username} by {email}</Text>
        <Button title="Logout" onPress={this.props.deleteJWT} />
      </View>
    );
  }
};

export default Dashboard;