"use client"

import Titles from "@/components/typography/title";
import { Tabs, TabsProps } from "antd";
import JobPreview from "../_components/job-preview";
import Candidates from "../_components/candidates";
import { useSearchParams } from "next/navigation";

const items: TabsProps['items'] = [
    {
        key: '1',
        label: 'Detail',
        children: <JobPreview hideTitle editable showApplyButton />,
    },
    {
        key: '2',
        label: 'Kandidat',
        children: <Candidates />,
    }
];

const jobListings = [
    {
      id: 1,
      title: "Perwakilan Layanan Pelanggan",
      postEndDate: "03/05/2025",
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
      postEndDate: "04/03/2025",
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
      postEndDate: "05/04/2025",
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
      postEndDate: "05/20/2025",
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
      postEndDate: "06/10/2025",
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
      postEndDate: "07/15/2025",
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

export default function Page() {
    const searchParams = useSearchParams()
    const search = searchParams.get('id')
    let selectedJobs = null;
    if (search) {
        selectedJobs = jobListings.find(job => job.id === +search)
    }
    return (
        <div className="container mx-auto">
            <div className="flex justify-between">
                <div>
                    <Titles text={selectedJobs?.title || "Perwakilan Layanan Pelanggan"}/>
                </div>
            </div>
            <div>
                <Tabs defaultActiveKey="1" items={items} onChange={() => { }} />
            </div>
        </div>
    )
}