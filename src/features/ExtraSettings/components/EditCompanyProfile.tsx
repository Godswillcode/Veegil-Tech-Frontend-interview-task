import { Form, Input, Modal } from "antd";
import { AppButton } from "src/components/button/AppButton";
import { IdentifierProps } from "src/types";
import { textInputValidationRules } from "src/utils/formHelpers/validations";

export const EditCompanyProfile = ({ handleClose, open }: IdentifierProps) => {
  return (
    <Modal
      open={open}
      onCancel={() => handleClose()}
      footer={null}
      title="Edit Company Profile"
      style={{ top: 10 }}
    >
      <Form layout="vertical" className="mt-5" requiredMark={false}>
        <Form.Item
          name="name"
          label="Company Name"
          rules={textInputValidationRules}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="phone"
          label="Phone Number"
          rules={textInputValidationRules}
        >
          <Input type="tel" />
        </Form.Item>
        <Form.Item name="file" label="Upload Logo">
          <Input type="file" />
        </Form.Item>
        <div className="flex justify-end">
          <AppButton type="submit" />
        </div>
      </Form>
    </Modal>
  );
};
