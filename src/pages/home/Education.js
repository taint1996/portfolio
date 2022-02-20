import React from 'react'
import { FaReact } from 'react-icons/fa';
import { RiEnglishInput } from 'react-icons/ri'

const Education = () => {
  return (
    <>
      <div className="education py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6 px-4">
              <h3>
                <svg
                  width="36"
                  height="37"
                  viewBox="0 0 36 37"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 5H12C13.5913 5 15.1174 5.63214 16.2426 6.75736C17.3679 7.88258 18 9.4087 18 11V32C18 30.8065 17.5259 29.6619 16.682 28.818C15.8381 27.9741 14.6935 27.5 13.5 27.5H3V5Z"
                    stroke="#111111"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M33 5H24C22.4087 5 20.8826 5.63214 19.7574 6.75736C18.6321 7.88258 18 9.4087 18 11V32C18 30.8065 18.4741 29.6619 19.318 28.818C20.1619 27.9741 21.3065 27.5 22.5 27.5H33V5Z"
                    stroke="#111111"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                &nbsp;Education
              </h3>
              <div className="item">
                <div>
                  <div className="education-title">Graduated in information technology</div>
                  <div className="education-schoolInfo">University of Economics and Finance</div>
                </div>
                <div className="education-graduated-years">2014-2017</div>
              </div>
            </div>
            <div className="col-md-6 px-4">
              <h3>
                <svg
                  width="36"
                  height="37"
                  viewBox="0 0 36 37"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M30 11H6C4.34315 11 3 12.3431 3 14V29C3 30.6569 4.34315 32 6 32H30C31.6569 32 33 30.6569 33 29V14C33 12.3431 31.6569 11 30 11Z"
                    stroke="#232323"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M24 32V8C24 7.20435 23.6839 6.44129 23.1213 5.87868C22.5587 5.31607 21.7956 5 21 5H15C14.2044 5 13.4413 5.31607 12.8787 5.87868C12.3161 6.44129 12 7.20435 12 8V32"
                    stroke="#232323"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                &nbsp;Skill
              </h3>
              <div className="skills">
                <div className="skill-item">
                  <div className="skill-item_icon" style={{background: "#fff7dd"}}>
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect x="2" y="2" width="28" height="28" fill="#FFCA28" />
                      <path
                        d="M19 25.2876L21.0615 23.9235C21.2231 24.4311 22.2462 25.6366 23.5385 25.6366C24.8308 25.6366 25.4308 24.9307 25.4308 24.4628C25.4308 23.1876 24.1112 22.738 23.4774 22.5221C23.374 22.4869 23.289 22.4579 23.2308 22.4325C23.2009 22.4195 23.1558 22.4023 23.0979 22.3801C22.393 22.1108 19.7923 21.1172 19.7923 18.2371C19.7923 15.0648 22.8538 14.7 23.5462 14.7C23.9991 14.7 26.1769 14.7555 27.2615 16.7937L25.2615 18.1895C24.8231 17.3013 24.0946 17.0078 23.6462 17.0078C22.5385 17.0078 22.3077 17.8199 22.3077 18.1895C22.3077 19.2267 23.5112 19.6916 24.5273 20.0842C24.7932 20.1869 25.0462 20.2846 25.2615 20.3863C26.3692 20.9098 28 21.7663 28 24.4628C28 25.8134 26.8672 28 24.0154 28C20.1846 28 19.1692 25.7 19 25.2876Z"
                        fill="#3E3E3E"
                      />
                      <path
                        d="M9 25.5585L11.1487 24.1951C11.317 24.7024 11.9713 25.6378 12.9205 25.6378C13.8698 25.6378 14.3557 24.6628 14.3557 24.1951V15H16.9982V24.1951C17.041 25.4634 16.3376 28 13.2332 28C10.379 28 9.19242 26.3036 9 25.5585Z"
                        fill="#3E3E3E"
                      />
                    </svg>
                  </div>
                  <p className="title">Javascript (ES6)</p>
                  <div className="percentage">55%</div>
                </div>
                <div className="skill-item">
                  <div className="skill-item_icon" style={{background: "#f1f1f1"}}>
                    <FaReact size="2em" style={{color: '#0086e4'}}/>
                  </div>
                  <p className="title">ReactJS</p>
                  <div className="percentage">60%</div>
                </div>
                <div className="skill-item">
                  <div className="skill-item_icon" style={{background: "#ffe6e2"}}>
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M22.5939 19.8407L8.89136 27.9998L26.6335 26.7925L28 8.85254L22.5939 19.8407Z"
                        fill="url(#paint0_linear_570_662)"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M26.6626 26.7806L25.1376 16.2261L20.9839 21.7262L26.6626 26.7806Z"
                        fill="url(#paint1_linear_570_662)"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M26.6832 26.7803L15.5112 25.9009L8.95068 27.9769L26.6832 26.7803Z"
                        fill="url(#paint2_linear_570_662)"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M8.96643 27.9796L11.7573 18.811L5.61591 20.1279L8.96643 27.9796Z"
                        fill="url(#paint3_linear_570_662)"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M27.4173 11.8117L20.4704 6.12207L18.5359 12.3936L27.4173 11.8117Z"
                        fill="url(#paint4_linear_570_662)"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M24.1686 4.09336L20.0828 6.35755L17.5051 4.06299L24.1686 4.09336Z"
                        fill="url(#paint5_linear_570_662)"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M4 23.2031L5.7116 20.0729L4.32706 16.3438L4 23.2031Z"
                        fill="url(#paint6_linear_570_662)"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M4.23499 16.2259L5.62801 20.1883L11.681 18.8265L18.5916 12.3862L20.5419 6.17431L17.471 4L12.2502 5.95931C10.6053 7.49347 7.4135 10.529 7.29843 10.5861C7.18456 10.6444 5.19072 14.4233 4.23499 16.2259Z"
                        fill="white"
                      />
                      <path
                        d="M11.7222 18.7882L18.5916 12.3863L18.5947 12.3765L20.9828 21.7566L11.7222 18.7882Z"
                        fill="url(#paint7_linear_570_662)"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M9.12631 9.10774C12.6912 5.56325 17.287 3.46911 19.0507 5.2535C20.8133 7.03789 18.9441 11.3744 15.3792 14.9176C11.8142 18.4609 7.2754 20.6705 5.51292 18.8861C3.74923 17.1029 5.56138 12.651 9.12631 9.10774Z"
                        fill="url(#paint8_linear_570_662)"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M8.96643 27.9755L11.7355 18.7778L20.9319 21.7405C17.6068 24.8671 13.9086 27.5103 8.96643 27.9755Z"
                        fill="url(#paint9_linear_570_662)"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M18.6038 12.3679L20.9646 21.7454C23.7422 18.8167 26.2351 15.6682 27.456 11.7739L18.6038 12.3679Z"
                        fill="url(#paint10_linear_570_662)"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M27.4319 11.8217C28.3767 8.96229 28.5947 4.86025 24.1394 4.09863L20.4836 6.12354L27.4319 11.8217Z"
                        fill="url(#paint11_linear_570_662)"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M4 23.162C4.13082 27.8812 7.52617 27.9515 8.97249 27.9929L5.63166 20.1689L4 23.162Z"
                        fill="#9E1209"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M18.6169 12.3826C20.7513 13.6981 25.0528 16.3401 25.1401 16.3887C25.2756 16.4652 26.9946 13.4819 27.3846 11.7959L18.6169 12.3826Z"
                        fill="url(#paint12_radial_570_662)"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M11.7319 18.7778L15.4337 25.9397C17.6225 24.7493 19.3366 23.2989 20.9065 21.7453L11.7319 18.7778Z"
                        fill="url(#paint13_radial_570_662)"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M5.61709 20.1783L5.09259 26.4413C6.08224 27.7969 7.44377 27.9147 8.87193 27.8091C7.83867 25.2303 5.77457 20.0739 5.61709 20.1783Z"
                        fill="url(#paint14_linear_570_662)"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M20.4619 6.1393L27.8159 7.17422C27.4234 5.50644 26.2181 4.43022 24.1637 4.09375L20.4619 6.1393Z"
                        fill="url(#paint15_linear_570_662)"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_570_662"
                          x1="25.086"
                          y1="30.1825"
                          x2="20.0017"
                          y2="21.2307"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#FB7655" />
                          <stop offset="0.41" stopColor="#E42B1E" />
                          <stop offset="0.99" stopColor="#990000" />
                          <stop offset="1" stopColor="#990000" />
                        </linearGradient>
                        <linearGradient
                          id="paint1_linear_570_662"
                          x1="27.6081"
                          y1="22.6528"
                          x2="21.0718"
                          y2="18.2786"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#871101" />
                          <stop offset="0.99" stopColor="#911209" />
                          <stop offset="1" stopColor="#911209" />
                        </linearGradient>
                        <linearGradient
                          id="paint2_linear_570_662"
                          x1="22.3874"
                          y1="30.4542"
                          x2="15.8512"
                          y2="26.0802"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#871101" />
                          <stop offset="0.99" stopColor="#911209" />
                          <stop offset="1" stopColor="#911209" />
                        </linearGradient>
                        <linearGradient
                          id="paint3_linear_570_662"
                          x1="8.68738"
                          y1="19.4743"
                          x2="9.70442"
                          y2="26.0657"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="white" />
                          <stop offset="0.23" stopColor="#E57252" />
                          <stop offset="0.46" stopColor="#DE3B20" />
                          <stop offset="0.99" stopColor="#A60003" />
                          <stop offset="1" stopColor="#A60003" />
                        </linearGradient>
                        <linearGradient
                          id="paint4_linear_570_662"
                          x1="21.8189"
                          y1="7.10002"
                          x2="22.9406"
                          y2="11.9204"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="white" />
                          <stop offset="0.18" stopColor="#E46342" />
                          <stop offset="0.4" stopColor="#C82410" />
                          <stop offset="0.99" stopColor="#A80D00" />
                          <stop offset="1" stopColor="#A80D00" />
                        </linearGradient>
                        <linearGradient
                          id="paint5_linear_570_662"
                          x1="18.4119"
                          y1="5.40177"
                          x2="23.2253"
                          y2="3.00175"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="white" />
                          <stop offset="0.54" stopColor="#C81F11" />
                          <stop offset="0.99" stopColor="#BF0905" />
                          <stop offset="1" stopColor="#BF0905" />
                        </linearGradient>
                        <linearGradient
                          id="paint6_linear_570_662"
                          x1="4.47282"
                          y1="17.7935"
                          x2="4.87073"
                          y2="21.7663"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="white" />
                          <stop offset="0.31" stopColor="#DE4024" />
                          <stop offset="0.99" stopColor="#BF190B" />
                          <stop offset="1" stopColor="#BF190B" />
                        </linearGradient>
                        <linearGradient
                          id="paint7_linear_570_662"
                          x1="15.6448"
                          y1="13.3187"
                          x2="16.0196"
                          y2="20.0464"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="white" />
                          <stop offset="0.23" stopColor="#E4714E" />
                          <stop offset="0.56" stopColor="#BE1A0D" />
                          <stop offset="0.99" stopColor="#A80D00" />
                          <stop offset="1" stopColor="#A80D00" />
                        </linearGradient>
                        <linearGradient
                          id="paint8_linear_570_662"
                          x1="1.75228"
                          y1="22.8404"
                          x2="20.4079"
                          y2="3.71053"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#BD0012" />
                          <stop offset="0.07" stopColor="white" />
                          <stop offset="0.17" stopColor="white" />
                          <stop offset="0.27" stopColor="#C82F1C" />
                          <stop offset="0.33" stopColor="#820C01" />
                          <stop offset="0.46" stopColor="#A31601" />
                          <stop offset="0.72" stopColor="#B31301" />
                          <stop offset="0.99" stopColor="#E82609" />
                          <stop offset="1" stopColor="#E82609" />
                        </linearGradient>
                        <linearGradient
                          id="paint9_linear_570_662"
                          x1="16.0012"
                          y1="24.7752"
                          x2="10.3962"
                          y2="23.3957"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#8C0C01" />
                          <stop offset="0.54" stopColor="#990C00" />
                          <stop offset="0.99" stopColor="#A80D0E" />
                          <stop offset="1" stopColor="#A80D0E" />
                        </linearGradient>
                        <linearGradient
                          id="paint10_linear_570_662"
                          x1="25.6253"
                          y1="18.0314"
                          x2="20.6353"
                          y2="13.5714"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#7E110B" />
                          <stop offset="0.99" stopColor="#9E0C00" />
                          <stop offset="1" stopColor="#9E0C00" />
                        </linearGradient>
                        <linearGradient
                          id="paint11_linear_570_662"
                          x1="27.4541"
                          y1="9.82314"
                          x2="24.9672"
                          y2="7.17189"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#79130D" />
                          <stop offset="0.99" stopColor="#9E120B" />
                          <stop offset="1" stopColor="#9E120B" />
                        </linearGradient>
                        <radialGradient
                          id="paint12_radial_570_662"
                          cx="0"
                          cy="0"
                          r="1"
                          gradientUnits="userSpaceOnUse"
                          gradientTransform="translate(21.4227 13.6432) scale(6.09995 6.11692)"
                        >
                          <stop stopColor="#A80D00" />
                          <stop offset="0.99" stopColor="#7E0E08" />
                          <stop offset="1" stopColor="#7E0E08" />
                        </radialGradient>
                        <radialGradient
                          id="paint13_radial_570_662"
                          cx="0"
                          cy="0"
                          r="1"
                          gradientUnits="userSpaceOnUse"
                          gradientTransform="translate(12.975 21.7042) scale(8.10906 8.13164)"
                        >
                          <stop stopColor="#A30C00" />
                          <stop offset="0.99" stopColor="#800E08" />
                          <stop offset="1" stopColor="#800E08" />
                        </radialGradient>
                        <linearGradient
                          id="paint14_linear_570_662"
                          x1="7.23057"
                          y1="27.9701"
                          x2="5.19957"
                          y2="21.0987"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#8B2114" />
                          <stop offset="0.43" stopColor="#9E100A" />
                          <stop offset="0.99" stopColor="#B3100C" />
                          <stop offset="1" stopColor="#B3100C" />
                        </linearGradient>
                        <linearGradient
                          id="paint15_linear_570_662"
                          x1="22.7321"
                          y1="5.19037"
                          x2="27.2663"
                          y2="7.18628"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#B31000" />
                          <stop offset="0.44" stopColor="#910F08" />
                          <stop offset="0.99" stopColor="#791C12" />
                          <stop offset="1" stopColor="#791C12" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <p className="title">Ruby</p>
                  <div className="percentage">60%</div>
                </div>
                <div className="skill-item">
                  <div className="skill-item_icon" style={{background: "#f1f1f1"}}>
                    <RiEnglishInput size="2em" style={{color: '#0086e4'}}/>
                  </div>
                  <p className="title">English (Communication, Writing)</p>
                  <div className="percentage">50%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Education