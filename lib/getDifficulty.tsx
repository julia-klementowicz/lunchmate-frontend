import Image from 'next/image';

export default function getDifficulty(difficulty: 'easy' | 'medium' | 'hard') {
  switch (difficulty) {
    case 'easy':
      return (
        <>
          <Image
            src='/difficulty/easy_difficulty.svg'
            alt='trudność'
            width={29}
            height={24}
          />
          <p>Łatwy</p>
        </>
      );
    case 'medium':
      return (
        <>
          <Image
            src='/difficulty/medium_difficulty.svg'
            alt='trudność'
            width={29}
            height={24}
          />
          <p>Średni</p>
        </>
      );
    case 'hard':
      return (
        <>
          <Image
            src='/difficulty/hard_difficulty.svg'
            alt='trudność'
            width={29}
            height={24}
          />
          <p>Trudny</p>
        </>
      );
  }
}
