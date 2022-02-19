import React, { useState } from 'react';
import {
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Vibration,
  Pressable,
  Keyboard
} from 'react-native';
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
  const [errorMessage, setErrorMessage] = useState(null);

  const imcCalculator = () => {
    let weightFormat = weight.replace(',', '.')
    let heightFormat = height.replace(',', '.')
    return setImc((weightFormat/(heightFormat * heightFormat)).toFixed(2))
  }

  const verifyImc = () => {
    if(!weight || !height) {
      Vibration.vibrate();
      setErrorMessage('campo obrigatório*')
    }
  }
  const validateImc = () => {
    setImc(null);
    verifyImc();
    if (weight != null && !height != null) {
      imcCalculator();
      setHeight(null);
      setWeight(null);
      setMessageImc('Seu IMC é: ');
      setErrorMessage(null)
      setTextButton('Calcular Novamente');
      return
    }

    setTextButton('Calcular');
    setMessageImc('Preencha peso e altura')
  }

  return (
    <Pressable
      onPress={Keyboard.dismiss}
      style={styles.formContext}>
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
          style={styles.formErrorMessage}
        >
          {!height && errorMessage}
        </Text>
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
        <Text
          style={styles.formErrorMessage}
        >
          {!weight && errorMessage}
        </Text>
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
    </Pressable>
  )
}

export default Form;