import React, {
	createContext,
	useState,
	useEffect,
	useContext,
	ReactNode,
} from "react";

export enum screenSizes {
	desktop = "desktop",
	tablet = "tablet",
	mobile = "mobile",
}

const ScreenSizeContext = createContext({ screenSize: screenSizes.desktop });

export function ScreenSizeProvider({ children }: { children: ReactNode }) {
	const [screenSize, setScreenSize] = useState(screenSizes.desktop);

	useEffect(() => {
		function getScreenSize(w: number) {
			if (w > 1200) {
				return screenSizes.desktop;
			} else if (w > 480) {
				return screenSizes.tablet;
			} else {
				return screenSizes.mobile;
			}
		}

		const listener = () => {
			setScreenSize(getScreenSize(window.innerWidth));
		};

		window.addEventListener("resize", listener);
		listener();

		return () => window.removeEventListener("resize", listener);
	}, []);

	return (
		<ScreenSizeContext.Provider value={{ screenSize }}>
			<div className={screenSize}>{children}</div>
		</ScreenSizeContext.Provider>
	);
}

//Hook
function useScreenSize() {
	return useContext(ScreenSizeContext);
}

export default useScreenSize;
