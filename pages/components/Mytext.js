import React from 'react';
import {Text, StyleSheet} from 'react-native';

const Mytext = (props) => {
  return <Text style={styles.text}>{props.text}</Text>;
};

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    marginVertical: 200,
    color: '#111825',
    fontSize: 18,
    marginTop: 16,
    marginLeft: 35,
    marginRight: 35,
  },
});

export default Mytext;
