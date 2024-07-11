import React from 'react'

export default function Footer() {
  return (
    <div className='mt-[5%] text-lg font-medium bg-[#282828] text-white'>

    <div className='mr-[13%] ml-[13%] mb-3'> {/* //mrl */}
        <div className='flex justify-between'>
            <div className=''>
                <img src="/bnwlogo.png" className='p-10 pl-1'/>
            </div>
            <div className='p-10 pr-5'>
                <button className="text-sm bg-[#007BFF] p-3 rounded-md w-full">Schedule 1-on-1 Call Now</button>
                <p className="text-sm font-normal">Speak with our Learning Advisor</p>
            </div>
        </div>

        <hr/>

{/* grid */}
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-8 gap-4">
        <div className="col-span-3">
        <table className=" w-full text-sm text-left rtl:text-right text-gray-500 mr-10 divide-black">
            <thead className="text-xs text-gray-700  ">
              <tr>
                <th scope="col" className="px-6 py-3 font-normal text-lg rounded-t-lg  text-white flex justify-between ">
                  <span>Programs</span>
                </th>
              </tr>
            </thead>    
            <tbody>
              <tr className=" ">
                <td className="px-6 py-4 font-semibold text-white text-sm  whitespace-nowrap flex justify-between ">
                <span>PRODUCT MANAGEMENT</span>
                <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 8.90002H8V14.9H6V8.90002H0V6.90002H6V0.900024H8V6.90002H14V8.90002Z" fill="white"/>
                </svg>
                </td>
              </tr>
              <tr className=" ">
                <td className="px-6 py-4 font-semibold text-white text-sm  whitespace-nowrap flex justify-between ">
                <span>STRATEGY & LEADERSHIP</span>
                  <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 8.90002H8V14.9H6V8.90002H0V6.90002H6V0.900024H8V6.90002H14V8.90002Z" fill="white"/>
                </svg>
                </td>
              </tr>
              <tr className=" ">
                <td className="px-6 py-4 font-semibold text-white text-sm  whitespace-nowrap flex justify-between ">
                <span>FINTECH</span>
                  <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 8.90002H8V14.9H6V8.90002H0V6.90002H6V0.900024H8V6.90002H14V8.90002Z" fill="white"/>
                </svg>
                </td>
              </tr>
              <tr className=" ">
                <td className="px-6 py-4 font-semibold text-white text-sm  whitespace-nowrap flex justify-between ">
                <span>SENIOR MANAGEMENT</span>
                  <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 8.90002H8V14.9H6V8.90002H0V6.90002H6V0.900024H8V6.90002H14V8.90002Z" fill="white"/>
                </svg>
                </td>
              </tr>
              <tr className=" ">
                <td className="px-6 py-4 font-semibold text-white text-sm  whitespace-nowrap flex justify-between ">
                <span>DATA SCIENCE</span>
                  <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 8.90002H8V14.9H6V8.90002H0V6.90002H6V0.900024H8V6.90002H14V8.90002Z" fill="white"/>
                </svg>
                </td>
              </tr>
              <tr className=" ">
                <td className="px-6 py-4 font-semibold text-white text-sm  whitespace-nowrap flex justify-between ">
                <span>DIGITAL TRANSFORMATION</span>
                  <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 8.90002H8V14.9H6V8.90002H0V6.90002H6V0.900024H8V6.90002H14V8.90002Z" fill="white"/>
                </svg>
                </td>
              </tr>
              <tr className=" ">
                <td className="px-6 py-4 font-semibold text-white text-sm  whitespace-nowrap flex justify-between ">
                <span>BUSINESS ANALYTICS</span>
                  <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 8.90002H8V14.9H6V8.90002H0V6.90002H6V0.900024H8V6.90002H14V8.90002Z" fill="white"/>
                </svg>
                </td>
              </tr>
            </tbody>
          </table>  
        </div>
        <div className="col-span-3">
          <h5 className=" py-3 font-normal text-lg rounded-t-lg  text-white ">Contact Us</h5>
          <ul className="list-none">
            <li>
              <a className="text-white font-normal text-xs hover:underline" href="#">
              Email us (For Data Science Queries): admissions@accredian.com
              </a>
            </li>
            <li>
              <a className="text-white font-normal text-xs hover:underline" href="#">
              Email us (For Product Management Queries):pm@accredian.com
              </a>
            </li>
            <li>
              <a className="text-white font-normal text-xs hover:underline" href="#">
              Data Science Admission Helpline:+91 9079653292 (9 AM - 7 PM)
              </a>
            </li>
            <li>
              <a className="text-white font-normal text-xs hover:underline" href="#">
              Product Management Admission Helpline:+91 9625811095
              </a>
            </li>
            <li>
              <a className="text-white font-normal text-xs hover:underline" href="#">
              Enrolled Student Helpline: +91 7969322507
              </a>
            </li>
            <li>
              <a className="text-white font-normal text-xs hover:underline" href="#">
              Office Address: 4th Floor, 250, Phase IV, Udyog Vihar, Sector 18, Gurugram,
              Haryana 122015
              </a>
            </li>
            <li>
              <a className="text-white font-light text-md hover:underline" href="#">
              Why Accredian
              </a>
            </li>
            <li>
              <a className="text-white font-light text-md hover:underline" href="#">
              Follow Us
              </a>
            </li>
            <li>
              <a className="text-white font-normal text-sm flex justify-start space-x-4 items-center" href="#">
                <div>
                    <Fb/>
                </div>
                <div>
                    <Lin/>
                </div>
                <div>
                    <Twitter/>
                </div>
                <div>
                    <Insta/>
                </div>
                <div>
                    <Yt/>
                </div>
                
              </a>
            </li>
            
          </ul>
        </div>
        <div className="col-span-2">
          <h5 className="text-xl font-bold mb-4">Accredian</h5>
          <ul className="list-none">
          <li>
              <a className="text-white font-normal text-xs hover:underline" href="#">
              About
              </a>
            </li>
            <li>
              <a className="text-white font-normal text-xs hover:underline" href="#">
              Career 
              </a>
            </li>
            <li>
              <a className="text-white font-normal text-xs hover:underline" href="#">
              Blog
              </a>
            </li>
            <li>
              <a className="text-white font-normal text-xs hover:underline" href="#">
              Admission Policy              </a>
            </li>
            <li>
              <a className="text-white font-normal text-xs hover:underline" href="#">
              Referral Policy              </a>
            </li>
            <li>
              <a className="text-white font-normal text-xs hover:underline" href="#">
              Privacy Policy              </a>
            </li>
            <li>
              <a className="text-white font-normal text-xs hover:underline" href="#">
              Terms Of Service             </a>
            </li>
            <li>
              <a className="text-white font-normal text-xs hover:underline" href="#">
              Master FAQs             </a>
            </li>
            
          </ul>
        </div>
      </div>
      


    </div>

    <div className='pr-8 flex justify-end'>
        <svg width="52" height="51" viewBox="0 0 52 51" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.977783 25.3303C0.977967 18.749 3.57093 12.4328 8.19501 7.74966C12.8191 3.06656 19.102 0.393716 25.6827 0.310075L25.6577 0.285069L44.2291 0.137207C44.2291 0.137207 50.8025 0.260607 50.8025 7.41616C50.8025 11.9923 50.8677 18.7363 50.915 23.0048C50.9857 23.7709 51.0219 24.5461 51.0237 25.3303C51.0237 28.6164 50.3765 31.8703 49.119 34.9062C47.8614 37.9421 46.0183 40.7006 43.6947 43.0242C41.3711 45.3478 38.6126 47.191 35.5766 48.4485C32.5407 49.7061 29.2868 50.3533 26.0008 50.3533C22.7147 50.3533 19.4608 49.7061 16.4249 48.4485C13.3889 47.191 10.6304 45.3478 8.30684 43.0242C5.98324 40.7006 4.14006 37.9421 2.88254 34.9062C1.62502 31.8703 0.977783 28.6164 0.977783 25.3303Z" fill="#1D65FF"/>
        <path d="M32.5877 32.3403L26.6961 29.8152C26.3885 29.6829 26.0526 29.6296 25.7191 29.6602C25.3857 29.6909 25.0652 29.8046 24.7869 29.9908L21.6367 32.0919C19.7115 31.1555 18.1533 29.6042 17.2084 27.6832L19.3008 24.4857C19.4827 24.208 19.5931 23.8897 19.6221 23.5591C19.6512 23.2284 19.5979 22.8957 19.4671 22.5906L16.9399 16.6925C16.7678 16.2923 16.4707 15.9586 16.0932 15.7413C15.7156 15.5241 15.2778 15.4349 14.8453 15.4873C13.1457 15.7057 11.5838 16.5355 10.4514 17.8215C9.31891 19.1075 8.69339 20.7618 8.69165 22.4754C8.69712 27.2777 10.6073 31.8818 14.0031 35.2775C17.3989 38.6732 22.003 40.5832 26.8053 40.5885C28.5189 40.5868 30.1732 39.9613 31.4592 38.8288C32.7452 37.6963 33.575 36.1344 33.7934 34.4348C33.8457 34.0023 33.7564 33.5645 33.5391 33.187C33.3217 32.8094 32.9879 32.5124 32.5877 32.3403Z" fill="white"/>
        <path d="M39.6736 25.9344C39.5736 25.9344 39.4992 25.9344 39.4313 25.9344C37.7461 25.904 35.458 25.8888 32.6242 25.8888C27.8285 25.8888 22.9864 25.9339 22.9478 25.9344V13.9277C23.0798 13.1884 23.385 12.4907 23.8383 11.8919C24.2829 11.3001 24.8601 10.8207 25.5235 10.4925C26.4672 10.0487 27.5012 9.831 28.5437 9.8565H39.4334C39.4503 9.8565 39.4941 9.8565 39.5643 9.8565C40.3927 9.8565 44.5302 10.1214 44.6232 15.3531C44.7243 21.129 44.6232 22.5647 44.6232 22.5783C44.6519 22.931 44.6099 23.2859 44.4992 23.622C44.3886 23.9581 44.2116 24.2684 43.979 24.5351C43.1723 25.4597 41.7247 25.9344 39.6736 25.9344ZM27.2369 19.4483C27.0126 19.4486 26.7975 19.5375 26.6389 19.6962C26.4803 19.8549 26.3911 20.0701 26.391 20.2945C26.3911 20.5188 26.4803 20.7341 26.6389 20.8928C26.7975 21.0514 27.0126 21.1404 27.2369 21.1407H35.7396C35.9639 21.1404 36.1788 21.0514 36.3374 20.8928C36.4959 20.7341 36.5851 20.5188 36.5853 20.2945C36.5851 20.0701 36.4959 19.8549 36.3374 19.6962C36.1788 19.5375 35.9639 19.4486 35.7396 19.4483H27.2369ZM27.2369 15.3584C27.0126 15.3587 26.7975 15.4482 26.6389 15.6069C26.4803 15.7656 26.3911 15.9803 26.391 16.2046C26.3911 16.429 26.4803 16.6443 26.6389 16.8029C26.7975 16.9616 27.0126 17.0511 27.2369 17.0514H40.3733C40.5977 17.0512 40.8129 16.9616 40.9716 16.8029C41.1303 16.6442 41.2194 16.4291 41.2195 16.2046C41.2194 15.9802 41.1303 15.7651 40.9716 15.6064C40.8129 15.4477 40.5977 15.3586 40.3733 15.3584H27.2369Z" fill="white"/>
        </svg>
    </div>
    <div className="text-center text-xs pt-4 pb-[3%]">
        <p>© 2024 Accredian A Brand of FullStack Education Pvt Ltd. All Rights Reserved</p>
      </div>
    

    </div>
  )
}


