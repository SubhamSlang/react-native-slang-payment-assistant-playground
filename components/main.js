/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {Text, Alert, View, ScrollView, TouchableHighlight, Modal} from 'react-native';
import styles from './styles';
import SlangPaymentsAssistant, {TransactionUserJourney, NavigationUserJourney, BillPaymentsUserJourney, AssistantSubDomain  } from '@slanglabs/slang-conva-react-native-payments-assistant';

class Sample extends Component {
    state = {
        intentResponse: '',
        transactionAppState: TransactionUserJourney.AppState.UNSUPPORTED,
        billPaymentAppState: BillPaymentsUserJourney.AppState.UNSUPPORTED,
        navigationAppState: NavigationUserJourney.AppState.UNSUPPORTED,
        transactionModalVisible: false,
        billPaymentsModalVisible: false,
        navigationModalVisible: false,
      };

      setTransactionModalVisible = (visible) => {
        this.setState({ transactionModalVisible: visible });
      }

      setBillPaymentsModalVisible = (visible) => {
        this.setState({ billPaymentsModalVisible: visible });
      }

      setNavigationModalVisible = (visible) => {
        this.setState({ navigationModalVisible: visible });
      }

      renderTransactionViews = () => {
        const views = [];
        views.push(<TouchableHighlight
          style={styles.openButton}
          onPress={() => {
            this.setTransactionModalVisible(!this.state.transactionModalVisible);
            SlangPaymentsAssistant.getActiveTransactionUserJourney().setSuccess();
            SlangPaymentsAssistant.getActiveTransactionUserJourney().notifyAppState(this.state.transactionAppState);
          }}>
          <Text style={styles.textStyle}>SUCCESS</Text>
        </TouchableHighlight>);
        views.push(<TouchableHighlight
          style={styles.openButton}
          onPress={() => {
            this.setTransactionModalVisible(!this.state.transactionModalVisible);
             SlangPaymentsAssistant.getActiveTransactionUserJourney().setFailure();
            SlangPaymentsAssistant.getActiveTransactionUserJourney().notifyAppState(this.state.transactionAppState);
          }}>
          <Text style={styles.textStyle}>FAILURE</Text>
        </TouchableHighlight>);
        views.push(<TouchableHighlight
          style={styles.openButton}
          onPress={() => {
            this.setTransactionModalVisible(!this.state.transactionModalVisible);
            SlangPaymentsAssistant.getActiveTransactionUserJourney().setNameRequired();
            SlangPaymentsAssistant.getActiveTransactionUserJourney().notifyAppState(this.state.transactionAppState);
          }}>
          <Text style={styles.textStyle}>NAME REQUIRED</Text>
        </TouchableHighlight>);
        views.push(<TouchableHighlight
          style={styles.openButton}
          onPress={() => {
            this.setTransactionModalVisible(!this.state.transactionModalVisible);
            SlangPaymentsAssistant.getActiveTransactionUserJourney().setAmountRequired();
            SlangPaymentsAssistant.getActiveTransactionUserJourney().notifyAppState(this.state.transactionAppState);
          }}>
          <Text style={styles.textStyle}>AMOUNT REQUIRED</Text>
        </TouchableHighlight>);
        views.push(<TouchableHighlight
          style={styles.openButton}
          onPress={() => {
            this.setTransactionModalVisible(!this.state.transactionModalVisible);
            SlangPaymentsAssistant.getActiveTransactionUserJourney().setTransactionAction();
            SlangPaymentsAssistant.getActiveTransactionUserJourney().notifyAppState(this.state.transactionAppState);
          }}>
          <Text style={styles.textStyle}>TRANSACTION ACTION</Text>
        </TouchableHighlight>);
        return views;
      }

      renderBillPaymentsViews = () => {
        const views = [];
        views.push(<TouchableHighlight
          style={styles.openButton}
          onPress={() => {
            this.setBillPaymentsModalVisible(!this.state.billPaymentsModalVisible);
            SlangPaymentsAssistant.getActiveBillPaymentUserJourney().setSuccess();
            SlangPaymentsAssistant.getActiveBillPaymentUserJourney().notifyAppState(this.state.billPaymentAppState);
          }}>
          <Text style={styles.textStyle}>SUCCESS</Text>
        </TouchableHighlight>);
        views.push(<TouchableHighlight
          style={styles.openButton}
          onPress={() => {
            this.setBillPaymentsModalVisible(!this.state.billPaymentsModalVisible);
            SlangPaymentsAssistant.getActiveBillPaymentUserJourney().setFailure();
            SlangPaymentsAssistant.getActiveBillPaymentUserJourney().notifyAppState(this.state.billPaymentAppState);
          }}>
          <Text style={styles.textStyle}>FAILURE</Text>
        </TouchableHighlight>);
        views.push(<TouchableHighlight
          style={styles.openButton}
          onPress={() => {
            this.setBillPaymentsModalVisible(!this.state.billPaymentsModalVisible);
            SlangPaymentsAssistant.getActiveBillPaymentUserJourney().setBillTypeRequired();
            SlangPaymentsAssistant.getActiveBillPaymentUserJourney().notifyAppState(this.state.billPaymentAppState);
          }}>
          <Text style={styles.textStyle}>BILL TYPE</Text>
        </TouchableHighlight>);
        return views;
      }

