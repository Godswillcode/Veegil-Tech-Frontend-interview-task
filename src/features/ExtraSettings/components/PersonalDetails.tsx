import { Form, Input, Select } from "antd";
import { generalValidationRules, textInputValidationRules } from "src/utils/formHelpers/validations";

export const PersonalDetails = () => {
  return (
    <Form layout="vertical" requiredMark={false}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <Form.Item
          name="firstName"
          label="First Name"
          rules={textInputValidationRules}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="lastName"
          label="Last Name"
          rules={textInputValidationRules}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="gender"
          label="Gender"
          rules={generalValidationRules}
        >
          <Select
          placeholder="Select"
            options={[
              { label: "Male", value: "male" },
              { label: "Female", value: "female" },
            ]}
            
          />
        </Form.Item>
      </div>
    </Form>
  );
};
