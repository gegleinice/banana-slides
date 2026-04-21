import type { SVGProps } from "react";

interface GithubIconProps extends Omit<SVGProps<SVGSVGElement>, "size"> {
	size?: number | string;
}

/**
 * GitHub mark (octocat) — 本地化的 SVG 图标。
 * lucide-react 新版本移除了 `Github` 图标，这里用官方 SVG 路径替代。
 */
export function GithubIcon({ size = 24, ...props }: GithubIconProps) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			width={size}
			height={size}
			fill="currentColor"
			aria-hidden="true"
			{...props}
		>
			<path d="M12 .5C5.73.5.5 5.73.5 12.06c0 5.09 3.29 9.41 7.86 10.94.57.1.78-.25.78-.55v-2c-3.2.7-3.87-1.54-3.87-1.54-.53-1.35-1.3-1.71-1.3-1.71-1.06-.72.08-.7.08-.7 1.17.08 1.79 1.2 1.79 1.2 1.04 1.77 2.73 1.26 3.39.96.1-.76.41-1.27.74-1.56-2.55-.29-5.24-1.27-5.24-5.66 0-1.25.45-2.27 1.19-3.07-.12-.3-.52-1.51.11-3.15 0 0 .97-.31 3.19 1.17.92-.26 1.91-.38 2.9-.39.98 0 1.97.13 2.9.39 2.21-1.48 3.18-1.17 3.18-1.17.63 1.64.23 2.85.11 3.15.74.8 1.18 1.82 1.18 3.07 0 4.4-2.69 5.37-5.26 5.65.42.36.8 1.08.8 2.17v3.22c0 .31.21.66.79.55 4.57-1.53 7.85-5.85 7.85-10.94C23.5 5.73 18.27.5 12 .5Z" />
		</svg>
	);
}

export default GithubIcon;
