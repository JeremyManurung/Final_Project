import { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import { Box } from '../../components/box/box';
import ProductCard from '../productcard/ProductCard';

function ProductList({ productList }) {
	const {currentPoints, setCurrentPoints } = useContext(AppContext);
	
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
			{productList?.map((product) => (
				<ProductCard
					key={product.id}
					productId={product.id}
					productImg={product.img}
					productCat={product.nameType}
					productName={product.namaInstansi}
					productCost={product.poin}
				/>
			))}
		</Box>
	);
}

export default ProductList;
