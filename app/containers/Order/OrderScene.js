import React, {PureComponent,Component} from 'react';
import {View, Text, StyleSheet, ScrollView, TouchableOpacity, ListView, Image, StatusBar, FlatList} from 'react-native';


class OrderScene extends Component {

//设置头部标题栏(action bar)的相关属性
    static navigationOptions = ({ navigation }) => ({
        // title: '订单',
        headerTitle:'订单',
        headerStyle: { backgroundColor: 'white' },
    })

    render() {
        return (
            <View style={styles.content}>
                <Text style={styles.note_txt}>
                    this is OrderScene !
                </Text>

            </View>

        );


    }

}


const styles = StyleSheet.create(
    {
        content: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#F5FCFF',
        },

        note_txt: {
            fontSize: 24,
            textAlign: 'center'
        },

    }
);


export  default OrderScene;