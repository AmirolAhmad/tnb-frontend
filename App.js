import React from 'react';
import { StyleSheet, View } from 'react-native';
import Loading from "./components/commons/Loading";
import Auth from "./screens/Auth";
import Dashboard from "./screens/Dashboard";
import DeviceStorage from "./services/DeviseStorage";

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      jwt: '',
      loading: true
    }

    this.newJWT = this.newJWT.bind(this);
    this.deleteJWT = DeviceStorage.deleteJWT.bind(this);
    this.loadJWT = DeviceStorage.loadJWT.bind(this);
    this.loadJWT();
  }

  newJWT(jwt) {
    this.setState({
      jwt: jwt
    });
  }

  render() {
    if (this.state.loading) {
      return (
        <View style={styles.container}>
          <Loading size="large" />
        </View>
      );
    } else if (!this.state.jwt) {
      return (
        <View style={styles.container}>
          <Auth newJWT={this.newJWT} />
        </View>
      );
    } else if (this.state.jwt) {
      return (
        <View style={styles.container}>
          <Dashboard jwt={this.state.jwt} deleteJWT={this.deleteJWT} />
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
