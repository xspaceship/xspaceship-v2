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
	const [isDesktop, setIsDesktop] = useState(false);
	const navRef = useRef(null);
	const buttonRef = useRef(null);
	const navMainRef = useRef(null);

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
				navMainRef.current.style.removeProperty('padding-right');
			} else {
				disableBodyScroll(navRef.current, option);
				navRef.current.style.top = window.scrollY + 'px';

				const bodyPR = document.body.style.paddingRight;
				const buttonR = window.getComputedStyle(buttonRef.current).right;
				const navMainPR = window.getComputedStyle(
					navMainRef.current,
				).paddingRight;

				if (bodyPR && buttonR && navMainPR) {
					const bodyPRNumber = getNumberFromValue(bodyPR);
					const buttonRNumber = getNumberFromValue(buttonR);
					const navMainPRNumber = getNumberFromValue(navMainPR);

					buttonRef.current.style.right = `${bodyPRNumber + buttonRNumber}px`;
					navMainRef.current.style.paddingRight = `${
						bodyPRNumber + navMainPRNumber
					}px`;
				}
			}

			return !v;
		});
	}, []);

	useEffect(() => {
		window.onscroll = () => {
			if (!navRef.current || window.innerWidth >= 1600) return;
			if (window.pageYOffset > 100) {
				buttonRef.current.classList.remove('lg:hidden');
			} else {
				buttonRef.current.classList.add('lg:hidden');
			}
		};

		setIsDesktop(window.innerWidth > 1024);

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
				pos="fixed top-5 right-5 lg:right-10 lg:top-8"
				w="12.5"
				h="12.5"
				justify="center"
				align="items-center"
				z="20"
				bg="black"
				onClick={toggleVisibleNav}
			>
				<Image
					src={`/images/${
						visibleNav ? 'close' : isDesktop ? 'hamburger-2' : 'hamburger'
					}.png`}
					width="20"
					height="20"
					alt={visibleNav ? 'close' : isDesktop ? 'hamburger-2' : 'hamburger'}
				/>
			</button>

			<div
				ref={navRef}
				className={visibleNav ? 'block' : 'hidden'}
				pos="absolute top-0 right-0"
				w="screen"
				h="screen"
				bg="bg10"
				z="10"
				flex="~"
				justify="end"
				onClick={toggleVisibleNav}
			>
				<div
					ref={navMainRef}
					bg="bg07"
					w="full lg:104"
					p="5 lg:y-8 lg:x-10"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ type: 'easeInOut', duration: 0.5 }}
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
									p="y-5"
									font="questrial lh01"
									className="text-fs01 hover:text-tc06"
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
			</div>
		</>
	);
};

export default Nav;
