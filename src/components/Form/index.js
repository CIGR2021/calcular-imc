import React, { useState } from 'react';
import {
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Vibration,
  Pressable,
  Keyboard,
  FlatList,
  Image
} from 'react-native';
import ResultImc from './ResultImc/'
import styles from './style';

function Form() {
  const [height, setHeight] = useState(null);
  const [weight, setWeight] = useState(null);
  const [imc, setImc] = useState(null);
  const [messageImc, setMessageImc] = useState(
    height && weight == null ? 'Preencha peso e altura' : ''
  );
  const [textButton, setTextButton] = useState('Calcular');
  const [errorMessage, setErrorMessage] = useState(null);
  const [imcList, setImcList] = useState([]);
  const [status, setStatus] = useState('');

  const imcCalculator = () => {
    let weightFormat = weight.replace(',', '.')
    let heightFormat = height.replace(',', '.')
    const totalImc = (weightFormat / (heightFormat * heightFormat)).toFixed(2)
    setImcList((item) => [
        ...item,
        {
          id: new Date().getTime(),
          imc: totalImc
        }]
    );
    setImc(totalImc);
    metricaIMC(totalImc)

  }

  const verifyImc = () => {
    if(!weight || !height) {
      Vibration.vibrate();
      setErrorMessage('campo obrigatório*')
    }
  }

  const metricaIMC = (imc) => {
    if (parseFloat(imc) < 18.50) {
      return setStatus('Abaixo do Peso')
    } if (parseFloat(imc) >= 18.5 && parseFloat(imc) < 25) {
      return setStatus('Peso Normal')
    } if (parseFloat(imc) >= 25 && parseFloat(imc) < 30 ) {
      return setStatus('Sobrepeso')
    } if (parseFloat(imc) >= 30 && parseFloat(imc) < 35.00) {
      return setStatus('Obesidade Grau I')
    } if (parseFloat(imc) >= 35 && parseFloat(imc) < 40.00) {
      return setStatus('Obesidade Grau II')
    } else {
      return setStatus('Obesidade Grau III ou Mórbida')
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
    <View style={styles.formContext}>
      {!imc ?
        <Pressable
          onPress={Keyboard.dismiss}
          style={styles.form}>
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
            <Image
              style={styles.formImage}
              source={require('../../image/tabela-imc.png')}/>
        </Pressable>
        :
        <View
          style={styles.exibitionResultImc}
        >
          <ResultImc
            status={status}
            imc={imc}
            messageImc={messageImc}
          />
          <TouchableOpacity
              style={styles.formButton}
              onPress={() => validateImc()}
            >
              <Text
                style={styles.formTextButton}
              >{textButton}</Text>
          </TouchableOpacity>
        </View>}
        <FlatList
          showsVerticalScrollIndicator={false}
          style={styles.listImc}
          data={imcList.reverse()}
          renderItem={({item}) => {
            return(
              <Text style={styles.resultImcItem}>
                <Text
                  style={styles.textResultImcItem}
                >
                  Resultado IMC é:
                  {' '}
                </Text>
                {item.imc}
              </Text>
            )
          }}
          keyExtractor={(item) => {item.id}}
        />
    </View>
  )
}

export default Form;