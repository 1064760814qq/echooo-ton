import React from 'react';

const ConnectEchooo: React.FC = () => {
    const handleConnect = () => {
        const userAgent = navigator.userAgent.toLowerCase();

        // 判断是否是 Android 设备
        if (userAgent.includes('android')) {
            window.open('echooo://echooo.valleysound.xyz/vss/ton-connect?v=2&id=7e7b52d4d7de6d614633c17cebdb022c9a4b059dc97fe1705b459cbe26aa176b&r=%7B%22manifestUrl%22%3A%22https%3A%2F%2Fton-connect.github.io%2Fdemo-dapp-with-react-ui%2Ftonconnect-manifest.json%22%2C%22items%22%3A%5B%7B%22name%22%3A%22ton_addr%22%7D%2C%7B%22name%22%3A%22ton_proof%22%2C%22payload%22%3A%22eyJhbGciOiJIUzI1NiJ9.eyJwYXlsb2FkIjoiNWYxNDY4OTJhODY0YzYzM2FkZGJmMzMxM2IxNjJhZTkxNTcwNDhkYzA4ZjczM2UyZWVhMDBmNTM0NjUwZmZjOSIsImlhdCI6MTc0Mjg4MTQ5OCwiZXhwIjoxNzQyODgyMzk4fQ.VbdhqWYXgJg3pcbqxrlSKMyIKmb-JBJRWQuTedmElrM%22%7D%5D%7D&ret=googlechrome%3A%2F%2F', '_blank');
        } 
        
        else if (userAgent.includes('iphone') || userAgent.includes('ipad') || userAgent.includes('ipod')) {
            window.open('https://api.valleysound.xyz/vss', '_blank');
        } 
        // 默认情况
        else {
            window.open('https://api.valleysound.xyz/vss', '_blank');
        }
    };

    return (
        <div>
            <h1>连接 Echooo 钱包</h1>
            <button onClick={handleConnect}>连接到 Echooo</button>
        </div>
    );
};

export default ConnectEchooo;