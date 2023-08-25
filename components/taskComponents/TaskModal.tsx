import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'

// ** Third Party
import { v4 as uuid } from 'uuid';
import { FormProvider, useForm } from 'react-hook-form';
import { useToast } from 'native-base';

//State
import { useDispatch } from 'react-redux';
import { addTodo, updateTodo } from '../../stores/app/todoSlice';
import { AppDispatch } from '../../stores';

// ** Types
import { UserData } from '../../types/types';

// ** Components
import Input from '../Input';
import CustomButton from '../CustomButton';
import BottomSheet from '../bottom-sheet/BottomSheet';

interface TaskModlProps {
  type: string,
  show: boolean,
  setShow: React.Dispatch<React.SetStateAction<boolean>>,
  todo?: any,
}

const defaultValues = {
  name: '',
  description: ''
}


const TaskModal: React.FC<TaskModlProps> = ({  type, show, setShow, todo }) => {  
  const methods = useForm({defaultValues});

  // ** Hooks
  const toast = useToast();
  const dispatch = useDispatch<AppDispatch>()

  const handleSubmitTask = (data: UserData) => {
    const { name, description } = data


    function generateId() {
      return Date.now().toString();
    }

    const formdata = {
      id: generateId(),
      title: name,
      description: description,
      status: "incomplete",
      time: new Date().toLocaleString()
    }

    const updatedTodo = {
      ...todo,
      id: todo?.id,
      title: name,
      description: description,
    };

    if (type === 'add'){
      dispatch(addTodo(formdata))
      toast.show({title: 'Todo Added Successfully', placement: "top"});

    } else if (type === 'update'){
      dispatch(updateTodo(updatedTodo));
    }
    setShow(false);
  };

  useEffect(() => {
    if (type === 'update' && todo && show) {
      methods.setValue('name', todo.title);
      methods.setValue('description', todo.description);
    } else {
      methods.setValue('name', '');
      methods.setValue('description', '');
    }
  }, [type, todo, show, methods]);

  return (
    <BottomSheet
      show={show}
      onDismiss={() => {
        setShow(false);
      }}
      height={0.55}
      enableBackdropDismiss
    >
      <View>
        {/* Image */}
        <View className='flex items-center justify-center w-full h-[150px] bg-ksecondary rounded-2xl'>
          <Text className='text-white text-2xl'>Welcome Back!!!</Text>
        </View>
        {/*  */}
        <View className='flex-row items-center justify-between mt-4'>
          <FormProvider {...methods}>
            {/* ====== ======== */}
            <View style={{marginVertical: 20}} className="w-full flex-col" >
              <Input
                label="Task Name"
                placeholder="Enter task name"
                name='name'
                rules={{
                  required: 'Task name is required',
                }}
              />
              <Input
                label="Description"
                placeholder="Enter task description"
                name="description"
                rules={{
                  required: 'Task description is required',
                }}
              />
              <CustomButton 
                title={type === 'add' ? 'Add Task' : 'Update Task'}
                onPress={methods.handleSubmit(handleSubmitTask)}              
              />
            </View>
          </FormProvider>
        </View>
      </View>
    </BottomSheet>
  )
}

export default TaskModal

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    position: 'relative',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  items: {
    marginTop: 30,
  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: 250,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1,
  },
  addText: {},
});