import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React from 'react';
import { Colors } from '../constants';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types';
//
type Props = NativeStackScreenProps<RootStackParamList, "TopNavPanel">;
const Tab = createMaterialTopTabNavigator();

interface TabItem {
  name: string;
  component: React.ComponentType<any>;
}

interface MyTabsProps  {
  tabs: TabItem[];
}

const TopNavPanel: React.FC<MyTabsProps> = ({ tabs }) => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: {
          textTransform: 'capitalize',
          fontWeight: 'bold',
        },
        tabBarIndicatorStyle: {
          height: 2,
          borderRadius: 5,
          backgroundColor: '#A3229A', // Assuming Colors.primary is defined or imported correctly
        },
      }}
    >
      {tabs.map((tab) => (
        <Tab.Screen key={tab.name} name={tab.name} component={tab.component} />
      ))}
    </Tab.Navigator>
  );
}

export default TopNavPanel;