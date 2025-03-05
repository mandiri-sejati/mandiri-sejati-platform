import { EyeOutlined, UserOutlined, EllipsisOutlined, DeleteOutlined, EditOutlined, PoweroffOutlined, SnippetsOutlined } from "@ant-design/icons";
import { Dropdown, Space, Switch, MenuProps, Modal, Button } from "antd";
import NextLink from "next/link";
import { useState } from "react";
import dayjs from "dayjs";
import Link from "next/link";
import Titles from "@/components/typography/title";

const draftJobListings = [
    {
      id: 11,
      title: "Finance Analyst",
      postEndDate: "Draft - Belum dipublikasikan",
      postDeactivateDate: "Draft - Belum dipublikasikan",
      selected: 0,
      interview: 0,
      offering: 0,
      accepted: 0,
      views: 0,
      applicants: 0,
      isActive: false,
    },
    {
      id: 12,
      title: "Network Engineer",
      postEndDate: "Draft - Belum dipublikasikan",
      postDeactivateDate: "Draft - Belum dipublikasikan",
      selected: 0,
      interview: 0,
      offering: 0,
      accepted: 0,
      views: 0,
      applicants: 0,
      isActive: false,
    },
    {
      id: 13,
      title: "Business Development Manager",
      postEndDate: "Draft - Belum dipublikasikan",
      postDeactivateDate: "Draft - Belum dipublikasikan",
      selected: 0,
      interview: 0,
      offering: 0,
      accepted: 0,
      views: 0,
      applicants: 0,
      isActive: false,
    },
    {
      id: 14,
      title: "IT Support Specialist",
      postEndDate: "Draft - Belum dipublikasikan",
      postDeactivateDate: "Draft - Belum dipublikasikan",
      selected: 0,
      interview: 0,
      offering: 0,
      accepted: 0,
      views: 0,
      applicants: 0,
      isActive: false,
    },
  ];
  

const jobListings = [
    {
      id: 1,
      title: "Perwakilan Layanan Pelanggan",
      postEndDate: "03/12/2025",
      postDeactivateDate: "Post deaktivasi pada 13 Mar 2025",
      selected: 0,
      interview: 0,
      offering: 0,
      accepted: 0,
      views: 100,
      applicants: 80,
      isActive: true,
    },
    {
      id: 2,
      title: "Software Engineer",
      postEndDate: "04/03/2025",
      postDeactivateDate: "Post deaktivasi pada 4 Apr 2025",
      selected: 2,
      interview: 1,
      offering: 1,
      accepted: 1,
      views: 250,
      applicants: 120,
      isActive: false,
    },
    {
      id: 3,
      title: "Marketing Specialist",
      postEndDate: "05/04/2025",
      postDeactivateDate: "Post deaktivasi pada 5 May 2025",
      selected: 3,
      interview: 2,
      offering: 1,
      accepted: 1,
      views: 300,
      applicants: 150,
      isActive: true,
    },
    {
      id: 4,
      title: "Data Analyst",
      postEndDate: "05/20/2025",
      postDeactivateDate: "Post deaktivasi pada 21 May 2025",
      selected: 5,
      interview: 3,
      offering: 2,
      accepted: 2,
      views: 180,
      applicants: 90,
      isActive: true,
    },
    {
      id: 5,
      title: "Product Manager",
      postEndDate: "06/10/2025",
      postDeactivateDate: "Post deaktivasi pada 11 Jun 2025",
      selected: 7,
      interview: 4,
      offering: 3,
      accepted: 3,
      views: 400,
      applicants: 200,
      isActive: false,
    },
    {
      id: 6,
      title: "HR Specialist",
      postEndDate: "07/15/2025",
      postDeactivateDate: "Post deaktivasi pada 16 Jul 2025",
      selected: 4,
      interview: 3,
      offering: 2,
      accepted: 1,
      views: 120,
      applicants: 60,
      isActive: true,
    },
  ];
  

