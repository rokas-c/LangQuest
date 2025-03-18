import { View, Text, Image } from 'react-native';
import React from 'react';
import ProgressBar from './ProgressBar';
import { ProgressProps } from '~/types';

const HeaderComponent = ({ progress, lives }: ProgressProps & { lives: number }) => {
  return (
    <View className="flex flex-row items-center">
      <ProgressBar progress={progress} />
      <Image
        source={{
          uri: 'https://res.cloudinary.com/dis6tbci7/image/upload/v1742219002/heart_i9upg3.png',
        }}
        className="mx-2 h-8 w-8"
        resizeMode="contain"
      />
      <Text className="text-lg font-bold text-red-600">{lives}</Text>
    </View>
  );
};

export default HeaderComponent;
