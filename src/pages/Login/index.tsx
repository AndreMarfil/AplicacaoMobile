import {useNavigation} from '@react-navigation/native';
import React, {useCallback} from 'react';
import {View} from 'react-native';
import {
  GoogleSignin,
  GoogleSigninButton,
} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

const Login: React.FC = () => {
  const navigation = useNavigation();

  const signInGoogle = useCallback(async () => {
    GoogleSignin.configure({
      webClientId:
        '310611327448-ajggju4pci91b0597m4jlnia7f2i34hv.apps.googleusercontent.com',
    });

    const {idToken} = await GoogleSignin.signIn();

    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    const {user} = await auth().signInWithCredential(googleCredential);

    const usersCollection = firestore().collection('users');

    usersCollection
      .where('email', '==', user.email)
      .get()
      .then(snapshot => {
        if (snapshot.empty) {
          usersCollection.add({
            email: user.email,
          });
        }

        navigation.navigate('Home');
      });
  }, [navigation]);

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <GoogleSigninButton onPress={signInGoogle} />
    </View>
  );
};
export default Login;