const Fb = () =>{
    return(
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.66464 3.81885H21.5255C22.1264 3.81885 22.7027 4.05757 23.1277 4.48249C23.5526 4.90742 23.7913 5.48374 23.7913 6.08468V21.9455C23.7913 22.5465 23.5526 23.1228 23.1277 23.5477C22.7027 23.9726 22.1264 24.2113 21.5255 24.2113H5.66464C5.0637 24.2113 4.48738 23.9726 4.06245 23.5477C3.63752 23.1228 3.3988 22.5465 3.3988 21.9455V6.08468C3.3988 5.48374 3.63752 4.90742 4.06245 4.48249C4.48738 4.05757 5.0637 3.81885 5.66464 3.81885ZM20.3926 6.08468H17.5603C16.5086 6.08468 15.5001 6.50244 14.7564 7.24606C14.0128 7.98968 13.5951 8.99825 13.5951 10.0499V12.8822H11.3292V16.2809H13.5951V24.2113H16.9938V16.2809H20.3926V12.8822H16.9938V10.6163C16.9938 10.3159 17.1132 10.0277 17.3256 9.81526C17.5381 9.60279 17.8263 9.48343 18.1267 9.48343H20.3926V6.08468Z" fill="white"/>
</svg>
    )
}

const Lin = () =>{
    return(
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21.7154 3.81885C22.3163 3.81885 22.8927 4.05757 23.3176 4.48249C23.7425 4.90742 23.9812 5.48374 23.9812 6.08468V21.9455C23.9812 22.5465 23.7425 23.1228 23.3176 23.5477C22.8927 23.9726 22.3163 24.2113 21.7154 24.2113H5.85458C5.25364 24.2113 4.67732 23.9726 4.25239 23.5477C3.82747 23.1228 3.58875 22.5465 3.58875 21.9455V6.08468C3.58875 5.48374 3.82747 4.90742 4.25239 4.48249C4.67732 4.05757 5.25364 3.81885 5.85458 3.81885H21.7154ZM21.149 21.3791V15.3746C21.149 14.3951 20.7598 13.4557 20.0672 12.763C19.3746 12.0704 18.4352 11.6813 17.4556 11.6813C16.4927 11.6813 15.3711 12.2704 14.8273 13.1541V11.8965H11.6664V21.3791H14.8273V15.7938C14.8273 14.9214 15.5297 14.2077 16.402 14.2077C16.8227 14.2077 17.2261 14.3748 17.5236 14.6722C17.821 14.9697 17.9881 15.3731 17.9881 15.7938V21.3791H21.149ZM7.98446 10.1179C8.48925 10.1179 8.97336 9.91734 9.3303 9.5604C9.68724 9.20346 9.88776 8.71935 9.88776 8.21456C9.88776 7.16095 9.03807 6.29994 7.98446 6.29994C7.47667 6.29994 6.98968 6.50165 6.63061 6.86072C6.27155 7.21978 6.06983 7.70677 6.06983 8.21456C6.06983 9.26818 6.93085 10.1179 7.98446 10.1179ZM9.55922 21.3791V11.8965H6.42104V21.3791H9.55922Z" fill="white"/>
</svg>

    )
}

