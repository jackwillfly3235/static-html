export type Page = {
  path: string,
  name: string,
  url: string,
  title: string,
  isActive: boolean,
  scripts: Array<string>,
  data: Record<string, any>,
};
