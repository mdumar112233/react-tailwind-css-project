import React from 'react';
import './Store.css';
import programmer from '../images/undraw_programmer_imem.png';
import browsing from '../images/undraw_Browsing_online_re_umsa.png';
import chore from '../images/undraw_chore_list_re_2lq8.png';
import social from '../images/undraw_Social_share_re_qb4v.png';
import video from '../images/undraw_Video_call_re_4p26.png';

const Store = () => {
    return (
        <div>
            <header class="text-gray-600 body-font">
                <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                  
                    <span class="ml-3 text-2xl">U</span>
                    </a>
                    <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
                    <a class="mr-5 hover:text-gray-900">Home</a>
                    <a class="mr-5 hover:text-gray-900">About</a>
                    <a class="mr-5 hover:text-gray-900">Team</a>
                    <a class="mr-5 hover:text-gray-900">Contact</a>
                    </nav>
                </div>
             </header>
            
            <section class="text-gray-600 body-font">
                    <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                        <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 class="title-font sm:text-4xl text-2xl mb-4 font-medium text-gray-900">This is Umar Faruk
                            <br class="hidden lg:inline-block" />Web developer
                        </h1>
                        <p class="mb-8 leading-relaxed">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
                        <div class="flex justify-center">
                            <button class="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">Hire me</button>
                            <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Download CV</button>
                        </div>
                        </div>
                        <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                        <img class="object-cover object-center rounded" alt="hero" src={programmer} />
                        </div>
                    </div>
                </section>

                <section class="text-gray-600 body-font">
                    <div class="container px-5 py-24 mx-auto">
                      <div class="flex flex-wrap w-full mb-20">
                        <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
                          <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Pitchfork Kickstarter Taxidermy</h1>
                          <div class="h-1 w-20 bg-green-500 rounded"></div>
                        </div>
                        <p class="lg:w-1/2 w-full leading-relaxed text-gray-500">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag.</p>
                      </div>
                      <div class="flex flex-wrap -m-4">
                        <div class="xl:w-1/4 md:w-1/2 p-4">
                          <div class="bg-gray-100 p-6 rounded-lg">
                            <img class="h-40 rounded w-full object-cover object-center mb-6" src={browsing} alt="content"/>
                            <h3 class="tracking-widest text-green-500 text-xs font-medium title-font">SUBTITLE</h3>
                            <h2 class="text-lg text-gray-900 font-medium title-font mb-4">Chichen Itza</h2>
                            <p class="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
                          </div>
                        </div>
                        <div class="xl:w-1/4 md:w-1/2 p-4">
                          <div class="bg-gray-100 p-6 rounded-lg">
                            <img class="h-40 rounded w-full object-cover object-center mb-6" src={chore} alt="content" />
                            <h3 class="tracking-widest text-green-500 text-xs font-medium title-font">SUBTITLE</h3>
                            <h2 class="text-lg text-gray-900 font-medium title-font mb-4">Colosseum Roma</h2>
                            <p class="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
                          </div>
                        </div>
                        <div class="xl:w-1/4 md:w-1/2 p-4">
                          <div class="bg-gray-100 p-6 rounded-lg">
                            <img class="h-40 rounded w-full object-cover object-center mb-6" src={social} alt="content" />
                            <h3 class="tracking-widest text-green-500 text-xs font-medium title-font">SUBTITLE</h3>
                            <h2 class="text-lg text-gray-900 font-medium title-font mb-4">Great Pyramid of Giza</h2>
                            <p class="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
                          </div>
                        </div>
                        <div class="xl:w-1/4 md:w-1/2 p-4">
                          <div class="bg-gray-100 p-6 rounded-lg">
                            <img class="h-40 rounded w-full object-cover object-center mb-6" src={video} alt="content" />
                            <h3 class="tracking-widest text-green-500 text-xs font-medium title-font">SUBTITLE</h3>
                            <h2 class="text-lg text-gray-900 font-medium title-font mb-4">San Francisco</h2>
                            <p class="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                </section>

                <section class="text-gray-600 body-font">
                    <div class="container px-5 py-24 mx-auto">
                      <div class="flex flex-col text-center w-full mb-20">
                        <h1 class="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">Pricing</h1>
                        <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Banh mi cornhole echo park skateboard authentic crucifix neutra tilde lyft biodiesel artisan direct trade mumblecore 3 wolf moon twee</p>
                      </div>
                      <div class="lg:w-2/3 w-full mx-auto overflow-auto">
                        <table class="table-auto w-full text-left whitespace-no-wrap">
                          <thead>
                            <tr>
                              <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">Plan</th>
                              <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Speed</th>
                              <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Storage</th>
                              <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Price</th>
                              <th class="w-10 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tr rounded-br"></th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td class="px-4 py-3">Start</td>
                              <td class="px-4 py-3">5 Mb/s</td>
                              <td class="px-4 py-3">15 GB</td>
                              <td class="px-4 py-3 text-lg text-gray-900">Free</td>
                              <td class="w-10 text-center">
                                <input name="plan" type="radio" />
                              </td>
                            </tr>
                            <tr>
                              <td class="border-t-2 border-gray-200 px-4 py-3">Pro</td>
                              <td class="border-t-2 border-gray-200 px-4 py-3">25 Mb/s</td>
                              <td class="border-t-2 border-gray-200 px-4 py-3">25 GB</td>
                              <td class="border-t-2 border-gray-200 px-4 py-3 text-lg text-gray-900">$24</td>
                              <td class="border-t-2 border-gray-200 w-10 text-center">
                                <input name="plan" type="radio" />
                              </td>
                            </tr>
                            <tr>
                              <td class="border-t-2 border-gray-200 px-4 py-3">Business</td>
                              <td class="border-t-2 border-gray-200 px-4 py-3">36 Mb/s</td>
                              <td class="border-t-2 border-gray-200 px-4 py-3">40 GB</td>
                              <td class="border-t-2 border-gray-200 px-4 py-3 text-lg text-gray-900">$50</td>
                              <td class="border-t-2 border-gray-200 w-10 text-center">
                                <input name="plan" type="radio" />
                              </td>
                            </tr>
                            <tr>
                              <td class="border-t-2 border-b-2 border-gray-200 px-4 py-3">Exclusive</td>
                              <td class="border-t-2 border-b-2 border-gray-200 px-4 py-3">48 Mb/s</td>
                              <td class="border-t-2 border-b-2 border-gray-200 px-4 py-3">120 GB</td>
                              <td class="border-t-2 border-b-2 border-gray-200 px-4 py-3 text-lg text-gray-900">$72</td>
                              <td class="border-t-2 border-b-2 border-gray-200 w-10 text-center">
                                <input name="plan" type="radio" />
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div class="flex pl-4 mt-4 lg:w-2/3 w-full mx-auto">
                        <a class="text-green-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                          </svg>
                        </a>
                        <button class="flex ml-auto text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded">Button</button>
                      </div>
                    </div>
                 </section>

                 <footer class="text-gray-600 body-font">
                      <div class="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
                        <div class="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left md:mt-0 mt-10">
                          <a class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                            <span class="ml-3 text-xl">Umar faruk</span>
                          </a>
                          <p class="mt-2 text-sm text-gray-500">Air plant banjo lyft occupy retro adaptogen indego</p>
                        </div>
                        <div class="flex-grow flex flex-wrap md:pr-20 -mb-10 md:text-left text-center order-first">
                          <div class="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
                            <nav class="list-none mb-10">
                              <li>
                                <a class="text-gray-600 hover:text-gray-800">First Link</a>
                              </li>
                              <li>
                                <a class="text-gray-600 hover:text-gray-800">Second Link</a>
                              </li>
                              <li>
                                <a class="text-gray-600 hover:text-gray-800">Third Link</a>
                              </li>
                              <li>
                                <a class="text-gray-600 hover:text-gray-800">Fourth Link</a>
                              </li>
                            </nav>
                          </div>
                          <div class="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
                            <nav class="list-none mb-10">
                              <li>
                                <a class="text-gray-600 hover:text-gray-800">First Link</a>
                              </li>
                              <li>
                                <a class="text-gray-600 hover:text-gray-800">Second Link</a>
                              </li>
                              <li>
                                <a class="text-gray-600 hover:text-gray-800">Third Link</a>
                              </li>
                              <li>
                                <a class="text-gray-600 hover:text-gray-800">Fourth Link</a>
                              </li>
                            </nav>
                          </div>
                          <div class="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
                            <nav class="list-none mb-10">
                              <li>
                                <a class="text-gray-600 hover:text-gray-800">First Link</a>
                              </li>
                              <li>
                                <a class="text-gray-600 hover:text-gray-800">Second Link</a>
                              </li>
                              <li>
                                <a class="text-gray-600 hover:text-gray-800">Third Link</a>
                              </li>
                              <li>
                                <a class="text-gray-600 hover:text-gray-800">Fourth Link</a>
                              </li>
                            </nav>
                          </div>
                          <div class="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
                            <nav class="list-none mb-10">
                              <li>
                                <a class="text-gray-600 hover:text-gray-800">First Link</a>
                              </li>
                              <li>
                                <a class="text-gray-600 hover:text-gray-800">Second Link</a>
                              </li>
                              <li>
                                <a class="text-gray-600 hover:text-gray-800">Third Link</a>
                              </li>
                              <li>
                                <a class="text-gray-600 hover:text-gray-800">Fourth Link</a>
                              </li>
                            </nav>
                          </div>
                        </div>
                      </div>
                      <div class="bg-gray-100">
                        <div class="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
                          <p class="text-gray-500 text-sm text-center sm:text-left">© 2020 faruk —
                            <a href="https://twitter.com/knyttneve" rel="noopener noreferrer" class="text-gray-600 ml-1" target="_blank">@New world</a>
                          </p>
                          <span class="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
                            <a class="text-gray-500">
                              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                              </svg>
                            </a>
                            <a class="ml-3 text-gray-500">
                              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                              </svg>
                            </a>
                            <a class="ml-3 text-gray-500">
                              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                              </svg>
                            </a>
                            <a class="ml-3 text-gray-500">
                              <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" class="w-5 h-5" viewBox="0 0 24 24">
                                <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                                <circle cx="4" cy="4" r="2" stroke="none"></circle>
                              </svg>
                            </a>
                          </span>
                        </div>
                      </div>
                    </footer>
        </div>
    );
};

export default Store;