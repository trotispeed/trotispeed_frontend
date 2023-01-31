//import liraries
import React, {useState} from 'react';
import { View, Text, StyleSheet, TextInput, SafeAreaView, FlatList, ScrollView, ScrollViewComponent } from 'react-native';




// create a component
const TestScreen = () => {

    const [username, setUserName] = React.useState('');
    const [data , SetData] = useState([
        {title:"xaiomi pro", key: "1"},
        {title:"xaiomi pro2", key: "2"},
        {title:"xaiomi pro3", key: "3"},
        {title:"xaiomi pro4", key: "4"},
        {title:"xaiomi pro4", key: "5"},
        {title:"xaiomi pro4", key: "6"},
        
    ]);
    const [data2 , SetData2] = useState([
        {title:"xaiomi pro", key: "1"},
        {title:"xaiomi pro2", key: "2"},
        {title:"xaiomi pro3", key: "3"},
        {title:"xaiomi pro4", key: "4"},
        {title:"xaiomi pro4", key: "5"},
        {title:"xaiomi pro4", key: "6"}
        
    ]);

    return (
        <View style={styles.container}>
            <Text style={{marginTop: 70}}> Welcome @ Chaimae </Text>
            <TextInput
                style={styles.input}
                placeholderTextColor={'#45DE88'}
                onChangeText={setUserName}
                value={username}
                placeholder="SEARCH"
            />

            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {data.map((data)=>{
                return(
                <View >
                    <Text style={styles.title}>{data.title}</Text>
                </View>
                )
            })}
            </ScrollView>

            <ScrollView showsVerticalScrollIndicator={false}>
            {data2.map((data2)=>{
                return(
                <View >
                    <Text style={styles.troti}>{data2.title}</Text>
                </View>
                )
            })}
            </ScrollView>


        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        
    },

    input: {

        height: 40,
        margin: 15,
        paddingLeft: 30,
        borderRadius: 15,
        borderColor: '#45DE88',
        borderWidth: 2,
        width: 300,
        height: 50,
        color: 'grey',
    },
    title: {
        
        height: 130,
        width: 150,
        backgroundColor: "#45DE88",
        fontSize: 20,
        padding: 10,
        marginLeft: 10,
        marginBottom: 90,
        borderRadius: 20,

    },
    troti:{
        backgroundColor: "#45DE88",
        marginTop: 10,
        padding: 50,
        borderRadius: 30,
        height: 310,
        width: 360,

    }


});

//make this component available to the app
export default TestScreen;
