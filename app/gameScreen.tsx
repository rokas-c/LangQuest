import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { AntDesign, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import questions from '~/assets/data/AllQuestionsData';
import MultipleChoiceQuestion from './MultipleChoiceQuestion';
import EndedQuestion from '~/components/EndedQuestion';
import { QuizQuestion } from '~/types';

interface ProgressBarProps {
  progress: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress }) => {
  return (
    <View style={styles.progressBarContainer}>
      <View style={styles.progressBar}>
        <View style={[styles.progressFill, { width: `${progress}%` }]} />
      </View>
    </View>
  );
};

interface LivesDisplayProps {
  lives: number;
}

const LivesDisplay: React.FC<LivesDisplayProps> = ({ lives }) => {
  return (
    <View style={styles.livesContainer}>
      {[...Array(5)].map((_, index) => (
        <Ionicons
          key={index}
          name="heart"
          size={16}
          color={index < lives ? '#FF4C6A' : '#E5E7EB'}
        />
      ))}
    </View>
  );
};

const GameScreen: React.FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [currentQuestion, setCurrentQuestion] = useState<QuizQuestion>(
    questions[currentQuestionIndex]
  );
  const [lives, setLives] = useState<number>(5);
  const [score, setScore] = useState<number>(0);
  const router = useRouter();

  // Calculate progress percentage based on current question index
  const progress = (currentQuestionIndex / questions.length) * 100;

  useEffect(() => {
    if (currentQuestionIndex >= questions.length) {
      Alert.alert('Jūs laimėjote!');
      setCurrentQuestionIndex(0);
    } else {
      setCurrentQuestion(questions[currentQuestionIndex]);
    }
  }, [currentQuestionIndex]);

  const onCorrectAnswer = (): void => {
    setScore(score + 10);
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  const onWrongAnswer = (): void => {
    if (lives <= 1) {
      Alert.alert('Jus pralaimejote!', 'Bandykite dar karta!', [
        { text: 'Bandyti dar karta', onPress: restart },
      ]);
      setLives(0);
    } else {
      Alert.alert('Neteisingas atsakymas, bandykite dar kartą!');
      setLives(lives - 1);
    }
  };

  const restart = (): void => {
    setLives(5);
    setScore(0);
    setCurrentQuestionIndex(0);
  };

  const onBackPress = (): void => {
    router.push('/');
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />

      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <TouchableOpacity style={styles.backButton} onPress={onBackPress}>
            <LinearGradient
              colors={['#EEF2FF', '#E0E7FF']}
              style={styles.backButtonGradient}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}>
              <Ionicons name="arrow-back" size={18} color="#4F46E5" />
            </LinearGradient>
          </TouchableOpacity>

          <View style={styles.scoreContainer}>
            <Text style={styles.scoreLabel}>Score</Text>
            <Text style={styles.scoreValue}>{score}</Text>
          </View>

          <LivesDisplay lives={lives} />
        </View>

        {/* Progress bar */}
        <ProgressBar progress={progress} />
      </View>

      {/* Main Content */}
      <View style={styles.content}>
        {/* Question Card */}
        <LinearGradient
          colors={['#4F46E5', '#6366F1']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.questionCard}>
          <View style={styles.questionContent}>
            <Text style={styles.questionCounter}>
              Question {currentQuestionIndex + 1}/{questions.length}
            </Text>
            <Text style={styles.questionText}>{currentQuestion.text}</Text>
          </View>

          <View style={styles.decorationContainer}>
            <View style={styles.decorationCircle} />
            <View style={[styles.decorationCircle, styles.decorationCircleSmall]} />
          </View>
        </LinearGradient>

        {/* Question Content */}
        <View style={styles.questionContentContainer}>
          {currentQuestion.type === 'MULTIPLE_CHOICE' && (
            <MultipleChoiceQuestion
              question={currentQuestion}
              onCorrectAnswer={onCorrectAnswer}
              onWrongAnswer={onWrongAnswer}
            />
          )}
          {currentQuestion.type === 'OPEN_ENDED' && (
            <EndedQuestion
              question={currentQuestion}
              onCorrectAnswer={onCorrectAnswer}
              onWrongAnswer={onWrongAnswer}
            />
          )}
        </View>
      </View>

      {/* Tips Section */}
      <View style={styles.tipsContainer}>
        <View style={styles.tipIconContainer}>
          <MaterialCommunityIcons name="lightbulb-outline" size={20} color="#D97706" />
        </View>
        <Text style={styles.tipText}>
          Remember to check the question carefully before answering!
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 12,
    backgroundColor: '#FFF',
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  backButton: {
    borderRadius: 12,
    overflow: 'hidden',
  },
  backButtonGradient: {
    padding: 10,
    borderRadius: 12,
  },
  scoreContainer: {
    position: 'absolute',
    left: '50%',
    transform: [{ translateX: -17 }],
    top: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },

  scoreLabel: {
    fontSize: 12,
    color: '#6B7280',
    marginBottom: 2,
  },
  scoreValue: {
    fontSize: 18,
    fontWeight: '700',
    color: '#111827',
  },
  livesContainer: {
    flexDirection: 'row',
    gap: 4,
  },
  progressBarContainer: {
    marginTop: 4,
  },
  progressBar: {
    height: 6,
    backgroundColor: 'rgba(79, 70, 229, 0.1)',
    borderRadius: 3,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#4F46E5',
    borderRadius: 3,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 24,
  },
  questionCard: {
    borderRadius: 24,
    padding: 20,
    marginBottom: 24,
    overflow: 'hidden',
    position: 'relative',
  },
  questionContent: {
    zIndex: 2,
  },
  questionCounter: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.8)',
    marginBottom: 8,
  },
  questionText: {
    fontSize: 20,
    fontWeight: '700',
    color: 'white',
    lineHeight: 28,
  },
  decorationContainer: {
    position: 'absolute',
    top: -40,
    right: -20,
    zIndex: 1,
  },
  decorationCircle: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
  decorationCircleSmall: {
    width: 60,
    height: 60,
    position: 'absolute',
    bottom: -30,
    left: -40,
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
  },
  questionContentContainer: {
    flex: 1,
  },
  tipsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFBEB',
    padding: 12,
    borderRadius: 12,
    marginHorizontal: 20,
    marginBottom: 16,
  },
  tipIconContainer: {
    backgroundColor: '#FEF3C7',
    borderRadius: 8,
    padding: 8,
    marginRight: 12,
  },
  tipText: {
    fontSize: 13,
    color: '#92400E',
    flex: 1,
  },
});

export default GameScreen;
