'use client'

import { PlusOutlined } from "@ant-design/icons";
import { Input, InputRef, Tag } from "antd";
import Link from "antd/es/typography/Link";
import { useEffect, useRef, useState } from "react";

const Skill: React.FC = () => {
    const [tags, setTags] = useState<string[]>([]);
    const [inputVisible, setInputVisible] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const inputRef = useRef<InputRef>(null);

    useEffect(() => {
        if (inputVisible) {
            inputRef.current?.focus();
        }
    }, [inputVisible]);

    const handleClose = (removedTag: string) => {
        const newTags = tags && tags.filter((tag) => tag !== removedTag);
        console.log(newTags);
        setTags(newTags);
    };

    const showInput = () => {
        setInputVisible(true);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };

    const handleInputConfirm = () => {
        if (inputValue && tags && tags.indexOf(inputValue) === -1) {
            setTags([...tags, inputValue]);
        }
        setInputVisible(false);
        setInputValue('');
    };

    const forMap = (tag: string) => (
        <span key={tag} style={{ display: 'inline-block' }}>
            <Tag
                closable
                onClose={(e) => {
                    e.preventDefault();
                    handleClose(tag);
                }}
            >
                {tag}
            </Tag>
        </span>
    );

    const tagChild = tags && tags.map(forMap);

    return (
        <div className="flex gap-2">
            <div style={{ marginBottom: 16 }}>
                {tagChild}
            </div>
            {inputVisible ? (
                <div>
                    <Input
                        ref={inputRef}
                        type="text"
                        size="small"
                        style={{ width: 100 }}
                        value={inputValue}
                        onChange={handleInputChange}
                        onBlur={handleInputConfirm}
                        onPressEnter={handleInputConfirm}
                    />

                </div>
            ) : (
                <Link onClick={showInput}>
                    <PlusOutlined /> Tambah Skill
                </Link>
            )}
        </div>
    );
};

export default Skill;