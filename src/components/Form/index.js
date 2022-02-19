import React, { useState } from 'react';
import { Text, TextInput, View, TouchableOpacity } from 'react-native';
import ResultImc from './ResultImc/'
import styles from './style';

function Form() {
  const [height, setHeight] = useState(null)
  const [weight, setWeight] = useState(null)
  const [imc, setImc] = useState(null)
  const [messageImc, setMessageImc] = useState(
    height && weight == null ? 'Preencha peso e altura' : ''
  )
  const [textButton, setTextButton] = useState('Calcular')

  const imcCalculator = () => {
    return setImc((weight/(height * height)).toFixed(2))
  }

  const validateImc = () => {
    if (weight != null && !height != null) {
      imcCalculator();
      setHeight(null);
      setWeight(null);
      setMessageImc('Seu IMC é: ');
      setTextButton('Calcular Novamente');
      return
    }

    setImc(null);
    setTextButton('Calcular');
    setMessageImc('Preencha peso e altura')
  }

  return (
    <View style={styles.formContext}>
      <View style={styles.form}>
        <Text
          style={styles.formLabel}
        >
          Altura
        </Text>
        <TextInput
          style={styles.formInput}
          onChangeText={setHeight}
          value={height}
          placeholder="Exemplo: 1.70"
          keyboardType='numeric'
        />
        <Text
          style={styles.formLabel}
        >
          Peso
        </Text>
        <TextInput
          style={styles.formInput}
          onChangeText={setWeight}
          value={weight}
          placeholder="Exemplo: 60.00"
          keyboardType='numeric'
        />
        <TouchableOpacity
          style={styles.formButton}
          onPress={() => validateImc()}
        >
          <Text
            style={styles.formTextButton}
          >{textButton}</Text>
        </TouchableOpacity>
      </View>
      <ResultImc
        imc={imc}
        messageImc={messageImc}
      />
    </View>
  )
}

export default Form;