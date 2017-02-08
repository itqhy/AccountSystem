import React, {Component, PropTypes} from 'react';
import {Form, Select} from 'antd';
import {orderForm} from './index.css';

const FormItem = Form.Item;
const Option = Select.Option;

const OrderForm = ({
    customers,
    customerId,
    onSelect,
    disabled,
    form: {
        getFieldDecorator
    }
}) => {
    const handleChange = (value)=> {
        console.log('modify' + value);
        onSelect(value);
    };

    return (
        <div className={orderForm}>
            <Form inline>
                <FormItem label="客户名称：">
                    {
                        getFieldDecorator('customerId', {
                            initialValue: customerId
                        })(
                            <Select
                                showSearch
                                style={{width: 340}}
                                placeholder="选择一个客户"
                                onChange={handleChange}
                                onSelect={handleChange}
                                disabled={disabled || false}
                            >
                                {
                                    customers.map((customer, index)=>
                                        <Option key={index} value={customer['_id']}>{customer['name']}</Option>
                                    )
                                }

                            </Select>
                        )
                    }
                </FormItem>
            </Form>
        </div>
    );
};

OrderForm.propTypes = {
    form: PropTypes.object.isRequired,
    onSelect: PropTypes.func,
    customers: PropTypes.any
};

export default Form.create()(OrderForm);