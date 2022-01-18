
import { Box } from '../../components/box/box';
import { Image } from '../../components/image/image';
import { Text } from '../../components/text/text';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect
} from "react-router-dom";


function ProductCard () {
	return (
		<Box
			position='relative'
			flexDirection='column'
			alignItems='center'
			bg='white'
			width='100%'
			boxShadow='2px 2px 4px rgba(0, 0, 0, 0.1)'
			borderRadius='10px'
			initial={{ opacity: 0 }}
			animate={{ opacity: 1, transition: { duration: 0.6 } }}
		>
			<Link
			style={{textDecoration:"none"}}
			to='/detailfaq'
			>
			<Box
				width='80%'
				flexDirection='column'
				padding='18px 0px'
			>
				<Text color='#FF872E' fontSize='16px'>
					Polgent
				</Text>
				<Text color='#616161' fontSize='18px'>
					Bagimana Melakukan Redem?
				</Text>
			</Box>
			</Link>
		</Box>
	);
}

export default ProductCard;
