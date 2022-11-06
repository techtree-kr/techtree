import { FunctionComponent, ReactNode } from "react";

interface AdminLayoutProps {
  children: ReactNode;
}

const AdminLayout: FunctionComponent<AdminLayoutProps> = (props) => {
  const { children } = props;

  return <div>{children}</div>;
};

export default AdminLayout;
