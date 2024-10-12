import { z } from 'zod';

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
  if (res.status >= 500) {
    throw new Error(res.statusText);
  }
  if (!res.ok) {
    throw new Error(`${res.status} - ${res.statusText}`);
  }
  const json = await res.json();
  return websiteSchema.parse(json);
}
