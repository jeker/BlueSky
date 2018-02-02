import React, {PureComponent,Component} from 'react';
import {View, Text, StyleSheet, ScrollView, TouchableOpacity, ListView, Image, StatusBar, FlatList} from 'react-native';

import color from '../../widget/color'
import screen from '../../common/screen'
import NavigationItem from '../../widget/NavigationItem'

class MineScene extends Component {

//设置头部标题栏(action bar)的相关属性
    static navigationOptions = ({ navigation }) => ({
        headerTitle:'我的',
        headerRight: (
            <View style={{ flexDirection: 'row' }}>
                <NavigationItem
                    icon={require('../../img/Mine/icon_navigationItem_set_white.png')}
                    onPress={() => {

                    }}
                />
                <NavigationItem
                    icon={require('../../img/Home/icon_navigationItem_message_white.png')}
                    onPress={() => {

                    }}
                />
            </View>
        ),
        headerStyle: { backgroundColor: color.theme },
    })

    render() {
        return (
            <View style={styles.content}>
                <Text style={styles.note_txt}>
                    this is MineScene !
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


export  default MineScene;