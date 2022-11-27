interface IPopup {
  heading: string
  isOpen: boolean
  onClick(value: boolean): void
  children: JSX.Element
}

export type { IPopup }
