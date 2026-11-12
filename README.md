# pinyin-tone-usage

Live demo for [`pinyin-tone`](https://www.npmjs.com/package/pinyin-tone): type
numeric pinyin (`han4 yu3`), get tone-marked pinyin (`hàn yǔ`). The page runs all
three published generations of the library against the same input — v1, v2 and the
3.0 rewrite — so their differences can be seen, not described.

Deployed to <https://pinyintone.pages.dev> (Cloudflare Pages).

## Development

```bash
pnpm install
pnpm dev       # local dev server
pnpm build     # static build into dist/
pnpm preview   # serve the build
```

## How the versions are pinned

`pinyin-tone` stays at **2.4.1**, because 2.x is the last line that ships the `v1`
root export and the `v2` subpath this page demonstrates. 3.0 removed both and
replaced them with a single named `markTones`, so it is installed under the alias
`pinyin-tone-v3`:

```json
"pinyin-tone": "2.4.1",
"pinyin-tone-v3": "npm:pinyin-tone@3.0.0"
```

All three generations are re-exported from `src/common/functions.ts`; the page
imports from there and nowhere else. When `pinyin-tone` publishes a stable 3.x
and this site no longer needs to demo 2.x, drop the alias and pin the root to 3.x.

## Test cases

`src/pages/index.astro` holds the test matrix. Each row declares which version's
output it asserts; rows 13–17 assert v3 only, because they are exactly the inputs
where 3.0 diverges from 2.x (unspaced input, capitalised syllables, pinyin glued
to Han characters, the three writings of ü). Assertions are checked at build time
— a regression shows up as a ✗ in the rendered table.

## License

MIT
