import { NavLink } from "react-router-dom";
import { TSideBar, TuserPaths } from "../types";

export const sidebarItemGenerator = (items: TuserPaths[], role: string) => {
  const sideberItems = items.reduce((arr: TSideBar[], item) => {
    if (item.path && item.name) {
      arr.push({
        key: item.path,
        label: <NavLink to={`/${role}/${item.path}`}>{item.name}</NavLink>,
      });
    }
    if (item.children) {
      arr.push({
        key: item.name,
        label: item.name,
        children: item.children.map((child) => ({
          key: child.name,
          label: <NavLink to={`/${role}/${child.path}`}>{child.name}</NavLink>,
        })),
      });
    }

    return arr;
  }, []);
  return sideberItems;
};
