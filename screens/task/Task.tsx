import { FlatList, Modal, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

// ** Types
import { RootStackParamList } from "../../types";

// ** Third Party
import { KeyboardAvoidingView } from 'native-base';
import Ionicons from "@expo/vector-icons/Ionicons"

// ** Layout
import Layout from '../../layouts/Layout';

// ** Components
import Task from '../../components/taskComponents/Task';
import TaskModal from '../../components/taskComponents/TaskModal';

//State
import { useAppSelector } from '../../hooks/useTypedSelector';

//
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import SimpleModal from '../../components/modal/Modal';
type Props = NativeStackScreenProps<RootStackParamList, "TaskScreen">;


const TaskManager: React.FC<Props> = ({ navigation: { navigate } }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false)

  //Need to be call from the redux slices
  const todoList = useAppSelector(state => state.todoList);

  // Toggle Delete Modal
  const changeModalVisibility = (bool: boolean) => {
    setIsModalVisible(bool)
  }

  // Close Delete Modal
  const onCloseModal = () => {
    changeModalVisibility(false)
  }

  //  Handle Delete Task
  const handleLogout = () => {
    navigate("Login");
  };

  return (
    <Layout
      title = "Task Manager"
      rightNavigation = "Log out"
      rightNavPress={() =>  changeModalVisibility(!isModalVisible)}
    >
    <View style={styles.container}>
      <View>
        {/* Today's Tasks */}
        <View>
          <Text className='text-2xl font-semibold'>All tasks</Text>
          <View className='mt-6'>         
            {todoList.length > 0 ? (
                <FlatList
                  data={todoList}
                  keyExtractor={item => item.id.toString()}
                  renderItem={({ item }) => <Task todo={item}></Task>}
                />
              ) : (
                <Text>No todos available.</Text>
              )} 
          </View>
        </View>
      </View>

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        className='absolute w-full items-end  bottom-16 '
      >
        <TouchableOpacity onPress={() => setModalOpen(true)} >
          <View className='w-[60px] h-[60px] items-center justify-center bg-ksecondary rounded-full '>
            <Ionicons name="add" size={28}  color="#FFFFFF" />
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>

      <TaskModal 
          type='add'
          show = {modalOpen}
          setShow={setModalOpen}
      />

      {/* Logout Modal */}
       <Modal
          transparent = {true}
          animationType='fade'
          visible = {isModalVisible}
          onRequestClose={() => changeModalVisibility(false)}
        >
         {/* Overlay */}
         <View className='absolute top-0 left-0 right-0 bottom-0 bg-[#00000080]'/>
          <SimpleModal
            title='Log out?'
            description={"Are you sure you want to logout out?\nThis action cannot be undone."}
            buttonName='Log out'
            onPressed = {handleLogout}
            onCloseModal = {onCloseModal}

          />
        </Modal>
    </View>
  </Layout>
  )
}

export default TaskManager

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    position: 'relative',
  }
});