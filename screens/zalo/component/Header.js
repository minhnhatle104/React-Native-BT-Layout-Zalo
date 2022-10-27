import { View, Text, Image, ScrollView, FlatList } from 'react-native'
import React from 'react'
import { styles } from '../styles/styles'
import {dataAvatar} from "../../../data/data_zalo"

export default function Header() {

    _renderItem = (data)=>{
        console.log(data)
        return <View style={styles.header__image}>
            <Image style={styles.imageAvatar} source={data.item.image} />
            <Text style={styles.text}>{data.item.name}</Text>
        </View>
    }

    return (
        <View>
            <View style={styles.header__title}>
                <Image style={styles.image} source={require("../../../asset/history.png")}/>
                <Text style={styles.header__title__text}>Danh sách tìm kiếm gần đây</Text>
            </View>
            <FlatList data={dataAvatar}
                renderItem = {(data)=>_renderItem(data)}
                horizontal
                showsHorizontalScrollIndicator={false}
            />
        </View>
    )
}