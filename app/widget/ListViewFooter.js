/**
 * listview 底部
 */
import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    ActivityIndicator,
} from 'react-native';


export default class ListViewFooter extends React.Component {
    render() {

        if (this.props.type == 'NoData') {//没有更多数据
            return (
                <View style={styles.footerLayout}>
                    <Text style={styles.footerTitle}>
                        {this.props.title}
                    </Text>

                </View>
            )
        }else if(this.props.type == 'HasData') {


            return (
                <View style={styles.footerLayout}>
                    <ActivityIndicator color="white"/>
                    <Text style={styles.footerTitle}>
                        {this.props.title}
                    </Text>
                </View>
            )
        }
    }
}

const styles = StyleSheet.create({
    footerLayout: {
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection:'row',
    },


    footerTitle :{
        fontSize:15,
        color:'gray',

    }

})