import { createAppContainer, createSwitchNavigator, createStackNavigator } from 'react-navigation';

import SignIn from './pages/SignIn';
import Main from './pages/Main';
import Orders from './pages/Orders';
import Types from './pages/Types';
import Sizes from './pages/Sizes';
import Cart from './pages/Cart';
import Address from './pages/Address';

export default function createNavigator(isLoggedIn = false) {
  const Private = createStackNavigator(
    {
      Main,
      Orders,
      Types,
      Sizes,
      Cart,
      Address,
    },
    {
      initialRouteName: 'Main',
      headerMode: 'none',
      navigationOptions: {
        headerVisible: false,
      },
    },
  );

  return createAppContainer(
    createSwitchNavigator(
      {
        SignIn,
        Private,
      },
      {
        initialRouteName: isLoggedIn ? 'Private' : 'SignIn',
      },
    ),
  );
}
