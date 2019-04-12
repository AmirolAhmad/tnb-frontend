import React from 'react';
import { Text, View, TextInput, Button } from "react-native";
import Api from "../services/api";
import Loading from "./commons/Loading";
import DeviceStorage from '../services/DeviseStorage';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      error: '',
      loading: false
    };

    this.loginUser = this.loginUser.bind(this);
    this.onLoginFail = this.onLoginFail.bind(this);
  }

  loginUser() {
    const { email, password } = this.state;
    this.setState({ error: '', loading: true });

    Api.post("/user_token", {
      auth: {
        email: email,
        password: password
      }
    }).then(response => {
      DeviceStorage.saveKey("id_token", response.data.jwt);
      this.props.newJWT(response.data.jwt);
    }).catch(() => {
      this.onLoginFail();
    });
  }

  onLoginFail() {
    this.setState({
      error: 'Wrong email address or password. Please try again.',
      loading: false
    });
  }

  render() {
    const { email, password, error, loading } = this.state;

    return (
      <View>
        <Text>Login</Text>
        <TextInput
          placeholder="Email Address"
          value={email}
          onChangeText={email => this.setState({ email })}
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={password => this.setState({ password })}
          secureTextEntry
        />
        <Text>{error}</Text>
        {!loading ? (
          <Button onPress={this.loginUser} title="LOGIN" />
        ) : (
          <Loading size={"large"} />
        )}
      </View>
    );
  }
}

export default Login;