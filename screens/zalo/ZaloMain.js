import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import Header from './component/Header'
import { styles } from './styles/styles'
import Body from './component/Body'

export default function ZaloMain() {
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <Header/>
      <Body/>
    </ScrollView>
  )
}