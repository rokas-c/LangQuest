import { View } from 'react-native';
import React from 'react';
import { ProgressProps } from '~/types';

const ProgressBar = ({ progress }: ProgressProps) => {
  return (
    <View className="h-6 flex-1 rounded-full bg-gray-300">
      <View style={{ width: `${progress * 100}%` }} className={'flex-1 rounded-full bg-[#fac800]'}>
        {/* Highlight Container View */}
        <View className="mt-1 h-2 w-[90%] self-center rounded-full bg-[#fad131]" />
      </View>
    </View>
  );
};

export default ProgressBar;
