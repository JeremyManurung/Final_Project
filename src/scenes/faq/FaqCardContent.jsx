
import { Box } from '../../components/box/box';
import { Image } from '../../components/image/image';
import { Text } from '../../components/text/text';



function FaqCardContent () {
	return (
		<Box
			position='relative'
			flexDirection='column'
			alignItems='center'
			bg='white'
			width='100%'
			borderRadius='10px'
			boxShadow='2px 2px 4px rgba(0, 0, 0, 0.1)'
			initial={{ opacity: 0 }}
			animate={{ opacity: 1, transition: { duration: 0.6 } }}
		>
		
			
			<Box

				width='80%'
				height='50px'
				padding='6px 27%'
			>
				<Text color='#616161' fontSize='18px'>
					POINT
				</Text>
			</Box>
		</Box>
	);
}

export default FaqCardContent;
