import { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import { Box } from '../../components/box/box';
import { Button } from '../../components/buttongroup/buttons';
import { Text } from '../../components/text/text';
import ButtonsPoints from '../buttonspoints/ButtonsPoints';

function Points() {


	return (
		<Box
			position='fixed'
			width='100%'
			height={['100%']}
			top={['115px', '115px', '85px']}
			justifyContent='flex-end'
			zIndex='1'
			padding='0 20px'
			overflow='hidden'
		>
			<Box
				width='350px'
				height='200px'
				bg={['#edededd3', '#ffffffd4', '#fafafab3']}
				flexDirection='column'
				justifyContent='space-around'
				borderRadius='10px'
				alignItems='center'
				initial={{ x: '100%', opacity: 0 }}
				animate={{ x: 0, opacity: 1 }}
				exit={{ x: '100%', opacity: 0 }}
				glass
			>
				<Text color={['#686868', '#888888']}>
					Select the amount of points!!
				</Text>
				{/* <ButtonsPoints /> */}
				<Box margin='0px 20px' justifyContent='space-around'>
					<Button
						width='170px'
						fontSize='15px'
						bg={['#00d7fd', '#00d7fdba']}
						color='white'
				
						glass
					>
						Dapatkan Point
					</Button>
				</Box>
			</Box>
		</Box>
	);
}

export default Points;
