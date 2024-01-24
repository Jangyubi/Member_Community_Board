import TextInput from "../components/TextInput";

const SignUp = () => {
  return (
    <>
      <section className="flex justify-center items-center h-screen bg-gray-100">
        <div className="max-w-md w-full bg-white rounded p-6 space-y-4">
          <div className="mb-4">
            <p className="text-gray-600">밀키웨이 🌠</p>
            <h2 className="text-xl font-bold">회원가입</h2>
          </div>
          <TextInput placeholder={"아이디를 입력해주세요"} />
          <TextInput placeholder={"비밀번호를 입력해주세요"} />
          <TextInput
            placeholder={"비밀번호 확인을 위해 한 번 더 입력해주세요"}
          />
          <TextInput placeholder={"닉네임을 입력해주세요"} />
          <div>
            <button className="w-full py-4 bg-blue-600 hover:bg-blue-700 rounded text-sm font-bold text-gray-50 transition duration-200">
              회원가입
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignUp;
