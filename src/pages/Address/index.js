import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CartActions from '~/store/ducks/cart';

import NavigationService from '~/services/navigation';

import background from '~/assets/images/header-background.png';

import styles from './styles';

class Address extends Component {
  static propTypes = {
    cart: PropTypes.shape({
      totalPrice: PropTypes.string.isRequired,
      note: PropTypes.string.isRequired,
      zipcode: PropTypes.string.isRequired,
      address: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      neighborhood: PropTypes.string.isRequired,
    }).isRequired,
    changeInfoRequest: PropTypes.func.isRequired,
    newOrderRequest: PropTypes.func.isRequired,
  };

  state = {
    zipcode: '',
  };

  handleChange = (key) => {
    const { changeInfoRequest } = this.props;
    changeInfoRequest(key);
  };

  handleZipcode = () => {
    const { changeInfoRequest } = this.props;
    const key = this.state;
    changeInfoRequest(key);
  };

  handleSubmit = () => {
    const { newOrderRequest, cart } = this.props;
    newOrderRequest(cart);
  };

  render() {
    const { cart } = this.props;
    const { zipcode } = this.state;

    return (
      <View style={styles.container}>
        <ImageBackground
          source={background}
          imageBackground={styles.imageBackground}
          style={styles.header}
        >
          <Icon
            name="chevron-left"
            size={20}
            color="#FFF"
            onPress={() => NavigationService.navigate('Cart')}
          />
          <View style={styles.blockheader}>
            <Text style={styles.title}>Realizar pedido</Text>
            <Text style={styles.title}>{cart.totalPrice}</Text>
          </View>
        </ImageBackground>

        <View style={styles.content}>
          <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : null}>
            <View>
              <TextInput
                placeholder="Alguma observação?"
                value={cart.note}
                multiline={true}
                numberOfLines={4}
                onChangeText={text => this.handleChange({ note: text })}
                style={styles.input}
                underlineColorAndroid="transparent"
                autoFocus
                returnKeyType="next"
                onSubmitEditing={() => this.zipcodeInput.focus()}
              />
              <TextInput
                placeholder="Qual seu CEP?"
                value={zipcode}
                onChangeText={text => this.setState({ zipcode: text })}
                textContentType="postalCode"
                keyboardType="number-pad"
                style={styles.input}
                underlineColorAndroid="transparent"
                autoFocus
                returnKeyType="next"
                ref={(el) => {
                  this.zipcodeInput = el;
                }}
                onSubmitEditing={this.handleZipcode}
              />
              <TextInput
                placeholder="Rua"
                value={cart.address}
                onChangeText={text => this.handleChange({ address: text })}
                textContentType="streetAddressLine1"
                style={styles.input}
                underlineColorAndroid="transparent"
                autoFocus
                returnKeyType="next"
                ref={(el) => {
                  this.addressInput = el;
                }}
                onSubmitEditing={() => this.numberInput.focus()}
              />
              <TextInput
                placeholder="Nº"
                value={cart.number}
                onChangeText={text => this.handleChange({ number: text })}
                keyboardType="number-pad"
                style={styles.input}
                underlineColorAndroid="transparent"
                autoFocus
                returnKeyType="next"
                ref={(el) => {
                  this.numberInput = el;
                }}
                onSubmitEditing={() => this.neighborhoodInput.focus()}
              />
              <TextInput
                placeholder="Bairro"
                value={cart.neighborhood}
                onChangeText={text => this.handleChange({ neighborhood: text })}
                style={styles.input}
                underlineColorAndroid="transparent"
                autoFocus
                returnKeyType="send"
                ref={(el) => {
                  this.neighborhoodInput = el;
                }}
                onSubmitEditing={this.handleSubmit}
              />

              <View style={styles.bottom}>
                <TouchableOpacity onPress={this.handleSubmit} style={styles.button}>
                  <Text style={styles.buttonText}>FINALIZAR</Text>
                  <Icon name="chevron-right" size={20} color="#FFF" />
                </TouchableOpacity>
              </View>
            </View>
          </KeyboardAvoidingView>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  cart: state.cart,
});

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    ...CartActions,
  },
  dispatch,
);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Address);
