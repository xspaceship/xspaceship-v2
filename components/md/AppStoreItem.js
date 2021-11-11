// WIP
import { useEffect, useState } from 'react';

const AppStoreItem = ({ url }) => {
	const [star, setStar] = useState(4.7);
	const [ratings, setRatings] = useState('3K');
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const setContent = content => {
			const splitS = content.trim().split(' ');
			setStar(splitS[0]);
			setRatings(splitS[2]);
		};

		const fetchAppInfo = async () => {
			const splitKeys = url.split('/');
			const key = splitKeys[splitKeys.length - 1];

			const sessionS = sessionStorage.getItem(key);

			if (sessionS) {
				setContent(sessionS);
			} else {
				const response = await fetch(url);
				const content = await response.text();
				const s = content.match(
					/(?<=<figcaption(.*?)>)(.*?)(?=<\/figcaption>)/g,
				)?.[0];

				if (s) {
					sessionStorage.setItem(key, s);
					setContent(s);
				}
			}

			setLoading(false);
		};

		fetchAppInfo();
	}, []);

	return (
		<div grid="cols-12" gap="5">
			<div grid="col-span-6">
				{loading ? 'loading' : `${star} - ${ratings}`}
			</div>
			<div grid="col-span-6"></div>
		</div>
	);
};

export default AppStoreItem;
