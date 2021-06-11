import React from 'react';
import {
  StatusBar,
  SafeAreaView,
} from 'react-native';
import Home from './source/screens/home';

const App = () => {
  return (
    <SafeAreaView>
      <StatusBar barStyle='light-content' />
      
      {/* Home Screen */}
      <Home />

    </SafeAreaView>
  );
};

export default App;
