// import Titles from "@/components/typography/title";
import { LayoutOutlined, SearchOutlined, UnorderedListOutlined } from "@ant-design/icons";
import { Button } from "antd";
import Input from "antd/es/input/Input";
import JobCard from "./job-card";

export default function JobList({ type }: { type: 'published' | 'draft' }) {
    return (
        <div>
            <section>
                <div className="flex justify-between">
                    <div className="flex gap-1">
                        <Input placeholder="Cari Iklan" prefix={<SearchOutlined />} />
                        {type === 'published' && (
                            <>
                                <Button className="!h-full" color="primary" variant="outlined">Semua</Button>
                                <Button className="!h-full">Iklan Aktif</Button>
                                <Button className="!h-full">Iklan Non-aktif</Button>
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
                <JobCard type={type} />
            </section>
        </div>
    )
}