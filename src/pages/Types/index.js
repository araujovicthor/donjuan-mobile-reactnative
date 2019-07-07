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

import background from '~/assets/images/header-background.png';

import styles from './styles';

class Types extends Component {
  static propTypes = {
    types: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        size: PropTypes.string,
        avatar: PropTypes.string,
      }),
    ).isRequired,
    getSizesRequest: PropTypes.func.isRequired,
  };

  state = {};

  handleOnPress = (key) => {
    const { getSizesRequest } = this.props;
    getSizesRequest(key);
  };

  render() {
    const { types } = this.props;

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
          <Text style={styles.title}>Selecione um tipo</Text>
        </ImageBackground>

        <View style={styles.content}>
          {types.map(type => (
            <TouchableOpacity
              key={type.id}
              onPress={() => this.handleOnPress(`${type.id}`)}
              activeOpacity={0.95}
              style={styles.item}
            >
              <Image
                source={{ uri: `http://10.0.3.2:5000/files/${type.avatar}` }}
                style={styles.img}
              />
              <Text style={styles.type}>{type.type}</Text>
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
  },
  dispatch,
);

const mapStateToProps = state => ({
  types: state.type.data,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Types);
