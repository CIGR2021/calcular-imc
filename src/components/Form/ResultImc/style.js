import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  styleContainerImc: {
    flex: 1,
    width: '100%',
    marginTop: 15,
    paddingTop: 10,
    borderRadius: 50,
    alignItems: 'center'
  },
  styleImc: {
    fontSize: 48,
    color: 'orange',
    fontWeight: '700'
  },
  styleInformation: {
    fontSize: 18,
    color: 'red',
    fontWeight: '700'
  },
  styleBoxShareButton: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 10
  },
  styleShared: {
    backgroundColor: '#6495ed',
    borderRadius: 50,
    marginTop: 20,
    padding: 15
  },
  styleTextShared: {
    color: '#f0f8ff',
    fontWeight: '700',
    paddingHorizontal: 20
  }
});

export default styles;