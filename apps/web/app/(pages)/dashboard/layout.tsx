import SideBar from "@/components/common/sidebar";
import DashboardShell from "@/components/common/DashboardShell";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      {/* You can add a specific sidebar or header here if needed */}
      <DashboardShell>
        {children}
      </DashboardShell>
      
    </section>
  );
}