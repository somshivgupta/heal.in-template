import {
  View,
  Text,
  Keyboard,
  KeyboardAvoidingView,
  StyleSheet,
  LayoutAnimation,
  TouchableOpacity,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import Background from "../components/Background";
import MyTextInput from "../components/TextInput";
import { useRouter } from "expo-router";
import { AuthContext } from "../context/authcontext";

export default function SignUp() {
  const router = useRouter();
  const { register } = useContext(AuthContext);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState(-1);
  const [gender, setGender] = useState("");
  const [age, setAge] = useState(-1);
  const [password, setPassword] = useState("");
  // const [confirmPassword, setConfirmPassword] = useState("");

  const [keyboardVisible, setKeyboardVisible] = useState(false);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        setKeyboardVisible(true);
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        setKeyboardVisible(false);
      }
    );

    

    // cleanup function
    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);
  const handleSignUp = () => {
    const userData = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      contact: phoneNumber,
      gender: gender,
      age: age,
      password: password,
      role: "USER",
    };
    register(userData);
  }

  return (
    <View style={styles.container}>
      <Background>
        <KeyboardAvoidingView
          style={[
            styles.loginView,
            keyboardVisible && { justifyContent: "space-around" },
          ]}
          behavior="padding"
          keyboardVerticalOffset={-400}
        >
          <Text style={styles.header}>heal.in</Text>
          <View style={styles.name}>
            <View style={styles.fName}>
              <MyTextInput placeholderText={"First Name"} onChangeText={setFirstName} />
            </View>
            <View style={styles.lName}>
              <MyTextInput placeholderText={"Last Name"} onChangeText={setLastName} />
            </View>
          </View>
          <View style={styles.emailInputView}>
            <MyTextInput placeholderText={"Email Address"} onChangeText={setEmail} isEmail={true} />
          </View>
          <View style={styles.pNoInputView}>
            <MyTextInput placeholderText={"Phone Number"} onChangeText={setPhoneNumber} isNum={true} />
          </View>
          <View style={styles.ageGenderView}>
            <View style={styles.genderInputView}>
              <MyTextInput placeholderText={"Gender"} onChangeText={setGender} />
            </View>
            <View style={styles.ageInputView}>
              <MyTextInput placeholderText={"Age"} isNum={true} onChangeText={setAge} />
            </View>
          </View>
          <View style={styles.passwordInputView}>
            <MyTextInput placeholderText={"Password"} onChangeText={setPassword} isPassword={true} />
          </View>
          <View style={styles.cPasswordInputView}>
            <MyTextInput
              placeholderText={"Confirm Password"}
              isPassword={true}
            />
          </View>
          <View style={styles.buttonView}>
            <TouchableOpacity
              style={styles.signUpButton}
              onPress={handleSignUp}
            >
              <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <Text style={styles.gotAccount}>Already have an account?</Text>
            <TouchableOpacity>
              <Text
                style={styles.link}
                onPress={() => {
                  router.push("signIn");
                }}
              >
                {" "}
                Log in.
              </Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </Background>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loginView: {
    width: "90%",
    maxWidth: 500,
    height: "90%",
    maxHeight: 800,
    backgroundColor: "rgba(255,255,255,1)",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  header: {
    fontSize: 40,
    fontWeight: "500",
    color: "#1877F2",
    paddingTop: 0,
  },
  name: {
    marginTop: 20,
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  fName: {
    width: "47%",
    paddingLeft: 15,
    paddingRight: 4,
  },
  lName: {
    width: "47%",
    paddingRight: 15,
    paddingLeft: 4,
  },
  emailInputView: {
    marginTop: 15,
    width: "90%",
  },
  pNoInputView: {
    marginTop: 15,
    width: "90%",
  },
  ageGenderView: {
    marginTop: 15,
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  genderInputView: {
    width: "47%",
    paddingLeft: 15,
    paddingRight: 4,
  },
  ageInputView: {
    width: "47%",
    paddingRight: 15,
    paddingLeft: 4,
  },
  passwordInputView: {
    marginTop: 15,
    width: "90%",
  },
  cPasswordInputView: {
    marginTop: 15,
    width: "90%",
  },
  buttonView: {
    paddingTop: 15,
    width: "50%",
    marginTop: 15,
    borderRadius: 10,
    overflow: "hidden",
  },
  signUpButton: {
    backgroundColor: "#1877F2",
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  row: {
    flexDirection: "row",
    marginTop: 4,
  },
  forgot: {
    paddingTop: 10,
    fontSize: 14,
    fontWeight: 500,
    color: "#1877F2",
  },
  gotAccount: {
    paddingTop: 20,
    fontSize: 18,
    fontWeight: 500,
    color: "#1877F2",
  },
  link: {
    paddingTop: 20,
    paddingBottom: 20,
    fontSize: 18,
    fontWeight: "bold",
    color: "#42B72A",
  },
});
