import React, { useState, useEffect, useRef } from 'react';
import { Text } from 'native-base';
import * as Expo from "expo";
import * as Font from 'expo-font';
import * as Notifications from 'expo-notifications';
import * as firebase from 'firebase';
import Navigator from './navigators/Navigator';
import { registerForPushNotificationsAsync } from './services/NotificationService';
import { firebaseConfig } from './utils/firebaseConfig';
import { LogBox } from 'react-native';

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

const App = () => {

  const [fontReady, setFontReady] = useState(false);

  const [expoPushToken, setExpoPushToken] = useState('');
  const [notification, setNotification] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef();

  const loadFonts = async () => {
    await Font.loadAsync({
      OpenSans_Light: require("./assets/fonts/OpenSans-Light.ttf"),
      OpenSans_Bold: require("./assets/fonts/OpenSans-Bold.ttf"),
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
    });
    setFontReady(true);
  };

  useEffect(() => {
    LogBox.ignoreLogs(['Setting a timer for a long period of time']); // <-- Hide unnecessary warnings with android and firestore

    loadFonts();

    registerForPushNotificationsAsync().then(token => setExpoPushToken(token));

    notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
      setNotification(notification);
    });

    responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
      console.log(response);
    });

    return () => {
      Notifications.removeNotificationSubscription(notificationListener);
      Notifications.removeNotificationSubscription(responseListener);
    };
  }, []);

  if (!fontReady) {
    console.log('Waiting for fonts...');
    return (<>
      <Text>Installing fonts...</Text>
      <Expo.AppLoading />
    </>
    );
  }

  return (
    <Navigator />
  );
}

export default App;
