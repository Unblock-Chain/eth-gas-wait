'use client';
import React, { useState, useEffect } from 'react';
import { faker } from '@faker-js/faker';

import "../../styles/transaction.css";
// import { useQuery, useMutation } from '@tanstack/react-query';
// import { getTransactions } from '../../services/transaction';

interface Trans {
    hash: string;
    from: string;
    to: string;
    time: string,
    value: string;
    status: string;
}

function generateTransactionHash(): string {
    const characters = 'abcdef0123456789'; // 允许的字符范围
    let hash = '0x'; // 初始化为以 0x 开头的字符串

    // 生成 64 个随机字符
    for (let i = 0; i < 64; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length); // 随机索引
        hash += characters[randomIndex]; // 添加随机字符
    }
    return hash; // 返回生成的哈希
}

// 生成一个随机交易对象
const generateMockTransaction = () => {
    return {
        hash: generateTransactionHash(),
        from: faker.finance.ethereumAddress(),
        to: faker.finance.ethereumAddress(),
        time: faker.date.past().toISOString(),
        value: `${(Math.random() * 10).toFixed(2)} ETH`, // 随机生成 ETH 数量
        status: Math.random() > 0.5 ? 'success' : 'failed' // 随机生成状态
    };
};

// 生成 5 个随机交易
const mockTransactions = Array.from({ length: 5 }, generateMockTransaction);
console.log(mockTransactions);

const Transaction = () => {
    const [transactions, setTransactions] = useState<Trans[]>([]);
    // const { data: transactions, isLoading, error } = useQuery(['transactions'], getTransactions);

    useEffect(() => {
        // const mockTransactions = generateMockTransactions(10); // 生成10条Mock数据
        setTransactions(mockTransactions);
    }, []);

    const handleDelete = (hash: string) => {
        setTransactions(transactions.filter(tx => tx.hash !== hash));
    };
    return (
        <div className="transaction-container">
            <nav className="sidebar">
                <h2 className="sidebar-title">Navigation</h2>
                <ul className="nav-list">
                    <li><a href="#dashboard">Dashboard</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#settings">Settings</a></li>
                </ul>
            </nav>
            <div className="transaction-content">
                <h1 className="transaction-title">Transaction Dashboard</h1>
                <table className="transaction-table">
                    <thead>
                        <tr>
                            <th>Transaction Hash</th>
                            {/* <th>From</th> */}
                            <th>To</th>
                            <th>Time</th>
                            <th>Value</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {transactions.map((transaction) => (
                            <TransactionRow key={transaction.hash} transaction={transaction} onDelete={handleDelete} />
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};


interface TransactionRowProps {
    transaction: Transaction;
    onDelete: (hash: string) => void; // onDelete 函数接收交易 hash 作为参数
}

const TransactionRow: React.FC<TransactionRowProps> = ({ transaction, onDelete }) => {
    const [isExpanded, setIsExpanded] = useState(false); // 状态控制详情行的展开与收起

    const toggleDetails = () => {
        setIsExpanded(!isExpanded); // 切换展开状态
    };

    let statusClass = '';

    // 根据状态选择样式和图标
    switch (transaction.status) {
        case 'success':
            statusClass = 'status-success';
            break;
        case 'failed':
            statusClass = 'status-failed';
            break;
        case 'pending':
            statusClass = 'status-pending';
            break;
        default:
            statusClass = '';
            break;
    }


    return (
        <>
            <tr  style={{ cursor: 'pointer' }}>
                <td>
                    <span onClick={toggleDetails} style={{ cursor: 'pointer', marginLeft: '8px' }}>
                    {isExpanded ? '▼  ' : '►  '}
                    </span>
                    {transaction.hash}
                </td>
                {/* <td>{transaction.from}</td> */}
                <td>{transaction.to}</td>
                <td>{transaction.time}</td>
                <td>{transaction.value}</td>
                <td>
                    <div className={`transaction-status ${statusClass}`}>
                        {transaction.status}
                    </div>
                </td>
                <td>
                    <button className="delete-trans" onClick={() => onDelete(transaction.hash)}>Delete</button>
                </td>
            </tr>
            {isExpanded && (
                <tr>
                    <td colSpan={6}>
                        {/* 这里可以添加交易详情的内容 */}
                        <div>
                            <strong>Transaction Details:</strong>
                            {/* 这里可以显示更多的交易细节 */}
                            <p>Details for transaction {transaction.hash}...</p>
                        </div>
                    </td>
                </tr>
            )}
        </>
    );
};

export default Transaction;
