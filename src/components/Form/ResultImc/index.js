import React from 'react';
import { Text, View } from 'react-native';
import styles from './style';

function ResultImc({imc, messageImc}) {
  return (
    <View
      style={styles.containerImc}
    >
      <Text
        style={styles.information}
      >{messageImc}</Text>
      <Text
        style={styles.imc}
      >{imc}</Text>
    </View>
  )
}

export default ResultImc;
