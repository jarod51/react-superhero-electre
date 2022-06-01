import { memo } from 'react'

type Props = {
  children?: string
  onClickHandler?: () => void
}

const Button = ({
  children = 'Button',
  onClickHandler = () => {
    null
  },
}: Props) => {
  console.log(`Chargement du bouton ${children}`)
  return <button onClick={onClickHandler}>{children}</button>
}

export default memo(Button)
