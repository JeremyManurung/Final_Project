import { useState } from 'react';
import { Box } from '../../components/box/box';
import { Image } from '../../components/image/image';
import { Text } from '../../components/text/text';
import { Button } from '../../components/buttongroup/buttons';
import buyblue from '../../assets/icons/buy-blue.svg';
import buywhite from '../../assets/icons/buy-white.svg';
import coin from '../../assets/icons/coin.svg';
import { AnimatePresence } from 'framer-motion';
import { useContext} from 'react';
import { AppContext } from '../../context/AppContext';
import { AddProductModal2 } from '../../components/popup/table2'

function ReedemCard({
	redemId,
	redemImg,
	redemAmount,
	redemName,
	redemCost,
}) {
	const [isHover, setIsHover] = useState(null);

	const {
		user
	} = useContext(AppContext);


	return (
		<Box
			position='relative'
			flexDirection='column'
			alignItems='center'
			bg='white'
			width='100%'
			boxShadow='2px 2px 4px rgba(0, 0, 0, 0.1)'
			onMouseEnter={() => setIsHover(redemId)}
			onMouseLeave={() => setIsHover(null)}
			initial={{ opacity: 0 }}
			animate={{ opacity: 1, transition: { duration: 0.6 } }}
		>
			
			{user.data.data.poin >= redemCost ? (
				<Image
					position='absolute'
					top='0'
					right='0'
					margin='12px'
					src={buyblue}
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
				/>
			) : (
				<Box
					position='absolute'
					top='0'
					right='0'
					margin='12px'
					padding='11px 20px'
					borderRadius='100px'
					alignItems='center'
					bg='#666666a9'
					color='white'
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
				>
					<Text marginRight='6px' fontSize='14px'>
						You need poin
					</Text>
					<Image src={coin} />
				</Box>
			)}
			<Image width='85%' margin='45px 0px 0px 0px' src={redemImg} />
			<Box
				width='80%'
				borderTop='1px solid #D9D9D9'
				flexDirection='column'
				padding='18px 0px'
			>

				<Text color='#A3A3A3' fontSize='16px'>
					{redemAmount}
				</Text>
				<Text color='#616161' fontSize='18px'>
					{redemName}
				</Text>
			</Box>
				

				{isHover === redemId && user.data.data.poin >= redemCost && (
					<Box
						position='absolute'
						top='0'
						right='0'
						bottom='0'
						left='0'
						background='linear-gradient(180deg, rgba(10, 212, 250, 0.7) 0%, rgba(37, 187, 241, 0.4) 100%)'
						width='100%'
						height='100%'
						flexDirection='column'
						justifyContent='center'
						alignItems='center'
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						glass
					>
						<Image
							position='absolute'
							top='0'
							right='0'
							margin='12px'
							src={buywhite}
						/>
						<Box marginBottom='9px' justifyContent='center' width='100%'>
							<Text marginRight='12px' fontSize='36px' color='white'>
								{redemCost}
							</Text>
							<Image src={coin} />
						</Box>
						<Button
							data-bs-toggle="modal" 
							data-bs-target="#modalFormName"
							fontSize='18px'
							color='#616161'
							bg='white'
						>
							Buy Now
						</Button>
						
					</Box>
					
				)}
				<AddProductModal2 id={redemId}/>
		</Box>
	);
	
}

export default ReedemCard;
