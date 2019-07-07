import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { View, Text, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { connect } from 'react-redux';

import NavigationService from '~/services/navigation';

import background from '~/assets/images/header-background.png';

import styles from './styles';

class Orders extends Component {
  static propTypes = {
    orders: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        totalPrice: PropTypes.string,
        lastChange: PropTypes.string,
      }),
    ).isRequired,
  };

  state = {};

  render() {
    const { orders } = this.props;

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
          <Text style={styles.title}>Meus Pedidos</Text>
        </ImageBackground>

        <View style={styles.content}>
          {orders.map(order => (
            <View key={order.id} style={styles.item}>
              <View style={styles.text}>
                <Text style={styles.id}>{`Pedido #${order.id}`}</Text>
                <Text style={styles.time}>{order.lastChange}</Text>
                <Text style={styles.price}>{`R$ ${order.totalPrice}`}</Text>
              </View>
            </View>
          ))}
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  orders: state.order.data,
});

export default connect(
  mapStateToProps,
  null,
)(Orders);
