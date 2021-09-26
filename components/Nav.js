import { useState, useCallback, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'components/Link';
import {
	disableBodyScroll,
	enableBodyScroll,
	clearAllBodyScrollLocks,
} from 'body-scroll-lock';
import { currentYear } from 'utils/time';
import meta from 'meta.json';

const Nav = () => {
	const [visibleNav, setVisibleNav] = useState(false);
	const navRef = useRef(null);
	const buttonRef = useRef(null);

	const option = {
		reserveScrollBarGap: true,
	};

	const getNumberFromValue = value => Number(value.slice(0, value.length - 2));

	const toggleVisibleNav = useCallback(() => {
		if (!navRef.current || !window) return;

		setVisibleNav(v => {
			if (v) {
				enableBodyScroll(navRef.current, option);
				navRef.current.style.removeProperty('top');

				buttonRef.current.style.removeProperty('right');
				navRef.current.style.removeProperty('padding-right');
			} else {
				disableBodyScroll(navRef.current, option);
				navRef.current.style.top = window.scrollY + 'px';

				const bodyPR = document.body.style.paddingRight;
				const buttonR = window.getComputedStyle(buttonRef.current).right;
				const navPR = window.getComputedStyle(navRef.current).paddingRight;

				if (bodyPR && buttonR && navPR) {
					const bodyPRNumber = getNumberFromValue(bodyPR);
					const buttonRNumber = getNumberFromValue(buttonR);
					const navPRNumber = getNumberFromValue(navPR);

					buttonRef.current.style.right = `${bodyPRNumber + buttonRNumber}px`;
					navRef.current.style.paddingRight = `${bodyPRNumber + navPRNumber}px`;
				}
			}

			return !v;
		});
	}, []);

	useEffect(() => {
		window.onscroll = () => {
			if (!navRef.current) return;
			if (window.pageYOffset > 100) {
				buttonRef.current.classList.remove('lg:hidden');
			} else {
				buttonRef.current.classList.add('lg:hidden');
			}
		};

		return () => {
			if (navRef.current) clearAllBodyScrollLocks(navRef.current);
		};
	}, []);

	return (
		<>
			<button
				ref={buttonRef}
				className="lg:hidden"
				display="flex"
				border="~ rounded-full white"
				pos="fixed top-5 right-5 2xl:top-6"
				w="12.5"
				h="12.5"
				justify="center"
				align="items-center"
				z="20"
				onClick={toggleVisibleNav}
			>
				<Image
					src={`/images/${visibleNav ? 'close' : 'hamburger'}.png`}
					width="20"
					height="20"
					alt={visibleNav ? 'close' : 'hamburger'}
				/>
			</button>

			<div
				ref={navRef}
				className={visibleNav ? 'block' : 'hidden'}
				pos="absolute top-0 right-0"
				w="screen lg:96"
				h="screen"
				p="5"
				bg="bg07"
				z="10"
			>
				<div
					h="12.5 lg:14"
					flex="~"
					justify="start"
					align="items-center"
					font="jetbrain"
					m="b-10 lg:t-16"
				>
					<Link href="/">
						<a className="text-fs02">{meta.shortName}</a>
					</Link>
				</div>
				<nav m="b-10">
					{meta.nav.map(({ name, path }, index) => (
						<Link href={path} key={index}>
							<a
								display="block"
								p="y-6"
								font="questrial lh01"
								className="text-fs01"
								border="t-1 last:b-1 bc01"
							>
								{name}
							</a>
						</Link>
					))}
				</nav>
				<h3 font="jetbrain leading-4" className="text-xs">
					© {currentYear} {meta.shortName}
				</h3>
			</div>
		</>
	);
};

export default Nav;