      renderNavigationViews = () => {
        const views = [];
        views.push(<TouchableHighlight
          style={styles.openButton}
          onPress={() => {
            this.setNavigationModalVisible(!this.state.navigationModalVisible);
            SlangPaymentsAssistant.getActiveNavigationUserJourney().setSuccess();
            SlangPaymentsAssistant.getActiveNavigationUserJourney().notifyAppState(this.state.navigationAppState);
          }}>
          <Text style={styles.textStyle}>SUCCESS</Text>
        </TouchableHighlight>);
        views.push(<TouchableHighlight
          style={styles.openButton}
          onPress={() => {
            this.setNavigationModalVisible(!this.state.navigationModalVisible);
            SlangPaymentsAssistant.getActiveNavigationUserJourney().setFailure();
            SlangPaymentsAssistant.getActiveNavigationUserJourney().notifyAppState(this.state.navigationAppState);
          }}>
          <Text style={styles.textStyle}>FAILURE</Text>
        </TouchableHighlight>);
        return views;
      }

      componentDidMount() {

          const transactionAppStateAlert = () =>
          Alert.alert(
            'Transaction App State',
            'Choose An AppState',
            [
              {
                text: 'UNSUPPORTED', onPress: () => {
                  this.setState({ transactionAppState: TransactionUserJourney.AppState.UNSUPPORTED });
                  SlangPaymentsAssistant.getActiveTransactionUserJourney().setFailure();
                  SlangPaymentsAssistant.getActiveTransactionUserJourney().notifyAppState(this.state.transactionAppState);
                },
              },

              {
                text: 'TRANSACTION', onPress: () => {
                  this.setState({ transactionAppState: TransactionUserJourney.AppState.TRANSACTION });
                  this.setTransactionModalVisible(true);
                },
              },
            ],
            { cancelable: false },
          );

          const billPaymentsAppStateAlert = () =>
          Alert.alert(
            'Bill Payments App State',
            'Choose An AppState',
            [
              {
                text: 'UNSUPPORTED', onPress: () => {
                  this.setState({ billPaymentAppState: BillPaymentsUserJourney.AppState.UNSUPPORTED });
                  SlangPaymentsAssistant.getActiveBillPaymentUserJourney().setFailure();
                  SlangPaymentsAssistant.getActiveBillPaymentUserJourney().notifyAppState(this.state.billPaymentAppState);
                },
              },

              {
                text: 'PAYMENT', onPress: () => {
                  this.setState({ billPaymentAppState: BillPaymentsUserJourney.AppState.PAYMENT });
                  this.setBillPaymentsModalVisible(true);
                },
              },
            ],
            { cancelable: false },
          );

          const navigationAppStateAlert = () =>
          Alert.alert(
            'Navigation App State',
            'Choose An AppState',
            [
              {
                text: 'UNSUPPORTED', onPress: () => {
                  this.setState({ navigationAppState: NavigationUserJourney.AppState.UNSUPPORTED });
                  SlangPaymentsAssistant.getActiveNavigationUserJourney().setFailure();
                  SlangPaymentsAssistant.getActiveNavigationUserJourney().notifyAppState(this.state.navigationAppState);
                },
              },

              {
                text: 'NAVIGATION', onPress: () => {
                  this.setState({ navigationAppState: NavigationUserJourney.AppState.NAVIGATION });
                  this.setNavigationModalVisible(true);
                },
              },
            ],
            { cancelable: false },
          );

        const paymentAssistantListener = {
          onTransaction: (transactionInfo, transactionUserJourney) => {
            this.setState({
              intentResponse: 'User Journey : Transaction\n\nAssociated Data :\n' + JSON.stringify(transactionInfo, null, '\t'),
            });
            transactionAppStateAlert();

            return TransactionUserJourney.AppState.WAITING;
          },

          onBillPayment: (billInfo, billPaymentJourney) => {
            this.setState({
              intentResponse: 'User Journey : BillPayment\n\nAssociated Data :\n' + JSON.stringify(billInfo, null, '\t'),
            });
            billPaymentsAppStateAlert();

            return BillPaymentsUserJourney.AppState.WAITING;
          },

          onNavigation: (navigationInfo, navigationUserJourney) => {
            this.setState({
              intentResponse: 'User Journey : Navigation\n\nAssociated Data :\n' + JSON.stringify(navigationInfo, null, '\t'),
            });
            navigationAppStateAlert();

            return NavigationUserJourney.AppState.WAITING;
          },
        };

        const paymentAssistantLifeCycleObserver = {
          onAssistantInitSuccess: () => {
            console.log('onAssistantInitSuccess');
          },

          onAssistantInitFailure: (error) => {
            console.error('onAssistantInitFailure ' + error);
          },

          onAssistantInvoked: () => {
            console.log('onAssistantInvoked');
          },

          onAssistantClosed: (isCancelled) => {
            console.log('onAssistantClosed ' + isCancelled);
          },

          onAssistantLocaleChanged: (locale) => {
            console.log('onAssistantLocaleChanged ' + JSON.stringify(locale, null, '\t'));
          },

          onUnrecognisedUtterance: (utterance) => {
            console.log('onUnrecognisedUtterance ' + utterance);
          },

          onUtteranceDetected: (utterance) => {
            console.log('onUtteranceDetected ' + utterance);
          },

          onOnboardingSuccess: () => {
            console.log('onOnboardingSuccess');
          },

          onOnboardingFailure: () => {
            console.log('onOnboardingFailure');
          },

          onMicPermissionDenied: () => {
            console.log('onMicPermissionDenied');
          },

          onMicPermissionGranted: () => {
            console.log('onMicPermissionGranted');
          },

          onCoachmarkAction: coachmarkInfo => {
            console.log(
              'onCoachmarkAction ' + JSON.stringify(coachmarkInfo, null, '\t'),
            );
          },

        };

        console.log('Initialising Slang Payment assistant');
        try {
          SlangPaymentsAssistant.initialize({
            requestedLocales: ['en-IN', 'hi-IN'],
            assistantId: 'df88dada784d48b8b4f744c7b1a98fc4',
            apiKey: '86bf513c8bc84c0f99047f48acb11654',

          });
          SlangPaymentsAssistant.ui.showTrigger();
          SlangPaymentsAssistant.setAction(paymentAssistantListener);
          SlangPaymentsAssistant.setLifecycleObserver(paymentAssistantLifeCycleObserver);
          SlangPaymentsAssistant.ui.setWaveColorGradient(['#ad65ea', '#ad65ea']);
          SlangPaymentsAssistant.ui.setTextHighlightColor('#ad65ea');
          SlangPaymentsAssistant.ui.setSettingsButtonBackgroundColor('#ad65ea');
          SlangPaymentsAssistant.ui.setControlButtonBackgroundColor('#ad65ea');
        } catch (error) {
          console.error(error);
        }

        SlangPaymentsAssistant.setAppDefaultSubDomain(AssistantSubDomain.PAYMENT);
        }

