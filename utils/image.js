import glob from 'glob';
import { getPlaiceholder } from 'plaiceholder';
import { getFileNameFromString } from './string';

export const getAllImagePaths = dir =>
	glob.sync(`public/images/${dir}/*.{jpg,png,gif}`).map(file => {
		const sep = '/';
		const fileArr = file.split(sep);

		const filePath = fileArr
			.slice(fileArr.indexOf('public') + 1, fileArr.length)
			.join(sep);

		return [sep, filePath].join('');
	});

export const getAllImage = async dir => {
	const imagePaths = getAllImagePaths(dir);

	const images = await Promise.all(
		imagePaths.map(async src => {
			const { css, img } = await getPlaiceholder(src, {
				size: 4,
			});
			return { ...img, css };
		}),
	);

	const mapImages = images.reduce((acc, image) => {
		const key = getFileNameFromString(image.src)[1];
		return { ...acc, [key]: image };
	}, {});

	return mapImages;
};
