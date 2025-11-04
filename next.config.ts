import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Ignora erros do ESLint no build de produção
  eslint: {
    ignoreDuringBuilds: true,
  },

  // Opcional: ignore também erros de TypeScript no build
  // (útil se aparecerem erros de tipagem em versões futuras)
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
