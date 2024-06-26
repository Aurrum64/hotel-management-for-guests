import SideNavigation from "../_components/side-navigation";

const AccountLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => (
  <div className="grid h-full grid-cols-[16rem_1fr] gap-12">
    <div>
      <SideNavigation />
    </div>
    <div>{children}</div>
  </div>
);

export default AccountLayout;
