"use client"

import Titles from "@/components/typography/title";
import { Tabs, TabsProps } from "antd";
import JobPreview from "../_components/job-preview";
import Candidates from "../_components/candidates";

const items: TabsProps['items'] = [
    {
        key: '1',
        label: 'Detail',
        children: <JobPreview hideTitle editable showApplyButton />,
    },
    {
        key: '2',
        label: 'Kandidat',
        children: <Candidates />,
    }
];

export default function Page() {
    return (
        <div className="container mx-auto">
            <div className="flex justify-between">
                <div>
                    <Titles text="Perwakilan Layanan Pelanggan" />
                </div>
            </div>
            <div>
                <Tabs defaultActiveKey="1" items={items} onChange={() => { }} />
            </div>
        </div>
    )
}