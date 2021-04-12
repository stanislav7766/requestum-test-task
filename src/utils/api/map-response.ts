export const mapRepos = <Item>(items: any[], keys: string[]): Item[] =>
    items.map(
        (item): Item => {
            const a = <Item>{};
            for (const key of keys) {
                const value = item[key];
                value !== undefined && (a[key] = value);
            }
            return a;
        },
    );
