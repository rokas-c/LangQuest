import { View, Text, Pressable } from 'react-native';
import React from 'react';

interface buttonOptionProps {
  text: String;
  onPress: () => void;
  disabled: boolean;
}

const CustomButton = ({ text, onPress, disabled = false }: buttonOptionProps) => {
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      className={`h-12 border-b items-center justify-center self-stretch  rounded-md
    ${disabled ? 'border-gray-400 bg-gray-300' : 'border-[#57A600] bg-[#58CC02]'} `}>
      <Text className='border-b border-[#fff] text-x1 font-bold text-white'>
        {text}
        </Text>
    </Pressable>
  );
};

export default CustomButton;
