const normalizeSrc = (src: string) => {
  return src.startsWith('/') ? src.slice(1) : src;
};

export default function cloudflareLoader(args: any) {
  const params = [`width=${args.width}`];
  if (args.quality) {
      params.push(`quality=${args.quality}`);
  }
  const paramsString = params.join(',');
  return `/cdn-cgi/image/${paramsString}/${normalizeSrc(args.src)}`;
};