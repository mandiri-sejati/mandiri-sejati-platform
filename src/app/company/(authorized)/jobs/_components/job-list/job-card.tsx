import { EyeOutlined, UserOutlined, EllipsisOutlined, DeleteOutlined, EditOutlined, PoweroffOutlined, SnippetsOutlined } from "@ant-design/icons";
import { Dropdown, Space, Switch, MenuProps } from "antd";
import NextLink from "next/link";

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
      postEndDate: "Post berakhir pada 2 Feb 2022",
      postDeactivateDate: "Post deaktivasi pada 3 Feb 2022",
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
      postEndDate: "Post berakhir pada 10 Mar 2022",
      postDeactivateDate: "Post deaktivasi pada 15 Mar 2022",
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
      postEndDate: "Post berakhir pada 5 Apr 2022",
      postDeactivateDate: "Post deaktivasi pada 10 Apr 2022",
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
      postEndDate: "Post berakhir pada 20 Mei 2022",
      postDeactivateDate: "Post deaktivasi pada 25 Mei 2022",
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
      postEndDate: "Post berakhir pada 1 Jun 2022",
      postDeactivateDate: "Post deaktivasi pada 5 Jun 2022",
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
      postEndDate: "Post berakhir pada 15 Jul 2022",
      postDeactivateDate: "Post deaktivasi pada 20 Jul 2022",
      selected: 4,
      interview: 3,
      offering: 2,
      accepted: 1,
      views: 120,
      applicants: 60,
      isActive: true,
    },
    {
      id: 7,
      title: "UX Designer",
      postEndDate: "Post berakhir pada 30 Agu 2022",
      postDeactivateDate: "Post deaktivasi pada 5 Sep 2022",
      selected: 6,
      interview: 5,
      offering: 4,
      accepted: 4,
      views: 320,
      applicants: 180,
      isActive: false,
    },
    {
      id: 8,
      title: "DevOps Engineer",
      postEndDate: "Post berakhir pada 10 Okt 2022",
      postDeactivateDate: "Post deaktivasi pada 15 Okt 2022",
      selected: 2,
      interview: 1,
      offering: 1,
      accepted: 1,
      views: 220,
      applicants: 130,
      isActive: true,
    },
    {
      id: 9,
      title: "QA Engineer",
      postEndDate: "Post berakhir pada 25 Nov 2022",
      postDeactivateDate: "Post deaktivasi pada 30 Nov 2022",
      selected: 1,
      interview: 1,
      offering: 1,
      accepted: 0,
      views: 90,
      applicants: 50,
      isActive: true,
    },
    {
      id: 10,
      title: "Cybersecurity Specialist",
      postEndDate: "Post berakhir pada 5 Des 2022",
      postDeactivateDate: "Post deaktivasi pada 10 Des 2022",
      selected: 8,
      interview: 6,
      offering: 5,
      accepted: 5,
      views: 500,
      applicants: 250,
      isActive: false,
    },
  ];
  

export default function JobCard({ type }: { type: 'published' | 'draft' }) {
    let selectedJobs = []
    if (type === 'draft') {
        selectedJobs = draftJobListings
    }else{
        selectedJobs = jobListings
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
                    <NextLink href="#">
                        <EditOutlined /> Edit Iklan
                    </NextLink>
                ),
                key: '1',
                
                className:'h-[40px]'
            },
            {
                label: (
                    <NextLink href="#">
                        <PoweroffOutlined /> Nonaktifkan Iklan
                    </NextLink>
                ),
                key: '2',
                className:'h-[40px]'
            },
            {
                label: (
                    <NextLink href="#">
                        <DeleteOutlined /> Hapus Iklan
                    </NextLink>
                ),
                key: '3',
                className:'h-[40px]'
            },
        ];

        return (
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
                  <div className="text-lg font-semibold">{job.title}</div>
                  <div className="text-base text-[#8C8C8C]">{job.postEndDate}</div>
                  <div className="text-base text-[#8C8C8C]">{job.postDeactivateDate}</div>
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
                  <Switch defaultChecked={job.isActive} onChange={() => { }} /> Aktif
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
        );
      })}
    </div>
  );
}