const Twitter = () =>{
    return(
        <svg width="25" height="21" viewBox="0 0 25 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M24.3854 3.21749C23.5131 3.61401 22.5728 3.87459 21.5985 3.99921C22.5954 3.39876 23.3658 2.44711 23.7283 1.30286C22.788 1.86932 21.7457 2.26584 20.6468 2.49243C19.7518 1.51812 18.4943 0.95166 17.0668 0.95166C14.4044 0.95166 12.2292 3.12686 12.2292 5.81187C12.2292 6.19706 12.2746 6.57093 12.3539 6.92213C8.32067 6.71821 4.72933 4.78092 2.33887 1.84666C1.91969 2.5604 1.68178 3.39876 1.68178 4.28244C1.68178 5.97048 2.53147 7.46593 3.84565 8.31562C3.04128 8.31562 2.29356 8.08904 1.63646 7.74916V7.78315C1.63646 10.1396 3.31318 12.1109 5.5337 12.5527C4.82078 12.7478 4.07234 12.775 3.34717 12.632C3.65488 13.5978 4.25751 14.4429 5.07035 15.0485C5.8832 15.654 6.86538 15.9896 7.87884 16.0081C6.16091 17.3681 4.03145 18.1032 1.84039 18.0927C1.4552 18.0927 1.07001 18.07 0.684814 18.0247C2.83736 19.4069 5.39775 20.2112 8.13941 20.2112C17.0668 20.2112 21.9723 12.802 21.9723 6.37833C21.9723 6.16308 21.9723 5.95915 21.961 5.7439C22.9126 5.06415 23.7283 4.20313 24.3854 3.21749Z" fill="white"/>
</svg>

    )
}

