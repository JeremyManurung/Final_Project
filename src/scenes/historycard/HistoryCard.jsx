import { useState } from 'react';
import { Box } from '../../components/box/box';
import { Image } from '../../components/image/image';
import { Text } from '../../components/text/text';
import { Button } from '../../components/buttongroup/buttons';
import buyblue from '../../assets/icons/buy-blue.svg';
import buywhite from '../../assets/icons/buy-white.svg';
import coin from '../../assets/icons/coin.svg';
import { AnimatePresence } from 'framer-motion';

function ProductCard () {
	return (
		<Box
			position='relative'
			flexDirection='column'
			alignItems='center'
			bg='white'
			width='100%'
			boxShadow='2px 2px 4px rgba(0, 0, 0, 0.1)'
			initial={{ opacity: 0 }}
			animate={{ opacity: 1, transition: { duration: 0.6 } }}
		>
			<Image width='85%' margin='45px 0px 0px 0px' src={"images/g1.png"} />
			
			<Box
				width='80%'
				borderTop='1px solid #D9D9D9'
				flexDirection='column'
				padding='18px 0px'
			>
				<Text color='#A3A3A3' fontSize='16px'>
					Phone
				</Text>
				<Text color='#616161' fontSize='18px'>
					Iphone
				</Text>
			</Box>
		</Box>
	);
}

export default ProductCard;
