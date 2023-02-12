import { Col, Row, Input, Button, Select, Tag } from 'antd';
import Todo from '../Todo';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/actions';
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { todoRemainSelector } from '../redux/selector';

export default function TodoList() {

  const [priority, setPriority] = useState('Medium');
  const [todoName, setTodoName] = useState('')
  const dispatch = useDispatch()
  const todoList = useSelector(todoRemainSelector)
  // const searchText = useSelector(searchTextSelector)
  const elementTodoList = todoList.map((todo)=> {
    return <Todo key={todo.id} name={todo.name} priority={todo.priority} completed={todo.completed} id={todo.id} />
  })
  const handleAddClick = () => {
    // dispatch() bắn đi 1 action
    dispatch(addTodo({
      id: uuidv4(),
      name: todoName,
      priority: priority,
      completed: false,
    }))
    setTodoName('')
    setPriority('')
  }
  const handleInputChange = (e) => { 
    setTodoName(e.target.value)
  }
  const handleChangePriority = (value) => {
    setPriority(value)
  }
  return (
    <Row style={{ height: 'calc(100% - 40px)' }}>
      <Col span={24} style={{ height: 'calc(100% - 40px)', overflowY: 'auto' }}>
        {elementTodoList}
      </Col>
      <Col span={24}>
        <Input.Group style={{ display: 'flex' }} compact>
          <Input value={todoName} onChange={handleInputChange}/>
          <Select onChange={handleChangePriority} value={priority}>
            <Select.Option value='High' label='High'>
              <Tag color='red'>High</Tag>
            </Select.Option>
            <Select.Option value='Medium' label='Medium'>
              <Tag color='blue'>Medium</Tag>
            </Select.Option>
            <Select.Option value='Low' label='Low'>
              <Tag color='gray'>Low</Tag>
            </Select.Option>
          </Select>
          <Button onClick={handleAddClick} type='primary'>
            Add
          </Button>
        </Input.Group>
      </Col>
    </Row>
  );
}
