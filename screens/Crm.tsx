import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FontSize from '../constants/FontSize'
import Colors from '../constants/Colors'
import Font from '../constants/Font'

const DATA = [
  {
    id: 1,
    startTime: "10:00am",
    endTime: "11:00am",
    name: "New Client Pitch",
    status: "pending"
  },
  {
    id: 2,
    startTime: "14:00am",
    endTime: "14:20am",
    name: "Pay day for Morse",
    status: "pending"
  }
]

interface CrmCardProps {
  startTime: string;
  endTime: string;
  title: string;
  status: string;
}

const CrmCard: React.FC<CrmCardProps> = ({startTime, endTime, title, status}) => {
  return (
    <View style={styles.crmCardContainer}>
      {/* time */}
      <View >
        {/* start */}
        <Text style={[styles.description, {marginBottom: 5}]}>{startTime}</Text>
        {/* ends */}
        <Text style={styles.description}>{endTime}</Text>
      </View>
      {/* diviver */}
      <View style={styles.divider} />
      {/* task */}
      <View>
        {/* name */}
        <Text style={[styles.title, {marginBottom: 5}]}>{title}</Text>
        <Text style={styles.description}>{status}</Text>
      </View>
    </View>
  )
}

const Crm = () => {
  return (
    <ScrollView
      style={styles.container}
    >
      <Text style={[styles.description]}>Apr 25</Text>
      <FlatList
          data={DATA}
          keyExtractor={item => item.id.toString()}
          renderItem={
            ({item}) => 
              <CrmCard  
                title = {item.name}
                status={item.status}
                startTime={item.startTime}
                endTime={item.endTime}
            /> 
          }
        />
    </ScrollView>
  )
}

export default Crm

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  crmCardContainer: {
    width: '100%',
    height: 66,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#EAECF0',
    borderRadius: FontSize.base,
    paddingVertical: 10,
    paddingHorizontal:20,
    marginVertical: 10,
    alignItems: 'center'
  },
  divider: {
    height: "100%",
    backgroundColor: Colors.text,
    borderWidth: 1,
    borderColor: Colors.gray,
    marginHorizontal: 18
  },
  title: {
    fontFamily: Font['inter-medium'],
    fontSize: FontSize.small,
    color: Colors.text,
  },
  description: {
    fontFamily: Font['inter-regular'],
    fontSize: FontSize.xsmall,
    color: Colors.gray,
  },

})