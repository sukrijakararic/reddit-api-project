import React from 'react'
import styles from './Arrow.module.css'

export const ArrowDown = ({ fill, onClick}) => {
  return (
    <svg className={styles.arrow} onClick={onClick} version="1.1" id="Icons" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
	 viewBox="0 0 32 32" xml:space="preserve" fill={fill} stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10">

<path class="st0" d="M16,28l8.3-8.3c0.6-0.6,0.2-1.7-0.7-1.7H19V5c0-0.6-0.4-1-1-1h-4c-0.6,0-1,0.4-1,1v13H8.4
	c-0.9,0-1.3,1.1-0.7,1.7L16,28z"/>
</svg>
  )
}
