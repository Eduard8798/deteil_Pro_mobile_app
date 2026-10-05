import React, {useState} from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';
import {LoginRequest} from "../../store/type/type";
import {useLoginMutation} from "../../store/endpoints/authApi";
import asyncStorage from "@react-native-async-storage/async-storage";
import {AppNavigationProp} from "../../navigation/types/types";
import {useAppDispatch} from "../../store/storeHooks";
import {setAuthenticated, setUnauthenticated} from "../../store/slices/authSlice";


interface LoginScreenProps {
  navigation: AppNavigationProp;
}

const LoginScreen = ({navigation}:LoginScreenProps) => {

  const [login] = useLoginMutation();
  const dispatch = useAppDispatch();
  const [dataForm, setDataForm] = useState<LoginRequest>({
    phone: '',
    password: ''
  });

  const handleSubmit = async () => {
    try {

      const result = await login(
          dataForm
      ).unwrap()

      if (result.accessToken) {
        asyncStorage.setItem('accessToken', result.accessToken)
      }
      if (result.refreshToken) {
        asyncStorage.setItem('refreshToken', result.refreshToken)
      }
      if (result.refreshToken && result.accessToken) {
        dispatch(setAuthenticated());
        navigation.navigate('ProfileScreen');
      }
      if (!result.refreshToken && !result.accessToken){
        dispatch(setUnauthenticated());
      }
    } catch (e) {
      console.log('Error', e)
    }
  }

  const changeValueDataLogin = (field: keyof LoginRequest,
                                value: string) => {
    setDataForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  };


  return (
      <SafeAreaView style={styles.safe}>
        <KeyboardAvoidingView
            style={styles.flex}
            behavior={Platform.OS === "ios" ? "padding" : undefined}
        >
          <ScrollView
              contentContainerStyle={styles.container}
              keyboardShouldPersistTaps="handled"
          >
            <View style={styles.header}>
              <Text style={styles.title}>Welcome</Text>
              <Text style={styles.subtitle}>Log in or continue as a guest</Text>
            </View>

            <View style={styles.form}>
              <Text style={styles.label}>Phone</Text>
              <TextInput
                  style={styles.input}
                  placeholder="380"
                  placeholderTextColor="#9AA0A6"
                  keyboardType="phone-pad"
                  autoCapitalize="none"
                  onChangeText={(text) => {
                    changeValueDataLogin('phone',text)
                  }}
              />

              <Text style={[styles.label, {marginTop: 16}]}>Password</Text>
              <TextInput
                  style={styles.input}
                  placeholder="••••••••"
                  placeholderTextColor="#9AA0A6"
                  secureTextEntry
                  onChangeText={(text) => {
                    changeValueDataLogin('password',text)
                  }}
              />

              <Pressable style={styles.linkContainer} onPress={() => {
              }}>
                <Text style={styles.linkText}>Forgot your password?</Text>
              </Pressable>

              <Pressable style={styles.primaryButton} onPress={()=> {
                console.log('work'), handleSubmit()
              }}>
                <Text style={styles.primaryButtonText}>Login</Text>
              </Pressable>

              <Text style={styles.orText}>or</Text>


              <Pressable style={styles.guestButton} onPress={() => {
                navigation.navigate('BookingScreen')
              }}>
                <Text style={styles.guestButtonText}

                >Login as a guest</Text>
              </Pressable>

              <View style={styles.footer}>
                <Text style={styles.small}>Don't have an account?</Text>
                <Pressable onPress={() => {
                }}>
                  <Text style={[styles.linkText, {marginLeft: 8}]}
                        onPress={() => navigation.navigate('RegistrationScreen')}
                  >Register</Text>
                </Pressable>
              </View>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  flex: {flex: 1},
  container: {
    padding: 24,
    justifyContent: "center",
    minHeight: "100%",
  },
  header: {
    marginBottom: 28,
    alignItems: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    color: "#111827",
  },
  subtitle: {
    marginTop: 6,
    fontSize: 14,
    color: "#6B7280",
    textAlign: "center",
  },
  form: {
    width: "100%",
  },
  label: {
    fontSize: 13,
    color: "#374151",
    marginBottom: 6,
  },
  input: {
    height: 48,
    borderWidth: 1,
    borderColor: "#E5E7EB",
    borderRadius: 10,
    paddingHorizontal: 12,
    backgroundColor: "#FAFAFB",
    fontSize: 16,
    color: "#111827",
  },
  linkContainer: {
    alignSelf: "flex-end",
    marginTop: 8,
    marginBottom: 12,
  },
  linkText: {
    fontSize: 13,
    color: "#2563EB",
  },
  primaryButton: {
    height: 48,
    borderRadius: 10,
    backgroundColor: "#111827",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 8,
  },
  primaryButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
  },
  orText: {
    textAlign: "center",
    marginVertical: 14,
    color: "#9CA3AF",
  },
  socialRow: {
    flexDirection: "column",
    gap: 10,
  },
  socialButton: {
    height: 44,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#E5E7EB",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
    backgroundColor: "#FFFFFF",
  },
  socialButtonText: {
    fontSize: 15,
    color: "#111827",
  },
  guestButton: {
    height: 44,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#D1D5DB",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 12,
    backgroundColor: "#F8FAFC",
  },
  guestButtonText: {
    fontSize: 15,
    color: "#374151",
    fontWeight: "600",
  },
  footer: {
    marginTop: 22,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  small: {
    color: "#6B7280",
    fontSize: 13,
  },
});
