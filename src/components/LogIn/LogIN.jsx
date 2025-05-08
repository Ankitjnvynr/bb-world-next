import {
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

export function LogIN() {
  return (
    <section className="flex items-center justify-center bg-cover bg-[url('/images/Login/bg-image.jpg')] h-screen">
      <div className="w-full max-w-lg p-8 bg-white bg-opacity-90 rounded-lg shadow-lg backdrop-blur-sm">
        <div className="text-center mb-6">
          <Typography
            variant="h2"
            className="font-bold text-blue-950 text-3xl md:text-4xl"
          >
            Log In
          </Typography>
          <Typography
            variant="paragraph"
            color="blue-gray"
            className="text-lg font-normal mt-2"
          >
            Enter your email and password to Log In.
          </Typography>
        </div>

        <form className="space-y-6">
          <div className="space-y-4">
            <div>
              <Typography variant="small" color="blue-gray" className="font-medium">
                Your email
              </Typography>
              <Input
                size="lg"
                placeholder="name@mail.com"
                className="!border-blue-gray-200 focus:!border-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
            </div>

            <div>
              <Typography variant="small" color="blue-gray" className="font-medium">
                Password
              </Typography>
              <Input
                type="password"
                size="lg"
                placeholder="********"
                className="!border-blue-gray-200 focus:!border-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
            </div>
          </div>

          <div className="flex items-center gap-2 mt-4">
            <Checkbox />
            <Typography variant="small" className="text-gray-700">
              I agree to the&nbsp;
              <a href="#" className="text-blue-600 underline">
                Terms and Conditions
              </a>
            </Typography>
          </div>

          <Button
            className="w-full mt-4 bg-blue-950 text-white hover:bg-blue-800"
            fullWidth
          >
            Log In
          </Button>

          <div className="flex justify-between mt-4">
            <Typography variant="small">
              <a href="#" className="text-blue-600 underline">
                Forgot Password?
              </a>
            </Typography>
          </div>

          <div className="space-y-4 mt-6">
            <Button
              size="lg"
              color="white"
              className="flex items-center gap-2 justify-center p-2 border border-blue-gray-200 hover:bg-gray-100"
              fullWidth
            >
              <svg width="17" height="16" viewBox="0 0 17 16" fill="none">
                <path
                  d="M16.3442 8.18429C16.3442 7.64047 16.3001 7.09371 16.206 6.55872H8.66016V9.63937H12.9813C12.802 10.6329 12.2258 11.5119 11.3822 12.0704V14.0693H13.9602C15.4741 12.6759 16.3442 10.6182 16.3442 8.18429Z"
                  fill="#4285F4"
                />
                <path
                  d="M8.65974 16.0006C10.8174 16.0006 12.637 15.2922 13.9627 14.0693L11.3847 12.0704C10.6675 12.5584 9.7415 12.8347 8.66268 12.8347C6.5756 12.8347 4.80598 11.4266 4.17104 9.53357H1.51074V11.5942C2.86882 14.2956 5.63494 16.0006 8.65974 16.0006Z"
                  fill="#34A853"
                />
              </svg>
              <span>Sign in With Google</span>
            </Button>
            <Button
              size="lg"
              color="white"
              className="flex items-center gap-2 justify-center border border-blue-gray-200 hover:bg-gray-100"
              fullWidth
            >
              <img
                src="/images/Login/twitter-logo.avif"
                alt="Twitter Logo"
                className="h-6 w-6"
              />
              <span>Sign in With Twitter</span>
            </Button>
          </div>
        </form>

        <Typography
          variant="paragraph"
          className="text-center text-blue-gray-500 font-medium mt-6"
        >
          Not registered?
          <Link to="/sign-up" className="text-blue-600 ml-1 underline">
            Create account
          </Link>
        </Typography>
      </div>
    </section>
  );
}

export default LogIN;
