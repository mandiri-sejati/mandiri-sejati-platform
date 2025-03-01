"use client"

import Titles from "@/components/typography/title"
import { EyeOutlined, UserOutlined } from "@ant-design/icons"
import { Button } from "antd"
import Image from "next/image"
import Link from "next/link"

const jobListings = [
    {
        id: 1,
        title: "Sales Eksekutif",
        createdAt: "Dibuat 10 menit yang lalu",
        views: 10,
        applicants: 6,
    },
    {
        id: 2,
        title: "Software Engineer",
        createdAt: "Dibuat 1 jam yang lalu",
        views: 25,
        applicants: 12,
    },
    {
        id: 3,
        title: "Marketing Specialist",
        createdAt: "Dibuat 2 hari yang lalu",
        views: 40,
        applicants: 20,
    },
];

export default function Page() {
    return <>
        <div className="container mx-auto">
            <section>
                <div>
                    <Titles text="Beranda" />
                </div>
                <div className="grid grid-cols-12 gap-3 mt-4">
                    <div className="col-span-8 border rounded-md flex flex-col justify-between p-3">
                        <h2 className="font-semibold text-2xl mb-3">Rangkuman Kandidat</h2>
                        <div className="flex items-end">
                            <Image src={'/images/chart.svg'} width={1000} height={364} className="w-full" alt="Logo" />
                        </div>
                    </div>
                    <div className="col-span-4 gap-3 flex flex-col">
                        <div className="border rounded-md flex-1 flex flex-col justify-center items-center p-3">
                            <h3 className="text-base text-[#737373] font-normal">Kotak Masuk</h3>
                            <h3 className="text-5xl">10</h3>
                        </div>
                        <div className="border rounded-md flex-1 flex flex-col justify-center items-center p-3">
                            <h3 className="text-base text-[#737373] font-normal">Ditolak</h3>
                            <h3 className="text-5xl">8</h3>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="grid grid-cols-12 gap-3 mt-4">
                    <div className="col-span-6 ">
                        <div className="bg-[#E6F4FF] rounded-md flex flex-col justify-between p-4">
                            <div>
                                <h2 className="font-semibold text-2xl">Temukan Karyawan Baru!</h2>
                                <div className="font-normal text-lg text-[#737373] mt-3">
                                    Anda telah datang ke tempat yang tepat.<br />
                                    Mulailah dengan membuat iklan lowongan kerja pertama Anda.
                                </div>

                            </div>
                            <div className="mt-6">
                                <Link href={"/company/jobs/create"}>
                                    <Button type="primary" className="!p-6 text-lg font-normal"> Buat Iklan Lowongan </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-6">
                        <div className="flex justify-between items-center mb-3">
                            <div><h2 className="font-semibold text-2xl">Iklan Lowongan</h2></div>
                            <div>
                                <Link className="text-blue-400" href={"/company/jobs"}>
                                    Lihat Selengkapnya
                                </Link>
                            </div>
                        </div>
                        <div className="flex flex-col gap-3">
                            {jobListings.map((job) => (
                                <div key={job.id} className="grid grid-cols-12 gap-3 border rounded-md p-3">
                                    <div className="col-span-6 flex justify-between flex-col">
                                        <div className="text-lg font-semibold">{job.title}</div>
                                        <div className="text-base text-[#8C8C8C]">{job.createdAt}</div>
                                    </div>
                                    <div className="col-span-6 text-sm text-[#1F1F1F] text-right flex justify-between flex-col">
                                        <div>
                                            <EyeOutlined /> Total dilihat: {job.views}
                                        </div>
                                        <div>
                                            <UserOutlined /> Total dilamar: {job.applicants}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>


            </section>
        </div>
    </>
}