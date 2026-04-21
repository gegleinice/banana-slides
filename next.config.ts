import type { NextConfig } from "next";

// Profy 在生产环境会以 basePath=/webapps/{slug} 的方式挂载本应用。
// 本地 `npm run dev` 通过 market-cli 网关代理到 http://localhost:81，
// 因此 basePath 只在生产时由 Profy 注入 NEXT_PUBLIC_BASE_PATH。
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

// Python 业务后端地址（默认本地），Profy 部署时由 env 注入。
const BACKEND_URL =
	process.env.BANANA_BACKEND_URL || "http://127.0.0.1:5000";

// 迁移期：legacy 代码由 vite build 生成（不跑 tsc），Next 默认每次 build 都跑
// tsc。把 tsc 打开前，先放宽，每页迁入时再收紧（见 PROFY_MIGRATION.md）。
const MIGRATION_MODE = true;

const nextConfig: NextConfig = {
	basePath: basePath || undefined,

	// Dockerfile 使用 standalone 模式以获得最小运行镜像
	output: "standalone",

	env: {
		NEXT_PUBLIC_BASE_PATH: basePath,
	},

	typescript: {
		ignoreBuildErrors: MIGRATION_MODE,
	},

	async rewrites() {
		return [
			// Banana 业务 API：/api/backend/* → Python 后端 /*
			// 配合 src/api/client.ts 里 baseURL='/api/backend'
			{
				source: "/api/backend/:path*",
				destination: `${BACKEND_URL}/:path*`,
			},
		];
	},
};

export default nextConfig;
