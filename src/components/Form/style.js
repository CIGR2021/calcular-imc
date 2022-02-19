import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  formContext: {
    width: '100%',
    height: '100%',
    bottom: 0,
    backgroundColor: 'white',
    alignItems: 'center',
    marginTop: 30,
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
    marginTop: 30
  },
  formTextButton: {
    fontSize: 20,
    color: 'white'
  }
});

export default styles