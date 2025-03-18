import { QuizQuestion } from '~/types';

const questions: QuizQuestion[] = [
  {
    id: 'q1',
    type: 'MULTIPLE_CHOICE',
    text: "Kur yra 'stiklinė'?",
    options: [
      {
        id: 'option1',
        image: 'https://res.cloudinary.com/dis6tbci7/image/upload/v1738673513/cup_fedcyj.png',
        text: 'the cup',
      },
      {
        id: 'option2',
        image: 'https://res.cloudinary.com/dis6tbci7/image/upload/v1738673564/Glass_yt1vqc.png',
        text: 'the glass',
        correct: true,
      },
      {
        id: 'option3',
        image: 'https://res.cloudinary.com/dis6tbci7/image/upload/v1738673659/Milk_l8xhiv.png',
        text: 'the milk',
      },
      {
        id: 'option4',
        image: 'https://res.cloudinary.com/dis6tbci7/image/upload/v1738673610/coffee_kdtc06.png',
        text: 'the coffee',
      },
    ],
  },
  {
    id: 'q5',
    type: 'OPEN_ENDED',
    text: 'I am a student',
    answer: 'As esu studentas',
  },
  {
    id: 'q2',
    type: 'MULTIPLE_CHOICE', 
    text: "Kur yra 'kava'?",
    options: [
      {
        id: 'option4',
        image: 'https://res.cloudinary.com/dis6tbci7/image/upload/v1738673610/coffee_kdtc06.png',
        text: 'the coffee',
        correct: true,
      },
      {
        id: 'option1',
        image: 'https://res.cloudinary.com/dis6tbci7/image/upload/v1738673513/cup_fedcyj.png',
        text: 'the cup',
      },
      {
        id: 'option3',
        image: 'https://res.cloudinary.com/dis6tbci7/image/upload/v1738673659/Milk_l8xhiv.png',
        text: 'the milk',
      },
      {
        id: 'option2',
        image: 'https://res.cloudinary.com/dis6tbci7/image/upload/v1738673564/Glass_yt1vqc.png',
        text: 'the glass',
      },
    ],
  },
  {
    id: 'q6',
    type: 'OPEN_ENDED',
    text: 'The car is red',
    answer: 'Masina yra raudona',
  },
  {
    id: 'q3',
    type: 'MULTIPLE_CHOICE', 
    text: "Kur yra 'puodelis'?",
    options: [
      {
        id: 'option3',
        image: 'https://res.cloudinary.com/dis6tbci7/image/upload/v1738673659/Milk_l8xhiv.png',
        text: 'the milk',
      },
      {
        id: 'option2',
        image: 'https://res.cloudinary.com/dis6tbci7/image/upload/v1738673564/Glass_yt1vqc.png',
        text: 'the glass',
      },
      {
        id: 'option4',
        image: 'https://res.cloudinary.com/dis6tbci7/image/upload/v1738673610/coffee_kdtc06.png',
        text: 'the coffee',
      },
      {
        id: 'option1',
        image: 'https://res.cloudinary.com/dis6tbci7/image/upload/v1738673513/cup_fedcyj.png',
        text: 'the cup',
        correct: true,
      },
    ],
  },
  {
    id: 'q4',
    type: 'MULTIPLE_CHOICE',
    text: "Kur yra 'pienas'?",
    options: [
      {
        id: 'option2',
        image: 'https://res.cloudinary.com/dis6tbci7/image/upload/v1738673564/Glass_yt1vqc.png',
        text: 'the glass',
      },
      {
        id: 'option3',
        image: 'https://res.cloudinary.com/dis6tbci7/image/upload/v1738673659/Milk_l8xhiv.png',
        text: 'the milk',
        correct: true,
      },
      {
        id: 'option1',
        image: 'https://res.cloudinary.com/dis6tbci7/image/upload/v1738673513/cup_fedcyj.png',
        text: 'the cup',
      },
      {
        id: 'option4',
        image: 'https://res.cloudinary.com/dis6tbci7/image/upload/v1738673610/coffee_kdtc06.png',
        text: 'the coffee',
      },
    ],
  },
  {
    id: 'q7',
    type: 'OPEN_ENDED',
    text: 'I enjoy learning languages',
    answer: 'Man patinka mokytis kalbu',
  },
];

export default questions;
