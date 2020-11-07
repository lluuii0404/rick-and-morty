import React, { useEffect, useState } from 'react';

import { Table, Input, Space, Button } from "antd";
import { SearchOutlined } from "@ant-design/icons";

import { Spinner } from "../Spinner";

import { getQueryParams, removeQuestionFromQueryString, setQueryParams} from "../../utils/helper";
import { getColumns } from "./Columns";
import * as ROUTES from '../../utils/routes'

import styles from './styles.module.scss';

export const CharactersComponent = ({
  characters,
  loading,
  getCharacters,
  history,
  location,
}) => {

  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const search = removeQuestionFromQueryString(getQueryParams(location.search));

    if (Object.keys(search).length > 0 ) {
      if (search.hasOwnProperty('page')) {
        setCurrentPage(Number(search.page))
      }
      getCharacters({...search});
    }
    else {
      getCharacters();
    }
  }, []);

  const results = characters && characters.results;
  const info = characters && characters.info;

  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({setSelectedKeys, selectedKeys, confirm, clearFilters}) => (
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
            style={{ width: 90, background: "#4363b5", border: '1px solid #4363b5' }}
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
      <SearchOutlined style={{ color: filtered ? "#4363b5" : undefined }} />
    )
  });

  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();

    if (selectedKeys[0]) {
      const search = {
        name: selectedKeys[0]
      }

      history.push({
        pathname: location.pathname,
        search: setQueryParams(search),
      })
      getCharacters(search);
    }
  };

  const handleReset = (clearFilters) => {
    clearFilters();
    history.push({
      pathname: location.pathname,
      search: '',
    })
    getCharacters();
  };

  const onChangePagination = (pagination) => {
    setCurrentPage(pagination.current);
    const search = removeQuestionFromQueryString(getQueryParams(location.search));

    if (pagination.current) {
      history.push({
        pathname: location.pathname,
        search: setQueryParams({
          ...search,
          page: pagination.current,
        }),
      })
      getCharacters({...search, page: pagination.current});
    }
  };

  const _redirectToDetailsCharacter = (id) => {
    history.push(`${ROUTES.DETAILS_CHARACTER}/${id}`)
  }

  const columns = getColumns(getColumnSearchProps, _redirectToDetailsCharacter);

  const LoadingJSX = loading && <Spinner />
  const TableJSX = !loading && (
    <>
      <Table
        columns={columns}
        dataSource={results}
        onChange={onChangePagination}
        pagination={{
          current: currentPage,
          pageSize: 20,
          total: info && info.count,
          showSizeChanger: false
        }}
        onRow={(record) => {
          return {
            onClick: event => {
              event.preventDefault();
              history.push(`${ROUTES.DETAILS_CHARACTER}/${record.id}`)
            }
          }
        }}
        rowClassName={styles.rowStyle}
      />
    </>
  )

  return (
    <div className={styles.container}>

      { LoadingJSX }
      { TableJSX }
    </div>
  );
}
