import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}>Child #1</Text>
      <Text style={styles.textStyle}>Child #2</Text>
      <Text style={styles.textStyle}>Child #3</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 1,
    borderColor: 'black',
    alignItems: 'stretch',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: 200,
  },
  textStyle: {
    borderWidth: 10,
    borderColor: 'red',
    flex: 1,
  },
});

export default BoxScreen;
