import { Modal } from "antd";
import { IdentifierProps } from "src/types";
import { searchData, searchObjectItem } from ".";
import { ChangeEvent, useState } from "react";
import { Link } from "react-router-dom";

export const SearchModal = ({ handleClose, open }: IdentifierProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<searchObjectItem[]>([]);

  const data = searchData;
  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    setSearchQuery(query);
    const filteredResults = data.filter((obj) =>
      obj.name.toLowerCase().includes(query.toLowerCase())
    );
    setSearchResults(filteredResults);
  };
  return (
    <Modal
      open={open}
      onCancel={() => handleClose()}
      footer={null}
      style={{ top: 15 }}
      title={
        <div className="active w-full flex items-center notranslate border-b pb-2">
          <i
            className="iconify text-xl cursor-pointer mr-4 font-bold"
            data-icon="fluent:search-28-filled"
          ></i>
          <input
            type="text"
            name="search"
            id="search"
            placeholder="What are you looking for ?"
            className="bg-transparent flex-1 focus:outline-none text-base notranslate"
            value={searchQuery}
            onChange={handleSearch}
          />
        </div>
      }
    >
      <div className="h-48 overflow-auto scrollBar">
        {searchResults.length > 0 ? (
          <ul className="mt-4">
            {searchResults.map((obj) => (
              <li key={obj.name} className="border-0 border-b px-9 py-2">
                <Link to={obj.link} className="text-sm" onClick={() => handleClose()}>
                  {obj.name}
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <div className="flex items-center text-center h-48 justify-center">
            <p className="text-lg text-slate-400">No results found</p>
          </div>
        )}
      </div>
    </Modal>
  );
};
