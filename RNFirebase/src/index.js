import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, FlatList, TextInput } from 'react-native';
import { connect } from 'react-redux';

const style = StyleSheet.create({
  container: {
    flex: 1
  },
  textInput: {}
});

class Main extends Component {
  render() {
    return (
      <View>
        <Text>testting</Text>
        <TextInput/>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return { data: state };
}

export default connect(mapStateToProps)(Main);
