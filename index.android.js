/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
 AppRegistry,
 StyleSheet,
 Text,
 View,
 ActivityIndicator
} from 'react-native';
import NetworkService from './network.api.js';

export default class AwesomeProject extends Component {

 constructor(props){
   super(props);
   this.state ={
     isLoading:false,
     resultJson:null
   };
 }
 requestNowWeatherFromServer(){
   if(this.state.isLoading==true){
     return;
   }
   this.setState({
     resultJson:null,
     isLoading:true
   });
   try {
       NetworkService.requestNowWeatherFromServer()
       .then((response) => {
          let data = response;
          this.setState({
            resultJson:data==null?null:JSON.stringify(data),
            isLoading:false
          });
          console.log("返回数据:"+JSON.stringify(data));
       })
   } catch(e) {
     alert(e);
     this.setState({
        isLoading:false
     });
   }
 }
 render() {
   return (
     <View style={styles.container}>
       <ActivityIndicator  animating={this.state.isLoading}  />
       <Text style={styles.welcome} onPress={this.requestNowWeatherFromServer.bind(this)}>
         点我测试网络
       </Text>
       <Text style={styles.instructions}>
       {this.state.resultJson}
       </Text>
     </View>
   );
 }
}

const styles = StyleSheet.create({
 container: {
   flex: 1,
   justifyContent: 'center',
   alignItems: 'center',
   backgroundColor: '#F5FCFF',
 },
 welcome: {
   fontSize: 20,
   textAlign: 'center',
   margin: 10,
 },
 instructions: {
   textAlign: 'center',
   color: '#333333',
   marginBottom: 5,
 },
});

// 注意，这里用引号括起来的'AwesomeProject'必须和你init创建的项目名一致
AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
