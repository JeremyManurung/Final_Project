import { Box } from '../../components/box/box';
import { Text } from '../../components/text/text';
import FaqList from './FaqList';
import HeaderFaq from '../headerfaq/HeaderFaq'
import FaqPageContent from './FaqPageContent'

function FaqPage() {
	return (
		<Box
			backgroundColor='#F6F6F6'
			flexDirection='column'
			alignItems='center'
			justifyContent='center'
			width='100%'
			initial={{ opacity: 0 }}
			animate={{ opacity: 1, transition: { delay: 0.2, duration: 0.2 } }}
			exit={{ x: '-100%', transition: { ease: 'easeInOut' } }}
		>
			<HeaderFaq />
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
					Paling Sering Ditanyakan
				</Text>
			</Box>
			<FaqList  />
			<FaqPageContent/>	
		</Box>
	);
}

export default FaqPage;
