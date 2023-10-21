import { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native"
import { AppStyles } from "../../AppStyles";

type User = {
    name?: string,
    userName?: string,
    email?: string,
    password?: string,
}

const SignUp = () => {
    const [user, setUser] = useState<User>({});
    return (
        <View style={AppStyles.screenView}>
            <Text style={[AppStyles.text, styles.signUpText]}>
                SignUp
            </Text>
            <View style={styles.signUpContainer}>
                <TextInput
                    style={styles.signUpInput}
                    placeholderTextColor="grey"
                    value={user.name}
                    onChangeText={text => setUser({ ...user, name: text })}
                    placeholder={'Name'}
                    secureTextEntry={false}
                />
                <TextInput
                    style={styles.signUpInput}
                    placeholderTextColor="grey"
                    value={user.userName}
                    onChangeText={text => setUser({ ...user, userName: text })}
                    placeholder={'User Name'}
                    secureTextEntry={false}
                />
                <TextInput
                    style={styles.signUpInput}
                    placeholderTextColor="grey"
                    value={user.email}
                    onChangeText={text => setUser({ ...user, email: text })}
                    placeholder={'Email'}
                    secureTextEntry={false}
                />
                <TextInput
                    style={styles.signUpInput}
                    placeholderTextColor="grey"
                    value={user.password}
                    onChangeText={text => setUser({ ...user, password: text })}
                    placeholder={'Password'}
                    secureTextEntry={false}
                />
            </View>
        </View>
    )
}

export default SignUp;

const styles = StyleSheet.create({
    signUpContainer: {
        gap: 4,
        marginTop: 40,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    signUpInput: {
        borderStyle: 'solid',
        borderWidth: 1,
        borderRadius: 5,
        width: 200,
        color: 'white',
    },
    signUpText: {
        alignSelf: 'center',
        paddingTop: 140,
        fontWeight: '400',
        fontSize: 36
    }
})
