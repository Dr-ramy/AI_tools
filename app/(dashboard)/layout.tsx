
const DashboardLayout = async ({
  children,
}: {
  children: React.ReactNode
}) => {
  return ( 
    <div className="full relative">

      <main className="md">
        {children}
      </main>
    </div>
   );
}
 
export default DashboardLayout;
