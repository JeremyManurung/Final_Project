import React from 'react'
import { Box } from '../../components/box/box';
import { Text } from '../../components/text/text';
import HeaderFaq from '../headerfaq/HeaderFaq'

function DetailFaqContent() {
    return (
        <div>
            <Box
			backgroundColor='#F6F6F6'
			flexDirection='column'
			paddingBottom='50px'
			alignItems='center'
			justifyContent='center'
			width='100%'
			initial={{ opacity: 0 }}
			animate={{ opacity: 1, transition: { delay: 0.2, duration: 0.2 } }}
			exit={{ x: '-100%', transition: { ease: 'easeInOut' } }}
		>
			<HeaderFaq />
			<Box
				backgroundColor='white'
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
					color='white'
				>	
				</Text>
				<Text
					color='#616161'
					padding='20px 100px 0 90px'
				>
					Bagaimana Cara Melakukan Reedem Point?<hr/>
					<br/>
					
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore molestiae et dolore nesciunt sit aspernatur qui cupiditate excepturi itaque consectetur alias rerum quia perspiciatis, eligendi est unde quidem! Recusandae, laudantium!
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed laboriosam id sunt eos sapiente, ipsam accusantium inventore. Corporis incidunt, pariatur quis vero velit quia asperiores consequuntur ratione odio laboriosam nulla.<br/>
					<img
                        src="images/phone.jpg"
                        style={{width:"250px",borderRadius:"15px"}}
                        className="img-cover"
                        />
				</Text>

				
			</Box>
		</Box>
        </div>
    )
}

export default DetailFaqContent