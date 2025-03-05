// import Titles from "@/components/typography/title";
import { 
    SearchOutlined
} from "@ant-design/icons";
import { Button } from "antd";
import Input from "antd/es/input/Input";
import JobCard from "./job-card";
import { useState } from "react";

export default function JobList({ type }: { type: 'published' | 'draft' }) {
    const [selectedTabs, setSelectedTabs] = useState("Semua")
    const [search, setSearch] = useState("")
    return (
        <div>
            <section>
                <div className="flex justify-between">
                    <div className="flex gap-1">
                        <Input placeholder="Cari Iklan" prefix={<SearchOutlined />} onChange={(e) => setSearch(e.target.value)} />
                        {type === 'published' && (
                            <>
                                <Button className="!h-full" color="primary" variant="outlined" onClick={() => setSelectedTabs("Semua")}>Semua</Button>
                                <Button className="!h-full" onClick={() => setSelectedTabs("Aktif")}>Iklan Aktif</Button>
                                <Button className="!h-full" onClick={() => setSelectedTabs("Nonaktif")}>Iklan Non-aktif</Button>
                            </>
                        )}

                    </div>
                    {/* <div className="flex gap-2">
                        <div className="text-blue-500 bg-blue-50 rounded-md border border-blue-500">
                            <LayoutOutlined className="p-3" />
                        </div>
                        <div className="bg-gray-50 rounded-md border border-gray-500">
                            <UnorderedListOutlined className="p-3" />
                        </div>
                    </div> */}
                </div>
            </section>
            <section className="mt-5">
                <JobCard type={type} selectedTabs={selectedTabs} search={search}/>
            </section>
        </div>
    )
}
