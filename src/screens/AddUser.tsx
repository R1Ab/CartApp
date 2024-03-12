import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addUser, updateUser } from '../redux/UserSlice';
import { useNavigation, useRoute } from '@react-navigation/native';

export default function AddUser({ navigation }) {
    const route = useRoute()

    const [name, setname] = useState(route.params.type == 'edit' ? route.params.data.name : '');
    const [email, setEmail] = useState(route.params.type == 'edit' ? route.params.data.email : '');
    const [number, setNumber] = useState(route.params.type == 'edit' ? route.params.data.number : '');

    const dispatch = useDispatch()
    // const navigation = useNavigation()

    return (
        <View style={{ flex: 1 }}>
            <TextInput
                style={{
                    width: "80%", height: 50, marginTop: 50,
                    borderColor: "black",
                    borderWidth: 1, alignSelf: "center", borderRadius: 10
                    , padding: 10
                }}
                value={name} onChangeText={(val) => setname(val)}
                placeholder='Enter Username'
            >
            </TextInput>

            <TextInput
                style={{
                    width: "80%", height: 50, marginTop: 50,
                    borderColor: "black",
                    borderWidth: 1, alignSelf: "center", borderRadius: 10
                    , padding: 10
                }}
                value={email} onChangeText={(val) => setEmail(val)}

                keyboardType="email-address"
                placeholder='Enter E-mail'
            >
            </TextInput>

            <TextInput
                style={{
                    width: "80%", height: 50, marginTop: 50,
                    borderColor: "black",
                    borderWidth: 1, alignSelf: "center", borderRadius: 10
                    , padding: 10
                }}
                value={number} onChangeText={(val) => setNumber(val)}

                keyboardType="number-pad"
                maxLength={10}
                placeholder='Enter Mobile number'
            >
            </TextInput>

            <TouchableOpacity style={{
                width: "100%", height: 50, bottom: 0,
                backgroundColor: "green",
                borderWidth: 1, borderRadius: 10
                , alignItems: "center", position: "absolute", justifyContent: "center"
            }}
                onPress={() => {
                    if (route.params.type == 'edit') {
                        dispatch(updateUser({ name: name, email: email, number: number, index: route.params.index }))
                    }
                    dispatch(addUser({ name, email, number }))
                }

                    // navigation.goBack()
                }
            >
                <Text>
                    Add User
                </Text>
            </TouchableOpacity>


        </View>
    )
} 