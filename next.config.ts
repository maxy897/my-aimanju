import type { NextConfig } from "next";  
import createNextIntlPlugin from 'next-intl/plugin';  
const withNextIntl = createNextIntlPlugin('./src/i18n.ts');  
const nextConfig: NextConfig = {  
  typescript: {  
    ignoreBuildErrors: true,  
  },  
  allowedDevOrigins: [  
    'http://192.168.31.218:3000',  
    'http://192.168.31.*:3000',  
  ],  
};  
export default withNextIntl(nextConfig);  
