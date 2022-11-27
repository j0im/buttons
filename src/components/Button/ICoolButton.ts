interface ICoolButton {
  text: string,
  id: number,
  logo: string,
  selected: boolean,
  onClick(value: number): any
}

export type { ICoolButton }