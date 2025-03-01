"use client"

import Titles from "@/components/typography/title";
import { Button, Tabs, TabsProps } from "antd";
import Link from "next/link";
import JobList from "./_components/job-list";

const items: TabsProps['items'] = [
    {
        key: '1',
        label: 'Berjalan',
        children: <JobList type="published" />,
    },
    {
        key: '2',
        label: 'Draf',
        children: <JobList type="draft" />,
    }
];

export default function Page() {
    return (
        <div className="container mx-auto">
            <div className="flex justify-between">
                <div>
                    <Titles text="Iklan Pekerjaan" />
                </div>
                <div>
                    <Button type="primary">
                        <Link href="/company/jobs/create">Buat Iklan Pekerjaan</Link>
                    </Button>
                </div>
            </div>
            <div>
                <Tabs defaultActiveKey="1" items={items} onChange={() => { }} />
            </div>
        </div>
    )
}