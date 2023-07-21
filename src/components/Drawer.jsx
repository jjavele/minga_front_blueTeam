import { useNavigate } from "react-router-dom";
import { Link as Anchor } from "react-router-dom";
export default function Drawer({ isOpen, setIsOpen }) {
  let user = JSON.parse(localStorage.getItem("user"));
  console.log(localStorage.getItem("user"));
  let role = user?.role || 0;
  console.log(user);

  const isLoggedIn = () => {
    const token = localStorage.getItem("token");
    const user = localStorage.getItem("user");
    return token && user;
  };

  const navigate = useNavigate();
  function backHome() {
    localStorage.clear();
    navigate("/");
  }

  let token = localStorage.getItem("token");

  return (
    <div className="z-10 drawer sm:flex text-center sm:text-start min-w-[100%] sm:min-w-[410px] h-[100vh] flex-col sm:items-start gap-[147px] p-6 bg-gradient-to-b  bg-[#4338CA] fixed top-0 left-0 shadow-2xl">
      <div className="flex h-[525px] flex-col items-center sm:items-start gap-8 self-stretch">
        <div className="flex w-full justify-end">
          <img
            src="/public/filled.png"
            onClick={() => setIsOpen(!isOpen)}
            className="sm:hidden flex justify-end ms-[20%] h-[24px]"
          />
        </div>
        <div className="flex flex-row items-center text-center lg:justify-between sm:w-[400px] w-[250px]">
          <img src={user?.photo} className="w-[50px] mb-2 sm:m-0" />
          <div className="flex flex-col ms-3">
            <p className="text-[14px] text-[#fff]">{user?.email}</p>
          </div>

          <img
            src="/src/assets/images/filled.svg"
            onClick={() => setIsOpen(!isOpen)}
            className="hidden sm:block ms-[20%] w-[24px] h-[24px] hoover:"
          />
        </div>
        <div className="lg:text-lg flex flex-col">
          <Anchor>
            <p className="p-3 hover:bg-white text-[#fff] hover:text-[#4338CA] w-[250px] sm:w-[400px] rounded-md">
              Home
            </p>
          </Anchor>
          {!token && (
            <Anchor to="/register">
              <p className="p-3  hover:bg-white text-[#fff] hover:text-[#4338CA] w-[250px] sm:w-[400px] rounded-md">
                Register
              </p>
            </Anchor>
          )}
          {!token && (
            <Anchor to="/login">
              <p className="p-3  hover:bg-white text-[#fff] hover:text-[#4338CA] w-[250px] sm:w-[400px] rounded-md">
                Log in
              </p>
            </Anchor>
          )}

          {role == 1 || role == 2 || role == 3 ? (
            <>
              <Anchor to="/manga-form">
                {" "}
                <p className="p-3  hover:bg-white text-[#fff] hover:text-[#4338CA] w-[250px] sm:w-[400px] rounded-md">
                  New Manga
                </p>
              </Anchor>
              <Anchor to="/:manga_id/chapter-form">
                <p className="p-3  hover:bg-white text-[#fff] hover:text-[#4338CA] w-[250px] sm:w-[400px] rounded-md">
                  New Chapter
                </p>
              </Anchor>
              <Anchor to="/me">
                <p className="p-3  hover:bg-white text-[#fff] hover:text-[#4338CA] w-[250px] sm:w-[400px] rounded-md">
                  Profile
                </p>
              </Anchor>
            </>
          ) : (
            ""
          )}
          {isLoggedIn() ? (
            <Anchor to="/mangas" className="p-3  hover:bg-white text-[#fff] hover:text-[#4338CA] w-[250px] sm:w-[400px] rounded-md">
              Mangas
            </Anchor>
          ) : null}
          {isLoggedIn() ? (
            <Anchor to="/mymangas" className="p-3  hover:bg-white text-[#fff] hover:text-[#4338CA] w-[250px] sm:w-[400px] rounded-md">
              My Mangas
            </Anchor>
          ) : null}
          {isLoggedIn() ? (
            <Anchor className="p-3  hover:bg-white text-[#fff] hover:text-[#4338CA] w-[250px] sm:w-[400px] rounded-md">
              Favorites
            </Anchor>
          ): null}
          {isLoggedIn() ? (
            <Anchor
              onClick={backHome}
              className="p-3  hover:bg-white text-[#fff] hover:text-[#4338CA] w-[250px] sm:w-[400px] rounded-md"
            >
              Sign Out
            </Anchor>
          ) : null}
        </div>
      </div>
    </div>
  );
}
