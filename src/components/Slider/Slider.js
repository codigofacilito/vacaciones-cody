import React, { useState, useEffect } from 'react'
import itemData from './ArrayImg'
import Image from './Image'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'

import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    gallerySlider: {
        display: 'flex', 
        flexDirection: 'row', 
        alignItems: 'center',
        justifyContent: 'center',
    },
}))

const Slider = () => {
	const [images, setImages] = useState([])
    const [alt, setAlt] = useState([])

	const [sliderActive, setSliderActive] = useState(null)
	const [amountSlider, setAmountSlider] = useState(undefined)

	useEffect(() => {
		let data = []
        const dataGallery = itemData.filter(e=> e.id<4)
		dataGallery.map(({ img }) => data.push(img))

        let dataAlt = []
		dataGallery.map(({ title }) => dataAlt.push(title))

		setImages(data)
        setAlt(dataAlt)

		setSliderActive(data.length - 1)
		setAmountSlider(data.length - 1)
	}, [])

	const goPrev = () => {
		let pos = sliderActive
		if (pos === amountSlider) {
			pos = 0
		} else {
			pos += 1
		}
		setSliderActive(pos)
	}

	const goNext = () => {
		let pos = sliderActive
		if (pos === 0) {
			pos = amountSlider
		} else {
			pos -= 1
		}
		setSliderActive(pos)
	}

    const classes = useStyles();

	return (
		<section className={classes.gallerySlider}>
            <ArrowBackIosIcon onClick={goPrev}/>
                {amountSlider >= 0 ? <Image src={images[sliderActive]} alt={alt[sliderActive]}/> : <></>}
            <ArrowForwardIosIcon onClick={goNext}/>
		</section>
	)
}

export default Slider