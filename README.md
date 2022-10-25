## Anaylytics

[https://analytics.duyanh.dev/share/oFSZUK0f/xspaceship](https://analytics.duyanh.dev/share/oFSZUK0f/xspaceship)

## 🚀 Quick start

```shell
yarn
cp .env.example .env
```

```shell
yarn dev
```

Your site is now running at http://localhost:3456!

## 🏙 Build

```shell
yarn build
```

Your built site is now in `public` folder.

## Steps to add a new work

1. Create a new image folder inside `public/images/` and put all images in there.
2. Create a new `mdx` page inside `pages/work`.
3. In the `mdx` page you have just created. Add some essential code.

- import all necessary libs and components. import `layout` components from `components/md` if you need

```
import Layout from 'components/Layout';
import Image from 'components/Image';
import { getAllImage } from 'utils/image'
```

- add meta object. so the homepage can understand work's meta.

```
export const meta = {
	slug: 'uber',
	name: 'Uber',
	category: ['Technology', 'Saas'],
	description:
		'An immersive online academy that enables you to launch a career in cyber security.',
	sub: 'Branding, web design & development',
	year: 2021,
	preview: '02',
	link: true,
	width: 'half',
	order: 2,
};
```

- add static function. this function is imported in order to create images' blurred placeholder. remember to change the
  value in `getAllImage` to name of the folder that was created in **step 1**

```
export async function getStaticProps() {
	const images = await getAllImage('uber');
	return { props: { images } };
}
```

- add layout. this function is imported to wrap all md content into a predefined layout.

```
export default ({ children }) => (
	<Layout title={meta.name} p="2xl:t-8" p="lg:x-32.5">
		{children}
	</Layout>
);
```

Done.

## Overwrite Git history (in order to reduce git physical size)
```
rm -rf .git

git init
git add .
git commit -m "Initial commit"

git remote add origin https://github.com/xspaceship/xspaceship-v2.git
git push -u --force origin main
```