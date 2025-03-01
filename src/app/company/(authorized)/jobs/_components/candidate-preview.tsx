import { DownloadOutlined } from "@ant-design/icons";
import { Avatar, Divider } from "antd";
import Link from "antd/es/typography/Link";

export default function CandidatePreview() {
    return (
        <div className="min-h-screen">
            <div className="py-16 px-10">
                <Avatar size={96} style={{
                    color: '#1677FF', backgroundColor: '#BAE0FF',
                }} src={'/images/example-candidate-large.png'} />
                <div className="text-2xl font-bold mt-4">
                    Noris Wahyu Rahmanda
                </div>
                <div className="text-lg font-semibold mt-2">
                    Credit Operation
                </div>

                <div className="flex justify-between gap-4 mt-8">
                    <div className="flex flex-col gap-6">
                        <div className="flex flex-col gap-1">
                            <div className="text-thin">
                                Nomor HP
                            </div>
                            <div className="font-semibold text-lg">
                                +628558808274
                            </div>
                        </div>
                        <div className="flex flex-col gap-1">
                            <div className="text-thin">
                                Lokasi
                            </div>
                            <div className="font-semibold text-lg">
                                Margorejo, Metro Selatan
                            </div>
                        </div>
                    </div>


                    <div className="flex flex-col gap-6">
                        <div className="flex flex-col gap-1">
                            <div className="text-thin">
                                Email
                            </div>
                            <div className="font-semibold text-lg">
                                +628558808274
                            </div>
                        </div>
                        <div className="flex flex-col gap-1">
                            <div className="text-thin">
                                Tempat, Tanggal Lahir
                            </div>
                            <div className="font-semibold text-lg">
                                Metro, 10 Novermber 1988
                            </div>
                        </div>
                    </div>

                </div>

                <Divider />

                <div className="mb-10">
                    <div className="text-2xl font-semibold mt-2 mb-4">
                        Tentang Saya
                    </div>
                    <p>
                        Saya seorang yang berpengalaman, memiliki minat besar dalam bekerja. Saya lulusan S1 Teknik Mesin Sekolah Tinggi Teknologi Adisutjipto. Memiliki pribadi yang aktif dan bertanggung jawab terhadap tugas & pekerjaan. Suka kerapihan dan bekerja dalam ketelitian yang tinggi. Memiliki kemampuan berfikir analitis dan strategis, mampu berkomunikasi dengan baik, serta mampu bekerja baik dalam kelompok maupun secara individu.
                    </p>
                </div>

                <div className="mb-10">
                    <div className="text-2xl font-semibold mt-2 mb-4">
                        Riwayat Karir
                    </div>
                    <div className="flex flex-col gap-4">
                        <div className="py-5 px-6 border rounded-lg">
                            <div className="text-lg font-semibold mb-1">
                                Credit Operation
                            </div>
                            <div className="font-semibold mb-4">
                                PT Bank Mandiri (Persero) Tbk
                            </div>

                            <div className="">
                                Januari 2014 - Januari 2024
                            </div>
                        </div>

                        <div className="py-5 px-6 border rounded-lg">
                            <div className="text-lg font-semibold mb-1">
                                Teknik Mesin
                            </div>
                            <div className="font-semibold mb-4">
                                PT Indonesia Power
                            </div>

                            <div className="">
                                Januari 2010 - Juli 2010
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mb-10">
                    <div className="text-2xl font-semibold mt-2 mb-4">
                        Riwayat Pendidikan
                    </div>
                    <div className="flex flex-col gap-4">
                        <div className="py-5 px-6 border rounded-lg">
                            <div className="text-lg font-semibold mb-1">
                                Sarjana Sistem Informasi
                            </div>
                            <div className="font-semibold mb-4">
                                Universitas Indonesia
                            </div>

                            <div className="">
                                Januari 2018 - Januari 2025
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mb-10">
                    <div className="text-2xl font-semibold mt-2 mb-4">
                        CV
                    </div>
                    <div className="flex flex-col gap-4">
                        <div className="py-5 px-6 border rounded-lg">
                            <div className="flex justify-between">
                                <div className="text-lg font-semibold mb-1 ">
                                    Noris_CV2024.pdf
                                </div>
                                <Link className="text-2xl">
                                    <DownloadOutlined size={24} />
                                </Link>
                            </div>
                            <div className="">
                                Ditambahkan pada 19 Juni 2024, 13:12
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mb-10">
                    <div className="text-2xl font-semibold mt-2 mb-4">
                        Surat Pensiun
                    </div>
                    <div className="flex flex-col gap-4">
                        <div className="py-5 px-6 border rounded-lg">
                            <div className="flex justify-between">
                                <div className="text-lg font-semibold mb-1 ">
                                    Noris_Surat-Pensiun.pdf
                                </div>
                                <Link className="text-2xl">
                                    <DownloadOutlined size={24} />
                                </Link>
                            </div>
                            <div className="">
                                Ditambahkan pada 19 Juni 2024, 13:12
                            </div>
                        </div>
                    </div>
                </div>


                <div className="mb-10">
                    <div className="text-2xl font-semibold mt-2 mb-4">
                        Sertifikasi
                    </div>
                    <div className="flex flex-col gap-4">
                        <div className="py-5 px-6 border rounded-lg">
                            <div className="flex justify-between">
                                <div className="text-lg font-semibold mb-1 ">
                                    Pelatihan CATIA
                                </div>
                                <Link className="text-2xl">
                                    <DownloadOutlined size={24} />
                                </Link>
                            </div>
                            <div className="font-semibold mb-4">
                                Coursera
                            </div>
                            <div className="">
                                Januari 2018
                            </div>
                        </div>

                        <div className="py-5 px-6 border rounded-lg">
                            <div className="flex justify-between">
                                <div className="text-lg font-semibold mb-1 ">
                                    Seminar Kedirgantaraan
                                </div>
                                <Link className="text-2xl">
                                    <DownloadOutlined size={24} />
                                </Link>
                            </div>
                            <div className="font-semibold mb-4">
                                Coursera
                            </div>
                            <div className="">
                                Januari 2018
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}