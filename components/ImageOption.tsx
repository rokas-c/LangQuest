import { View, Text, Image, Pressable } from 'react-native';
import React from 'react';

interface ImageOptionProps {
  image: string;
  text: string;
  isSelected: boolean;
  onPress: () => void;
}

const ImageOption = ({ image, text, isSelected, onPress }: ImageOptionProps) => {
  return (
    <Pressable
      onPress={onPress}
      className={`rounded-b-ls h-[48%] w-[48%] 
      items-center rounded-md border-2 
      ${isSelected ? 'border-[#81D5FE] bg-[#DDF4FE]' : 'border-gray-300'}  
      p-2`}>
      <Image source={{ uri: image }} className="w-[100%] flex-1" resizeMode="contain" />
      <Text
        className={`
      ${isSelected ? 'font-bold text-[#40BEF7]' : 'text-bold font-semibold'}`}>
        {text}
      </Text>
    </Pressable>
  );
};

export default ImageOption;
