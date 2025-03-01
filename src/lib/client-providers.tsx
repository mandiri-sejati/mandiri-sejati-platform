'use client';

import { ConfigProvider } from "antd";
import { PropsWithChildren } from "react";

export default function ClientProviders({ children }: PropsWithChildren) {
    return (
        <ConfigProvider theme={{
            token: {
                fontFamily: 'var(--font-sfpro), Arial, Helvetica, sans-serif'
            }
        }}>
            {children}
        </ConfigProvider>
    )
}