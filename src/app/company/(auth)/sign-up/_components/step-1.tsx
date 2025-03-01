'use client'
import Title from "antd/es/typography/Title";
import Text from "antd/es/typography/Text";
import Image from "next/image";
import { Button, Card, Input, Select } from "antd";
import { useState } from "react";

function SignUpFormStep1({
    nextStep
}: {
    nextStep: () => void;
}) {
    const [values, setValues] = useState({
        name: '',
        lastName: '',
        businessName: '',
        country: undefined,
        phone: ''
    })
    const disable = Object.values(values).some(value => !value)
    return (
        <div className="w-screen h-screen">
            <div className="bg-white border-b border-[#E0E0E0] py-2.5 px-2.5">
                <div className="container mx-auto">
                    <Image src={'/images/logo-mandiri.svg'} alt="Logo" height={48} width={120} />
                </div>
            </div>
            <div className="flex justify-center py-12">
                <div className="w-[588px]">
                    <Card>
                        <div className="flex flex-col gap-6">
                            <Title level={2} style={{ margin: 0 }}>Buat Akun Perusahaan</Title>
                            <Text>Masukan beberapa detail tentang bisnis Anda untuk memverifikasi Akun. Kami tidak akan membagikan detail informasi Anda dengan siapa pun.</Text>
                            <div className="flex gap-3">
                                <Input placeholder="Nama Depan" value={values.name} onChange={(e) => setValues((values) => ({ ...values, name: e.target.value }))} />
                                <Input placeholder="Nama Belakang" value={values.lastName} onChange={(e) => setValues((values) => ({ ...values, lastName: e.target.value }))} />
                            </div>
                            <div className="flex gap-3">
                                <Input placeholder="Nama Bisnis" value={values.businessName} onChange={(e) => setValues((values) => ({ ...values, businessName: e.target.value }))} />
                            </div>
                            <div className="flex gap-3">
                                <Select
                                    className="w-full"
                                    placeholder="Negara"
                                    options={[
                                        { value: 'Indonesia', label: 'Indonesia' },
                                        { value: 'Malaysia', label: 'Malaysia' },
                                        { value: 'Singapura', label: 'Singapura' },
                                        { value: 'Thailand', label: 'Thailand' },
                                    ]}
                                    value={values.country} onChange={(e) => setValues((values) => ({ ...values, country: e }))}
                                />
                            </div>
                            <div className="flex gap-3">
                                <Input placeholder="Nomor Telepon" value={values.phone} onChange={(e) => setValues((values) => ({ ...values, phone: e.target.value }))} />
                            </div>
                            <div>
                                <Button type="primary" onClick={nextStep} disabled={disable} >
                                    Buat Akun
                                </Button>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default SignUpFormStep1;