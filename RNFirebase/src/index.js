import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, FlatList } from 'react-native';
import { connect } from 'react-redux';

class Main extends Component {
  render() {
    return (
      <View>
        <Text>testting</Text>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return { data: state };
}

export default connect(mapStateToProps)(Main);
