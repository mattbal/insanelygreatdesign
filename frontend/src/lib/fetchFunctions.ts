import * as z from 'zod';

const websiteSchema = z.array(
  z.object({
    name: z.string(),
    url: z.string(),
    id: z.number(),
    imgUrl: z.string(),
  })
);

export async function getWebsites({ pageParam }: { pageParam: number }) {
  const res = await fetch('/api/websites?cursor=' + pageParam);
  if (res.status >= 500 || !res.ok) {
    const error = await res.text();
    throw new Error(`${res.status} - ${error}`);
  }
  const json = await res.json();
  return websiteSchema.parse(json);
}
