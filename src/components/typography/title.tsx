import Title from "antd/es/typography/Title";

export default function Titles({text,level=1}:{text: string,level?: 1 | 2 | 3 | 4 | 5}) {
  return <Title level={level} className={`${level==1&&'!text-4xl'}`}>{text}</Title>;
}