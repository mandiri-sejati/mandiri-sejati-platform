"use client"

import NextLink from "next/link";
import Image from "next/image";
import Dropdown from "antd/es/dropdown";
import { Avatar, MenuProps, Space } from "antd";
import { DownOutlined, UserOutlined } from "@ant-design/icons";
import { usePathname } from "next/navigation";

const items: MenuProps['items'] = [
    {
        label: (
            <NextLink href="/">
                Logout
            </NextLink>
        ),
        key: '0',
    },
];

export default function Navbar() {
    const pathname = usePathname();
    let dashboardClassname = ''
    let jobsClassname = ''
    const tabSelectedClassname = 'bg-blue-50 text-blue-500'
    if(pathname.includes('dashboard')) {
        dashboardClassname = tabSelectedClassname
    }else{
        jobsClassname = tabSelectedClassname
    }

    return (
        <div className="bg-white border-b border-[#E0E0E0] py-2.5 px-2.5 mb-[40px]">
            <div className="container mx-auto flex justify-between items-center">
                <div className="md:inline-block hidden">
                    <Image src={'/images/logo-mandiri.svg'} alt="Logo" height={48} width={120} />
                </div>
                <div className="flex-1 text-center">
                    <NextLink className={`mr-3  rounded-md p-2 ${dashboardClassname}`} href="/company/dashboard"> Beranda </NextLink>
                    <NextLink className={`mr-3  rounded-md p-2 ${jobsClassname}`} href="/company/jobs"> Iklan Pekerjaan </NextLink>
                </div>
                <div>
                    <span className="text-blue-500 mr-3 md:inline-block hidden">
                        John Doe
                    </span>
                    <Dropdown menu={{ items }} trigger={['click']} className="cursor-pointer">
                        <a onClick={(e) => e.preventDefault()}>
                            <Space>
                                <Avatar size={44} icon={<UserOutlined />} />
                                <span className="text-gray-500">
                                    <DownOutlined />
                                </span>
                            </Space>
                        </a>
                    </Dropdown>
                </div>

            </div>

        </div>
    )
}