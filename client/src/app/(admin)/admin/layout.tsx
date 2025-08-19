'use client';
import AdminContent from "@/app/components/admin/layout/admin.content";
import AdminFooter from "@/app/components/admin/layout/admin.footer";
import AdminHeader from "@/app/components/admin/layout/admin.header";
import AdminSidebar from "@/app/components/admin/layout/admin.sidebar";
import { Layout } from "antd";

export default function AdminLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <Layout>
                <AdminSidebar />
                <Layout>
                    <AdminHeader />
                    <AdminContent>
                        {children}
                    </AdminContent>
                    <AdminFooter />
                </Layout>
            </Layout>
        </>
    );
}
