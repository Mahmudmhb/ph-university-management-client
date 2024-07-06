import { TRoute, TuserPaths } from "../types";

export const routeGenerator = (items: TuserPaths[]) => {
  const routes = items.reduce((arr: TRoute[], item) => {
    if (item.path && item.element) {
      arr.push({
        path: item.path,
        element: item.element,
      });
    }
    if (item.children) {
      item.children.forEach((child) => {
        arr.push({
          path: child.path!,
          element: child.element,
        });
      });
    }
    return arr;
  }, []);
  return routes;
};
