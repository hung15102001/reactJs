import { SearchOutlined,PlusOutlined, EyeOutlined,  EditOutlined, DeleteOutlined } from '@ant-design/icons';
import type { InputRef } from 'antd';
import { Button, Input, Space, Table,  Modal } from 'antd';
import type { ColumnsType, ColumnType } from 'antd/es/table';
import type { FilterConfirmProps } from 'antd/es/table/interface';
import React, { useRef, useState } from 'react';
import { useQuery } from 'react-query';
import { deleteCate, listCate } from '../../../api/categoriApi';
import Highlighter from 'react-highlight-words';
import { Link } from 'react-router-dom';
import { CateType } from '../../../type/Category';

type Props = {}
interface DataType {
  id:number;
  name:string;
  created_at:string;
  updated_at:string
}

type DataIndex = keyof DataType;


const ListCate = (props: Props) => {

    const [searchText, setSearchText] = useState('');
    const [searchedColumn, setSearchedColumn] = useState('');
    const searchInput = useRef<InputRef>(null);
    const [dataTable,setDataTable] = useState<CateType[]>([])
    const handleSearch = (
      selectedKeys: string[],
      confirm: (param?: FilterConfirmProps) => void,
      dataIndex: DataIndex,
    ) => {
      confirm();
      setSearchText(selectedKeys[0]);
      setSearchedColumn(dataIndex);
    };
  
    const handleReset = (clearFilters: () => void) => {
      clearFilters();
      setSearchText('');
    };
  
    const getColumnSearchProps = (dataIndex: DataIndex): ColumnType<DataType> => ({
      filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
        <div style={{ padding: 8 }}>
          <Input
            ref={searchInput}
            placeholder={`Search ${dataIndex}`}
            value={selectedKeys[0]}
            onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
            onPressEnter={() => handleSearch(selectedKeys as string[], confirm, dataIndex)}
            style={{ marginBottom: 8, display: 'block' }}
          />
          <Space>
            <Button
              type="primary"
              onClick={() => handleSearch(selectedKeys as string[], confirm, dataIndex)}
              icon={<SearchOutlined />}
              size="small"
              style={{ width: 90 }}
            >
              Search
            </Button>
            <Button
              onClick={() => clearFilters && handleReset(clearFilters)}
              size="small"
              style={{ width: 90 }}
            >
              Reset
            </Button>
            <Button
              type="link"
              size="small"
              onClick={() => {
                confirm({ closeDropdown: false });
                setSearchText((selectedKeys as string[])[0]);
                setSearchedColumn(dataIndex);
              }}
            >
              Filter
            </Button>
          </Space>
        </div>
      ),
      filterIcon: (filtered: boolean) => (
        <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />
      ),
      onFilter: (value, record) =>
        record[dataIndex]
          .toString()
          .toLowerCase()
          .includes((value as string).toLowerCase()),
      onFilterDropdownVisibleChange: visible => {
        if (visible) {
          setTimeout(() => searchInput.current?.select(), 100);
        }
      },
      render: text =>
        searchedColumn === dataIndex ? (
          <Highlighter
            highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
            searchWords={[searchText]}
            autoEscape
            textToHighlight={text ? text.toString() : ''}
  
          />
        ) : (
          text
        ),
    });
  
    const columns: ColumnsType<DataType> = [
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        width: '30%',
        ...getColumnSearchProps('name'),
      },
      {
        title: 'Created at',
        dataIndex: 'created_at',
        key: 'created_at',
        width: '20%',
        ...getColumnSearchProps('created_at'),
      },
      {
        title: 'Updated at',
        dataIndex: 'updated_at',
        key: 'updated_at',
        ...getColumnSearchProps('updated_at'),
        // sorter: (a, b) => a.address.length - b.address.length,
        sortDirections: ['descend', 'ascend'],
      },
      {
        key: "5",
        title: "Actions",
        render: (record) => {
            
          return (
            <>
              <EditOutlined
                onClick={() => {
                 
                }}
              />
              <DeleteOutlined
                onClick={() => {
                  onDeleteStudent(record.id);
                }}
                style={{ color: "red", marginLeft: 12 }}
              />

            <EyeOutlined 
              onClick={()=>{
                
              }}
              style={{ marginLeft: 12 }}
            />
            </>
          );
        },
      },
    ];
    const onDeleteStudent = (id) => {
      Modal.confirm({
        title: "Are you sure, you want to delete this student record?",
        okText: "Yes",
        okType: "danger",
        onOk:async () => {
          await  deleteCate(id);
          setDataTable(dataTable.filter(data =>  data.id !== id ))
          window.location.reload();
      }
      });
  
    };
    const {data} = useQuery<any>(['Category'], listCate)
    console.log(data);
    
  return (
    <>
     <Link to="/admin/category/add">
                    <Button type="dashed" shape="circle" icon={<PlusOutlined />} />
                </Link>
    <Table columns={columns} dataSource={data?.data} />
    </>
  )

}

export default ListCate