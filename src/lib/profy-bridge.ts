/**
 * Lightweight postMessage bridge for communicating with the Profy shell
 * when this app runs inside an iframe. Silent no-op when standalone
 * (e.g. local dev without gateway, or 纯 Vite legacy 回退).
 *
 * 由 Profy Starter 约定的三种消息：
 *   - profy:iframe-ready            App 已首屏完成
 *   - profy:task-state-changed      通知壳 task 开始 / 结束（用于计费展示）
 *   - profy:insufficient-balance    422 时请求壳弹出统一充值对话框
 *
 * 使用示例（在页面里）:
 *   import { notifyReady, notifyTaskState, notifyInsufficientBalance }
 *     from "@/lib/profy-bridge";
 *
 *   useEffect(() => { notifyReady(); }, []);
 *
 *   try {
 *     notifyTaskState("started", { apiPath: "/api/backend/api/projects" });
 *     const res = await createProject(...);
 *     notifyTaskState("finished", { status: "success", apiPath: "..." });
 *   } catch (e) {
 *     if (e.response?.status === 422) {
 *       notifyInsufficientBalance({ apiPath: "..." });
 *     }
 *     notifyTaskState("finished", { status: "failed", error: String(e) });
 *   }
 */

export const isEmbedded =
	typeof window !== "undefined" && window.parent !== window;

export function notifyReady(): void {
	if (!isEmbedded) return;
	window.parent.postMessage({ type: "profy:iframe-ready" }, "*");
}

export function notifyTaskState(
	phase: "started" | "finished",
	opts?: {
		apiPath?: string;
		status?: "success" | "failed";
		error?: string;
	},
): void {
	if (!isEmbedded) return;
	window.parent.postMessage(
		{ type: "profy:task-state-changed", phase, ...opts },
		"*",
	);
}

export function notifyInsufficientBalance(opts?: {
	apiPath?: string;
}): void {
	if (!isEmbedded) return;
	window.parent.postMessage(
		{ type: "profy:insufficient-balance", ...opts },
		"*",
	);
}
