import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  View, Text, ImageBackground, TouchableOpacity, Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import NavigationService from '~/services/navigation';

import SizeActions from '~/store/ducks/size';
import CartActions from '~/store/ducks/cart';

import background from '~/assets/images/header-background.png';

import styles from './styles';

class Sizes extends Component {
  static propTypes = {
    items: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        Size: PropTypes.shape({
          size: PropTypes.string,
          avatar: PropTypes.string,
        }),
      }),
    ).isRequired,
    putCartRequest: PropTypes.func.isRequired,
  };

  handleOnPress = (key) => {
    const { putCartRequest } = this.props;
    putCartRequest(key);
  };

  render() {
    const { items } = this.props;

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
            onPress={() => NavigationService.navigate('Types')}
          />
          <Text style={styles.title}>Selecione um tamanho</Text>
        </ImageBackground>

        <View style={styles.content}>
          {items.map(item => (
            <TouchableOpacity
              key={item.id}
              onPress={() => this.handleOnPress(`${item.id}`)}
              style={styles.item}
            >
              <Image
                source={{ uri: `http://10.0.3.2:5000/files/${item.Size.avatar}` }}
                style={styles.img}
              />
              <Text style={styles.size}>{item.Size.size}</Text>
              <Text style={styles.price}>{`R$ ${item.price}`}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    ...SizeActions,
    ...CartActions,
  },
  dispatch,
);

const mapStateToProps = state => ({
  items: state.size.data,
  cart: state.cart,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Sizes);
