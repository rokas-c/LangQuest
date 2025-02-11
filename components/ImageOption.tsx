import { View, Text, Image } from 'react-native';
import React from 'react';

const ImageOption = ({ image, text, key }) => {
  return (
    <View
      key={key}
      className="h-[48%] w-[48%] items-center rounded-md rounded-b-lg border-2 border-blue-300 p-2">
      <Image source={{ uri: image }} className="w-[100%] flex-1" resizeMode="contain" />
      <Text className="text-base font-semibold"> {text}</Text>
    </View>
  );
};

export default ImageOption;
