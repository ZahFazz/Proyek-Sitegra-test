import type { NextPage } from "next";
import { useRouter } from 'next/router';
import { useCallback, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button } from "react-bootstrap";
import Component from "./component";

const InputField: NextPage = () => {

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const [selectedOption, setSelectedOption] = useState('');

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const router = useRouter();

  const onForgotPasswordTextClick = useCallback(() => {
    // Please sync "Forgot Password (email)" to the project
  }, []);

  // Function to handle changes in the email input
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  // Function to handle changes in the password input
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async () => {
    if (email.trim() === '' || password.trim() === '') {
      // If email or password is empty, do not proceed with redirection
      alert('Please fill in both email and password fields.');
      return;
    }
    switch (selectedOption) {
      case 'dosen':
        // Redirect to Dosen page
        break;
      case 'mahasiswa':
        router.push('/display-mahasiswa');
        break;
      case 'kepala_jurusan':
        router.push('/display-kajur');
        break;
      default:
        // Do something if none of the options match
        break;
    }
  };

  const onButtonClick = useCallback(() => {
    // Please sync "Display Dosen" to the project
  }, []);

  return (
    <section className="self-stretch flex flex-row items-start justify-center max-w-full">
      <form className="m-0 w-[622px] rounded-21xl bg-white shadow-[5px_4px_4px_rgba(0,_0,_0,_0.25)] box-border flex flex-col items-start justify-start pt-[47px] px-[31px] pb-16 gap-[19px] max-w-full border-[1px] border-solid border-gray-200 mq450:pt-[31px] mq450:pb-[42px] mq450:box-border">
        <div className="w-[622px] h-[439px] relative rounded-21xl bg-white shadow-[5px_4px_4px_rgba(0,_0,_0,_0.25)] box-border hidden max-w-full border-[1px] border-solid border-gray-200" />
        <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[21px] box-border max-w-full">
          <h1 className="m-0 flex-1 relative text-5xl tracking-[-0.01em] leading-[36px] font-bold font-body-h4 text-black text-center inline-block max-w-full z-[1] mq450:text-lgi mq450:leading-[29px]">
            Login
          </h1>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start py-0 px-8 box-border max-w-full">
          <div className="flex-1 flex flex-col items-start justify-start gap-[25px] max-w-full">
            <Form.Select 
            className="self-stretch h-10 relative font-body-h4 text-mini text-gray-100 max-w-full"
            value= {selectedOption}
            onChange={handleSelectChange}
            >
              <option value="dosen">Dosen</option>
              <option value="mahasiswa">Mahasiswa</option>
              <option value="kepala_jurusan">Kepala Jurusan</option>
            </Form.Select>
            <Component handleEmailChange={handleEmailChange} />
            <div className="self-stretch flex flex-col items-start justify-start max-w-full">
              <Form className="[border:none] bg-[transparent] self-stretch font-body-h4 text-mini text-gray-100 max-w-full z-[1]">
                <Form.Control type="password" placeholder="Password" onChange={handlePasswordChange}/>
              </Form>
              <div className="self-stretch flex flex-row items-start justify-end">
                <div
                  className="w-[101px] relative text-xs tracking-[-0.01em] leading-[24px] font-body-h4 text-gray-100 text-left inline-block shrink-0 cursor-pointer z-[1]"
                  onClick={onForgotPasswordTextClick}
                >
                  Forgot Password
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-center">
          <Button
            onClick={handleSubmit}
          >
            Login
          </Button>
        </div>
      </form>
    </section>
  );
};

export default InputField;
