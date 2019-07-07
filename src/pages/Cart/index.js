import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  View, Text, ImageBackground, Image, TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CartActions from '~/store/ducks/cart';

import NavigationService from '~/services/navigation';

import background from '~/assets/images/header-background.png';

import styles from './styles';

class Cart extends Component {
  static propTypes = {
    cart: PropTypes.shape({
      totalPrice: PropTypes.string,
    }).isRequired,
    items: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
      }),
    ).isRequired,
    removeItemRequest: PropTypes.func.isRequired,
  };

  handleRemove = (key) => {
    const { removeItemRequest } = this.props;
    removeItemRequest(key);
  };

  render() {
    const { cart, items } = this.props;

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
            onPress={() => NavigationService.navigate('Main')}
          />
          <View style={styles.blockheader}>
            <Text style={styles.title}>Carrinho</Text>
            <Text style={styles.title}>
              {cart.totalPrice !== '0' ? `R$ ${cart.totalPrice}` : 'R$ 0.00'}
            </Text>
          </View>
        </ImageBackground>

        <View style={styles.content}>
          {items[0]
            ? items.map(item => (
              <View key={item.id} style={styles.item}>
                <Image
                  source={{ uri: `http://10.0.3.2:5000/files/${item.Type.avatar}` }}
                  style={styles.img}
                />
                <View style={styles.text}>
                  <Text style={styles.product}>
                    {`${item.Type.Product.product} ${item.Type.type}`}
                  </Text>
                  <Text style={styles.size}>{`Tamanho: ${item.Size.size}`}</Text>
                  <Text style={styles.price}>{`R$ ${item.price}`}</Text>
                </View>
                <View style={styles.icon}>
                  <Icon
                    name="delete-forever"
                    size={20}
                    color="#e5293e"
                    onPress={() => this.handleRemove(item)}
                  />
                </View>
              </View>
            ))
            : (
              <TouchableOpacity
                onPress={() => NavigationService.navigate('Main')}
                activeOpacity={0.95}
                style={styles.item}
              >
                <View style={styles.text}>
                  <Text style={styles.price}>
                    Seu carrinho ainda está vazio ;(
                  </Text>
                  <Text style={styles.size}>Retorne para a tela inicial e escolha um produto</Text>
                </View>
              </TouchableOpacity>
            )}
          {items[0]
            ? (
              <View style={styles.bottom}>
                <TouchableOpacity
                  onPress={() => NavigationService.navigate('Main')}
                  style={styles.backgroundIcon}
                >
                  <Icon name="add-shopping-cart" size={20} color="#FFF" />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => NavigationService.navigate('Address')}
                  style={styles.button}
                >
                  <Text style={styles.buttonText}>REALIZAR PEDIDO</Text>
                  <Icon name="chevron-right" size={20} color="#FFF" />
                </TouchableOpacity>
              </View>
            ) : <View />
          }
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  cart: state.cart,
  items: state.cart.data,
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
)(Cart);
