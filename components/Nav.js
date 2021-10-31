import { useState, useCallback, useEffect, useRef } from 'react';
import Image from 'next/image';
import {
	disableBodyScroll,
	enableBodyScroll,
	clearAllBodyScrollLocks,
} from 'body-scroll-lock';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'components/Link';
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

	const toggleVisibleNav = useCallback(() => {
		if (!window) return;

		setVisibleNav(v => {
			if (v) {
				enableBodyScroll(navRef.current, option);
			} else {
				disableBodyScroll(navRef.current, option);
			}

			return !v;
		});
	}, []);

	const navVariants = {
		initial: { x: '100%' },
		animate: { x: '0%', transition: { duration: 0.3 } },
		exit: {
			x: '100%',
			transition: { delay: 0.2, duration: 0.3 },
		},
	};

	const overlayVariants = {
		initial: { opacity: 0 },
		animate: { opacity: 1 },
		exit: { opacity: 0 },
	};

	const itemVariants = {
		closed: { opacity: 0 },
		open: { opacity: 1 },
	};

	const sideVariants = {
		closed: {
			transition: { staggerChildren: 0.2, staggerDirection: -1 },
		},
		open: {
			transition: {
				staggerChildren: 0.2,
				staggerDirection: 1,
				delayChildren: 0.1,
			},
		},
	};

	const handleScroll = () => {
		if (window.pageYOffset > 100) {
			buttonRef.current.classList.remove('lg:hidden');
		} else {
			buttonRef.current.classList.add('lg:hidden');
		}
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);

		setIsDesktop(window.innerWidth > 1024);

		return () => {
			if (navRef.current) clearAllBodyScrollLocks(navRef.current);
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<>
			<div
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
				cursor="pointer"
				onClick={toggleVisibleNav}
			>
				{visibleNav ? (
					<Image src="/images/close.png" width="20" height="20" alt="" />
				) : isDesktop ? (
					<Image src="/images/hamburger-2.png" width="20" height="20" alt="" />
				) : (
					<Image src="/images/hamburger.png" width="20" height="20" alt="" />
				)}
			</div>

			<AnimatePresence>
				{visibleNav && (
					<motion.div
						ref={navRef}
						className="fixed top-0 right-0 w-screen h-screen bg-bg10 flex justify-end z-10"
						onClick={toggleVisibleNav}
						initial="initial"
						animate="animate"
						exit="exit"
						variants={overlayVariants}
						transition={{ type: 'easeInOut', duration: 0.5 }}
					>
						<motion.aside
							ref={navMainRef}
							initial="initial"
							animate="animate"
							exit="exit"
							variants={navVariants}
							className="bg-bg07 w-full p-5 lg:w-104 lg:py-8 lg:px-10"
						>
							<motion.nav
								initial="closed"
								animate="open"
								exit="closed"
								variants={sideVariants}
							>
								<motion.div variants={itemVariants}>
									<div
										h="12.5 lg:14"
										flex="~"
										justify="start"
										align="items-center"
										m="b-10 lg:t-16"
										text="fs02"
									>
										<Link href="/">
											<a>{meta.shortName}</a>
										</Link>
									</div>
								</motion.div>

								{meta.nav.map(({ name, path }, index) => (
									<motion.div key={index} variants={itemVariants}>
										<Link href={path}>
											<a
												display="block"
												p="y-5"
												font="questrial lh01"
												transition="colors duration-300"
												className="text-fs01 hover:text-tc06"
												border="t-1 last:b-1 bc01"
											>
												{name}
											</a>
										</Link>
									</motion.div>
								))}

								<motion.div variants={itemVariants}>
									<h3 font="leading-4" m="t-10" text="xs">
										© {currentYear} {meta.shortName}
									</h3>
								</motion.div>
							</motion.nav>
						</motion.aside>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
};

export default Nav;