export default function JobCard({ type, selectedTabs, search }: { type: 'published' | 'draft', selectedTabs: string, search: string }) {
    let selectedJobs = []
    if (type === 'draft') {
        selectedJobs = draftJobListings
    }else{
        let isActive: boolean
        switch (selectedTabs) {
          case "Aktif":
            isActive = true
            break;
          case "Nonaktif":
            isActive = false
        }
        selectedJobs = selectedTabs === "Semua" ? jobListings : jobListings.filter(job => job.isActive === isActive)
    }
    console.log("di klik", selectedJobs)

    if (search) {
      selectedJobs = selectedJobs.filter((el) => el.title.toLowerCase().includes(search))
    }

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalExtendOpen, setIsModalExtendOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
    
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const showModalExtend = () => {
    setIsModalExtendOpen(true)
  }

  const handleOkExtend = () => {
    setIsModalExtendOpen(false);
    
  };

  const handleCancelExtend = () => {
    setIsModalExtendOpen(false);
  };

  const checkExpiredDate = (endDate: string) => {
    const diff = dayjs(endDate).diff(dayjs(), 'd')
    return <div className={`text-base ${diff <= 7 ? "text-[#FF4D4F]" : "text-[#8C8C8C]"}`}>{`Post berakhir pada ${dayjs(endDate).format('D MMM YYYY')}`}</div>
  }


  return (
    <div className="space-y-3">
      {selectedJobs.map((job) => {
        // Dropdown items untuk tiap job
        const dropdownItems: MenuProps['items'] = [
            {
                label: (
                    <NextLink href={`/company/jobs/detail?id=${job.id}`}>
                        <SnippetsOutlined /> Lihat detail
                    </NextLink>
                ),
                key: '0',
                className:'h-[40px]'
            },
            {
                label: (
                    <NextLink href={`/company/jobs/update?id=${job.id}`}>
                        <EditOutlined /> Edit Iklan
                    </NextLink>
                ),
                key: '1',
                
                className:'h-[40px]'
            },
            {
                label: (
                    <NextLink href="#" onClick={showModal}>
                        <PoweroffOutlined /> Nonaktifkan Iklan
                    </NextLink>
                ),
                key: '2',
                className:'h-[40px]'
            },
            {
                label: (
                    <NextLink href="#" onClick={showModalExtend}>
                        <DeleteOutlined /> Perpanjang masa aktif
                    </NextLink>
                ),
                key: '3',
                className:'h-[40px]',
            },
        ];

        return (
          <>
          <div key={job.id} className="rounded-md border p-3">
            <div className="grid grid-cols-12 gap-3">
              {/* Bagian Kiri */}
              <div className="col-span-4 flex gap-3 items-start">
                <div>
                  <Dropdown menu={{ items: dropdownItems }} trigger={["click"]} className="cursor-pointer">
                    <a onClick={(e) => e.preventDefault()}>
                      <Space>
                        <div className="hover:bg-blue-50 text-black p-3 rounded-md flex items-start">
                          <EllipsisOutlined />
                        </div>
                      </Space>
                    </a>
                  </Dropdown>
                </div>
                <div>
                  <div className="font-semibold hover:cursor-pointer">
                    <Link href={`/company/jobs/detail?id=${job.id}`}>
                      <Titles level={4} text={job.title} />
                    </Link>
                  </div>
                  { type === 'published' ? checkExpiredDate(job.postEndDate) : <div className="text-base text-[#8C8C8C]">{job.postEndDate}</div>}
                  { type === 'published' && <div className="text-base text-[#8C8C8C]">{job.postDeactivateDate}</div> }
                </div>
              </div>

              {/* Bagian Tengah */}
              <div className="col-span-6 grid grid-cols-12 gap-3">
                {["Terpilih", "Interview", "Offering", "Diterima"].map((label, index) => {
                  const values = [job.selected, job.interview, job.offering, job.accepted];
                  return (
                    <div key={label} className="col-span-3 text-center">
                      <div className="text-xl font-medium">{values[index]}</div>
                      <div className="text-base font-normal text-[#737373]">{label}</div>
                    </div>
                  );
                })}
              </div>

              {/* Bagian Kanan */}
              <div className="col-span-2 text-sm text-[#1F1F1F] text-left flex justify-between flex-col">
                <div>
                  <Switch defaultChecked={job.isActive} onChange={() => showModal()} /> Aktif
                </div>
                <div>
                  <EyeOutlined /> Total dilihat: {job.views}
                </div>
                <div>
                  <UserOutlined /> Total dilamar: {job.applicants}
                </div>
              </div>
            </div>
          </div>

            <Modal 
              centered 
              title="Nonaktifkan Iklan ?" 
              open={isModalOpen} 
              // onOk={handleOk} 
              onCancel={handleCancel}
              mask={true}
              footer={[
                <Button key="back" onClick={handleCancel}>
                  Batal
                </Button>,
                <Button key="submit" type="primary" onClick={() => handleOk()}>
                  Nonaktifkan
                </Button>
              ]}
            >
              <p>Pencari kerja tidak dapat melamar pekerjaan ini lagi. Apakah Anda yakin ingin menonaktifkan ?</p>
            </Modal>

            <Modal 
              centered 
              title="Perpanjang masa aktif iklan ?" 
              open={isModalExtendOpen} 
              // onOk={handleOk} 
              onCancel={handleCancelExtend}
              mask={true}
              footer={[
                <Button key="back" onClick={handleCancelExtend}>
                  Batal
                </Button>,
                <Button key="submit" type="primary" onClick={() => handleOkExtend()}>
                  Perpanjang
                </Button>
              ]}
            >
              <p>Iklan anda akan di perpanjang selama 30 hari kedepan</p>
            </Modal>
          </>
        );
      })}
    </div>
  );
}
