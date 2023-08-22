import {FlatList, StyleSheet, Text, TextInput, View,TouchableOpacity } from 'react-native'
import React from 'react'

// ** Constants
import FontSize from '../../constants/FontSize';
import Font from '../../constants/Font';
import Colors from '../../constants/Colors';

// ** Types
import { RootStackParamList } from "../../types";

// ** Third Party
import { styled } from 'nativewind';
import { Divider } from 'native-base';
import Entypo from "@expo/vector-icons/Entypo"

// name file user-plus
import Feather from "@expo/vector-icons/Feather"
//name globe
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons"
//name shield-key-outline web web-clock
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons"
// name note
import Octicons from "@expo/vector-icons/Octicons"


// ** Layout
import Layout from '../../layouts/Layout';

// ** Components
import CustomButton from '../../components/CustomButton';

//
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RadioButton } from 'react-native-paper';
type Props = NativeStackScreenProps<RootStackParamList, "Language">;
const StyledView = styled(View)

const DATA: any = [
  {
    id: 1,
    name: "Deutsch (Deutschland)",
    newMessage: "1",
    route: "About"
  },
  {
    id: 2,
    name: "English(UK)",
    newMessage: "2",
    route: "About"
  },
  {
    id: 3,
    name: "English(US)",
    newMessage: "2",
    route: "Language"
  },
  {
    id: 4,
    name: "Greek(Greece)",
    newMessage: null,
    route: "About"
  },
  {
    id: 5,
    name: "Francais(France)",
    newMessage: "2",
    route: "About"
  }
]

interface MessageCardProps {
  name: string ;
  onPress: any;
}

const MessageCard: React.FC<MessageCardProps> = ({name,  onPress}) => {
  return(
    <TouchableOpacity
      onPress={onPress }
      style={styles.cardContainer}>
        <View className='flex-row items-center space-x-3'>
          <View style={{marginLeft: 10}}>
            {/* name */}
            <Text style={styles.title}>{name}</Text>
          </View>
        </View>
        <View>
          <Entypo name='chevron-right' size={20}  />
        </View>
    </TouchableOpacity>
  )
}

const Language: React.FC<Props> = ({ navigation: { navigate } }) => {
  const [value, setValue] = React.useState('first');

  return (
    <Layout
      title = "Language"

  >
    <View style={styles.container}>
    <RadioButton.Group onValueChange={value => setValue(value)} value={value}>
      <RadioButton.Item label="Deutsch (Deutschland)" value="first" />
      <RadioButton.Item label="English(UK)" value="second" />
      <RadioButton.Item label="English(US)" value="thired" />
      <RadioButton.Item label="Greek(Greece)" value="fouth" />
      <RadioButton.Item label="Francais(France)" value="fifth" />
    </RadioButton.Group>
      <View className='mt-6' />
      {/* Events */}
      {/* <FlatList
          data={DATA}
          keyExtractor={item => item.id.toString()}
          renderItem={
            ({item}) => 
              <MessageCard  
                name = {item.name}
                onPress={() => navigate(item.route)}

            /> 
          }
        /> */}

      
    </View>
  </Layout>
  )
}

export default Language

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    position: 'relative',
  },
  inputContainer:{
    height: 56,
    backgroundColor: '#EFE6E9',
    flexDirection: "row",
    paddingHorizontal: 15,
    alignItems: "center",
    borderRadius: 28,
  },
  cardContainer: {
    width: "100%",
    height: 40,
    flexDirection: "row",
    borderRadius: FontSize.base,
    justifyContent: "space-between",
    alignItems: 'center',
    marginVertical: 8
  },
  circleImage: {
    width: 20,
    height: 20,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: FontSize.medium,
    backgroundColor: Colors.secondary
  },
  title: {
    color: "#1F1A1D",
    fontFamily: Font['inter-regular'],
    fontSize: FontSize.small
  },
  description: {
    color: Colors.gray,
    fontFamily: Font['inter-regular'],
    fontSize: FontSize.xsmall,
    lineHeight: 22
  },
})