//import {useNavigation} from '@react-navigation/native';
import React, {useCallback} from 'react';
import {View} from 'react-native';
import {
  GoogleSignin,
  GoogleSigninButton,
} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';

const Login: React.FC = () => {
  //const navigation = useNavigation();

  const signInGoogle = useCallback(async () => {
    GoogleSignin.configure({
      webClientId:
        '310611327448-ajggju4pci91b0597m4jlnia7f2i34hv.apps.googleusercontent.com',
    });

    const {idToken} = await GoogleSignin.signIn();
    console.log(idToken);
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    const {user} = await auth().signInWithCredential(googleCredential);

    console.log(user);
  }, []);

  return (
    <View>
      <GoogleSigninButton onPress={signInGoogle} />
    </View>
  );
};
export default Login;
