import big from '../assets/big.jpg'
import small from '../assets/small.jpg'
import '../styles/image_viewer.css'

const image = document.createElement('img')
image.src = small // 'http://lorempixel.com/400/400' // quick image tool

document.body.appendChild(image)

const bigImage = document.createElement('img')
bigImage.src = big

document.body.appendChild(bigImage)