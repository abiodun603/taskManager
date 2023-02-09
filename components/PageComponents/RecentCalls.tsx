import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons"
import FontSize from '../../constants/FontSize'
import Colors from '../../constants/Colors'
import Font from '../../constants/Font'




const recentHistory = [
  {
    id: "1",
    name: "Jane Ngozi",
    status: "incoming",
    time: "09:12"
  },
  {
    id: "2",
    name: "+234 810 455 2121",
    status: "missed",
    time: "08:00"
  },
  {
    id: "3",
    name: "Toyosi Afolabi",
    status: "outgoing",
    time: "07:45"
  },
  {
    id: "4",
    name: "Dele Fekinz",
    status: "missed",
    time: "24 Apr"
  }
]



const recentMessage = [
  {
    id: "1",
    name: "Jane Ngozi",
    status: "incoming",
    time: "09:12"
  },
  {
    id: "2",
    name: "+234 810 455 2121",
    status: "missed",
    time: "08:00"
  },
  {
    id: "3",
    name: "Toyosi Afolabi",
    status: "outgoing",
    time: "07:45"
  },
  {
    id: "4",
    name: "Dele Fekinz",
    status: "missed",
    time: "24 Apr"
  }
]

const pendingTask = [
  {
    id: 1,
    time: "10:00am",
    title: "New Client Pitch"
  },
  {
    id: 2,
    time: "14:00am",
    title: "Pay day for Morse"
  },
  {
    id: 3,
    time: "19:00am",
    title: "Sermon Mountage"
  },
  {
    id: 4,
    time: "11:00am",
    title: "PayStack"
  }
]

const CallRecord = ({time, name}: {time: string, name: string}) => {
  return (
    <View style={{flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginVertical: 10}}>
      {/* icon & name */}
      <View style={{flexDirection: "row", alignItems: "center"}}>
        <MaterialCommunityIcons 
          name='phone-outgoing'  
          color="#57D138" 
          size={18}
        />
        <Text style={{color: Colors.text, fontFamily: Font['inter-regular'], fontSize: FontSize.small, marginLeft: 5}}>{name}</Text>
      </View>

      {/* time */}
      <Text>{time}</Text>
    </View>
  )
}

export const RecentCalls = ({headerTitle} : {headerTitle: string}) => {
  return (
    <View style={styles.container}>
      {/* header */}
      <View style={{flexDirection: "row", justifyContent: "space-between", marginBottom: 10}}>
        {/* name */}
        <Text style={{color: Colors.text, fontFamily: Font['inter-medium'], fontSize: FontSize.small}}>{headerTitle}</Text>
        {/* touch button */}
        <TouchableOpacity
          onPress={() => null}
        > 
          <Text style={{color: Colors.primary, fontFamily: Font['inter-medium'], fontSize: FontSize.small}}>See all</Text>
        </TouchableOpacity>
      </View>

      {/* calls */}
      {
        recentMessage.length > 0 && 
        recentMessage.map((message) => {
          return (
            <CallRecord key={message.id} time={message.time} name={message.name} />
          )
        })
      }
    </View>
  )
}



export const PendingTask = () => {
  return (
    <View style={styles.container}>
      {/* header */}
      <View style={{flexDirection: "row", justifyContent: "space-between", marginBottom: 10}}>
        {/* name */}
        <Text style={{color: Colors.text, fontFamily: Font['inter-medium'], fontSize: FontSize.small}}>Pending Tasks</Text>
        {/* touch button */}
        <TouchableOpacity
          onPress={() => null}
        > 
          <Text style={{color: Colors.primary, fontFamily: Font['inter-medium'], fontSize: FontSize.small}}>See all</Text>
        </TouchableOpacity>
      </View>

      {/* tasks */}
      {
         pendingTask.length > 0 && 
         pendingTask.map((message) => {
           return (
            <View style={{flexDirection: "row", marginVertical: 10}} key={message.id}>
              {/* time */}
              <Text style={[styles.title, {color: Colors.gray}]}>{message.time}</Text>
              {/* divider */}
              <View style={styles.divider} />
              {/* title */}
              <Text style={[styles.title, {color: Colors.text}]}>{message.title}</Text>
            </View>
           )
         })
      }
     
    </View>
  )
}



const styles = StyleSheet.create({

  // recent calls
  container: {
    width: "100%",
    height: 221,
    borderWidth: 1,
    marginVertical: 10,
    borderRadius: FontSize.base,
    borderColor: "#EAECF0",
    paddingHorizontal: 15,
    paddingVertical: 18
  },

  title: {
    fontFamily: Font['inter-regular'],
    fontSize: FontSize.small
  },

  divider: {
    height: "100%",
    backgroundColor: Colors.text,
    borderWidth: 1,
    borderColor: Colors.text,
    marginHorizontal: 10
  }
})