import Image from "next/image"
import me from "public/images/home/me.jpg"

export default function Page() {
  return (
    <section>
      <section>
        <h1 className="font-bold text-2xl mb-8 tracking-tighter">
          Hello, I'm Janez Čadež 👨‍💻
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div className="col-start-1 col-end-3 md:col-start-1 md:col-end-3">
            <p className="prose prose-neutral mb-3">
              <span className="mr-2">💻</span>
              <span>
                <span className="mr-1">
                  A software engineer, who thrives on building projects and
                  bringing ideas to life. Currently, I’m leading the way as a
                </span>
                <span className="font-bold">
                  React and React Native developer at{" "}
                  <a href="https://povio.com/">Povio</a>
                </span>
                , where I apply my skills and knowledge to create innovative
                solutions.
              </span>
            </p>
            <p className="prose prose-neutral mb-3">
              🚀
              {` In my free time, I channel my entrepreneurial spirit into side
              projects, always seeking new opportunities to learn and grow. I
              believe that every challenge is a stepping stone to success, and
              I’m not afraid to take the leap.`}
            </p>
            <p className="prose prose-neutral">
              🌎{" "}
              {`Beyond the world of code, I find joy in the challenge of climbing and
              constantly seeking personal growth. I’m also an explorer at heart,
              always on the lookout for the hidden gems our world has to offer.
              `}
            </p>
          </div>
          <Image
            alt="Janez Čadež visiting the Tegallalang Rice Terrace in Bali"
            src={me}
            priority
            className="rounded-lg object-cover"
          />
        </div>
        <ul className="flex flex-col md:flex-row mt-8 space-x-0 md:space-x-4 space-y-2 md:space-y-0 font-sm text-neutral-600">
          <li>
            <a
              className="flex items-center hover:text-neutral-800 transition-all"
              rel="noopener noreferrer"
              target="_blank"
              href="https://twitter.com/jamziSLO"
            >
              <ArrowIcon />
              <p className="h-7 ml-2">Twitter</p>
            </a>
          </li>
          <li>
            <a
              className="flex items-center hover:text-neutral-800 transition-all"
              rel="noopener noreferrer"
              target="_blank"
              href="https://github.com/jamzi"
            >
              <ArrowIcon />
              <p className="h-7 ml-2">GitHub</p>
            </a>
          </li>
          <li>
            <a
              className="flex items-center hover:text-neutral-800 transition-all"
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.linkedin.com/in/janez-cadez"
            >
              <ArrowIcon />
              <p className="h-7 ml-2">LinkedIn</p>
            </a>
          </li>
        </ul>
      </section>
    </section>
  )
}

function ArrowIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
        fill="currentColor"
      />
    </svg>
  )
}
