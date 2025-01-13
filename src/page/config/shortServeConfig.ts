export function getShortServeConfig(req: Request, env: Env): { label: string; value: string }[] {
    if (env.DB === undefined) {
        return [];
    }
    const { origin } = new URL(req.url);
    return [{ label: origin, value: origin }];
}

