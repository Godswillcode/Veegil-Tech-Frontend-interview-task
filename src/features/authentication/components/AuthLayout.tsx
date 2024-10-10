import authBg from "../assets/authBg.jpg";
import netBg from "src/assets/images/lightBg.png";

export interface IProps {
  children: React.ReactNode;
  title: string;
  description: string;
}

export const AuthLayout = ({ children, description }: IProps) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 h-screen fixed w-full">
      <div
        className="w-full hidden lg:flex bg-cover bg-center bg-no-repeat h-screen"
        style={{ backgroundImage: `url(${authBg})` }}
      ></div>
      <div
        className="Container w-full h-screen py-10 bg-cover bg-no-repeat text-center relative overflow-x-hidden overflow-y-auto"
        style={{ backgroundImage: `url(${netBg})` }}
      >
        <div className="formWrap" style={{ maxWidth: 500 }}>
          <div>
            <div
              style={{
                boxShadow:
                  "-2px 2px 5px rgba(0,0,0,0.12), 1px 1px 2px rgba(0,0,0,0.24)",
              }}
              className="pb-5 pt-3 rounded-md px-4 md:px-8"
            >
              
              <div className="bg-[#E8F0FE] rounded text-xl mb-4 mt-6 md:text-2xl font-bold inline-block py-[2.5px] px-4">
              ECO FINANCE
              </div>
              <p className="pt-2 pb-7">{description}</p>

              <div>{children}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
