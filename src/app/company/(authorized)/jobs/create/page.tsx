"use client"

import { ArrowLeftOutlined, BoldOutlined, CaretDownFilled, ItalicOutlined, OrderedListOutlined, UnderlineOutlined, UnorderedListOutlined } from "@ant-design/icons";
import { Button, Divider, Dropdown, Modal, Radio, Space } from "antd";
import Text from "antd/es/typography/Text";
import Link from "next/link";
import { useState } from "react";
import JobPreview from "../_components/job-preview";
import classNames from "classnames";
import Title from "antd/es/typography/Title";
import TextArea from "antd/es/input/TextArea";
import Skill from "@/app/company/(auth)/sign-up/_components/skill";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Page() {
    const router = useRouter()
    const [showModal, setShowModal] = useState(false)
    const [values, setValues] = useState({
        companyName: '',
        workType: 'full-time',
        location: '',
        salaryType: 'fixed',
    })
    return (
        <>
            <div className="container mx-auto pt-1">
                <div className="flex gap-10 pb-5">
                    <div className="flex w-[800px] flex-col gap-5">
                        <input type="text" placeholder="Judul Pekerjaan" className="focus:outline-none font-bold text-4xl" />
                        <div className="grid grid-cols-2 gap-4">
                            <div className="flex flex-col gap-1">
                                <div className="text-md font-thin">Nama Perusahaan</div>
                                <div className="flex items-center gap-1">
                                    <div className={classNames('text-lg')}>Bank Mandiri Taspen</div>
                                </div>
                            </div>
                            <div className="flex flex-col gap-1">
                                <div className="text-md font-thin">Lokasi Kerja</div>
                                <div className="flex items-center gap-1">
                                    <div className={classNames(!values.location && 'text-[#BFBFBF]', 'text-lg')}>{values.location ? values.location : 'Pilih Lokasi Kerja'}</div>
                                    <Dropdown menu={{
                                        items: [{
                                            label: 'Jakarta',
                                            key: 'Jakarta',
                                            onClick: () => setValues((value) => ({ ...value, location: 'Jakarta' }))
                                        }, {
                                            label: 'Surabaya',
                                            key: 'Surabaya',
                                            onClick: () => setValues((value) => ({ ...value, location: 'Surabaya' }))
                                        }, {
                                            label: 'Bandung',
                                            key: 'Bandung',
                                            onClick: () => setValues((value) => ({ ...value, location: 'Bandung' }))
                                        }]
                                    }} trigger={['click']}>
                                        <a onClick={(e) => e.preventDefault()}>
                                            <Space>
                                                <div className="hover: cursor-pointer">
                                                    <CaretDownFilled />
                                                </div>
                                            </Space>
                                        </a>
                                    </Dropdown>
                                </div>
                            </div>
                            <div className="flex flex-col gap-1">
                                <div className="text-md font-thin">Tipe Kerja</div>
                                <div className="flex items-center gap-1">
                                    <Radio.Group value={values.workType} onChange={(e) => setValues((values) => ({ ...values, workType: e.target.value }))}>
                                        <Radio value={'full-time'}>Penuh Waktu</Radio>
                                        <Radio value={'part-time'}>Paruh Waktu</Radio>
                                        <Radio value={'contract'}>Kontrak</Radio>
                                    </Radio.Group>
                                </div>
                            </div>
                           
                            <div className="flex flex-col gap-1">
                                <div className="text-sm font">Gaji Yang Ditawarkan</div>
                                <div className="flex flex-col gap-2">
                                    <div className="flex items-center gap-1">
                                        <Radio.Group value={values.salaryType} onChange={(e) => setValues((values) => ({ ...values, salaryType: e.target.value }))}>
                                            <Radio value={'fixed'}>Fixed</Radio>
                                            <Radio value={'range'}>Jangkauan</Radio>
                                            <Radio value={'hide'}>Tidak ditampilkan</Radio>
                                        </Radio.Group>
                                    </div>
                                    {values.salaryType === 'fixed' && (
                                        <div className="flex gap-1">
                                            <Text>Rp</Text>
                                            <input type="text" placeholder="Masukan Gaji" className="focus:outline-none" />
                                        </div>
                                    )}
                                    {values.salaryType === 'range' && (
                                        <div className="flex gap-2 justify-start">
                                            <div className="flex gap-1">
                                                <Text>Rp</Text>
                                                <input type="text" placeholder="Gaji Minimum" className="focus:outline-none w-[100px]" />
                                            </div>
                                            <div>
                                                <Text>-</Text>
                                            </div>
                                            <div className="flex gap-1">
                                                <Text>Rp</Text>
                                                <input type="text" placeholder="Gaji Maks" className="focus:outline-none" />
                                            </div>

                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Divider />
                <div className="w-[600px] flex flex-col gap-10 pb-10">
                    <div>
                        <Title level={4}>
                            Skill yang dibutuhkan
                        </Title>
                        <Skill />
                    </div>
                    <div>
                        <Title level={4}>
                            Deskripsi Pekerjaan
                        </Title>
                        <TextArea rows={5} />
                        <div className="flex gap-8 mt-4">
                            <button>
                                <BoldOutlined style={{ fontSize: '14px' }} />
                            </button>
                            <button>
                                <ItalicOutlined style={{ fontSize: '14px' }} />
                            </button>
                            <button>
                                <UnderlineOutlined style={{ fontSize: '14px' }} />
                            </button>
                            <button>
                                <OrderedListOutlined style={{ fontSize: '14px' }} />
                            </button>
                            <button>
                                <UnorderedListOutlined style={{ fontSize: '14px' }} />
                            </button>
                        </div>
                    </div>
                    <div>
                        <Title level={4}>
                            Kualifikasi Umum
                        </Title>
                        <TextArea rows={5} />
                        <div className="flex gap-8 mt-4">
                            <button>
                                <BoldOutlined style={{ fontSize: '14px' }} />
                            </button>
                            <button>
                                <ItalicOutlined style={{ fontSize: '14px' }} />
                            </button>
                            <button>
                                <UnderlineOutlined style={{ fontSize: '14px' }} />
                            </button>
                            <button>
                                <OrderedListOutlined style={{ fontSize: '14px' }} />
                            </button>
                            <button>
                                <UnorderedListOutlined style={{ fontSize: '14px' }} />
                            </button>
                        </div>
                    </div>
                    <div>
                        <Title level={4}>
                            Tunjangan dan Keuntungan (Opsional)
                        </Title>
                        <Skill />
                    </div>
                </div>
            </div>
            <div className="bg-white border-t border-[#E0E0E0] py-2.5 px-2.5">
                <div className="container mx-auto">
                    <div className="flex gap-2">
                        <Button variant="outlined" onClick={() => router.back()}>Batalkan</Button>
                        <div>
                            <Dropdown.Button onClick={ () => setShowModal(true)} menu={{
                                items: [
                                    {
                                        key: '1',
                                        label: <div className="flex gap-1">
                                            <Image src={'/images/preview-sidebar.svg'} width={18} height={18} alt="Preview" />
                                            Tampilan Samping
                                        </div>,
                                        onClick: () => setShowModal(true)
                                    },
                                    {
                                        key: '2',
                                        label: <Link href={'/company/jobs/detail-preview?id=123'} target="_blank"><div className="flex gap-1">
                                            <Image src={'/images/preview-full.svg'} width={18} height={18} alt="Preview" />
                                            Tampilan Full
                                        </div></Link>,
                                    },

                                ]
                            }}>Preview</Dropdown.Button>
                        </div>
                        <Button type="primary" onClick={() => {router.push('/company/jobs')}}>Simpan Lowongan</Button>
                    </div>
                </div>
            </div>


            <Modal
                title=""
                style={{ right: 0, top: 0, position: 'absolute' }}
                open={showModal}
                onOk={() => setShowModal(false)}
                onCancel={() => setShowModal(false)}
                width={1000}
                footer={null}
            >
                <div onClick={() => setShowModal(false)} className="text-blue-600 cursor-pointer my-3"><ArrowLeftOutlined /> Kembali ke pembuatan iklan</div>

                <div className="container mx-auto">
                    <JobPreview showApplyButton />
                </div>
            </Modal>
        </>
    )
}