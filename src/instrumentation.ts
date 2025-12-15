export async function register() {
  // Validate env vars at server startup (not during build)
  const { getEnv } = await import("@/env");
  getEnv();
}
