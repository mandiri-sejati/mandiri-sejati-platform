import Image from "next/image";


export default function Footer() {
    return (
        <div className="bg-[#F5F5F5] text-[#656A68] font-normal">
            <div className="container mx-auto">
            <div className="grid grid-cols-12 gap-3 py-5">
                <div className="col-span-6">
                    <div className="">
                        <Image src={'/images/logo-mandiri.svg'} alt="Logo" height={48} width={120} />
                        <p>Cara mudah mencari peluang karir setelah pensiun</p>
                    </div>
                </div>
                <div className="col-span-2">
                    <h3 className="text-[#1677FF] text-base">Untuk Pencari Kerja</h3>
                    <ul className="text-sm text-[#656A68]  pt-6">
                        <li className="py-2">Daftar</li>
                        <li className="py-2">Karir</li>
                    </ul>
                </div>
                <div className="col-span-2">
                    <h3 className="text-[#1677FF] text-base">Untuk Pencari Kerja</h3>
                    <ul className="text-sm text-[#656A68] pt-6">
                        <li className="py-2">Mulai Merekrut</li>
                        <li className="py-2">Buat Lowongan</li>
                    </ul>
                </div>
                <div className="col-span-2">
                    <h3 className="text-[#1677FF] text-base">Legal</h3>
                    <ul className="text-sm text-[#656A68] pt-6">
                        <li className="py-2">Kebijakan Privasi</li>
                        <li className="py-2">Ketentuan Penggunaan</li>
                    </ul>
                </div>
            </div>
            <div className="border-t border-[#E0E0E0] py-3 text-center">
                <p className="text-sm text-[#BFBFBF]">©2025 Mandiri. All rights reserved.</p>
            </div>
            </div>
        </div>
    )
}