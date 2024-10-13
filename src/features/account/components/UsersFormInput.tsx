import { Select, Form, Spin } from "antd";
import React, { useState } from "react";

import { useDebounce } from "src/hooks/useDebounce";
import { useGetAllUsers } from "../hooks/useGetAllUsers";
import { IAllUsersProps } from "../types";
import { generalValidationRules, generalValidationRulesOpt } from "src/utils/formHelpers/validations";

export const UsersFormInput: React.FC<{
  Form: typeof Form;
  showLabel?: boolean;
  control?: { label: string; name: string; multiple?: boolean };
  optional?: boolean;
  handleSelect?: (val: string, allUsers?: IAllUsersProps) => void;
  handleClear?: () => void;
}> = ({
  Form,
  showLabel = true,
  control,
  optional = false,
  handleSelect,
  handleClear,
}) => {
  const [searchTerm, setSearchTerm] = useState<string | number>("");
  const debouncedSearchTerm: string | number = useDebounce<string | number>(searchTerm);

  const { data, isFetching, isSuccess } = useGetAllUsers({
    phone: debouncedSearchTerm,
  });

  const handleSearch = (val: string) => {
    setSearchTerm(val);
  };

  const handleClearFunction = () => {
    setSearchTerm("");
    handleClear && handleClear();
  };

  return (
    <Form.Item
      name={control?.name ?? "userId"}
      label={showLabel ? control?.label ?? "Select User" : null}
      rules={optional ? generalValidationRulesOpt : generalValidationRules}
    >
      <Select
        mode={control?.multiple ? "multiple" : undefined}
        placeholder="Type in account number"
        loading={isFetching}
        showSearch
        allowClear
        onClear={() => handleClearFunction()}
        onSearch={handleSearch}
        className="rounded border-slate-400 w-full"
        defaultActiveFirstOption={false}
        showArrow={false}
        filterOption={false}
        onSelect={(val: string) => {
          const user = data?.find((item) => item._id === val);
          handleSelect?.(val, user);
        }}
      >
        {isSuccess ? (
          data.map((item) => (
            <Select.Option key={item._id} value={item._id}>
              {item.full_name} ({item.phone}) 
            </Select.Option>
          ))
        ) : (
          <div className="flex justify-center items-center w-full">
            <Spin size="small" />
          </div>
        )}
      </Select>
    </Form.Item>
  );
};
