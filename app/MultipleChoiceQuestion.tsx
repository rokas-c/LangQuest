import { View, Text } from 'react-native';
import React, { useState } from 'react';
import ImageOption from '~/components/ImageOption';
import CustomButton from '~/components/CustomButton';
import { Option, QuestionProp } from '~/types';

const MultipleChoiceQuestion = ({ question, onCorrectAnswer, onWrongAnswer }: QuestionProp) => {
  const [selected, setSelected] = useState<Option | null>(null);

  const onButtonPress = () => {
    if (selected?.correct) {
      // Teisingas atsakymas
      onCorrectAnswer();
      setSelected(null);
    } else {
      // Neteisingas atsakymas
      onWrongAnswer();
    }
  };

  return (
    <>
      <Text className="mb-4 text-center text-lg font-bold">{question.question}</Text>

      <View className="w-full flex-1 flex-row flex-wrap justify-between gap-2">
        {question.options.map((option) => (
          <ImageOption
            key={option.id}
            image={option.image}
            text={option.text}
            isSelected={selected?.id === option.id}
            onPress={() => setSelected(option)}
          />
        ))}
      </View>

      <CustomButton text="Patvirtinti" onPress={onButtonPress} disabled={!selected} />
    </>
  );
};

export default MultipleChoiceQuestion;
