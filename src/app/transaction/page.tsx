'use client';
import React, { useState, useEffect } from 'react';
import { faker } from '@faker-js/faker';
import { ethers } from "ethers";
import moment from 'moment';

import "../../styles/transaction.css";
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { getTransactions, deleteTransaction } from '../../services/transaction';


const Transaction = () => {
    const queryClient = useQueryClient();
    const { data: transactions, isLoading, error } = useQuery({ queryKey: ['transactions'], queryFn: getTransactions });
    // console.log(transactions);
 
    const mutation = useMutation({
        mutationFn: deleteTransaction,
        onSuccess: () => {
            // todo: notification
            queryClient.invalidateQueries({ queryKey: ['transactions'] })
        },
        onError: (error: any) => {
            // todo: notification
            console.error("Error deleting transaction:", error);
        },
    })

    const handleDelete = (id: number) => {
        mutation.mutate(id);
    };
    if (isLoading) return <div>Loading...</div>;

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
                        {transactions && transactions.map((transaction: any) => (
                            <TransactionRow key={transaction.ID} transaction={transaction} onDelete={handleDelete} />
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

interface TransactionRowProps {
    transaction: any;
    onDelete: (id: number) => void; 
}



const TransactionRow: React.FC<TransactionRowProps> = ({ transaction, onDelete }) => {
    const [isExpanded, setIsExpanded] = useState(false); 

    const toggleDetails = () => {
        setIsExpanded(!isExpanded);
    };

    let statusClass = '';

    // 根据状态选择样式和图标
    switch (transaction.status) {
        case 0: // failed
            statusClass = 'status-failed';
            break;
        case 1: // success
            statusClass = 'status-success';
            break;
        case 2: // pending
            statusClass = 'status-pending';
            break;
        default:
            statusClass = '';
            break;
    }


    return (
        <>
            <tr style={{ cursor: 'pointer' }}>
                <td>
                    <span onClick={toggleDetails} style={{ cursor: 'pointer', marginLeft: '8px' }}>
                        {isExpanded ? '▼  ' : '►  '}
                    </span>
                    {transaction.tx_hash}
                </td>
                {/* <td>{transaction.from}</td> */}
                <td>{transaction.to}</td>
                <td>{moment(transaction.CreatedAt).format('YYYY-MM-DD HH:mm:ss')}</td>
                <td>{ethers.formatEther(transaction.value)}</td>
                <td>
                    <div className={`transaction-status ${statusClass}`}>
                        {transaction.status === 0 ? "failed" : "success"}
                    </div>
                </td>
                <td>
                    <button className="delete-trans" onClick={() => onDelete(transaction.ID)}>Delete</button>
                </td>
            </tr>
            {isExpanded && (
                <tr>
                    <td colSpan={6}>
                        {/* 这里可以添加交易详情的内容 */}
                        <div>
                            <strong>Transaction Details:</strong>
                            {/* 这里可以显示更多的交易细节 */}
                            <p>Details for transaction {transaction.tx_hash}...</p>
                        </div>
                    </td>
                </tr>
            )}
        </>
    );
};

export default Transaction;
