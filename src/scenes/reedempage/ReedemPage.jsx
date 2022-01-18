import { AnimatePresence } from 'framer-motion';
import { Box } from '../../components/box/box';
import { Text } from '../../components/text/text';
import { Image } from '../../components/image/image';
import ProductList from '../productlist/ProductList';
import ButtonFilters from '../buttonfilters/ButtonFilters';
import arrowLeft from '../../assets/icons/arrow-left.svg';
import arrowRight from '../../assets/icons/arrow-right.svg';
import HeaderReedem from '../headerreedem/HeaderReedem'

function ProductPage() {
	return (
		
		<Box
			flexDirection='column'
			alignItems='center'
			justifyContent='center'
			width='100%'
			initial={{ opacity: 0 }}
			animate={{ opacity: 1, transition: { delay: 0.2, duration: 0.2 } }}
			exit={{ x: '-100%', transition: { ease: 'easeInOut' } }}
		>
			<HeaderReedem />
			<Box
				as='section'
				alignItems='center'
				flexDirection={['column', 'column', 'row']}
				width={['95%', '80%']}
				py={['24px']}
				borderBottom='1px solid #D9D9D9'
				initial={{ opacity: 0 }}
				animate={{ opacity: 1, transition: { delay: 0.2, duration: 0.2 } }}
				exit={{ x: '-100%', transition: { ease: 'easeInOut' } }}
			>
				<Text
					padding='0px 24px'
					borderRight={['none', 'none', '1px solid #D9D9D9']}
					color='#616161'
				>
					
				</Text>
				<Text
					display={['none', 'none', 'flex']}
					paddingLeft={[0, 0, '24px']}
					color='#616161'
				>
					Sort by:
				</Text>
				<ButtonFilters/>
				<Box>
					<AnimatePresence>
						
							<Image
								marginRight='10px'
								pointer
								
								src={arrowLeft}
								alt='arrowLeft'
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0 }}
							/>
						
					</AnimatePresence>
					<Image
						pointer
						// onClick={() => nextPage()}
						src={arrowRight}
						alt='arrowRight'
					/>
				</Box>
			</Box>
			<ProductList  />
			<Box
				as='footer'
				marginBottom='64px'
				justifyContent='space-between'
				alignItems='center'
				width='80%'
				padding='24px 0px'
				borderBottom='1px solid #D9D9D9'
			>
				<Text padding='0px 24px' color='#616161'>
					
				</Text>
				<Box>
					<AnimatePresence>
					
							<Image
								marginRight='10px'
								pointer
							
								src={arrowLeft}
								alt='arrowLeft'
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0 }}
							/>
				
					</AnimatePresence>
					<Image
						pointer
					
						src={arrowRight}
						alt='arrowRight'
					/>
				</Box>
			</Box>
		</Box>
	);
}

export default ProductPage;
