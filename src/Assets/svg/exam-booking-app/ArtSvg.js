import React from 'react';

export function ArtSvg(props) {
	const { className, fill } = props;
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='30'
			height='30'
			viewBox='0 0 30 30'
			fill='none'
			className={className}
		>
			<g clipPath='url(#clip0_1_917)'>
				<path
					d='M15 30C12.9525 30 11.01 29.6025 9.18749 28.815C7.36499 28.0275 5.76749 26.955 4.40249 25.59C3.03749 24.225 1.96499 22.635 1.17749 20.805C0.389993 18.975 -0.00750732 17.04 -0.00750732 14.9925C-0.00750732 12.945 0.389993 10.89 1.19249 9.0675C1.99499 7.245 3.08999 5.655 4.47749 4.305C5.86499 2.955 7.49249 1.905 9.35999 1.1475C11.2275 0.39 13.215 0 15.345 0C17.3175 0 19.1925 0.33 20.97 0.9975C22.7475 1.665 24.3 2.58 25.6425 3.7575C26.985 4.935 28.0425 6.33 28.83 7.9425C29.6175 9.555 30.015 11.325 30.015 13.2525C30.015 15.9525 29.2275 18.0825 27.6525 19.65C26.0775 21.2175 23.9925 21.9975 21.39 21.9975H18.5775C18.1275 21.9975 17.7375 22.17 17.415 22.5225C17.0925 22.875 16.9275 23.2575 16.9275 23.685C16.9275 24.36 17.1075 24.9375 17.475 25.41C17.8425 25.8825 18.0225 26.4375 18.0225 27.06C18.0225 28.0125 17.76 28.74 17.235 29.2575C16.71 29.775 15.975 30.03 15.0225 30.03L15 30ZM6.26249 15.975C6.76499 15.975 7.19999 15.7875 7.57499 15.4125C7.94999 15.0375 8.13749 14.6025 8.13749 14.1C8.13749 13.5975 7.94999 13.1625 7.57499 12.7875C7.19999 12.4125 6.76499 12.225 6.26249 12.225C5.75999 12.225 5.32499 12.4125 4.94999 12.7875C4.57499 13.1625 4.38749 13.5975 4.38749 14.1C4.38749 14.6025 4.57499 15.0375 4.94999 15.4125C5.32499 15.7875 5.75999 15.975 6.26249 15.975ZM10.9875 9.6C11.49 9.6 11.925 9.4125 12.3 9.0375C12.675 8.6625 12.8625 8.2275 12.8625 7.725C12.8625 7.2225 12.675 6.7875 12.3 6.4125C11.925 6.0375 11.49 5.85 10.9875 5.85C10.485 5.85 10.05 6.0375 9.67499 6.4125C9.29999 6.7875 9.11249 7.2225 9.11249 7.725C9.11249 8.2275 9.29999 8.6625 9.67499 9.0375C10.05 9.4125 10.485 9.6 10.9875 9.6ZM19.0125 9.6C19.515 9.6 19.95 9.4125 20.325 9.0375C20.7 8.6625 20.8875 8.2275 20.8875 7.725C20.8875 7.2225 20.7 6.7875 20.325 6.4125C19.95 6.0375 19.515 5.85 19.0125 5.85C18.51 5.85 18.075 6.0375 17.7 6.4125C17.325 6.7875 17.1375 7.2225 17.1375 7.725C17.1375 8.2275 17.325 8.6625 17.7 9.0375C18.075 9.4125 18.51 9.6 19.0125 9.6ZM23.925 15.975C24.4275 15.975 24.8625 15.7875 25.2375 15.4125C25.6125 15.0375 25.8 14.6025 25.8 14.1C25.8 13.5975 25.6125 13.1625 25.2375 12.7875C24.8625 12.4125 24.4275 12.225 23.925 12.225C23.4225 12.225 22.9875 12.4125 22.6125 12.7875C22.2375 13.1625 22.05 13.5975 22.05 14.1C22.05 14.6025 22.2375 15.0375 22.6125 15.4125C22.9875 15.7875 23.4225 15.975 23.925 15.975ZM15 27.75C15.2775 27.75 15.4725 27.69 15.585 27.5775C15.6975 27.465 15.7575 27.285 15.7575 27.03C15.7575 26.6775 15.5775 26.355 15.21 26.055C14.8425 25.755 14.6625 25.095 14.6625 24.0675C14.6625 22.92 15.0375 21.9075 15.7875 21.03C16.5375 20.1525 17.49 19.7175 18.6375 19.7175H21.375C23.2725 19.7175 24.81 19.1625 25.9875 18.045C27.165 16.9275 27.75 15.3225 27.75 13.2225C27.75 9.9225 26.4975 7.2675 24 5.25C21.5025 3.2325 18.615 2.2275 15.3375 2.2275C11.685 2.2275 8.59499 3.4575 6.05249 5.925C3.51749 8.385 2.24249 11.4075 2.24249 14.985C2.24249 18.5625 3.48749 21.5175 5.97749 24.0075C8.46749 26.4975 11.475 27.7425 15 27.7425V27.75Z'
					fill={fill ? fill : '#FF0101'}
				/>
			</g>
			<defs>
				<clipPath id='clip0_1_917'>
					<rect width='30' height='30' fill='white' />
				</clipPath>
			</defs>
		</svg>
	);
}
