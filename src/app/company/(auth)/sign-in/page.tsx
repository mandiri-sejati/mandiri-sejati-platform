import Title from "antd/es/typography/Title";
import Text from "antd/es/typography/Text";
import Image from "next/image";
import Link from "antd/es/typography/Link";
import NextLink from "next/link";
import { Button, Input } from "antd";
import Password from "antd/es/input/Password";

function SignInPage() {
    return (
        <div className="w-screen h-screen">
            <div className="flex justify-start">
                <div className="h-screen w-[400px]" style={{
                    backgroundImage: 'url(/images/sign-in-thumbnail.png)',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center center',
                    backgroundSize: 'cover',
                }} />
                <div className="bg-white flex-1 flex items-center px-20">
                    <div className="w-[396px] flex flex-col gap-12">
                        <Image src={'/images/mandiri-company-logo.png'} width={278} height={64} alt="Logo" />
                        <div className="flex flex-col gap-6">
                            <div>
                                <Title level={2} style={{ margin: 0 }}>Masuk</Title>
                                <Text type="secondary">Rekrut kandidat yang tepat untuk bisnis anda.</Text>
                            </div>
                            <Input placeholder="Email" />
                            <Password placeholder="Password" />
                            <NextLink href={'/company/dashboard'}>
                                <Button type="primary">Masuk</Button>
                            </NextLink>
                        </div>
                        <div className="flex gap-1">
                            <Text>Belum punya akun?</Text>
                                <Link href={'/company/sign-up'}>Daftar</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignInPage;