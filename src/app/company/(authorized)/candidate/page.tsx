"use client"

import Titles from "@/components/typography/title";
import { Tabs, TabsProps } from "antd";
// import JobPreview from "../../";
import Candidates from "../candidate/_components/candidates";
import { useSearchParams } from "next/navigation";

const items: TabsProps['items'] = [
    {
        key: '1',
        label: 'Detail',
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
            <Candidates />
        </div>
    )
}