import React from "react";
import styles from './styles.module.scss';

export const getColumns = (getColumnSearchProps) => [
  {
    title: (<span className={styles.header}>Photo</span>),
    dataIndex: "image",
    key: "image",
    width: "3%",
    render: (image) => <div className={styles.photo} style={{backgroundImage: `url(${image})`}} />,
  },
  {
    title: (<span className={styles.header}>Name</span>),
    dataIndex: "name",
    key: "name",
    width: "27%",
    ...getColumnSearchProps("name"),
    render: (name, record) => <span className={styles.name} onClick={() => {console.log('record.id', record.id)}}>{name}</span>,
  },
  {
    title: (<span className={styles.header}>Gender</span>),
    dataIndex: "gender",
    key: "gender",
    width: "20%",
  },
  {
    title: (<span className={styles.header}>Status</span>),
    dataIndex: "status",
    key: "status",
    width: "25%",
  },
  {
    title: (<span className={styles.header}>Species</span>),
    dataIndex: "species",
    key: "species",
    width: "25%",
  }
];
