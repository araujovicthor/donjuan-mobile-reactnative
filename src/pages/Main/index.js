import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  View, Text, TouchableOpacity, ImageBackground, Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ProductActions from '~/store/ducks/product';
import AuthActions from '~/store/ducks/auth';
import OrderActions from '~/store/ducks/order';
import TypeActions from '~/store/ducks/type';

import NavigationService from '~/services/navigation';

import background from '~/assets/images/header-background.png';

import styles from './styles';

class Main extends Component {
  static propTypes = {
    getProductsRequest: PropTypes.func.isRequired,
    products: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        product: PropTypes.string,
        description: PropTypes.string,
        avatar: PropTypes.string,
        time: PropTypes.string,
      }),
    ).isRequired,
    getOrdersRequest: PropTypes.func.isRequired,
    getTypesRequest: PropTypes.func.isRequired,
    signOut: PropTypes.func.isRequired,
  };

  async componentDidMount() {
    const { getProductsRequest } = this.props;
    getProductsRequest();
  }

  handleOnPress = (key) => {
    const { getTypesRequest } = this.props;
    getTypesRequest(key);
  }

  render() {
    const {
      products,
      getOrdersRequest,
      signOut,
    } = this.props;

    return (
      <View style={styles.container}>
        <ImageBackground
          source={background}
          imageBackground={styles.imageBackground}
          style={styles.header}
        >
          <Icon name="history" size={20} color="#FFF" onPress={() => getOrdersRequest()} />
          <Text style={styles.title}>Pizzaria Don Juan</Text>
          <View style={styles.cart}>
            <Icon name="shopping-cart" size={20} color="#FFF" onPress={() => NavigationService.navigate('Cart')} />
          </View>
        </ImageBackground>

        <View style={styles.content}>
          {products.map(product => (
            <TouchableOpacity
              key={product.id}
              onPress={() => this.handleOnPress(`${product.id}`)}
              activeOpacity={0.95}
              style={styles.item}
            >
              <Image
                source={{ uri: `http://10.0.3.2:5000/files/${product.avatar}` }}
                style={styles.img}
              />
              <View style={styles.text}>
                <Text style={styles.product}>{product.product}</Text>
                <Text style={styles.description}>{product.description}</Text>
                <View style={styles.timebox}>
                  <Icon
                    name="timer"
                    size={12}
                    color="#706e7b"
                  />
                  <Text style={styles.timer}>{product.time}</Text>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  products: state.product.data,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  ...ProductActions,
  ...AuthActions,
  ...OrderActions,
  ...TypeActions,
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Main);
