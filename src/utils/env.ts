export const kEnvs: Partial<{
  MI_USER: string;
  MI_PASS: string;
  MI_DID: string;
  OPENAI_MODEL: string;
  OPENAI_API_KEY: string;
  AZURE_OPENAI_API_KEY: string;
  AZURE_OPENAI_DEPLOYMENT: string;
  QWEN_ENABLE_SEARCH: boolean;
}> = {
  ...process.env,
  QWEN_ENABLE_SEARCH: process.env.QWEN_ENABLE_SEARCH === 'true'
} as any;
