import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

import codePush from 'react-native-code-push';

let codePushOptions = {checkFrequency: codePush.CheckFrequency.MANUAL};

class App extends Component {
  onButtonPress() {
    codePush.sync({
      updateDialog: true,
      installMode: codePush.InstallMode.IMMEDIATE,
    });
  }
  render() {
    return (
      <View>
        <TouchableOpacity onPress={this.onButtonPress}>
          <Text>Check for updates</Text>
        </TouchableOpacity>

        <Text>update Now</Text>
        <Text>update Now</Text>
        <Text>update Now</Text>
        <Text>update Now</Text>
      </View>
    );
  }
}
App = codePush(codePushOptions)(App);

export default App;
