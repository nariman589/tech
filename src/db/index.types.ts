export enum Color {
  RED,
  GREEN,
  BLUE,
}

// Пользователь. Позиция в рейтинговой таблице определяется позицией в
// массиве пользователей
export interface User {
  // Любимый цвет
  color: Color;
  // Полное имя
  name: string;
  // Скорость выполнения заезда
  speed: number;
  // Время заезда. Выражено в миллисекундах
  time: number;
}
