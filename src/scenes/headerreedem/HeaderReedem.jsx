import SHeader  from '../../pages/SHeader'
import { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../context/AppContext';
import { Link } from 'react-router-dom';
import { Title } from '../../components/title/title';
import { Button } from '../../components/buttongroup/buttons';
import { Image } from '../../components/image/image';
import { Box } from '../../components/box/box';
import coin from '../../assets/icons/coin.svg';
import banner from '../../assets/header-x3.png';

function HeaderReedem() {
	const {
		user,
		loadingPoin,
		setLoadingPoin,
	} = useContext(AppContext);

	useEffect(() => {
		// user()
	}, [loadingPoin]);

	console.log("loadingpoin", loadingPoin)

	const [imgLoading, setImgLoading] = useState(true);
	return (
		<Box
			as='header'
			position='relative'
			width='100%'
			height='100%'
			display='block'
		>
			<SHeader></SHeader>
			<Box
				as='nav'
				position='initial'
				zIndex='2'
				flexDirection={['column', 'column', 'row']}
				justify-content='space-between'
				alignItems='center'
				width='100%'
				height={['auto', 'auto', '80px']}
				padding={['10px 5px', '10px 5px', '0 42px']}
				bg='white'
			>
				<Link style={{textDecoration:"none", color:"black"}} to='/rewardstore'>
					<p>Reedem <span style={{color:"#C17C14"}}>Point</span></p>
					{/* Reedem Point */}
				</Link>
				<Box
					width='90%'
					height='48px'
					alignItems='center'
					justifyContent={['space-between', 'space-between', 'flex-end']}
					color='#616161'
				>
					{/* <Link to='/userhistory'> */}
							<Button
								width='120px'
								height='48px'
								bg='transparent'
								focusColor='white'
								mx={[0, '10px']}
								borderRadius='none'
								padding='0'
								color='#616161'
								focusScale
								// onClick={() => setFetchHistory(true)}
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
							>
								{user?.data?.data?.toko}
								{/* Jeremy */}
							</Button>
						{/* </Link> */}
					
						<Button
							width='130px'
							height='48px'
							borderRadius='20.5px'
							color='#616161'
							fontSize='22px'
							focusColor='#0AD4FA'
							hover
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
						>
							{user?.data?.data?.poin}
							{/* 99999999 */}
							<Image mgL='6px' src={coin} alt='coin' />
						</Button>
				</Box>
			</Box>
			<Box
				as='section'
				width='100%'
				position='relative'
				color='white'
				paddingTop={['110px', '110px', '0']}
				bg='#EDEDED'
			>
			
				<Image
					width='100%'
					height='100%'
					minWidth='100%'
					onLoad={() => setImgLoading(false)}
					src={banner}
					alt='banner'
					initial={{ opacity: 0 }}
					animate={{ opacity: imgLoading ? 0 : 1 }}
				/>
				<Title
					overflow='hidden'
					position='absolute'
					fontSize={['40px', '36px']}
					left={['20px', '20px', '54px']}
					bottom={['20px', '20px', '69px']}
					opacity={imgLoading ? '0' : '1'}
				>
					PRODUCT
				</Title>
			</Box>
		</Box>
	);
}

export default HeaderReedem;