      render() {
        return (
          <View>
            <Modal
              animationType="fade"
              transparent={true}
              visible={this.state.transactionModalVisible}
              onRequestClose={() => {
                Alert.alert('Modal has been closed.');
              }}
            >
              <View style={styles.centeredView}>
                <View style={styles.modalView}>
                  <Text style={styles.modalText}>Select Transaction AppState Condition</Text>
                  {this.renderTransactionViews()}
                </View>
              </View>
            </Modal>
            <Modal
              animationType="fade"
              transparent={true}
              visible={this.state.billPaymentsModalVisible}
              onRequestClose={() => {
                Alert.alert('Modal has been closed.');
              }}
            >
              <View style={styles.centeredView}>
                <View style={styles.modalView}>
                  <Text style={styles.modalText}>Select Bill Payements AppState Condition</Text>
                  {this.renderBillPaymentsViews()}
                </View>
              </View>
            </Modal>
            <Modal
              animationType="fade"
              transparent={true}
              visible={this.state.navigationModalVisible}
              onRequestClose={() => {
                Alert.alert('Modal has been closed.');
              }}
            >
              <View style={styles.centeredView}>
                <View style={styles.modalView}>
                  <Text style={styles.modalText}>Select Navigation AppState Condition</Text>
                  {this.renderNavigationViews()}
                </View>
              </View>
            </Modal>
            <View style={styles.viewStyle1}>
              <Text style={styles.headerText}> Welcome to Slang Payment Assistant!</Text>

              <Text style={styles.subTitleText}>User Journey and Associated Data :</Text>
              <View style={styles.viewStyle3}>
                <ScrollView vertical={true}>
                  <Text style={styles.intentResponseText}>{this.state.intentResponse}</Text>
                </ScrollView>
              </View>
            </View>
          </View>
    );
  }
}

export default Sample;
