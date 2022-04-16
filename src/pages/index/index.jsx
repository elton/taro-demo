import { Text, View } from '@tarojs/components';
import { Component } from 'react';

export default class Index extends Component {
  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return (
      <View className='index'>
        <Text className='text-3xl text-green-700 m-4'>Hello world!</Text>
      </View>
    );
  }
}
