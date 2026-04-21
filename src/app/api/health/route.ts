// Profy k8s healthCheck 目标（见 profy.json runtime.healthCheck）
// 只检查 Next.js 自身存活；Python 后端的健康由其自身部署负责。
export function GET() {
	return Response.json({ status: "ok", app: "banana-slides" });
}
