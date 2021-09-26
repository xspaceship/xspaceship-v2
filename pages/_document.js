import Document, { Html, Head, Main, NextScript } from 'next/document';
import meta from 'meta.json';

class MyDocument extends Document {
	render() {
		return (
			<Html>
				<Head>
					<meta charSet="utf-8" />
					<link rel="preconnect" href="https://fonts.googleapis.com" />
					<link rel="preconnect" href="https://fonts.gstatic.com" />
					<link
						href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700&family=Questrial&family=Work+Sans:wght@500;700&display=swap"
						rel="stylesheet"
					/>
					<link rel="shortcut icon" href="./favicon.ico" />
					<meta name="theme-color" content="#000" />
				</Head>
				<body
					pos="relative"
					style={{
						'--blur': meta.default_image_blur,
						'--scale': meta.default_image_scale,
						'--transition': meta.default_image_transition,
					}}
				>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
