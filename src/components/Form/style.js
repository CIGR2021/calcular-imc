import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  formContext: {
    flex: 1,
    paddingTop: 30,
    alignItems: 'center',
    backgroundColor: 'white',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30
  },
  form: {
    width: '100%',
    height: 'auto',
    marginTop: 30,
    padding: 10
  },
  formLabel: {
    color: 'black',
    fontSize: 16,
    paddingLeft: 20,
  },
  formInput: {
    width: '90%',
    borderRadius: 30,
    backgroundColor: 'rgba(0, 0, 0, 0.12)',
    height: 50,
    margin: 12,
    paddingLeft: 10
  },
  formButton: {
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    backgroundColor: 'red',
    paddingTop: 14,
    paddingBottom: 14,
    marginLeft: 12,
    marginTop: 10
  },
  formTextButton: {
    fontSize: 20,
    color: 'white'
  },
  formErrorMessage: {
    fontSize: 12,
    fontWeight: '700',
    color: 'red',
    paddingLeft: 20
  },
  exibitionResultImc: {
    width: '100%',
    height: '50%'
  },
  listImc: {
    marginTop: 20
  },
  resultImcItem: {
    fontSize: 26,
    color: 'orange',
    height: 50,
    width: '100%',
    paddingRight: 20
  },
  textResultImcItem: {
    fontSize: 16,
    color: 'green'
  }
});

export default styles