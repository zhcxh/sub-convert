import type { V2RayType } from '../../../types/V2Ray';
import { tryBase64Encode } from 'cloudflare-tools';

export class V2RayClient {
    public async getConfig(_: string[], vps: string[]): Promise<V2RayType> {
        try {
            return tryBase64Encode(vps.join('\n'));
        } catch (error: any) {
            throw new Error(`Failed to get v2ray config: ${error.message || error}`);
        }
    }
}

