import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { TextInput } from 'react-native-paper';
import { Checkbox } from 'react-native-paper';
import OptionSwitch from '../../Components/OptionSwitch';

export default function Login({ navigation }) {

    const axios = require('axios').default;
    const loginURL = "https://api.humbee.click/auth/login"
    const userDetails = "https://api.humbee.click/users/me"
    const loginOption = ["Password", "OTP"];

    //States Handlers
    const [selectedOption, setSelectedOption] = React.useState("Password");
    const [checked, setChecked] = React.useState(false);
    const [mobileNumber, setMobileNumber] = React.useState();
    const [password, setPassword] = React.useState();

    //Styles
    const colors = ['rgb(254, 228, 195)', 'rgb(244, 157, 62)']

    // const getDetails = (token) => {
    //     axios.get(userDetails, {
    //         token: token,
    //     }).then(res => {
    //         console.log(res.data)
    //     })
    // }

    const getUserData = () => {
        axios.post(loginURL, {
            username: mobileNumber,
            password: password,
        }).then(function ({ data }) {
            console.log(data);
            if(data.message === "ok") {
                navigation.navigate("Home");
            }
        })

    }

    return (
        <View style={{
            flex: 1,
            justifyContent: 'center',
            padding: 25,
            backgroundColor: '#fff'

        }}>
            <View>
                <Text
                    style={{
                        fontSize: 15,
                        fontWeight: 'bold',
                    }}>
                    Welcome
                </Text>
                <Text
                    style={{
                        fontSize: 30,
                        fontWeight: 'bold',
                    }}>
                    HumBee
                </Text>

                {/* PHONE NUMBER  */}
                <View
                    style={{
                        marginTop: 30,
                    }}>
                    {/* <View style={{ flexDirection: "row" }}>
                        <Text style={{ color: "red" }}>*</Text>
                        <Text>Mobile</Text>
                    </View> */}

                    <TextInput
                        left={<TextInput.Icon name="account" color="black" />}
                        mode='outlined'
                        label="Mobile Number"
                        activeOutlineColor={colors[1]}
                        outlineColor={colors[1]}
                        onChangeText={(text) => setMobileNumber(text)}
                        keyboardType="phone-pad"
                        style={{
                            backgroundColor: '#fff',
                        }}
                    />
                </View>

                {/* Choose Option  */}
                <View
                    style={{
                        marginTop: 30,
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                    }}>
                    <View>
                        <Text>Login Using?</Text>
                    </View>
                    <View>
                        <OptionSwitch
                            colors={colors}
                            selectedOption={selectedOption}
                            setSelectedOption={setSelectedOption}
                            customTextStyle={styles.langSelect}
                            customStyle={styles.container}
                            data={loginOption}
                        />
                    </View>

                </View>

                {/* PASSWORD  */}
                <View
                    style={{
                        marginTop: 20,
                    }}>
                    {/* <View style={{ flexDirection: "row" }}>
                        <Text style={{ color: "red" }}>*</Text>
                        <Text>{selectedOption}</Text>
                    </View> */}
                    <TextInput
                        mode='outlined'
                        label={selectedOption}
                        secureTextEntry={!checked}
                        onChangeText={(text) => setPassword(text)}
                        left={<TextInput.Icon name="lock-outline" color="black" />}
                        right={<TextInput.Icon name="eye" color="black" />}
                        onPress={() => console.log("pressed")}
                        outlineColor={colors[1]}
                        activeOutlineColor={colors[1]}
                        style={{
                            backgroundColor: '#fff',
                        }}
                    />
                </View>
                <View
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                    }}>
                    <Checkbox
                        status={checked ? 'checked' : 'unchecked'}
                        uncheckedColor={colors[1]}
                        color={colors[1]}
                        onPress={() => {
                            setChecked(!checked);
                        }}
                    />
                    <Text>Show Password</Text>
                </View>

                {/* Forgot Password / Send OTP  */}
                <View
                    style={{
                        marginTop: 20,
                    }}>
                    <TouchableOpacity>
                        <Text
                            style={{
                                fontSize: 15,
                                color: colors[1],
                                textAlign: "right",
                                fontWeight: "bold",
                            }}>
                            {selectedOption === "Password" ? "Forgot Password?" : "Send OTP"}
                        </Text>
                    </TouchableOpacity>
                </View>

                {/* SIGN in BUTTON  */}
                <View
                    style={{
                        marginTop: 20,

                    }}>
                    <TouchableOpacity style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: colors[1],
                        borderRadius: 10,
                        ...styles.shadow,
                    }}
                        onPress={getUserData}>
                        <Text style={{
                            paddingVertical: 16,
                            fontSize: 25,
                            textTransform: 'uppercase',
                            letterSpacing: 1,
                            fontWeight: 'bold',
                            color: '#fff',
                            marginRight: 10,
                        }}>Sign In</Text>
                        <AntDesign name="arrowright" size={25} color="#fff" />
                    </TouchableOpacity>
                </View>

                <View
                    style={{
                        flexDirection: "row",
                        marginTop: 50,
                        justifyContent: "center",
                    }}>
                    <Text
                        style={{
                            fontSize: 15,
                            fontWeight: "bold",
                        }}>Don't have an account?</Text>
                    <TouchableOpacity>
                        <Text
                            style={{
                                marginLeft: 5,
                                fontSize: 15,
                                color: colors[1],
                                fontWeight: "bold",
                                textTransform: "uppercase",
                            }}
                            onPress={() => navigation.navigate("RegisterNow")}
                        >REGISTER Now</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    langSelect: {
        fontSize: 14,
        textAlign: 'center',
    },
    container: {
        width: 70,
        paddingVertical: 5,
        borderRadius: 0,
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    }
})