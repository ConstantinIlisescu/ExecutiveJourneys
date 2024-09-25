import Container from "@/components/ui/container";

const Footer = () => {
  return (
    <div className="bg-dark">
      <img
        src="images/executive-logo.jpg"
        alt=""
        className="w-60 rounded-3xl mx-auto mb-16 shadow-lg"
      />
      <Container>
        <div className="h-[1px] bg-gray-600"></div>
        <div className="flex flex-col gap-4 md:flex-row justify-between py-7">
          <div className="flex flex-col gap-2 md:flex-row ">
            <span className="montserrat-medium text-light">Contact info: </span>
            <a
              className="hover:opacity-50 transition-all text-call-to-action"
              href="mailto:ionugabi@yahoo.co.uk"
            >
              ionugabi@yahoo.co.uk
            </a>
            <span className="hidden text-light md:block">|</span>
            <a
              className="hover:opacity-50 transition-all text-call-to-action"
              href="tel:00447916186677"
            >
              07916 186 677
            </a>
          </div>
          <div className="flex gap-3">
            <span className="montserrat-medium text-light">Follow</span>
            <a
              className="flex items-center justify-center single-media hover:opacity-50 transition-all"
              href="https://wa.me/00447916186677"
              target="_blank"
            >
              <svg width="17.117" height="17.118" viewBox="0 0 32 32">
                <path
                  d="M16.001 0C7.161 0 0 7.161 0 16.001c0 2.818.739 5.474 2.048 7.784L.107 30.929c-.169.575.384 1.127.96.959l7.154-1.937A15.936 15.936 0 0016.001 32c8.84 0 16-7.161 16-15.999S24.841 0 16.001 0zm9.31 22.992c-.395 1.111-2.007 2.111-3.268 2.334-.871.147-1.989.269-5.767-1.228-4.832-2.001-7.905-6.906-8.149-7.228-.245-.322-1.943-2.589-1.943-4.94 0-2.351 1.228-3.51 1.661-3.995.434-.485.947-.611 1.265-.611.316 0 .631.003.907.016.29.014.68-.109 1.063.807.395.927 1.351 3.156 1.469 3.386.118.23.197.512.039.832-.157.321-.236.514-.474.788-.237.275-.503.614-.719.826-.241.235-.494.489-.214.963.279.473 1.236 2.036 2.654 3.297 1.83 1.627 3.356 2.137 3.85 2.372.493.236.773.196 1.063-.118.291-.315 1.228-1.425 1.556-1.918.33-.493.659-.422.988-.321.328.102 2.069.975 2.424 1.152.355.177.593.269.683.421.087.151.087.872-.309 1.983z"
                  transform="translate(0 0)"
                  fill="rgb(212, 175, 55)"
                />
              </svg>
            </a>
            <a
              className="flex items-center justify-center single-media hover:opacity-50 transition-all"
              href="https://www.instagram.com/executive_journeys"
              target="_blank"
            >
              <svg width="17.117" height="17.118" viewBox="0 0 17.117 17.118">
                <path
                  d="M8.559,153.878c2.285,0,2.556.009,3.459.05a4.738,4.738,0,0,1,1.589.295,2.834,2.834,0,0,1,1.624,1.624,4.739,4.739,0,0,1,.295,1.589c.041.9.05,1.173.05,3.459s-.009,2.556-.05,3.459a4.739,4.739,0,0,1-.295,1.589,2.834,2.834,0,0,1-1.624,1.624,4.739,4.739,0,0,1-1.589.295c-.9.041-1.173.05-3.459.05S6,167.9,5.1,167.862a4.739,4.739,0,0,1-1.589-.295,2.652,2.652,0,0,1-.984-.64,2.652,2.652,0,0,1-.64-.984,4.734,4.734,0,0,1-.295-1.589c-.041-.9-.05-1.173-.05-3.459s.009-2.556.05-3.459a4.734,4.734,0,0,1,.295-1.589,2.652,2.652,0,0,1,.64-.984,2.651,2.651,0,0,1,.984-.64,4.738,4.738,0,0,1,1.589-.295c.9-.041,1.173-.05,3.459-.05m0-1.542c-2.324,0-2.616.01-3.529.052a6.283,6.283,0,0,0-2.077.4,4.2,4.2,0,0,0-1.516.987,4.2,4.2,0,0,0-.987,1.516,6.283,6.283,0,0,0-.4,2.077c-.042.913-.052,1.2-.052,3.529s.01,2.616.052,3.529a6.283,6.283,0,0,0,.4,2.077,4.194,4.194,0,0,0,.987,1.516A4.2,4.2,0,0,0,2.952,169a6.283,6.283,0,0,0,2.077.4c.913.042,1.2.052,3.529.052s2.616-.01,3.529-.052a6.283,6.283,0,0,0,2.077-.4,4.376,4.376,0,0,0,2.5-2.5,6.283,6.283,0,0,0,.4-2.077c.042-.913.052-1.2.052-3.529s-.01-2.616-.052-3.529a6.283,6.283,0,0,0-.4-2.077,4.376,4.376,0,0,0-2.5-2.5,6.283,6.283,0,0,0-2.077-.4c-.913-.042-1.2-.052-3.529-.052"
                  transform="translate(0 -152.336)"
                  fill="rgb(212, 175, 55)"
                ></path>
                <path
                  d="M25.071,173.011a4.4,4.4,0,1,0,4.395,4.395,4.395,4.395,0,0,0-4.395-4.395m0,7.248a2.853,2.853,0,1,1,2.853-2.853,2.853,2.853,0,0,1-2.853,2.853"
                  transform="translate(-16.512 -168.847)"
                  fill="rgb(212, 175, 55)"
                ></path>
                <path
                  d="M62.141,168.076a1.027,1.027,0,1,1-1.027-1.027,1.027,1.027,0,0,1,1.027,1.027"
                  transform="translate(-47.987 -164.086)"
                  fill="rgb(212, 175, 55)"
                ></path>
              </svg>
            </a>

            <a
              className=" flex items-center justify-center single-media hover:opacity-50 transition-all"
              href="https://www.facebook.com/profile.php?id=61561023843773&locale=en_GB"
              target="_blank"
            >
              <svg width="10.082" height="18.966" viewBox="0 0 10.082 18.966">
                <path
                  d="M18.3,344.52l.523-3.407H15.551V338.9a1.7,1.7,0,0,1,1.921-1.84h1.486v-2.9a18.118,18.118,0,0,0-2.638-.23c-2.692,0-4.451,1.632-4.451,4.585v2.6H8.876v3.407h2.992v8.235a11.915,11.915,0,0,0,3.683,0V344.52Z"
                  transform="translate(-8.876 -333.932)"
                  fill="rgb(212, 175, 55)"
                ></path>
              </svg>
            </a>

            {/* <a
              className="flex items-center justify-center single-media hover:opacity-50 transition-all"
              href="https://twitter.com/"
              target="_blank"
            >
              <svg width="17.593" height="14.298" viewBox="0 0 17.593 14.298">
                <path
                  d="M14.106,14.3a10.2,10.2,0,0,0,10.27-10.27q0-.234-.01-.467a7.345,7.345,0,0,0,1.8-1.869,7.2,7.2,0,0,1-2.073.568,3.622,3.622,0,0,0,1.587-2,7.235,7.235,0,0,1-2.292.876,3.613,3.613,0,0,0-6.151,3.292A10.247,10.247,0,0,1,9.8.661,3.612,3.612,0,0,0,10.915,5.48,3.584,3.584,0,0,1,9.28,5.028c0,.015,0,.03,0,.046a3.611,3.611,0,0,0,2.9,3.539,3.606,3.606,0,0,1-1.63.062,3.614,3.614,0,0,0,3.372,2.507,7.242,7.242,0,0,1-4.483,1.545,7.327,7.327,0,0,1-.861-.05A10.218,10.218,0,0,0,14.106,14.3"
                  transform="translate(-8.573)"
                  fill="rgb(212, 175, 55)"
                ></path>
              </svg>
            </a> */}
            {/* 
            <a
              className="flex items-center justify-center single-media hover:opacity-50 transition-all"
              href="https://www.linkedin.com/"
              target="_blank"
            >
              <svg width="17" height="17" viewBox="0 0 24 24">
                <path
                  fill="rgb(212, 175, 55)"
                  d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"
                ></path>
              </svg>
            </a> */}

            {/* <a
              className="flex items-center justify-center single-media hover:opacity-50 transition-all"
              href="https://www.youtube.com/"
              target="_blank"
            >
              <svg
                className="mt-[4px]"
                width="17"
                height="17"
                viewBox="0 0 24 24"
              >
                <path
                  fill="rgb(212, 175, 55)"
                  d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"
                ></path>
              </svg>
            </a> */}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
