// src/App.tsx
import "@mantine/core/styles.css";
import "./App.css";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { MantineProvider } from "@mantine/core";
import { LoginPage } from "./components/LoginPage";
import { DashboardPage } from "./components/DashboardPage";

// Simple wrapper para i-center lang ang login page
function Centered({ children }: { children: React.ReactNode }) {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#ffffff",
      }}
    >
      {children}
    </main>
  );
}

export default function App() {
  return (
    <MantineProvider>
      <BrowserRouter>
        <Routes>
          {/* Login page centered */}
          <Route path="/" element={<Centered><LoginPage /></Centered>} />

          {/* Dashboard page (may sarili nang layout: fixed header + footer) */}
          <Route path="/dashboard" element={<DashboardPage />} />

          {/* Fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </MantineProvider>
  );
}
