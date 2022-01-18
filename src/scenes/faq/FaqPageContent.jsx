import { Box } from '../../components/box/box';
import { Text } from '../../components/text/text';
import FaqListContent from './FaqListContent';
import Footer from '../../pages/Footer';

function ProductPage() {
	return (
        <>
		<Box
            backgroundColor='white'
			flexDirection='column'
			alignItems='center'
			justifyContent='center'
			width='100%'
			initial={{ opacity: 0 }}
			animate={{ opacity: 1, transition: { delay: 0.2, duration: 0.2 } }}
			exit={{ x: '-100%', transition: { ease: 'easeInOut' } }}
		>
			<Box
				alignItems='center'
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
					color='#616161'
				>
					Semua Kategori
				</Text>
			</Box>
			<FaqListContent  />	

            <Footer
                width={['100%']}
            />
		</Box>
        
        </>
	);
    
}

export default ProductPage;
