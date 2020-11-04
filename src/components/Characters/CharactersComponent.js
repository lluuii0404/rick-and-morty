import React, {useEffect, useState} from 'react';
import { Table, Input, Space, Button } from "antd";
import { SearchOutlined } from "@ant-design/icons";

export const CharactersComponent = ({
  characters,
  getCharacters
}) => {

  useEffect(() => {
    getCharacters();
  }, []);

  const charactersList = characters && characters.results && characters.results.map(item =>
    <li key={item.id}>{item.name}</li>
  )

  return (
    <>
      {charactersList}


    </>
  )
};


export const CharactersComp2 = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((res) =>
        res.json().then((resp) => {
          console.log(resp, "RESP");
          setData(resp);
        })
      )
      .catch((err) => err);
  }, []);

  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({
                       setSelectedKeys,
                       selectedKeys,
                       confirm,
                       clearFilters
                     }) => (
      <div style={{ padding: 8 }}>
        <Input
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{ width: 188, marginBottom: 8, display: "block" }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button
            onClick={() => handleReset(clearFilters)}
            size="small"
            style={{ width: 90 }}
          >
            Reset
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined style={{ color: filtered ? "#1890ff" : undefined }} />
    )
  });

  const handleOnFilter = (value) => {
    console.log("value handleOnFilter", value);
    fetch(`https://rickandmortyapi.com/api/character/?name=${value}`)
      .then((res) =>
        res.json().then((resp) => {
          console.log("handleOnFilter resp", resp);
          setData(resp);
        })
      )
      .catch((err) => err);
  };

  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    console.log(selectedKeys);

    handleOnFilter(selectedKeys[0]);
  };

  const handleReset = (clearFilters) => {
    clearFilters();

    fetch(`https://rickandmortyapi.com/api/character`)
      .then((res) =>
        res.json().then((resp) => {
          console.log("handleOnFilter resp", resp);
          setData(resp);
        })
      )
      .catch((err) => err);
  };

  const results = data && data.results;

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      width: "30%",
      ...getColumnSearchProps("name")
    },
    {
      title: "Gender",
      dataIndex: "gender",
      key: "gender",
      width: "20%",
      // ...getColumnSearchProps("gender")
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      // ...getColumnSearchProps("status")
    }
  ];
  return <Table columns={columns} dataSource={results} />;
}
