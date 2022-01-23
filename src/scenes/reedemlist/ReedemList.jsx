import { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import { Box } from '../../components/box/box';
import ProductCard from '../productcard/ProductCard';
import ReedemCard from '../reedemcard/ReedemCard'

function ReedemList({ redemList }) {
	const {currentPoints, setCurrentPoints } = useContext(AppContext);
	console.log("poinpoin", redemList)

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
			{redemList?.map((redem) => (
				<ReedemCard
					key={redem.id}
					redemId={redem.id}
					redemImg={redem.img}
					redemAmount={redem.amount}
					redemName={redem.nameProduct}
					redemCost={redem.poin}
				/>
			))}
			
		</Box>
	)

}

export default ReedemList;
