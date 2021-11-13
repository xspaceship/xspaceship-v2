/* eslint-disable @next/next/no-img-element */
import { useEffect, useState, useMemo } from 'react';

const AppStoreItem = ({ url }) => {
	const [star, setStar] = useState(4.7);
	const [rating, setRating] = useState('3K');
	const [thumbImage, setThumbImage] = useState('');
	const [title, setTitle] = useState('');
	const [loading, setLoading] = useState(true);

	const starClass = useMemo(() => {
		const roundedNumber = (Math.round(star * 2) / 2).toFixed(1);
		const removedDotNumber = roundedNumber.replace('.', '');
		return `app-store-rating-stars-${removedDotNumber}`;
	}, [star]);

	useEffect(() => {
		const setContent = ({ star, rating, thumbImage, title }) => {
			setStar(star);
			setRating(rating);
			setThumbImage(thumbImage);
			setTitle(title);
		};

		const fetchAppInfo = async () => {
			const splitKeys = url.split('/');
			const key = splitKeys[splitKeys.length - 1];

			const sessionContent = sessionStorage.getItem(key);

			if (sessionContent) {
				setContent(JSON.parse(sessionContent));
			} else {
				const response = await fetch(url);
				const content = await response.text();
				const rate = content
					.match(/(?<=<figcaption(.*?)>)(.*?)(?=<\/figcaption>)/g)?.[0]
					?.trim();

				const title = content
					.match(
						/(?<=product-header__title app-header__title">)((.|\n)*?)(?=<span)/g,
					)?.[0]
					.trim();

				const heroArtworkDOM = content.match(
					/(?<=product-hero__artwork(.*?)>)((.|\n)*?)(?=<\/picture>)/g,
				)?.[0];
				const thumbUrl = heroArtworkDOM.match(
					/(?<=srcset=")((.|\n)*?)(?= 1x,)/g,
				)?.[0];

				if (thumbUrl && rate && title) {
					const data = {
						star: rate.split(' ')[0],
						rating: rate.split(' ')[2],
						title,
						thumbImage: thumbUrl,
					};

					sessionStorage.setItem(key, JSON.stringify(data));
					setContent(data);
				}
			}

			setLoading(false);
		};

		fetchAppInfo();
	}, []);

	return (
		<div grid="~ cols-12" gap="5">
			<div
				grid="col-span-12 lg:col-span-6"
				bg="bg12"
				flex="~"
				justify="center"
				align="items-center"
				border="rounded-lg"
				p="y-22"
			>
				{loading ? (
					<div className="app-store-loader"></div>
				) : (
					<div h="32" flex="~">
						<img
							w="32"
							h="32"
							src={thumbImage}
							alt="Thumnail"
							className="app-store-image"
						/>
						<div m="l-5" flex="~ col" justify="between">
							<h2 font="bold" text="2xl">
								{title}
							</h2>
							<span className="app-store-rating-stars-outlines">
								<span className={`app-store-rating-stars ${starClass}`}></span>
							</span>
							<p font="medium leading-7">
								{star} • {rating} Ratings
							</p>
						</div>
					</div>
				)}
			</div>
			<div
				grid="col-span-12 lg:col-span-6"
				bg="bg12"
				flex="~"
				justify="center"
				align="items-center"
				border="rounded-lg"
			>
				<a className="app-store-href" href={url}>
					<img
						src="https://apple-resources.s3.amazonaws.com/media-badges/download-on-the-app-store/black/en-us.svg"
						alt="Download on the App Store"
					/>
				</a>
			</div>
		</div>
	);
};

export default AppStoreItem;
