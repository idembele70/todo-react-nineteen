import { CSSProperties } from "react";

export default function Today() {
  const date = new Date();

  const weekday = [
    'Sunday 🖖',
    'Monday 💪😀',
    'Tuesday 😜',
    'Wednesday 😌☕️',
    'Thursday 🤗',
    'Friday 🍻',
    'Saturday 😴',
  ];

  const today = weekday[date.getDay()];

  const randomWordArray = [
    "Oh my, it's ",
    "Whoop, it's ",
    'Happy ',
    "Seems it's ",
    "Awesome, it's ",
    'Have a nice ',
    'Happy fabulous ',
    'Enjoy your '
  ];

  const randomIndex = Math.floor(Math.random() * randomWordArray.length);
  const randomWord = randomWordArray[randomIndex];

  const style: CSSProperties = {
    fontSize: 22,
    textAlign: 'center',
    marginBottom: 15
  }

  return (
    <h2 style={style}>
      {randomWord + today}
    </h2>
  )
};
