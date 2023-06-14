import { INestiaConfig } from '@nestia/sdk';
const config: INestiaConfig = {
  simulate: true,
  input: 'src/controllers',
  output: 'src/api',
  distribute: 'packages/api',
};
export default config;
