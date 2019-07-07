import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  View,
  Platform,
  KeyboardAvoidingView,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import AuthActions from '~/store/ducks/auth';
import logo from '~/assets/images/logo.png';
import fundo from '~/assets/images/fundo.jpg';

import styles from './styles';

class SignIn extends Component {
  static propTypes = {
    signInRequest: PropTypes.func.isRequired,
    signUpRequest: PropTypes.func.isRequired,
  };

  state = {
    email: '',
    password: '',
    username: '',
    signUp: false,
  };

  handleChangeInput = () => {
    const { signUp } = this.state;

    if (signUp) {
      this.setState({ signUp: false });
    } else {
      this.setState({ signUp: true });
    }
  };

  handleSubmit = () => {
    const {
      email, password, username, signUp,
    } = this.state;
    const { signInRequest, signUpRequest } = this.props;

    if (!signUp) {
      signInRequest(email, password);
    } else {
      signUpRequest(username, email, password);
    }
  };

  render() {
    const {
      email, password, signUp, username,
    } = this.state;

    return (
      <ImageBackground
        source={fundo}
        imageStyle={{ height: Dimensions.get('window').height, width: Dimensions.get('window').width + 800, transform: [{ translateX: -800 }] }}
        style={styles.imageBackground}
      >
        <LinearGradient
          colors={['rgba(0, 0, 0, 0.2)', 'rgba(0, 0, 0, 0.9)']}
          style={styles.container}
        >
          <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : null}>
            <View>
              <View style={styles.div}>
                <Image source={logo} style={styles.image} />
              </View>

              {signUp && (
                <TextInput
                  placeholder="Nome completo"
                  value={username}
                  onChangeText={text => this.setState({ username: text })}
                  style={styles.input}
                  underlineColorAndroid="transparent"
                  autoFocus
                  returnKeyType="next"
                  onSubmitEditing={() => this.emailInput.focus()}
                />
              )}

              <TextInput
                placeholder="Seu e-mail"
                value={email}
                onChangeText={text => this.setState({ email: text })}
                style={styles.input}
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
                underlineColorAndroid="transparent"
                autoFocus
                returnKeyType="next"
                onSubmitEditing={() => this.passwordInput.focus()}
                ref={(el) => {
                  this.emailInput = el;
                }}
              />

              <TextInput
                placeholder="Senha secreta"
                value={password}
                onChangeText={text => this.setState({ password: text })}
                style={styles.input}
                secureTextEntry
                autoCapitalize="none"
                autoCorrect={false}
                underlineColorAndroid="transparent"
                returnKeyType="send"
                ref={(el) => {
                  this.passwordInput = el;
                }}
                onSubmitEditing={this.handleSubmit}
              />

              <TouchableOpacity onPress={this.handleSubmit} style={styles.button}>
                <Text style={styles.buttonText}>{signUp ? 'Criar conta' : 'Entrar'}</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={this.handleChangeInput} style={styles.div}>
                <Text style={styles.buttonText}>
                  {signUp ? 'Já tenho login' : 'Criar conta gratuita'}
                </Text>
              </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
        </LinearGradient>
      </ImageBackground>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators(AuthActions, dispatch);

export default connect(
  null,
  mapDispatchToProps,
)(SignIn);
