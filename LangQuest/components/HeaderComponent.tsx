import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import ProgressBar from './ProgressBar';
import { ProgressProps } from '~/types';
import { Ionicons } from '@expo/vector-icons';

const HeaderComponent = ({ progress, lives, onBackPress }: ProgressProps & { lives: number, onBackPress: () => void }) => {
  
  return (
    <View className="flex flex-row items-center px-4 py-2">
      {/* Back Arrow Button */}
      <TouchableOpacity onPress={onBackPress}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>

      {/* Progress Bar */}
      <View className="flex-1 mx-2">
        <ProgressBar progress={progress} />
      </View>

      {/* Lives (Hearts) */}
      <Image
        source={{
          uri: 'https://res.cloudinary.com/dis6tbci7/image/upload/v1742219002/heart_i9upg3.png',
        }}
        className="h-8 w-8"
        resizeMode="contain"
      />
      <Text className="text-lg font-bold text-red-600">{lives}</Text>
    </View>
  );
};

export default HeaderComponent;
