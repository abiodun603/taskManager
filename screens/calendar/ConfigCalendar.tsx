import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { RootStackParamList } from "../../types";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import Layout from '../../layouts/Layout';
import CustomRouteBottom from '../../components/CustomRouteBottom';
import { RadioButton } from 'react-native-paper';
import Colors from '../../constants/Colors';
type Props = NativeStackScreenProps<RootStackParamList, "ConfigCalendar">;

const options = [
  { id: 1,value:"first", name: "24 hours Open Office",description: "Incoming calls will be handled the same way all the time." },
  { id: 2,value:"second", name: "Custom Work Office Hours",description: "Incoming calls will be handled differently when your office is closed." },
  { id: 3,value:"fourth", name: "Specific Date or Holiday",description:"Incoming calls will be handled differently on specific dates, for example, every 25th of December." },
  { id: 4,value:"fifth", name: "Custom Recurrent Date",description:"Incoming calls to be handled differently on recurrent days, for example, every first Monday of a particular month." },
  { id: 5,value:"sixth", name: "Date Range",description:"Incoming calls will be handled differently between a specific date period, for example, 2nd - 5th January." }
];

/**
   * 
   * The following toggleOption creates a new array 
   * where the given id is checked, 
   * all the other options are unchecked.
   */
 function toggleOption(options: any[],id: number, checked: any) {
  return options.map((option: { id: number; }) =>
    option.id === id ? { ...option, checked } : { ...option, checked: false }  );
}

const ConfigCalendar: React.FC<Props> = ({ navigation: { navigate } }) => {
  const [checkedList, setCheckedList] = useState(uncheckAll(options));
  

  function uncheckAll(options: any[]) {
    return options.map((option) => ({
      ...option,
      checked: false
    }));
  }

  /**
   * The next changeList function marks 
   * the given id as checked and all 
   * the other options as unchecked
   *  using the toggleOption utility 
   * function.
   */
   const changeList = (id: number, checked: any) => {
    setCheckedList((checkedList) => toggleOption(checkedList, id, checked));
  };
  return (
    <Layout
      title = "Time Schedule"
    >
      <View style={styles.container}>
        {
          checkedList.map(({ id,value, name,description , checked}) => (
            <View className={checked ? 'flex-row h-[98px] border-kprimary space-x-2  w-full border  rounded-lg px-4 pt-4 mt-4' : 'flex-row h-[98px] space-x-2  w-full border  rounded-lg px-4 pt-4 mt-4 border-[#BFBFBF]'} key={id}>
              {/* radio button */}
              <View className= {checked ? 'h-[35px] bg-[#990099] rounded-full' : 'h-[35px] bg-[#BFBFBF] rounded-full'}>
                <RadioButton
                  value={value}
                  status={ checked ? 'checked' : 'unchecked' }
                  onPress={
                    ((e) => changeList(id, e.target.focus))  
                  }
                  color= {Colors.background}
                />
              </View>
              {/*  */}
              <View className='space-y-2'>
                {/* title */}
                <Text className='text-black text-xs font-normal'>{name}</Text>
                {/* description */}
                <Text className='text-[#808080] text-xs font-normal flex-wrap pr-8'>
                  {description}
                </Text>
              </View>
            </View>
          ))
        }
      </View>

      <CustomRouteBottom title='Proceed'  onPress={()=> navigate("OptCalendar")}/>
    </Layout>
  )
}

export default ConfigCalendar

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    position: 'relative',
  },
})