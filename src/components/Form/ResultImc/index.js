import React from 'react';
import { Text, View, Share, TouchableOpacity, TextInput } from 'react-native';
import styles from './style';

function ResultImc({imc, messageImc}) {
  const onShare = async() => {
    const result = await Share.share({
      message: 'Meu IMC hoje é: ${imc}'
    })
  }

  return (
    <View
      style={styles.styleContainerImc}
    >
      <Text
        style={styles.styleInformation}
      >{messageImc}</Text>
      <Text
        style={styles.styleImc}
      >{imc}</Text>
      <View style={styles.styleBoxShareButton}>
        <TouchableOpacity
          style={styles.styleShared}
          onPress={() => onShare()}
        >
          <Text
            style={styles.styleTextShared}
          >Compartilhar</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default ResultImc;
