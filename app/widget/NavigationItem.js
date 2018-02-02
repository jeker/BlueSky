import  React, {PureComponent} from  'react'
import {Image, TouchableOpacity, Text,StyleSheet,}  from  'react-native'


class NavigationItem extends PureComponent {

    render() {
        let icon = this.props.icon &&  //如果参数icon存在,就创建Image
            <Image style={[styles.icon, this.props.iconStyle] } source={this.props.icon}/>

        let title = this.props.title &&
            <Text style={[styles.title, this.props.titleStyle]}>
                {this.props.title}
            </Text>


        return (
            <TouchableOpacity style={styles.container} onPress={this.props.onPress}>
                {icon}
                {title}
            </TouchableOpacity>
        );

    }

}


const styles = StyleSheet.create({

    icon: {
        width: 27,
        height: 27,
        margin: 8,
    },

    title: {
        fontSize: 15,
        color: '#333333',
        margin: 8,
    },

    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',

    }


});


export  default  NavigationItem;