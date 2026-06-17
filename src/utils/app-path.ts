const basePath = import.meta.env.BASE_URL.replace(/\/$/, '');

export const normalizeAppPath = (pathname: string): string => {
  if (basePath && pathname.startsWith(basePath)) {
    const withoutBase = pathname.slice(basePath.length);
    return withoutBase || '/';
  }

  return pathname || '/';
};

export const toBrowserPath = (pathname: string): string => {
  if (!basePath) return pathname;
  if (pathname === '/') return `${basePath}/`;
  return `${basePath}${pathname}`;
};

export const publicAssetUrl = (path: string): string => (
  `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`
);
