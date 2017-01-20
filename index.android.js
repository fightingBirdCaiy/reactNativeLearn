/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

 import React, { Component } from 'react';
 import { AppRegistry, StyleSheet, View, Text, Image } from 'react-native';

 class Blink extends Component {
  constructor(props) {
    super(props);
    this.state = { showText: true };

    // 每1000毫秒对showText状态做一次取反操作
    setInterval(() => {
      this.setState({ showText: !this.state.showText });
    }, 1000);
  }

  render() {
    // 根据当前showText的值决定是否显示text内容
    let display = this.state.showText ? this.props.text : ' ';
    return (
      <Text>{display}</Text>
    );
  }
}

 class HelloWorldApp extends Component {
   render() {

     let pic = {
      uri: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1484815476621&di=f515d0719112527e60f111ec25d56e08&imgtype=0&src=http%3A%2F%2Fpic32.nipic.com%2F20130805%2F13003902_110510104000_2.jpg'
    };
    return (
      <View style={{alignItems: 'center'}}>
        <Text> </Text>
        <Text style={styles.red}>鸡年大吉</Text>
        <Text> </Text>
        <Text> </Text>
        <Blink text='万事如意，心想事成'/>
        <Text> </Text>
        <Text> </Text>
        <Text> </Text>
        <Image source={pic} style={{width: 390, height: 260}} />
      </View>

    );
   }
 }

 const styles = StyleSheet.create({
  bigblue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
    fontSize: 30
  },
});

 // 注意，这里用引号括起来的'AwesomeProject'必须和你init创建的项目名一致
 AppRegistry.registerComponent('AwesomeProject', () => HelloWorldApp);
