import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';

if (process.env.NODE_ENV === 'development') {
  const tron = Reactotron.configure({ host: '10.0.3.2' })
    .useReactNative()
    .use(reactotronRedux())
    .connect();

  tron.clear();

  console.tron = tron;
}
