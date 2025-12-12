import { HeaderSearch } from "./HeaderSearch";
import { FooterBar } from "./FooterBar";
import { ContentDashboard } from "./ContentDashboard";

export function DashboardPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100%",
        backgroundColor: "#ffffff",
        paddingBottom: 90, // para hindi tamaan ng fixed footer
      }}
    >
      <HeaderSearch />
      <ContentDashboard />
      <FooterBar />
    </div>
  );
}
