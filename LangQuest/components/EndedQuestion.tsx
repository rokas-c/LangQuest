import { View, Text, TextInput, Image, Platform, KeyboardAvoidingView } from 'react-native';
import React, { useState } from 'react';
import CustomButton from './CustomButton';
import { EndedQuestionProps } from '~/types';

const EndedQuestion = ({ question, onCorrectAnswer, onWrongAnswer }: EndedQuestionProps) => {
  const [input, setInput] = useState('');

  const onButtonPress = () => {
    if (question.answer?.toLowerCase().trim() === input.toLowerCase().trim()) {
      onCorrectAnswer();
      setInput('');
    } else {
      onWrongAnswer();
    }
  };
  return (
    <>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <Text className="self-start text-lg font-bold">Išverskite šį sakinį</Text>
        <View className="m-2 mb-0 flex flex-row items-center self-stretch">
          <Image
            source={{
              uri: 'https://res.cloudinary.com/dis6tbci7/image/upload/v1738675454/Boy_qcbv19.png',
            }}
            style={{ width: 100, height: 133, marginRight: 8 }}
            resizeMode="contain"
          />

          <View className=" rounded-md border border-gray-300 p-2">
            <Text className="text-md">{question.text}</Text>
          </View>
        </View>

        <TextInput
          value={input}
          onChangeText={(changedText) => setInput(changedText)}
          className="text-md mb-2 flex-1 self-stretch rounded-lg border border-gray-300 bg-gray-200 p-2"
          placeholder="Įveskite lietuvių kalba"
          textAlignVertical="top"
          multiline={true}
        />

        <CustomButton text="Patvirtinti" onPress={onButtonPress} disabled={!input} />
      </KeyboardAvoidingView>
    </>
  );
};

export default EndedQuestion;
