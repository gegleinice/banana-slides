"use client";

import type { ReactNode } from "react";
import "@/i18n";

// Client-only providers: i18n init + 其他全局上下文。
// 使用 "use client" 确保不会在 SSR 阶段访问 localStorage/navigator。
export function ClientProviders({ children }: { children: ReactNode }) {
	return <>{children}</>;
}
