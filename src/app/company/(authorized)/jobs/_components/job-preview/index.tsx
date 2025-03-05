import Titles from "@/components/typography/title";
import { Button, Divider, Tag, Card } from "antd";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface JobPreviewProps {
    editable?: boolean;
    showApplyButton?: boolean;
    hideTitle?: boolean
}
export default function JobPreview({ editable, showApplyButton, hideTitle }: JobPreviewProps) {
    console.log(editable, showApplyButton) // TODO: some button show
    const router = useRouter()
    return (
        <>
            <section>
                {!hideTitle && (
                    <Titles text="Perwakilan Layanan Pelanggan" />
                )}
                <div className="flex justify-between items-center">
                    <div>
                        <Image src={'/images/ug-mandiri.png'} alt="Logo" height={48} width={120} />
                    </div>
                    <div>
                        {editable && (
                            <Link href={`/company/jobs/update?id=${1}`}>
                                <Button>Ubah Iklan</Button>
                            </Link>
                        )}
                    </div>

                </div>


                <div className="grid grid-cols-12 gap-3">
                    <div className="col-span-6">
                        <h5 className="text-base text-[#8C8C8C] mt-2">NAMA PERUSAHAAN</h5>
                        <p className="text-[#1F1F1F] text-2xl mt-2">Bank Mandiri Taspen</p>
                    </div>
                    <div className="col-span-6">
                        <h5 className="text-base text-[#8C8C8C] mt-2">LOKASI KERJA</h5>
                        <p className="text-[#1F1F1F] text-2xl mt-2">Kerja di Rumah</p>
                    </div>
                    <div className="col-span-6">
                        <h5 className="text-base text-[#8C8C8C] mt-2">TIPE KERJA</h5>
                        <p className="text-[#1F1F1F] text-2xl mt-2">Penuh Waktu</p>
                    </div>
                    <div className="col-span-6">
                        <h5 className="text-base text-[#8C8C8C] mt-2">GAJI YANG DITAWARKAN</h5>
                        <p className="text-[#1F1F1F] text-2xl mt-2">Rp. 10.000.000</p>
                    </div>
                </div>
                <div className="mt-8">
                    <p className="text-base text-[#8C8C8C]">Tayang 4 hari yang lalu • Diperbaharui 19 menit yang lalu</p>
                    {/* {showApplyButton && (
                        <div>
                            <Button className="!p-6 mt-4 !text-xl mr-3" type="primary">Lamar Sekarang</Button>
                            <Button className="!p-6 mt-4 !text-xl">Simpan</Button>
                        </div>
                    )} */}

                </div>
            </section>
            <Divider />
            <section className="">
                <div>
                    <Titles level={4} text="Skill yang dibutuhkan" />
                    <div>
                        <Tag>Kerja Tim</Tag>
                        <Tag>Komunikasi</Tag>
                        <Tag>Layanan Pelanggan</Tag>
                        <Tag>Perbankan</Tag>
                        <Tag>Penyelesaian Masalah</Tag>
                    </div>
                </div>
                <div className="mt-6">
                    <Titles level={4} text="Deskripsi Pekerjaan" />
                    <div className="ml-4">
                        <ol className="list-disc">
                            <li>Menangani pertanyaan dan keluhan pelanggan melalui telepon, email, dan media sosial</li>
                            <li>Memberikan informasi tentang produk dan layanan Bank Mandiri</li>
                            <li>Membantu pelanggan dalam proses pembukaan rekening dan transaksi perbankan</li>
                            <li>Menyusun laporan harian mengenai interaksi dengan pelanggan</li>
                            <li>Bekerja sama dengan tim untuk meningkatkan kepuasan pelanggan</li>
                        </ol>
                    </div>
                </div>
                <div className="mt-6">
                    <Titles level={4} text="Kualifikasi Umum" />
                    <div className="ml-4">
                        <ol className="list-disc">
                            <li>Usia minimal 40 tahun</li>
                            <li>Pengalaman kerja di bidang layanan pelanggan minimal 3 tahun</li>
                            <li>Memiliki latar belakang di industri perbankan (diutamakan)</li>
                            <li>Pendidikan minimal D3/S1 di bidang terkait</li>
                            <li>Kemampuan komunikasi yang baik, baik lisan maupun tulisan</li>

                        </ol>
                    </div>
                </div>

                <div className="mt-6">
                    <Titles level={4} text="Sekilas Tentang Perusahaan" />
                    <div className="mt-5">
                        <Card>
                            <Image src={'/images/ug-mandiri.png'} alt="Logo" height={48} width={120} />
                            <Titles level={4} text="PT Usaha Gedung Mandiri" />
                            <div className="mt-6 flex justify-between">
                                <div className="flex flex-col gap-1 w-2/4">
                                    <div className="text-neutral-400">BIDANG</div>
                                    <div className="text-lg">Machinery & Automation</div>
                                </div>

                                <div className="flex flex-col gap-1 w-2/4">
                                    <div className="text-neutral-400">JUMLAH KARYAWAN</div>
                                    <div className="text-lg">51-100</div>
                                </div>

                            </div>
                            <div className="mt-10">
                                <p>
                                    PT Usaha Gedung Mandiri (dahulu PT Usaha Gedung Bank Dagang Negara) didirikan pada tanggal 29 Oktober 1971 dengan bidang usaha Property khusus nya Office Rental. Pada awalnya merupakan perusahaan Penanaman Modal Asing (PMA) Joint Venture dengan AMCO ASIA yang didirikan pada tahun 1964. Sejak tahun 1971 berubah menjadi perusahaan Penanaman Modal Dalam Negeri karena seluruh sahamnya dimiliki PT Bank Dagang Negara (Persero). PT Usaha Gedung Bank Dagang Negara adalah pelopor dalam bisnis property khususnya office rental. Gedung pertama yang dimiliki dikenal dengan nama Gedung Bank Dagang Negara. Setelah berubah nama menjadi PT Usaha Gedung Mandiri pada tahun 2012, bisnis perusahaan dikembangkan pada bidang Bank jasa penunjang bisnis, dengan menjalankan aktivitas “non core business” PT Bank Mandiri (Persero) Tbk menjadi “core business” PT Usaha Gedung Mandiri.
                                </p>
                            </div>

                            <div className="mt-8">
                                <div className="flex flex-col gap-1 w-2/4">

                                    <div className="text-neutral-500 mb-2">Tunjangan dan Keuntungan</div>
                                    <div className="flex">
                                        <Tag>Asuransi Kesehatan</Tag>
                                        <Tag>Kacamata</Tag>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </section>
        </>
    )
}