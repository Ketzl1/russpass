import React from "react";
import arrowIcon from "../../styles/images/Стрелочка иконка.svg";
import gerbMoscow from "../../styles/images/gerb_moskvy 1.svg";

const Footer = () => {
  return (
      <footer className="footer">
        <div className="container-fluid first__footer bg-dark">
          <div className="container">
            <p className="text-light">
              Остались вопросы? Напишите номер телефона или почту, и мы с Вами
              обязательно свяжемся
            </p>
            <div className="row">
              <div className="col d-flex justify-content-center">
                <div className="email">
                  <p className="text-light">По почте</p>
                  <div className="emailinput">
                    <input
                      type="email"
                      placeholder="example@mail.ru"
                      className="email"
                    />
                    <button className="buttonemail">
                      <img src={arrowIcon} width="30px" height="25px" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="col d-flex justify-content-center">
                <div className="phone">
                  <p className="text-light">По телефону</p>
                  <div className="phoneinput">
                    <input
                      type="email"
                      placeholder="+7 (___) ___-__-__"
                      className="phone"
                    />
                    <button className="buttonphone">
                      <img src={arrowIcon} width="30px" height="25px" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid second__footer">
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-2 flex-wrap">
                <div className="icon__text d-flex gap-1">
                  {/* <svg
                    className="icon"
                    width="28"
                    height="27"
                    viewBox="0 0 28 27"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.87525 13.978C2.47357 11.2584 1.56906 8.11924 1.20635 4.60403C1.06221 3.20711 0.990146 2.50865 1.36855 1.91936C1.47909 1.7472 1.64389 1.56452 1.8038 1.43688C2.35114 1 3.11273 1 4.6359 1V1C5.83143 1 6.4292 1 6.89829 1.27561C7.04641 1.36264 7.1827 1.46839 7.3038 1.59025C7.6873 1.97618 7.83578 2.55521 8.13276 3.71327L8.93851 6.8553C9.24719 8.059 9.40153 8.66085 9.21869 9.21639C9.03584 9.77194 8.55422 10.1645 7.59097 10.9495L3.87525 13.978ZM3.87525 13.978C5.97269 18.0475 9.18338 21.1775 13.3578 23.2222M13.3578 23.2222C16.1991 24.614 19.487 25.503 23.1742 25.8432C24.477 25.9634 25.1285 26.0235 25.6842 25.6966C25.9104 25.5636 26.1404 25.3538 26.2937 25.1408C26.6702 24.6174 26.6702 23.9115 26.6702 22.4997V22.4997C26.6702 21.3739 26.6702 20.8109 26.4258 20.3631C26.3194 20.168 26.1811 19.9919 26.0167 19.8422C25.6394 19.4988 25.0925 19.3655 23.9987 19.0989L20.5074 18.248C19.3465 17.9651 18.766 17.8236 18.2283 17.9967C17.6907 18.1697 17.3017 18.6233 16.5239 19.5303L13.3578 23.2222Z"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg> */}
                  <p>Наши контакты</p>
                </div>
                <div className="phones">
                  <a href="tel:+ 7 ( 903 ) - 284 - 85 - 50">
                    + 7 ( 903 ) - 284 - 85 - 50
                  </a>
                  <br />
                  <a href="tel:+ 7 ( 900 ) - 919 - 99 - 68">
                    + 7 ( 900 ) - 919 - 99 - 68
                  </a>
                </div>
              </div>
              <div className="link col-7 d-flex gap-5 justify-content-center">
                <div className="about__us d-flex gap-2">
                  <p>О нас</p>
                  <svg
                    width="25"
                    height="26"
                    viewBox="0 0 25 26"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M25 13.2915C25 20.1951 19.4036 25.7915 12.5 25.7915C5.59644 25.7915 0 20.1951 0 13.2915C0 6.38794 5.59644 0.791504 12.5 0.791504C19.4036 0.791504 25 6.38794 25 13.2915ZM12.5 12.2915C12.9142 12.2915 13.25 12.6273 13.25 13.0415V19.2915C13.25 19.7057 12.9142 20.0415 12.5 20.0415C12.0858 20.0415 11.75 19.7057 11.75 19.2915V13.0415C11.75 12.6273 12.0858 12.2915 12.5 12.2915ZM12.5 10.5415C13.1904 10.5415 13.75 9.98186 13.75 9.2915C13.75 8.60115 13.1904 8.0415 12.5 8.0415C11.8096 8.0415 11.25 8.60115 11.25 9.2915C11.25 9.98186 11.8096 10.5415 12.5 10.5415Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <div className="about__us d-flex gap-2">
                  <p>Наша команда</p>
                  <svg
                    width="26"
                    height="25"
                    viewBox="0 0 26 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M7.92671 0C4.84437 0 2.47663 2.75007 2.47663 5.97212C2.47663 9.19418 4.84437 11.9442 7.92671 11.9442C11.0091 11.9442 13.3768 9.19418 13.3768 5.97212C13.3768 2.75007 11.0091 0 7.92671 0ZM14.2268 0.75C14.2268 0.335786 14.5626 0 14.9768 0C18.0592 0 20.4269 2.75007 20.4269 5.97212C20.4269 9.19418 18.0592 11.9442 14.9768 11.9442C14.5626 11.9442 14.2268 11.6085 14.2268 11.1942C14.2268 10.78 14.5626 10.4442 14.9768 10.4442C17.086 10.4442 18.9269 8.51826 18.9269 5.97212C18.9269 3.42598 17.086 1.5 14.9768 1.5C14.5626 1.5 14.2268 1.16421 14.2268 0.75ZM6.09865 15.6661L5.98219 15.6661H5.98218H5.98217H5.98216C4.95763 15.6659 4.30517 15.6658 3.74762 15.8022C2.02703 16.2232 0.683627 17.5666 0.262638 19.2872C0.126217 19.8448 0.126336 20.4972 0.126521 21.5218L0.126535 21.6383L0.126499 21.7278C0.126208 22.2079 0.125984 22.5786 0.205331 22.9029C0.449062 23.899 1.22682 24.6768 2.22295 24.9205C2.54724 24.9999 2.91796 24.9996 3.39801 24.9993H3.39804L3.48759 24.9993H12.3657L12.4553 24.9993H12.4553C12.9354 24.9996 13.3061 24.9999 13.6304 24.9205C14.6265 24.6768 15.4043 23.899 15.648 22.9029C15.7273 22.5786 15.7271 22.2079 15.7268 21.7278V21.7278L15.7268 21.6383L15.7268 21.5218C15.727 20.4972 15.7271 19.8448 15.5907 19.2872C15.1697 17.5666 13.8263 16.2232 12.1057 15.8022C11.5481 15.6658 10.8957 15.6659 9.87115 15.6661H9.87114H9.87114H9.87113L9.75466 15.6661H6.09865ZM19.1549 17.1661C20.3352 17.1661 20.7909 17.1715 21.1494 17.2593C22.3266 17.5473 23.2458 18.4665 23.5339 19.6437C23.6216 20.0022 23.627 20.4579 23.627 21.6383C23.627 22.2505 23.6216 22.4222 23.5912 22.5464C23.4804 22.9992 23.1268 23.3527 22.6741 23.4635C22.5498 23.4939 22.3782 23.4993 21.7659 23.4993H17.3269C16.9126 23.4993 16.5769 23.8351 16.5769 24.2493C16.5769 24.6635 16.9126 24.9993 17.3269 24.9993H21.7659L21.8555 24.9993H21.8555C22.3355 24.9996 22.7063 24.9999 23.0306 24.9205C24.0267 24.6768 24.8044 23.899 25.0482 22.9029C25.1275 22.5786 25.1273 22.2079 25.127 21.7278L25.127 21.6383L25.127 21.5218C25.1272 20.4972 25.1273 19.8448 24.9909 19.2872C24.5699 17.5666 23.2265 16.2232 21.5059 15.8022C20.9483 15.6658 20.2959 15.6659 19.2713 15.6661L19.1549 15.6661H17.3269C16.9126 15.6661 16.5769 16.0019 16.5769 16.4161C16.5769 16.8303 16.9126 17.1661 17.3269 17.1661H19.1549Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <div className="about__us d-flex gap-2">
                  <p>Отзывы</p>
                  <svg
                    width="25"
                    height="26"
                    viewBox="0 0 25 26"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_188_16515)">
                      <path
                        d="M3.125 2.354C2.7106 2.354 2.31317 2.51862 2.02015 2.81165C1.72712 3.10468 1.5625 3.5021 1.5625 3.9165V16.4165C1.5625 16.8309 1.72712 17.2283 2.02015 17.5214C2.31317 17.8144 2.7106 17.979 3.125 17.979H18.1031C18.9319 17.9792 19.7266 18.3085 20.3125 18.8946L23.4375 22.0196V3.9165C23.4375 3.5021 23.2729 3.10468 22.9799 2.81165C22.6868 2.51862 22.2894 2.354 21.875 2.354H3.125ZM21.875 0.791504C22.7038 0.791504 23.4987 1.12074 24.0847 1.7068C24.6708 2.29285 25 3.0877 25 3.9165V23.9056C25 24.0602 24.9541 24.2113 24.8681 24.3397C24.7822 24.4682 24.6601 24.5683 24.5172 24.6274C24.3743 24.6865 24.2172 24.7018 24.0656 24.6715C23.914 24.6412 23.7748 24.5666 23.6656 24.4571L19.2078 19.9993C18.9149 19.7063 18.5175 19.5416 18.1031 19.5415H3.125C2.2962 19.5415 1.50134 19.2123 0.915291 18.6262C0.32924 18.0402 0 17.2453 0 16.4165V3.9165C0 3.0877 0.32924 2.29285 0.915291 1.7068C1.50134 1.12074 2.2962 0.791504 3.125 0.791504L21.875 0.791504Z"
                        fill="white"
                      />
                      <path
                        d="M4.6875 6.26025C4.6875 6.05305 4.76981 5.85434 4.91632 5.70783C5.06284 5.56131 5.26155 5.479 5.46875 5.479H19.5312C19.7385 5.479 19.9372 5.56131 20.0837 5.70783C20.2302 5.85434 20.3125 6.05305 20.3125 6.26025C20.3125 6.46745 20.2302 6.66617 20.0837 6.81268C19.9372 6.95919 19.7385 7.0415 19.5312 7.0415H5.46875C5.26155 7.0415 5.06284 6.95919 4.91632 6.81268C4.76981 6.66617 4.6875 6.46745 4.6875 6.26025ZM4.6875 10.1665C4.6875 9.9593 4.76981 9.76059 4.91632 9.61408C5.06284 9.46756 5.26155 9.38525 5.46875 9.38525H19.5312C19.7385 9.38525 19.9372 9.46756 20.0837 9.61408C20.2302 9.76059 20.3125 9.9593 20.3125 10.1665C20.3125 10.3737 20.2302 10.5724 20.0837 10.7189C19.9372 10.8654 19.7385 10.9478 19.5312 10.9478H5.46875C5.26155 10.9478 5.06284 10.8654 4.91632 10.7189C4.76981 10.5724 4.6875 10.3737 4.6875 10.1665ZM4.6875 14.0728C4.6875 13.8656 4.76981 13.6668 4.91632 13.5203C5.06284 13.3738 5.26155 13.2915 5.46875 13.2915H13.2812C13.4885 13.2915 13.6872 13.3738 13.8337 13.5203C13.9802 13.6668 14.0625 13.8656 14.0625 14.0728C14.0625 14.28 13.9802 14.4787 13.8337 14.6252C13.6872 14.7717 13.4885 14.854 13.2812 14.854H5.46875C5.26155 14.854 5.06284 14.7717 4.91632 14.6252C4.76981 14.4787 4.6875 14.28 4.6875 14.0728Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_188_16515">
                        <rect
                          width="25"
                          height="25"
                          fill="white"
                          transform="translate(0 0.791504)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div className="about__us d-flex gap-2">
                  <p>Фотоотчет</p>
                  <svg
                    width="27"
                    height="27"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg%22%3E"
                  >
                    <path
                      d=" M3 7.8C3 6.11984 3 5.27976 3.32698 4.63803C3.6146 4.07354 4.07354 3.6146 4.63803 3.32698C5.27976 3 6.11984 3
									7.8 3H16.2C17.8802 3 18.7202 3 19.362 3.32698C19.9265 3.6146 20.3854 4.07354 20.673
									4.63803C21 5.27976 21 6.11984 21 7.8V16.2C21 17.8802 21 18.7202 20.673
									19.362C20.3854 19.9265 19.9265 20.3854 19.362 20.673C18.7202 21 17.8802 21 16.2
									21H7.8C6.11984 21 5.27976 21 4.63803 20.673C4.07354 20.3854 3.6146 19.9265 3.32698
									19.362C3 18.7202 3 17.8802 3 16.2V7.8Z"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M9 9.5L6 15H18L13.5 7.5L11 11L9 9.5Z"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
              <div className="social__menu col d-flex gap-2">
                <a
                  href="#"
                  className="h-25 social__link d-flex align-items-center"
                >
                  <svg
                    width="27"
                    height="27"
                    viewBox="0 0 27 27"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M1.0718 4.00001C0 5.85645 0 8.34869 0 13.3333C0 18.318 0 20.8103 1.0718 22.6667C1.77394 23.8828 2.78385 24.8927 4 25.5948C5.85639 26.6667 8.34871 26.6667 13.3334 26.6667C18.318 26.6667 20.8102 26.6667 22.6666 25.5948C23.8828 24.8927 24.8927 23.8828 25.5949 22.6667C26.6666 20.8103 26.6666 18.318 26.6666 13.3333C26.6666 8.34869 26.6666 5.85645 25.5949 4.00001C24.8927 2.78385 23.8828 1.77394 22.6666 1.0718C20.8102 0 18.318 0 13.3334 0C8.34871 0 5.85639 0 4 1.0718C2.78385 1.77394 1.77394 2.78385 1.0718 4.00001Z"
                      fill="white"
                    />
                    <path
                      d="M20 17.9829C19.8808 17.989 19.8157 17.9956 19.7503 17.9956C18.8339 17.9956 17.9176 17.9934 17.0013 17.999C16.9392 18.0037 16.8769 17.9911 16.8221 17.9626C16.7672 17.9341 16.722 17.891 16.6919 17.8383C15.9355 16.7487 15.175 15.6668 14.4217 14.578C14.3892 14.5228 14.3409 14.4776 14.2827 14.4479C14.2244 14.4182 14.1586 14.4052 14.0929 14.4104C12.4255 14.4156 10.7582 14.4156 9.09084 14.4104C8.88942 14.4104 8.83884 14.4639 8.84065 14.6538C8.85013 15.6751 8.84516 16.6964 8.84516 17.7177V17.986H6V7.01045C6.0831 7.00697 6.16258 7 6.24206 7C9.60718 7 12.9722 7 16.337 7C17.0645 7 17.7745 7.07839 18.4117 7.46165C19.1112 7.88236 19.4847 8.51212 19.5791 9.27864C19.7065 10.316 19.7223 11.3595 19.538 12.3948C19.3402 13.5045 18.6199 14.1242 17.5026 14.3546C17.4299 14.3694 17.3581 14.3873 17.2601 14.4095C18.1705 15.5976 19.0692 16.7704 20 17.9829ZM8.85916 11.9784H9.11613C11.3305 11.9784 13.5448 11.9784 15.7589 11.9784C15.8944 11.9784 16.0299 11.9736 16.1654 11.9632C16.5334 11.9353 16.7254 11.789 16.7674 11.4371C16.8066 11.1083 16.8026 10.7738 16.8044 10.4415C16.8085 9.63315 16.6052 9.43499 15.777 9.43455C13.555 9.43455 11.3332 9.43455 9.11161 9.43455C9.03168 9.43455 8.95219 9.44152 8.86323 9.44544L8.85916 11.9784Z"
                      fill="#1D1D1D"
                    />
                  </svg>
                </a>
                <a
                  href="#"
                  className="h-25 social__link d-flex align-items-center"
                >
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
                      d="M3.7405 6.66566C2.6687 8.5221 2.6687 11.0143 2.6687 15.999C2.6687 20.9836 2.6687 23.4759 3.7405 25.3323C4.44265 26.5485 5.45255 27.5583 6.6687 28.2605C8.52509 29.3323 11.0174 29.3323 16.0021 29.3323C20.9867 29.3323 23.4789 29.3323 25.3353 28.2605C26.5515 27.5583 27.5614 26.5485 28.2636 25.3323C29.3353 23.4759 29.3353 20.9836 29.3353 15.999C29.3353 11.0143 29.3353 8.5221 28.2636 6.66566C27.5614 5.4495 26.5515 4.43959 25.3353 3.73745C23.4789 2.66565 20.9867 2.66565 16.0021 2.66565C11.0174 2.66565 8.52509 2.66565 6.6687 3.73745C5.45255 4.43959 4.44265 5.4495 3.7405 6.66566ZM7.66873 10.999H9.61317C10.1101 10.999 10.297 11.2165 10.4834 11.7549C11.4344 14.5251 13.0379 16.9462 13.697 16.9462C13.9442 16.9462 14.0577 16.8323 14.0577 16.2045V13.3411C14.013 12.526 13.7283 12.1735 13.5173 11.9125C13.3872 11.7512 13.2851 11.6249 13.2851 11.4459C13.2851 11.2284 13.4709 10.999 13.7798 10.999H16.8354C17.2474 10.999 17.3909 11.2193 17.3909 11.7138V15.5659C17.3909 15.9779 17.5698 16.1221 17.6934 16.1221C17.9406 16.1221 18.1466 15.9779 18.5998 15.5247C20.0006 13.9591 20.9894 11.5489 20.9894 11.5489C21.1131 11.2605 21.341 10.999 21.8354 10.999H23.7798C24.3679 10.999 24.4914 11.3017 24.3679 11.7138C24.1383 12.7658 22.0793 15.7184 21.7862 16.1349L21.7517 16.1839C21.5457 16.5135 21.4633 16.6783 21.7517 17.0491C21.8532 17.1913 22.0699 17.4036 22.3179 17.6465C22.5729 17.8963 22.8609 18.1783 23.0906 18.4499C23.9259 19.3895 24.5553 20.1823 24.7307 20.7286C24.8909 21.2767 24.6132 21.5546 24.0576 21.5546H22.1132C21.5924 21.5546 21.3301 21.2628 20.7634 20.6324C20.5232 20.3652 20.2283 20.0371 19.8358 19.6447C18.6822 18.5323 18.1878 18.3881 17.8994 18.3881C17.5081 18.3881 17.3909 18.499 17.3909 19.0546V20.7983C17.3909 21.2767 17.2381 21.5546 16.0021 21.5546C13.9421 21.5546 11.6782 20.3039 10.0714 17.9967C7.66126 14.6183 7.00205 12.0639 7.00205 11.5489C7.00205 11.2605 7.11317 10.999 7.66873 10.999Z"
                      fill="white"
                    />
                  </svg>
                </a>
                <a
                  href="#"
                  className="h-25 social__link d-flex align-items-center"
                >
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
                      d="M3.7405 6.66566C2.6687 8.5221 2.6687 11.0143 2.6687 15.999C2.6687 20.9836 2.6687 23.4759 3.7405 25.3323C4.44265 26.5485 5.45255 27.5584 6.66871 28.2605C8.52515 29.3323 11.0174 29.3323 16.002 29.3323C20.9867 29.3323 23.479 29.3323 25.3354 28.2605C26.5515 27.5584 27.5615 26.5485 28.2635 25.3323C29.3354 23.4759 29.3354 20.9836 29.3354 15.999C29.3354 11.0143 29.3354 8.5221 28.2635 6.66566C27.5615 5.4495 26.5515 4.43959 25.3354 3.73745C23.479 2.66565 20.9867 2.66565 16.002 2.66565C11.0174 2.66565 8.52515 2.66565 6.66871 3.73745C5.45255 4.43959 4.44265 5.4495 3.7405 6.66566ZM16.002 2.66565L15.5204 9.58738C15.2992 12.7663 12.7693 15.2962 9.59043 15.5174L2.6687 15.999L9.59043 16.4806C12.7693 16.7018 15.2992 19.2317 15.5204 22.4106L16.002 29.3323L16.4836 22.4106C16.7048 19.2317 19.2347 16.7018 22.4136 16.4806L29.3354 15.999L22.4136 15.5174C19.2347 15.2962 16.7048 12.7663 16.4836 9.58738L16.002 2.66565Z"
                      fill="white"
                    />
                  </svg>
                </a>
                <a
                  href="#"
                  className="h-25 social__link d-flex align-items-center"
                >
                  <svg
                    width="27"
                    height="27"
                    viewBox="0 0 27 27"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M8 0H18.6666C23.0849 0 26.6666 3.58172 26.6666 8V18.6666C26.6666 23.0849 23.0849 26.6666 18.6666 26.6666H8C3.58172 26.6666 0 23.0849 0 18.6666V8C0 3.58172 3.58172 0 8 0ZM18.6682 20.0323C18.6682 20.0323 18.2908 20.955 17.2843 20.5146L13.5099 17.6209L11.0775 19.8226C11.0775 19.8226 10.8888 19.9694 10.6791 19.8856C10.6791 19.8856 10.4903 19.8646 10.2807 19.1726C10.05 18.4597 8.91768 14.7482 8.91768 14.7482L5.16425 13.49C5.16425 13.49 4.59809 13.2804 4.53518 12.84C4.47227 12.3997 5.18522 12.148 5.18522 12.148L20.0941 6.29772C20.0941 6.29772 21.3103 5.75253 21.3312 6.65419L18.6682 20.0323ZM18.4356 9.02417C18.4565 8.70963 17.9323 9.02417 17.9323 9.02417L9.69154 14.2664C9.56573 14.3503 9.52379 14.497 9.56573 14.6229L10.5513 17.8521C10.6142 18.0408 10.8868 18.0198 10.9287 17.8101L11.1594 15.8391C11.1594 15.7552 11.2013 15.6923 11.2642 15.6503C12.061 14.9374 17.9952 9.6113 18.2468 9.35967C18.5194 9.0661 18.4356 9.02417 18.4356 9.02417Z"
                      fill="white"
                    />
                  </svg>
                </a>
                <a href="#" className="h-25  d-flex align-items-center">
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
                      d="M3.7405 6.66566C2.6687 8.5221 2.6687 11.0143 2.6687 15.999C2.6687 20.9836 2.6687 23.4759 3.7405 25.3323C4.44265 26.5485 5.45255 27.5583 6.66871 28.2605C8.52515 29.3323 11.0174 29.3323 16.002 29.3323C20.9867 29.3323 23.479 29.3323 25.3354 28.2605C26.5515 27.5583 27.5614 26.5485 28.2635 25.3323C29.3354 23.4759 29.3354 20.9836 29.3354 15.999C29.3354 11.0143 29.3354 8.5221 28.2635 6.66566C27.5614 5.4495 26.5515 4.43959 25.3354 3.73745C23.479 2.66565 20.9867 2.66565 16.002 2.66565C11.0174 2.66565 8.52515 2.66565 6.66871 3.73745C5.45255 4.43959 4.44265 5.4495 3.7405 6.66566ZM17.7215 12.1289C17.7215 11.1859 16.9503 10.4191 16.0021 10.4191C15.0548 10.4191 14.2828 11.1859 14.2828 12.1289C14.2828 13.0708 15.0548 13.8379 16.0021 13.8379C16.9503 13.8379 17.7215 13.0708 17.7215 12.1289ZM20.1546 12.1289C20.1546 14.4053 18.2926 16.2569 16.0021 16.2569C13.7121 16.2569 11.8496 14.4053 11.8496 12.1289C11.8496 9.85138 13.7121 7.99898 16.0021 7.99898C18.2926 7.99898 20.1546 9.85138 20.1546 12.1289ZM20.0934 18.6323C19.3428 19.1015 18.5275 19.4339 17.6821 19.6255L20.0036 21.9339C20.4792 22.406 20.4792 23.1723 20.0036 23.6447C19.5286 24.1171 18.7584 24.1171 18.2839 23.6447L16.0016 21.3761L13.7214 23.6447C13.4836 23.8807 13.172 23.9988 12.8604 23.9988C12.5494 23.9988 12.2383 23.8807 12.0006 23.6447C11.5255 23.1723 11.5255 22.4064 12.0001 21.9339L14.3216 19.6255C13.4763 19.4339 12.661 19.1008 11.9103 18.6323C11.342 18.2762 11.1712 17.5296 11.5294 16.9642C11.8865 16.3979 12.6372 16.2275 13.2064 16.5836C14.9064 17.6469 17.0964 17.6474 18.7972 16.5836C19.3665 16.2275 20.1172 16.3979 20.4748 16.9642C20.833 17.5292 20.6617 18.2762 20.0934 18.6323Z"
                      fill="white"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="container d-flex justify-content-center">
            <p className="">KST © 2023 - 2023</p>
          </div>
          <hr />
          <div className="container">
            <div className="row footer__policy">
              <div className="col d-flex align-items-center gap-2">
                <img src={gerbMoscow} alt="" />
                <p>
                  Комитет <br /> по туризму <br /> города Москвы
                </p>
              </div>
              <div className="col d-flex align-items-center justify-content-center">
                <a href="#" className="link__footer">
                  Политика конфиденциальности
                </a>
              </div>
              <div className="col d-flex align-items-center justify-content-center">
                <a href="#" className="link__footer">
                  Политика обработки персональных данных
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
  );
};

export default Footer;
