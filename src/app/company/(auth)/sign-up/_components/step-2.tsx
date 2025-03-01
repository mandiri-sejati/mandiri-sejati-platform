'use client'
import { Avatar, Button, Divider, Dropdown, Space } from "antd";
import { BankOutlined, BoldOutlined, CaretDownFilled, EditOutlined, ItalicOutlined, OrderedListOutlined, UnderlineOutlined, UnorderedListOutlined } from '@ant-design/icons';
import Image from "next/image";
import { useRef, useState } from "react";
import classNames from "classnames";
import Title from "antd/es/typography/Title";
import TextArea from "antd/es/input/TextArea";
import Skill from "./skill";
import { useRouter } from "next/navigation";

function SignUpFormStep2({
    prevStep,
}: {
    prevStep: () => void
}) {
    const router = useRouter()
    const [values, setValues] = useState({
        location: '',
        totalEmployee: '',
        field: '',
        website: '',
    })
    const [file, setFile] = useState<File | undefined>(undefined)

    const ref = useRef<HTMLInputElement>(null);
    const handpePopupUpload = () => {
        if (ref.current) {
            ref.current?.click()
        }
    }
    const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        setFile(files ? files[0] : undefined)
    }
    const objectUrl = file && URL.createObjectURL(file)
    const register = () => {
        router.push('/company/dashboard')
    }

    return (
        <div className="w-screen h-screen">
            <div className="bg-white border-b border-[#E0E0E0] py-2.5 px-2.5">
                <div className="container mx-auto">
                    <Image src={'/images/logo-mandiri.svg'} alt="Logo" height={48} width={120} />
                </div>
            </div>
            <div className="container mx-auto pt-8">
                <div className="flex gap-10 pb-14">
                    <div className="relative self-start">
                        <Avatar size={144} icon={<BankOutlined />} style={{
                            color: '#1677FF', backgroundColor: '#BAE0FF',
                        }} src={objectUrl || undefined} />
                        <div className="absolute bottom-0 right-0">
                            <Button icon={<EditOutlined />} onClick={() => handpePopupUpload()}></Button>
                            <input type="file" className="hidden" onChange={handleUpload} ref={ref} multiple={false} accept="image/*" />
                        </div>
                    </div>
                    <div className="flex w-[600px] flex-col gap-5">
                        <input type="text" placeholder="Nama Perusahaan" className="focus:outline-none font-bold text-2xl" />
                        <div className="grid grid-cols-2 gap-4">
                            <div className="flex flex-col gap-1">
                                <div className="text-sm font-thin">Lokasi</div>
                                <div className="flex items-center gap-1">
                                    <div className={classNames(!values.location && 'text-[#BFBFBF]', 'text-lg')}>{values.location ? values.location : 'Pilih Lokasi'}</div>
                                    <Dropdown menu={{
                                        items: [{
                                            label: 'Jakarta',
                                            key: 'Jakarta',
                                            onClick: () => setValues((value) => ({ ...value, location: 'Jakarta' }))
                                        }, {
                                            label: 'Bandung',
                                            key: 'Bandung',
                                            onClick: () => setValues((value) => ({ ...value, location: 'Bandung' }))
                                        }, {
                                            label: 'Tangerang',
                                            key: 'Tangerang',
                                            onClick: () => setValues((value) => ({ ...value, location: 'Tangerang' }))
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
                                <div className="text-sm font-thin">Jumlah Karyawan</div>
                                <div className="flex items-center gap-1">
                                    <div className={classNames(!values.totalEmployee && 'text-[#BFBFBF]', 'text-lg')}>{values.totalEmployee ? values.totalEmployee : 'Pilih Jumlah Karyawan'}</div>
                                    <Dropdown menu={{
                                        items: [{
                                            label: '1-50',
                                            key: '1-50',
                                            onClick: () => setValues((value) => ({ ...value, totalEmployee: '1-50' }))
                                        }, {
                                            label: '50-100',
                                            key: '50-100',
                                            onClick: () => setValues((value) => ({ ...value, totalEmployee: '50-100' }))
                                        }, {
                                            label: '100-200',
                                            key: '100-200',
                                            onClick: () => setValues((value) => ({ ...value, totalEmployee: '100-200' }))
                                        }, {
                                            label: '200-500',
                                            key: '200-500',
                                            onClick: () => setValues((value) => ({ ...value, totalEmployee: '200-500' }))
                                        }, {
                                            label: '500-1000',
                                            key: '500-1000',
                                            onClick: () => setValues((value) => ({ ...value, totalEmployee: '500-1000' }))
                                        }, {
                                            label: '1000+',
                                            key: '1000+',
                                            onClick: () => setValues((value) => ({ ...value, totalEmployee: '1000+' }))
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
                                <div className="text-sm font-thin">Bidang</div>
                                <div className="flex items-center gap-1">
                                    <div className={classNames(!values.field && 'text-[#BFBFBF]', 'text-lg')}>{values.field ? values.field : 'Pilih Bidang'}</div>
                                    <Dropdown menu={{
                                        items: [{
                                            label: 'Teknologi',
                                            key: 'Teknologi',
                                            onClick: () => setValues((value) => ({ ...value, field: 'Teknologi' }))
                                        }, {
                                            label: 'Perbankan',
                                            key: 'Perbankan',
                                            onClick: () => setValues((value) => ({ ...value, field: 'Perbankan' }))
                                        }, {
                                            label: 'Kesehatan',
                                            key: 'Kesehatan',
                                            onClick: () => setValues((value) => ({ ...value, field: 'Kesehatan' }))
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
                                <div className="text-sm font-thin">Website Perusahaan</div>
                                <div className="flex items-center gap-1">
                                    <input className="focus:outline-none text-lg placeholder-[#BFBFBF]" onChange={(e) => setValues((value) => ({ ...value, website: e.target.value }))} value={values.website || ''} placeholder="www.perusahaan.com" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Divider />
                <div className="w-[600px] flex flex-col gap-10 pb-10">
                    <div>
                        <Title level={4}>
                            Tentang Perusahaan
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
                            Kultur Perusahaan (Opsional)
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
                        <Button variant="outlined" onClick={() => prevStep()}>Kembali</Button>
                        <Button type="primary" onClick={() => register()}>Simpan</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUpFormStep2;