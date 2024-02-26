import React from "react";
import { Button, Form, Input, Row, Select } from "antd";

const { Option } = Select;

// interface DataNodeType {
//   value: string;
//   label: string;
//   children?: DataNodeType[];
// }

// const residences: CascaderProps<DataNodeType>["options"] = [
//   {
//     value: "zhejiang",
//     label: "Zhejiang",
//     children: [
//       {
//         value: "hangzhou",
//         label: "Hangzhou",
//         children: [
//           {
//             value: "xihu",
//             label: "West Lake",
//           },
//         ],
//       },
//     ],
//   },
//   {
//     value: "jiangsu",
//     label: "Jiangsu",
//     children: [
//       {
//         value: "nanjing",
//         label: "Nanjing",
//         children: [
//           {
//             value: "zhonghuamen",
//             label: "Zhong Hua Men",
//           },
//         ],
//       },
//     ],
//   },
// ];

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 12 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 12 },
  },
};

const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

const CreateCustomer: React.FC = () => {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log("Received values of form: ", values);
  };

  //   const prefixSelector = (
  //     <Form.Item name="prefix" noStyle>
  //       <Select style={{ width: 70 }}>
  //         <Option value="86">+86</Option>
  //         <Option value="87">+87</Option>
  //       </Select>
  //     </Form.Item>
  //   );

  //   const suffixSelector = (
  //     <Form.Item name="suffix" noStyle>
  //       <Select style={{ width: 70 }}>
  //         <Option value="USD">$</Option>
  //         <Option value="CNY">¥</Option>
  //       </Select>
  //     </Form.Item>
  //   );

  //   const [autoCompleteResult, setAutoCompleteResult] = useState<string[]>([]);

  //   const onWebsiteChange = (value: string) => {
  //     if (!value) {
  //       setAutoCompleteResult([]);
  //     } else {
  //       setAutoCompleteResult(
  //         [".com", ".org", ".net"].map((domain) => `${value}${domain}`)
  //       );
  //     }
  //   };

  //   const websiteOptions = autoCompleteResult.map((website) => ({
  //     label: website,
  //     value: website,
  //   }));

  return (
    <div className="w-full h-full mt-20 mx-auto">
      <div className="text-30 text-center font-bold"> Create Customer</div>
      <div className="flex justify-center mt-20">
        <Form
          {...formItemLayout}
          form={form}
          name="create customer"
          onFinish={onFinish}
          initialValues={{
            residence: ["zhejiang", "hangzhou", "xihu"],
            prefix: "86",
          }}
          scrollToFirstError
        >
          <Row gutter={24}>
            <Form.Item
              name="FlatCustomField"
              label="FlatCustomField"
              rules={[
                {
                  required: false,
                  message: "Please input your FlatCustomField!",
                  whitespace: true,
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="Parent"
              label="Parent"
              rules={[
                {
                  required: false,
                  message: "Please input your Parent!",
                  whitespace: true,
                },
              ]}
            >
              <Input />
            </Form.Item>
          </Row>
          <Row gutter={24}>
            <Form.Item
              name="AccountNumber"
              label="AccountNumber"
              rules={[
                {
                  required: false,
                  message: "Please input your AccountNumber!",
                  whitespace: true,
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="CustomerName"
              label="CustomerName"
              rules={[
                {
                  required: false,
                  message: "Please input your CustomerName!",
                  whitespace: true,
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="VATID"
              label="VATID"
              rules={[
                {
                  required: false,
                  message: "Please input your VATID!",
                  whitespace: true,
                },
              ]}
            >
              <Input />
            </Form.Item>
          </Row>
          <Row gutter={24}>
            <Form.Item
              name="AddressLine1"
              label="AddressLine1"
              rules={[
                {
                  required: false,
                  message: "Please input your AddressLine1!",
                  whitespace: true,
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="AddressLine2"
              label="AddressLine2"
              rules={[
                {
                  required: false,
                  message: "Please input your AddressLine2!",
                  whitespace: true,
                },
              ]}
            >
              <Input />
            </Form.Item>
          </Row>
          <Row gutter={24}>
            <Form.Item
              name="AddressLine3"
              label="AddressLine3"
              rules={[
                {
                  required: false,
                  message: "Please input your AddressLine3!",
                  whitespace: true,
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="AddressLine4"
              label="AddressLine4"
              rules={[
                {
                  required: false,
                  message: "Please input your AddressLine4!",
                  whitespace: true,
                },
              ]}
            >
              <Input />
            </Form.Item>
          </Row>
          <Row gutter={24}>
            <Form.Item
              name="City"
              label="City"
              rules={[
                {
                  required: false,
                  message: "Please input your City!",
                  whitespace: true,
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="Country"
              label="Country"
              rules={[
                {
                  required: false,
                  message: "Please input your Country!",
                  whitespace: true,
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="PostCode"
              label="PostCode"
              rules={[
                {
                  required: false,
                  message: "Please input your PostCode!",
                  whitespace: true,
                },
              ]}
            >
              <Input />
            </Form.Item>
          </Row>
          <Row gutter={24}>
            <Form.Item
              name="RateScheme"
              label="RateScheme"
              rules={[
                { required: false, message: "Please select RateScheme!" },
              ]}
            >
              <Select placeholder="select your RateScheme" showSearch>
                <Option value="RateScheme1">RateScheme1</Option>
                <Option value="RateScheme2">RateScheme2</Option>
                <Option value="RateScheme3">RateScheme3</Option>
              </Select>
            </Form.Item>
          </Row>
          <Row gutter={24}>
            <Form.Item
              name="Currency"
              label="Currency"
              rules={[
                {
                  required: false,
                  message: "Please input your Currency!",
                  whitespace: true,
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="CustomerManager"
              label="CustomerManager"
              rules={[
                {
                  required: false,
                  message: "Please input your CustomerManager!",
                  whitespace: true,
                },
              ]}
            >
              <Input />
            </Form.Item>
          </Row>
          <Row gutter={24}>
            <Form.Item
              name="Email"
              label="Email"
              rules={[
                {
                  type: "email",
                  message: "The input is not valid E-mail!",
                },
                {
                  required: false,
                  message: "Please input your E-mail!",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="InvoiceGroup"
              label="InvoiceGroup"
              rules={[
                {
                  required: false,
                  message: "Please input your InvoiceGroup!",
                  whitespace: true,
                },
              ]}
            >
              <Input />
            </Form.Item>
          </Row>
          <Row gutter={24}>
            <Form.Item
              name="InvoiceDay"
              label="InvoiceDay"
              rules={[
                {
                  required: false,
                  message: "Please input your InvoiceDay!",
                  whitespace: true,
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="ExpiryDate"
              label="ExpiryDate"
              rules={[
                {
                  required: false,
                  message: "Please input your ExpiryDate!",
                  whitespace: true,
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="ExternalRefName"
              label="ExternalRefName"
              rules={[
                {
                  required: false,
                  message: "Please input your ExternalRefName!",
                  whitespace: true,
                },
              ]}
            >
              <Input />
            </Form.Item>
          </Row>
          <Row gutter={24}>
            <Form.Item
              name="CustomFields"
              label="CustomFields"
              rules={[
                { required: false, message: "Please select CustomFields!" },
              ]}
            >
              <Select placeholder="select your CustomFields">
                <Option value="CustomFields1">CustomFields1</Option>
                <Option value="CustomFields2">CustomFields2</Option>
                <Option value="CustomFields3">CustomFields3</Option>
              </Select>
            </Form.Item>
            <Form.Item
              name="Sites"
              label="Sites"
              rules={[{ required: false, message: "Please select Sites!" }]}
            >
              <Select placeholder="select your Sites">
                <Option value="Sites1">Sites1</Option>
                <Option value="Sites2">Sites2</Option>
                <Option value="Sites3">Sites3</Option>
              </Select>
            </Form.Item>
          </Row>

          {/* <Form.Item
            name="password"
            label="Password"
            rules={[
                {
                required: false,
                message: "Please input your password!",
                },
            ]}
            hasFeedback
            >
            <Input.Password />
            </Form.Item>

            <Form.Item
            name="confirm"
            label="Confirm Password"
            dependencies={["password"]}
            hasFeedback
            rules={[
                {
                required: false,
                message: "Please confirm your password!",
                },
                ({ getFieldValue }) => ({
                validator(_, value) {
                    if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                    }
                    return Promise.reject(
                    new Error("The new password that you entered do not match!")
                    );
                },
                }),
            ]}
            >
            <Input.Password />
            </Form.Item>

            <Form.Item
            name="nickname"
            label="Nickname"
            tooltip="What do you want others to call you?"
            rules={[
                {
                required: false,
                message: "Please input your nickname!",
                whitespace: true,
                },
            ]}
            >
            <Input />
            </Form.Item>

            <Form.Item
            name="residence"
            label="Habitual Residence"
            rules={[
                {
                type: "array",
                required: false,
                message: "Please select your habitual residence!",
                },
            ]}
            >
            <Cascader options={residences} />
            </Form.Item>

            <Form.Item
            name="phone"
            label="Phone Number"
            rules={[
                { required: false, message: "Please input your phone number!" },
            ]}
            >
            <Input addonBefore={prefixSelector} style={{ width: "100%" }} />
            </Form.Item>

            <Form.Item
            name="donation"
            label="Donation"
            rules={[{ required: false, message: "Please input donation amount!" }]}
            >
            <InputNumber addonAfter={suffixSelector} style={{ width: "100%" }} />
            </Form.Item>

            <Form.Item
            name="website"
            label="Website"
            rules={[{ required: false, message: "Please input website!" }]}
            >
            <AutoComplete
                options={websiteOptions}
                onChange={onWebsiteChange}
                placeholder="website"
            >
                <Input />
            </AutoComplete>
            </Form.Item>

            <Form.Item
            name="intro"
            label="Intro"
            rules={[{ required: false, message: "Please input Intro" }]}
            >
            <Input.TextArea showCount maxLength={100} />
            </Form.Item>

            <Form.Item
            name="gender"
            label="Gender"
            rules={[{ required: false, message: "Please select gender!" }]}
            >
            <Select placeholder="select your gender">
                <Option value="male">Male</Option>
                <Option value="female">Female</Option>
                <Option value="other">Other</Option>
            </Select>
            </Form.Item>

            <Form.Item
            label="Captcha"
            extra="We must make sure that your are a human."
            >
            <Row gutter={8}>
                <Col span={12}>
                <Form.Item
                    name="captcha"
                    noStyle
                    rules={[
                    {
                        required: false,
                        message: "Please input the captcha you got!",
                    },
                    ]}
                >
                    <Input />
                </Form.Item>
                </Col>
                <Col span={12}>
                <Button>Get captcha</Button>
                </Col>
            </Row>
            </Form.Item>

            <Form.Item
            name="agreement"
            valuePropName="checked"
            rules={[
                {
                validator: (_, value) =>
                    value
                    ? Promise.resolve()
                    : Promise.reject(new Error("Should accept agreement")),
                },
            ]}
            {...tailFormItemLayout}
            >
            <Checkbox>
                I have read the <a href="">agreement</a>
            </Checkbox>
            </Form.Item> */}
          <Form.Item {...tailFormItemLayout}>
            <Button type="default" htmlType="submit">
              Create Customer
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default CreateCustomer;
