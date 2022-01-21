import { Box } from '../../components/box/box';
import HistoryCard from '../historycard/HistoryCard';

function HistoryList({ historyList }) {
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
			flexDirection={['column']}
		>
			{historyList.map((history, index) => (
				<HistoryCard
					key={index}
					historyImg={history.ImageRequest}
					historyAmount={history.Amount}
					historyPoinItems={history.PoinItems}
					historyType={history.type}
				/>
			))}
		</Box>
	);
}

export default HistoryList;
