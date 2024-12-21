import { css } from "_panda/css"
import { hstack } from "_panda/patterns"

export const headerStyle = hstack({
  justifyContent: 'space-between',
  w: 'full',
  px: '4',
  py: '4',
  position: 'fixed',
  top: '0',
  bg: 'lightGray',
})

export const navStyle = hstack({
  gap: '4',
})

export const streamerInfoStyle = (streamerId: string) => hstack({
  display: streamerId ? 'flex' : 'none',
  gap: '4',
})

export const streamerImgStyle = css({
  width: '2.5rem',
  height: '2.5rem',
  borderRadius: 'full',
  objectFit: 'cover',
})

export const formStyle = hstack({
  gap: '4',
})