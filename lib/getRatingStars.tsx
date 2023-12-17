import Image from 'next/image';

export default function getRatingStars(
  rating: number,
  size: number = 20,
  yellow: boolean = false,
) {
  const fullStars = Math.floor(rating);
  const halfStars = Math.ceil(rating - fullStars);
  const emptyStars = 5 - fullStars - halfStars;

  const yellowStyle = {
    filter:
      'invert(83%) sepia(48%) saturate(1108%) hue-rotate(346deg) brightness(102%) contrast(96%)',
  };

  return (
    <>
      {Array(fullStars)
        .fill(0)
        .map((_, i) => (
          <Image
            key={i}
            src='/stars/rating_full.svg'
            alt='ocena'
            width={size}
            height={size}
            style={yellow ? yellowStyle : {}}
          />
        ))}
      {Array(halfStars)
        .fill(0)
        .map((_, i) => (
          <Image
            key={i}
            src='/stars/rating_half.svg'
            alt='ocena'
            width={size}
            height={size}
            style={yellow ? yellowStyle : {}}
          />
        ))}
      {Array(emptyStars)
        .fill(0)
        .map((_, i) => (
          <Image
            key={i}
            src='/stars/rating_empty.svg'
            alt='ocena'
            width={size}
            height={size}
            style={yellow ? yellowStyle : {}}
          />
        ))}
    </>
  );
}
