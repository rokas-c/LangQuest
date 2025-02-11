import { StatusBar, SafeAreaView, View, Text, Image } from 'react-native';
import question from '../assets/data/oneQuestionWithOption';
import ImageOption from '~/components/ImageOption';

export default function Home() {
  return (
    <SafeAreaView className="flex flex-1 items-center justify-center p-3">
      <StatusBar animated barStyle={'light-content'} />
      {/* Text Klausimas */}
      <Text className="mb-4 text-center text-2xl font-bold">{question.question}</Text>

      <View className="w-full flex-1 flex-row flex-wrap justify-between gap-2">
        {question.options.map((option) => (
          <ImageOption key={option.id} image={option.image} text={option.text} />
        ))}
      </View>
    </SafeAreaView>
  );
}
