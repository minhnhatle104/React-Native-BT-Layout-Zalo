import { View, Text, Image, ScrollView } from 'react-native'
import React from 'react'
import { styles } from '../styles/styles'
import { dataAvatar } from '../../../data/data_zalo'

export default function Body() {

    _renderContent = ()=>{
        return dataAvatar.map((data,index)=>{
            console.log(data)
            return <View style={styles.bodyContainer} key={index}>
                <View style={styles.bodyContainer__info}>
                    <Image style={styles.imageAvatar} source={data.image}/>
                    <View style={{marginLeft:15}}>
                        <Text style={styles.text}>{data.name}</Text>
                        <Text>{data.friend}</Text>
                    </View>
                </View>
                <View style={styles.bodyContainer__button}>
                    <Text style={styles.text}>Kết bạn</Text>
                </View>
            </View>
        })
    }

    return (
        <View>
            <View style={styles.header__title}>
                <Image style={styles.image} source={require("../../../asset/friend.png")} />
                <Text style={styles.header__title__text}>Gợi ý kết bạn</Text>
            </View>
            {_renderContent()}
        </View>
    )
}