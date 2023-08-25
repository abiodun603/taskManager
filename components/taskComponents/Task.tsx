import React, { FC, useState } from 'react';
import { Modal, TouchableOpacity } from 'react-native';
import { View, Text } from 'react-native';

// ** Third party
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons"
import MaterialIcons from "@expo/vector-icons/MaterialIcons"
import { Checkbox } from 'native-base';

//State
import { useDispatch } from 'react-redux';
import {   deleteTodo, updateTodo } from '../../stores/app/todoSlice';
import { AppDispatch } from '../../stores';

// ** Types
import { ShortenedWordProps, Todo } from '../../types/types';

// ** Component
import TaskModal from "./TaskModal"
import SimpleModal from '../modal/Modal';

interface TaskProps {
  todo: Todo;
}

const Task: FC<TaskProps> = ({ todo}) => {
  // ** Hooks
  const dispatch = useDispatch<AppDispatch>()
  const [updateModalOpen, setUpdateModalOpen] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false)

  // Toggle Delete Modal
  const changeModalVisibility = (bool: boolean) => {
    setIsModalVisible(bool)
  }

  // Close Delete Modal
  const onCloseModal = () => {
    changeModalVisibility(false)
  }

  //  Handle Delete Task
  const handleDelete = () => {
    dispatch(deleteTodo(todo.id));
  };

  const handleCheck = () => {
    const newStatus = todo.status === 'complete' ? 'incomplete' : 'complete';
    dispatch(updateTodo({ ...todo, status: newStatus }));
  };

  const handleUpdate = () => {
    setUpdateModalOpen(true);
  };

  function ShortenedWord({ word, maxLength }: ShortenedWordProps) {
    function shortenWord(word: string, maxLength: number): string {
      if (word.length > maxLength) {
        return word.substring(0, maxLength) + ' ...';
      }
      return word;
    }
  
    return <Text>{shortenWord(word, maxLength)}</Text>;
  }

  return (
    <View className='flex-row justify-between items-center bg-white mb-5 p-4 border border-gray-200 '>
      <View className='flex-row  items-center '>
        <View className='w-6 h-6 mr-2  opacity-[0.5]'>
          <Checkbox
            value={todo.status === 'complete' ? 'complete' : 'incomplete'}
            isChecked={todo.status === 'complete'}
            colorScheme="pink"
            onChange={handleCheck}
            accessibilityLabel="This is a todo checkbox"
          />
        </View>
        <View className=' w-[70%]  flex-wrap'>
          <Text className={todo.status === 'complete' ? 'max-w-[80%] text-kblack line-through' : 'max-w-[80%] text-kblack '}><ShortenedWord word={todo.title} maxLength={17} /></Text>
          <Text className={todo.status === 'complete' ? 'max-w-[80%] text-kblack line-through' : 'max-w-[80%] text-kblack '}><ShortenedWord word={todo.description} maxLength={17} /></Text>
        </View>
      </View>
      <View className='flex-row space-x-2 '>
        {/* Edit */}
        <TouchableOpacity  onPress={() => handleUpdate()} className='items-center justify-center h-[35px] w-[35px] bg-gray-200 rounded-sm'>
          <MaterialIcons name ="edit" size ={22} color="#1F1E1F" />
        </TouchableOpacity>
        {/* Delete */}
        <TouchableOpacity onPress={() =>  changeModalVisibility(!isModalVisible)} className='h-[35px] w-[35px] items-center justify-center bg-gray-200 rounded-sm'>
          <MaterialCommunityIcons name ="delete" size ={22} color="#1F1E1F"/>
        </TouchableOpacity>
      </View>

      {/* Bottom Sheet Component */}
      <TaskModal
        type="update"
        show={updateModalOpen}
        setShow={setUpdateModalOpen}
        todo={todo}
      />

      {/* Modal */}
      <Modal
        transparent = {true}
        animationType='fade'
        visible = {isModalVisible}
        onRequestClose={() => changeModalVisibility(false)}
      >
         {/* Overlay */}
        <View className='absolute top-0 left-0 right-0 bottom-0 bg-[#00000080]'/>
        <SimpleModal
          title='Delete?'
          description={"Are you sure you want to delete todo?\nThis action cannot be undone."}
          buttonName='Delete'
          onPressed = {handleDelete}
          onCloseModal = {onCloseModal}
        />
      </Modal>
    </View>
  )
}

export default Task;