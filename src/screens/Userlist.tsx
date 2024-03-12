import { View, Text, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteUser } from '../redux/UserSlice'

export default function Userlist({ navigation }) {
    const { data } = useSelector(state => state.user)
    const dispatch = useDispatch()

    console.log(data)
    return (
        <View style={{ flex: 1 }}>
            <FlatList
                data={data}
                renderItem={({ item, index }) => <View style={{ width: "90%", height: 100, borderWidth: 1, borderColor: "black", alignSelf: "center", marginTop: 30, padding: 10, flexDirection: "row", justifyContent: "space-between" }}>
                    <View>
                        <Text>
                            {"User Name : " + item.name}
                        </Text>

                        <Text>
                            {"User E-mail : " + item.email}
                        </Text>

                        <Text>
                            {"User Mobile Number : " + item.number}
                        </Text>
                    </View>

                    <View>
                        <Text style={{ color: "blue", borderColor: "black", borderWidth: 1, padding: 5 }}
                            onPress={() => navigation.navigate('AddUser', { type: 'edit', data: item, index: index })}
                        >

                            Edit
                        </Text>
                        <Text style={{ color: "red", borderColor: "black", borderWidth: 1, padding: 5, marginTop: 9 }}
                            onPress={() => {
                                dispatch(deleteUser(index))
                            }}
                        >
                            Delete
                        </Text>
                    </View>

                </View>
                }


            />
            <TouchableOpacity style={{ alignItems: "center", bottom: 0, justifyContent: "center", backgroundColor: "green", width: '100 %', height: 50, position: "absolute" }}
                onPress={() => navigation.navigate('AddUser', { type: 'add' })}
            >

                <Text style={{ fontSize: 20 }}>Userlist</Text>

            </TouchableOpacity>


        </View>
    )
}