const Insta = () =>{
    return(
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.96655 0.685669H16.483C20.1084 0.685669 23.054 3.63125 23.054 7.25659V16.7731C23.054 18.5158 22.3617 20.1871 21.1294 21.4194C19.8971 22.6517 18.2258 23.344 16.483 23.344H6.96655C3.34121 23.344 0.39563 20.3984 0.39563 16.7731V7.25659C0.39563 5.51387 1.08792 3.84253 2.32021 2.61025C3.55249 1.37796 5.22383 0.685669 6.96655 0.685669ZM6.73996 2.9515C5.65828 2.9515 4.6209 3.3812 3.85603 4.14607C3.09116 4.91093 2.66146 5.94832 2.66146 7.03V16.9997C2.66146 19.2542 4.48546 21.0782 6.73996 21.0782H16.7096C17.7913 21.0782 18.8287 20.6485 19.5936 19.8836C20.3584 19.1187 20.7881 18.0814 20.7881 16.9997V7.03C20.7881 4.7755 18.9641 2.9515 16.7096 2.9515H6.73996ZM17.6726 4.65088C18.0482 4.65088 18.4084 4.80008 18.674 5.06566C18.9396 5.33124 19.0888 5.69144 19.0888 6.06702C19.0888 6.44261 18.9396 6.80281 18.674 7.06839C18.4084 7.33397 18.0482 7.48317 17.6726 7.48317C17.297 7.48317 16.9368 7.33397 16.6712 7.06839C16.4057 6.80281 16.2565 6.44261 16.2565 6.06702C16.2565 5.69144 16.4057 5.33124 16.6712 5.06566C16.9368 4.80008 17.297 4.65088 17.6726 4.65088ZM11.7248 6.35025C13.2271 6.35025 14.6679 6.94705 15.7303 8.00937C16.7926 9.07169 17.3894 10.5125 17.3894 12.0148C17.3894 13.5172 16.7926 14.958 15.7303 16.0203C14.6679 17.0826 13.2271 17.6794 11.7248 17.6794C10.2225 17.6794 8.78165 17.0826 7.71933 16.0203C6.65702 14.958 6.06021 13.5172 6.06021 12.0148C6.06021 10.5125 6.65702 9.07169 7.71933 8.00937C8.78165 6.94705 10.2225 6.35025 11.7248 6.35025ZM11.7248 8.61609C10.8234 8.61609 9.95891 8.97417 9.32152 9.61156C8.68413 10.2489 8.32605 11.1134 8.32605 12.0148C8.32605 12.9162 8.68413 13.7807 9.32152 14.4181C9.95891 15.0555 10.8234 15.4136 11.7248 15.4136C12.6262 15.4136 13.4907 15.0555 14.1281 14.4181C14.7655 13.7807 15.1235 12.9162 15.1235 12.0148C15.1235 11.1134 14.7655 10.2489 14.1281 9.61156C13.4907 8.97417 12.6262 8.61609 11.7248 8.61609Z" fill="white"/>
</svg>

    )
}

