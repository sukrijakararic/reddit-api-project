import React from 'react'
import styles from './Arrow.module.css'

export const ArrowUp = ({fill, onClick}) => {
  return (

<svg className={styles.arrow} onClick={onClick} version="1.1" id="Icons" xmlns="http://www.w3.org/2000/svg" xmlnsxxlink="http://www.w3.org/1999/xlink" 
	 viewBox="0 0 32 32" xmlSpace="preserve" 
     fill={fill} stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10">
<path className="st0" d="M16,4l-8.3,8.3C7.1,12.9,7.5,14,8.4,14H13v13c0,0.6,0.4,1,1,1h4c0.6,0,1-0.4,1-1V14h4.6c0.9,0,1.3-1.1,0.7-1.7
	L16,4z"/>
</svg>
  )
}
