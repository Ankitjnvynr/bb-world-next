import {
    Input,
    Checkbox,
    Button,
    Typography,
  } from "@material-tailwind/react";
  import { Link } from "react-router-dom";
  
  
  export function LogIN() {
    return (
      <section className=" flex overflow-x-hidden gap-20  bg-[url('/images/Login/bg-image.jpg')] bg-cover h-screen   xl:bg-[url('/images/Login/bg-image.jpg')] xl:bg-[100vw] lg:bg-[] ">
        <div className="w-full tab:w-[90rem] mt-7 md:w-[70rem] md:h-[50rem] md:mt-40  xs:mt-10 lg:w-[25rem] xl:w-[35rem] xl:mt-8 lg:mt-4 ">
          <div className="text-center">
            <Typography variant="h2" className="font-bold mb-4 text-blue-950 md:text-7xl lg:text-4xl xl:text-3xl">Log In</Typography>
            <Typography variant="paragraph" color="blue-gray" className="text-lg font-normal md:text-2xl lg:text-lg tab:text-4xl xl:text-lg">Enter your email and password to Log In.</Typography>
          </div>
          <form className="mt-8 mb-2 mx-auto w-80 md:w-[27rem] tab:w-[40rem] lg:w-[20rem] xl:w-80 max-w-screen-lg xl:mt-4 ">
            <div className="mb-1 flex flex-col gap-6">
              <Typography variant="small" color="blue-gray" className="-mb-3 font-medium md:text-2xl tab:text-4xl xl:text-xl lg:text-lg">
                Your email
              </Typography>
              <Input
                size="lg"
                placeholder="name@mail.com"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900 ]"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
              <Typography variant="small" color="blue-gray" className="-mb-3 font-medium md:text-2xl tab:text-4xl xl:text-xl lg:text-lg">
                Password
              </Typography>
              <Input
                type="password"
                size="lg"
                placeholder="********"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
            </div>
            
            <div className="flex items-center gap-2">
                        <Checkbox
                            containerProps={{
                                className: "flex items-center"
                            }}
                        />
                        <span className="text-sm font-medium text-gray-700 md:text-lg tab:text-xl xl:text-lg lg:text-lg">
                            I agree to the&nbsp;
                            <a href="#" className="text-black underline hover:text-gray-900 lg:text-lg">
                                Terms and Conditions
                            </a>
                        </span>
                    </div>
            
            <Button className="mt-6 bg-blue-950 md:text-xl tab:text-2xl tab:py-4 xl:text-lg xl:mt-2 xl:p-1 lg:text-lg lg:p-1" fullWidth>
              Log In
            </Button>
  
            <div className="flex items-center justify-between gap-2 mt-6">
                        <div className="flex items-center gap-2">
                            {/* <Checkbox
                                containerProps={{ className: "-ml-2.5" }}
                            /> */}
                            {/* <Typography
                                variant="small"
                                color="gray"
                                className="flex items-center justify-start font-medium md:text-lg surface:text-xl"
                            >
                                Subscribe me to newsletter
                            </Typography> */}
                        </div>
                        <Typography variant="small" className="font-medium text-gray-900 md:text-lg tab:text-xl xl:text-lg lg:text-lg">
                            <a href="#">
                                Forgot Password
                            </a>
                        </Typography>
                    </div>
            <div className="space-y-5 mt-8 md:space-y-10 xl:space-y-5 ">
              <Button size="lg" color="white" className="flex items-center gap-2 justify-center p-2 lg:gap-3 lg:p-4 xl:p-2 " fullWidth>
                <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_1156_824)">
                    <path d="M16.3442 8.18429C16.3442 7.64047 16.3001 7.09371 16.206 6.55872H8.66016V9.63937H12.9813C12.802 10.6329 12.2258 11.5119 11.3822 12.0704V14.0693H13.9602C15.4741 12.6759 16.3442 10.6182 16.3442 8.18429Z" fill="#4285F4" />
                    <path d="M8.65974 16.0006C10.8174 16.0006 12.637 15.2922 13.9627 14.0693L11.3847 12.0704C10.6675 12.5584 9.7415 12.8347 8.66268 12.8347C6.5756 12.8347 4.80598 11.4266 4.17104 9.53357H1.51074V11.5942C2.86882 14.2956 5.63494 16.0006 8.65974 16.0006Z" fill="#34A853" />
                    <path d="M4.16852 9.53356C3.83341 8.53999 3.83341 7.46411 4.16852 6.47054V4.40991H1.51116C0.376489 6.67043 0.376489 9.33367 1.51116 11.5942L4.16852 9.53356Z" fill="#FBBC04" />
                    <path d="M8.65974 3.16644C9.80029 3.1488 10.9026 3.57798 11.7286 4.36578L14.0127 2.08174C12.5664 0.72367 10.6469 -0.0229773 8.65974 0.000539111C5.63494 0.000539111 2.86882 1.70548 1.51074 4.40987L4.1681 6.4705C4.8001 4.57449 6.57266 3.16644 8.65974 3.16644Z" fill="#EA4335" />
                  </g>
                  <defs>
                    <clipPath id="clip0_1156_824">
                      <rect width="16" height="16" fill="white" transform="translate(0.5)" />
                    </clipPath>
                  </defs>
                </svg>
                <span className="md:text-lg tab:text-2xl xl:text-lg lg:text-lg">Sign in With Google</span>
              </Button>
              <Button size="lg" color="white" className="flex items-center gap-2 justify-center lg:p-4 xl:p-2" fullWidth>
                <img src="./images/Login/twitter-logo.avif" height={24} width={24} alt="" />
                <span className="md:text-lg tab:text-2xl xl:text-lg lg:text-lg">Sign in With Twitter</span>
              </Button>
            </div>
            <Typography variant="paragraph" className="text-center text-blue-gray-500 font-medium mt-4 md:text-xl tab:text-3xl tab:mt-8 xl:text-xl lg:text-lg">
              Not registered?
              <Link to="/sign-up" className="text-gray-900 ml-1 tab:text-3xl xl:text-xl lg:text-lg">Create account</Link>
            </Typography>
          </form>
  
        </div>
        <div className="w-2/5 h-full hidden lg:block">
          {/* <img
            src="/img/pattern.png"
            className="h-full w-full object-cover rounded-3xl"
          /> */}
        </div>
  
      </section>
    );
  }
  
  export default LogIN;
  