const Yt = () =>{
    return(
        <svg width="24" height="16" viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.63926 11.4138L15.5191 8.01501L9.63926 4.61626V11.4138ZM22.7358 2.54302C22.8831 3.07549 22.985 3.78923 23.053 4.69557C23.1323 5.6019 23.1663 6.38361 23.1663 7.06336L23.2343 8.01501C23.2343 10.4961 23.053 12.3201 22.7358 13.487C22.4525 14.5066 21.7955 15.1637 20.7758 15.4469C20.2434 15.5942 19.2691 15.6962 17.7736 15.7642C16.3008 15.8435 14.9526 15.8775 13.7064 15.8775L11.9051 15.9454C7.15817 15.9454 4.20126 15.7642 3.03436 15.4469C2.01473 15.1637 1.35764 14.5066 1.07441 13.487C0.927132 12.9545 0.82517 12.2408 0.757195 11.3345C0.67789 10.4281 0.643903 9.64641 0.643903 8.96666L0.575928 8.01501C0.575928 5.53392 0.757194 3.70993 1.07441 2.54302C1.35764 1.5234 2.01473 0.866307 3.03436 0.583078C3.56683 0.435799 4.54114 0.333836 6.03659 0.265861C7.50938 0.186557 8.85755 0.15257 10.1038 0.15257L11.9051 0.0845947C16.652 0.0845947 19.6089 0.265861 20.7758 0.583078C21.7955 0.866307 22.4525 1.5234 22.7358 2.54302Z" fill="white"/>
</svg>

    )
}