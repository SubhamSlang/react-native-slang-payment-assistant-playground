/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    viewStyle1: {
        marginTop: 16,
        marginLeft: 16,
        marginRight: 16,
        justifyContent: 'space-between',
        marginBottom: 16,
        flexDirection: 'column',
      },
      viewStyle3: {
        marginTop: 16,
        justifyContent: 'space-between',
        marginBottom: 16,
        backgroundColor: '#000000',
        flexDirection: 'column',
        minHeight: 400,
      },
      headerText: {
        fontWeight: '700',
        fontSize: 24,
        textAlign: 'center',
        color: '#37E2D5',
        padding: 16,
        marginEnd: 16,
      },
      subTitleText: {
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'left',
        color: '#FFCC8F',
        marginTop: 16,
      },
      intentResponseText: {
        padding: 16,
        fontSize: 16,
        textAlign: 'left',
        fontFamily: 'monospace',
        color: 'white',
      },
      triggerStyle: {
        width: 80,
        height: 80,
        alignSelf: 'center',
      },
      centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
      },
      modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        width: '80%',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
      },
      openButton: {
        backgroundColor: '#ad65ea',
        borderRadius: 20,
        padding: 10,
        marginTop: 16,
        elevation: 2,
      },
      textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
      },
      modalText: {
        marginBottom: 15,
        textAlign: 'center',
        color: 'black',
        fontFamily: 'American Typewriter',
      },

});

export default styles;
