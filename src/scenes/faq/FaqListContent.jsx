import { Box } from '../../components/box/box';
import FaqCardContent from './FaqCardContent';

function FaqListContent() {
	return (
		<Box
			as='section'
			width='80%'
			display='grid'
			gridTemplateColumns={[
				'repeat(1, minmax(100px, 1fr))',
				'repeat(2, minmax(100px, 1fr))',
				'repeat(4, minmax(100px, 1fr))',
			]}
			gridGap='24px'
			padding='54px 0px'
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
		>
			
				<FaqCardContent/>

				<FaqCardContent/>

				<FaqCardContent/>

				<FaqCardContent/>

				<FaqCardContent/>

				<FaqCardContent/>

				<FaqCardContent/>

				<FaqCardContent/>
		</Box>
	);
}

export default FaqListContent;
