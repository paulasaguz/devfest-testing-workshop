import React from 'react'

function Icon({ color, size, children }) {
	return (
		<svg
			fill={color}
			width={size}
			height={size}
			viewBox="0 0 60 60"
		>
			{children}
		</svg>
	)
}

export default Icon;