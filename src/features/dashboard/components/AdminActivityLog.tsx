import { Empty, Skeleton } from "antd";

export const AdminActivityLog = () => {
  return (
    <div className="rounded shadow-sm border p-3">
      <div className="flex justify-between">
        <div className="flex items-center gap-2">
          <i className="ri-play-fill text-lg"></i>
          <span className="text-base">Latest Activities</span>
        </div>
      </div>

      <table className="w-full text-left mt-2">
        <thead>
          <tr className="bg-gray-200 text-sm rounded">
            <th className="py-1 font-normal pl-2">Date</th>
            <th className="py-1 font-normal">User</th>
            <th className="py-1 font-normal pr-2">Details</th>
          </tr>
        </thead>
        <tbody>
          <Skeleton active loading={false} className="mt-3">
            {[1, 2].length === 0 ? (
              <div className="flex justify-center mt-10">
                <Empty />
              </div>
            ) : (
              [1, 2, 3, 4, 5].map((item) => (
                <tr key={item} className="text-xs text-accent">
                  <td className="p-[5px]">2018/10/02 10:57:46</td>
                  <td className="p-[5px]">Godswill</td>
                  <td className="p-[5px]">sold home Villa property</td>
                </tr>
              ))
            )}
          </Skeleton>
        </tbody>
      </table>
    </div>
  );
};
