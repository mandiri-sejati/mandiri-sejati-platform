'use client'
// import Titles from "@/components/typography/title";
import { ArrowDownOutlined, EditOutlined, SearchOutlined } from "@ant-design/icons";
import { Avatar, Modal, Tag, Dropdown, Space } from "antd";
import Input from "antd/es/input/Input";
import Link from "antd/es/typography/Link";
import NextLink from "next/link";
import { useState } from "react";
import CandidatePreview from "./candidate-preview";


const candidates = [
  {
    id: 1,
    image: '/images/example-candidate.png',
    name: "Noris Wahyu Rahmanda",
    location: "Jakarta Pusat, DKI Jakarta",
    status: "Belum Diproses",
    appliedDate: "Jul 25, 2024",
    appliedHour: "19:06",
    matchingSkill: "6 dari 7",
  },
  {
    id: 2,
    name: "Noris Wahyu Rahmanda",
    location: "Jakarta Pusat, DKI Jakarta",
    status: "Terpilih",
    appliedDate: "Jul 25, 2024",
    appliedHour: "19:06",
    matchingSkill: "6 dari 7",
  },
  {
    id: 3,
    name: "Noris Wahyu Rahmanda",
    location: "Jakarta Pusat, DKI Jakarta",
    status: "Terpilih",
    appliedDate: "Jul 25, 2024",
    appliedHour: "19:06",
    matchingSkill: "6 dari 7",
  },
  {
    id: 4,
    name: "Noris Wahyu Rahmanda",
    location: "Jakarta Pusat, DKI Jakarta",
    status: "Interview",
    appliedDate: "Jul 25, 2024",
    appliedHour: "19:06",
    matchingSkill: "6 dari 7",
  },
  {
    id: 5,
    name: "Noris Wahyu Rahmanda",
    location: "Jakarta Pusat, DKI Jakarta",
    status: "Offering",
    appliedDate: "Jul 25, 2024",
    appliedHour: "19:06",
    matchingSkill: "6 dari 7",
  },
  {
    id: 6,
    name: "Noris Wahyu Rahmanda",
    location: "Jakarta Pusat, DKI Jakarta",
    status: "Terpilih",
    appliedDate: "Jul 25, 2024",
    appliedHour: "19:06",
    matchingSkill: "6 dari 7",
  },
];


export function CandidateCard() {
  const [showModal, setShowModal] = useState(false)
  const getDropdownItems = (status: string) => {
    const nextStatus = []
    switch (status) {
      case "Belum Diproses":
        nextStatus.push(
          {
            label: (
                <NextLink href='#'>
                  Terpilih
                </NextLink>
            ),
            key: '0',
            className:'h-[40px]'
          },
          {
            label: (
                <NextLink href='#'>
                  Tidak cocok
                </NextLink>
            ),
            key: '1',
            className:'h-[40px]'
          },
        )
        break;
      case "Terpilih":
        nextStatus.push(
          {
            label: (
                <NextLink href='#'>
                  Interview
                </NextLink>
            ),
            key: '0',
            className:'h-[40px]'
          },
          {
            label: (
                <NextLink href='#'>
                  Tidak cocok
                </NextLink>
            ),
            key: '1',
            className:'h-[40px]'
          },
        )
        break;

      case "Interview":
        nextStatus.push(
          {
            label: (
                <NextLink href='#'>
                  Offering
                </NextLink>
            ),
            key: '0',
            className:'h-[40px]'
          },
          {
            label: (
                <NextLink href='#'>
                  Tidak cocok
                </NextLink>
            ),
            key: '1',
            className:'h-[40px]'
          },
        )
        break;

      case "Offering":
        nextStatus.push(
          {
            label: (
                <NextLink href='#'>
                  Diterima
                </NextLink>
            ),
            key: '0',
            className:'h-[40px]'
          },
          {
            label: (
                <NextLink href='#'>
                  Tidak cocok
                </NextLink>
            ),
            key: '1',
            className:'h-[40px]'
          },
        )
        break;
      default:
        break;
    }

    return nextStatus
  }

  return (
    <div className="space-y-3">
      <div className="flex justify-between gap-3">
        <div className="pl-[80px] w-[290px] text-[#737373]">
          NAMA & DOMISILI
        </div>
        <div className="w-[130px] text-[#737373]">
          STATUS
        </div>
        <div className="w-[180px] text-[#737373]">
          <div className="flex justify-start gap-2">
            TANGGAL MELAMAR
            <div className="text-blue-500">
              <ArrowDownOutlined />
            </div>
          </div>
        </div>
        <div className="w-[160px] text-[#737373]">
          <div className="flex gap-2">
            KECOCOKAN SKILL

          </div>
        </div>
        <div className="w-[160px] text-[#737373]">
          <div className="flex gap-2">
            UNDUH

          </div>
        </div>
      </div>
      {candidates.map((candidate) => {
        return (
          <div key={candidate.id} className="rounded-md border p-3">
            <div className="flex justify-between gap-3">
              {/* Bagian Kiri */}
              <div className="flex gap-4 items-start w-[290px] hover:cursor-pointer" onClick={() => setShowModal(true)}>
                <div>
                  <Avatar size={50} style={{
                    color: '#1677FF', backgroundColor: '#BAE0FF',
                  }} src={'/images/example-candidate.png'} />
                </div>
                <div>
                  <div className="text-lg font-semibold">{candidate.name}</div>
                  <div className="text-base text-[#8C8C8C]">{candidate.location}</div>
                </div>
              </div>

              <div className="w-[130px]">
                <div className="flex col-2">
                  <Tag>{candidate.status}</Tag>
                  <div className="text-blue-500">
                    {
                      candidate.status !== 'Diterima' &&
                      <Dropdown menu={{ items: getDropdownItems(candidate.status) }} trigger={["click"]} className="cursor-pointer">
                        <a onClick={(e) => e.preventDefault()}>
                          <Space>
                            <div className="text-blue-500 rounded-md flex items-start">
                              <EditOutlined />
                            </div>
                          </Space>
                        </a>
                      </Dropdown>
                    }
                  </div>
                </div>
              </div>


              <div className="w-[160px]">
                <div className="flex flex-col">
                  <div>{candidate.appliedDate}</div>
                  <div>{candidate.appliedHour}</div>
                </div>
              </div>

              <div className="w-[160px]">
                <div className="flex flex-col">
                  <div>{candidate.matchingSkill}</div>
                  <Link onClick={() => setShowModal(true)}>Lihat Semua Skill</Link>
                </div>
              </div>


              <div className="w-[160px]">
                <div className="flex flex-col">
                  <Link>Resume</Link>
                  <Link>Surat Lamaran</Link>
                </div>
              </div>


            </div>
          </div>
        );
      })}

      <Modal
        title=""
        style={{ right: 0, top: 0, position: 'absolute' }}
        open={showModal}
        onOk={() => setShowModal(false)}
        onCancel={() => setShowModal(false)}
        width={800}
        footer={null}
      >
        <div className="container mx-auto">
          <CandidatePreview />
        </div>
      </Modal>
    </div>
  );

}


export default function Candidates() {
  return (
    <div>
      <section>
        <div className="flex justify-between">
          <div className="flex gap-1">
            <Input placeholder="Cari Iklan" prefix={<SearchOutlined />} />
          </div>
        </div>
      </section>
      <section className="mt-5">
        <CandidateCard />
      </section>
    </div>
  )
}