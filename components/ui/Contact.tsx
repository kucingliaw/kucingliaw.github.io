import { Mail, MapPin, PhoneCall } from "lucide-react";
import { Input } from "./input";
import { Textarea } from "./textarea";
import { Button } from "./button";

const Contact = () => {
  return (
    <div className="flex flex-col gap-4 w-full pt-6">
      <h2 className="text-2xl font-bold">Contact Me</h2>
      <div className="sm:grid grid-cols-2 gap-4">
        <div className="col-span-1">
          <div>
            <div
              className="flex items-center gap-4 py-4
          "
            >
              <PhoneCall />
              <div>
                <h4 className="text-base font-medium">Phone</h4>
                <p className="text-sm text-gray-500 dark:text-gray-300">
                  0878 3924 4474
                </p>
              </div>
            </div>
          </div>
          <div>
            <div
              className="flex items-center gap-4 py-4
          "
            >
              <Mail />
              <div>
                <h4 className="text-base font-medium">Email</h4>
                <p className="text-sm text-gray-500 dark:text-gray-300">
                  wawal.wiguna@gmail.com
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-4 py-4">
              <MapPin />
              <div>
                <h4 className="text-base font-medium">Location</h4>
                <p className="text-sm text-gray-500 dark:text-gray-300">
                  Bandung, Indonesia
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-1">
          <form action="" className="flex w-full flex-col gap-4">
            <Input type="text" id="name" name="name" placeholder="Name" />
            <Input type="email" id="email" name="email" placeholder="Email" />
            <Textarea
              id="message"
              name="message"
              placeholder="Message"
              className="w-full h-30"
            />
            <Button type="submit" className="w-fit cursor-pointer">
              Submit
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
