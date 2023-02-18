import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { RootStackParamList } from "../../types";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import Layout from '../../layouts/Layout';
import CustomRouteBottom from '../../components/CustomRouteBottom';
import Input from '../../components/Input';
type Props = NativeStackScreenProps<RootStackParamList, "OptCalendar">;

const options = [
  { id: 1, name: "Option1" },
  { id: 2, name: "Option2" },
  { id: 3, name: "Option3" }
];
const OptCalendar: React.FC<Props> = ({ navigation: { navigate } }) => {
  const [checkedList, setCheckedList] = useState(options);

  /**
   * 
   * The following toggleOption creates a new array 
   * where the given id is checked, 
   * all the other options are unchecked.
   */
  function toggleOption(id: number, checked: boolean) {
    return options.map((option) =>
      option.id === id ? { ...option, checked } : option
    );
  }

  /**
   * The next changeList function marks 
   * the given id as checked and all 
   * the other options as unchecked
   *  using the toggleOption utility 
   * function.
   */
   const changeList = (id: number, checked: boolean) => {
    const newCheckedList = toggleOption(id, checked);
    setCheckedList(newCheckedList);
  };
  return (
    <Layout
      title = "24 hours Open Office"
    >
      <View style={styles.container}>
        <Input 
          label ="Title"
          placeholder='Enter schedule title'
        />
      </View>

      <CustomRouteBottom title='Save'  onPress={()=> navigate("Calendar")}/>
    </Layout>
  )
}

export default OptCalendar

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    position: 'relative',
  },
})