<template>
  <div
    class="
      min-h-screen
      flex
      flex-wrap
      justify-center
      sm:items-center
    "
  >
    <div class="flex flex-col">
      <el-radio v-model="store.state.app.selected" label="1">备选项</el-radio>
      <el-radio v-model="store.state.app.selected" label="2">备选项</el-radio>
      <el-input-number
        v-model="store.state.app.num"
        @change="handleChange"
        :min="1"
        :max="10"
        label="描述文字"
      ></el-input-number>
    </div>
    <div class="flex flex-col">
      <el-card class="box-card">
        <template #header>
          <div class="card-header">
            <span>卡片名称</span>
            <el-button class="button" type="text">操作按钮</el-button>
          </div>
        </template>
        <div v-for="o in 4" :key="o" class="text item">
          {{ "列表内容 " + o }}
        </div>
      </el-card>
    </div>
  </div>
  <div
    class="
      py-8
      px-8
      m-5
      max-w-sm
      mx-auto
      bg-white
      rounded-xl
      shadow-md
      space-y-5
      sm:py-4
      sm:flex
      sm:items-center
      sm:space-y-0 sm:space-x-6
    "
  >
    <img
      class="block mx-auto h-24 rounded-full sm:mx-0 sm:flex-shrink-0"
      src="public/erin-lindford.jpg"
      alt="Woman's Face"
    />
    <div class="text-center space-y-2 sm:text-left">
      <div class="space-y-0.5">
        <p class="text-lg text-black font-semibold">Erin Lindford</p>
        <p class="text-gray-500 font-medium">Product Engineer</p>
      </div>
      <button
        class="
          px-4
          py-1
          text-sm text-purple-600
          font-semibold
          rounded-full
          border border-purple-200
          hover:text-white
          hover:bg-purple-600
          hover:border-transparent
          focus:outline-none
          focus:ring-2 focus:ring-purple-600 focus:ring-offset-2
        "
      >
        Message
      </button>
    </div>
  </div>
  <form class="space-y-5">
    <input
      class="
        border border-transparent
        ring-2 ring-yellow-200
        focus:outline-none
        focus:ring-2 focus:ring-purple-600
        focus:border-transparent
      "
    />
    <button
      class="
        bg-purple-600
        font-semibold
        p-1
        rounded-sm
        hover:bg-purple-700
        text-white
        focus:outline-none
        focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50
      "
    >
      Sign up
    </button>
  </form>
  <div class="space-y-5 flex flex-row flex-wrap justify-center">
    <div
      class="w-24 h-24 m-4 bg-purple-500 transform rotate-45 flex flex-col"
    ></div>
    <div class="w-24 h-24 m-4 bg-purple-500 transform flex flex-col"></div>
    <div class="w-24 h-24 m-4 bg-purple-500 transform flex flex-col"></div>
    <div class="w-24 h-24 m-4 bg-purple-500 transform flex flex-col"></div>
    <div class="w-24 h-24 m-4 bg-purple-500 transform flex flex-col"></div>
    <div class="w-24 h-24 m-4 bg-purple-500 transform flex flex-col"></div>
    <div class="w-24 h-24 m-4 bg-purple-500 transform flex flex-col"></div>
    <div class="w-24 h-24 m-4 bg-purple-500 transform flex flex-col"></div>
    <div class="w-24 h-24 m-4 bg-purple-500 transform flex flex-col"></div>
    <div class="w-24 h-24 m-4 bg-purple-500 transform flex flex-col"></div>
    <div class="w-24 h-24 m-4 bg-purple-500 transform flex flex-col"></div>
    <div class="w-24 h-24 m-4 bg-purple-500 transform flex flex-col"></div>
    <div class="w-24 h-24 m-4 bg-purple-500 transform flex flex-col"></div>
    <div class="w-24 h-24 m-4 bg-purple-500 transform flex flex-col"></div>
    <div class="w-24 h-24 m-4 bg-purple-500 transform flex flex-col"></div>
    <div class="w-24 h-24 m-4 bg-purple-500 transform flex flex-col"></div>
    <div class="w-24 h-24 m-4 bg-purple-500 transform flex flex-col"></div>
    <div class="w-24 h-24 m-4 bg-purple-500 transform flex flex-col"></div>
  </div>
  <div class="relative flex flex-col items-center justify-center">
    <div class="grid mt-8 gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-2">
      <div class="flex flex-col">
        <div class="bg-white shadow-md rounded-3xl p-4">
          <div class="flex-none lg:flex">
            <div class="h-full w-full lg:h-48 lg:w-48 lg:mb-0 mb-3">
              <img
                src="https://images.unsplash.com/photo-1622180203374-9524a54b734d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1950&amp;q=80"
                alt="Just a flower"
                class="
                  w-full
                  object-scale-down
                  lg:object-cover
                  lg:h-48
                  rounded-2xl
                "
              />
            </div>
            <div class="flex-auto ml-3 justify-evenly py-2">
              <div class="flex flex-wrap">
                <div class="w-full flex-none text-xs text-blue-700 font-medium">
                  Shop
                </div>
                <h2 class="flex-auto text-lg font-medium">Massive Dynamic</h2>
              </div>
              <p class="mt-3"></p>
              <div class="flex py-4 text-sm text-gray-600">
                <div class="flex-1 inline-flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5 mr-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    ></path>
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    ></path>
                  </svg>
                  <p class="">Cochin,KL</p>
                </div>
                <div class="flex-1 inline-flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                  <p class="">05-25-2021</p>
                </div>
              </div>
              <div class="flex p-4 pb-2 border-t border-gray-200"></div>
              <div class="flex space-x-3 text-sm font-medium">
                <div class="flex-auto flex space-x-3">
                  <button
                    class="
                      mb-2
                      md:mb-0
                      bg-white
                      px-5
                      py-2
                      shadow-sm
                      tracking-wider
                      border
                      text-gray-600
                      rounded-full
                      hover:bg-gray-100
                      inline-flex
                      items-center
                      space-x-2
                    "
                  >
                    <span
                      class="text-green-400 hover:text-green-500 rounded-lg"
                    >
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fab"
                        data-icon="shopify"
                        class="svg-inline--fa fa-shopify w-5 h-5"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                      >
                        <path
                          fill="currentColor"
                          d="M388.32,104.1a4.66,4.66,0,0,0-4.4-4c-2,0-37.23-.8-37.23-.8s-21.61-20.82-29.62-28.83V503.2L442.76,472S388.72,106.5,388.32,104.1ZM288.65,70.47a116.67,116.67,0,0,0-7.21-17.61C271,32.85,255.42,22,237,22a15,15,0,0,0-4,.4c-.4-.8-1.2-1.2-1.6-2C223.4,11.63,213,7.63,200.58,8c-24,.8-48,18-67.25,48.83-13.61,21.62-24,48.84-26.82,70.06-27.62,8.4-46.83,14.41-47.23,14.81-14,4.4-14.41,4.8-16,18-1.2,10-38,291.82-38,291.82L307.86,504V65.67a41.66,41.66,0,0,0-4.4.4S297.86,67.67,288.65,70.47ZM233.41,87.69c-16,4.8-33.63,10.4-50.84,15.61,4.8-18.82,14.41-37.63,25.62-50,4.4-4.4,10.41-9.61,17.21-12.81C232.21,54.86,233.81,74.48,233.41,87.69ZM200.58,24.44A27.49,27.49,0,0,1,215,28c-6.4,3.2-12.81,8.41-18.81,14.41-15.21,16.42-26.82,42-31.62,66.45-14.42,4.41-28.83,8.81-42,12.81C131.33,83.28,163.75,25.24,200.58,24.44ZM154.15,244.61c1.6,25.61,69.25,31.22,73.25,91.66,2.8,47.64-25.22,80.06-65.65,82.47-48.83,3.2-75.65-25.62-75.65-25.62l10.4-44s26.82,20.42,48.44,18.82c14-.8,19.22-12.41,18.81-20.42-2-33.62-57.24-31.62-60.84-86.86-3.2-46.44,27.22-93.27,94.47-97.68,26-1.6,39.23,4.81,39.23,4.81L221.4,225.39s-17.21-8-37.63-6.4C154.15,221,153.75,239.8,154.15,244.61ZM249.42,82.88c0-12-1.6-29.22-7.21-43.63,18.42,3.6,27.22,24,31.23,36.43Q262.63,78.68,249.42,82.88Z"
                        ></path>
                      </svg>
                    </span>
                    <span>62 Products</span>
                  </button>
                </div>
                <button
                  class="
                    mb-2
                    md:mb-0
                    bg-gray-900
                    px-5
                    py-2
                    shadow-sm
                    tracking-wider
                    text-white
                    rounded-full
                    hover:bg-gray-800
                  "
                  type="button"
                  aria-label="like"
                >
                  Edit Shop
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-col">
        <div class="bg-white shadow-md rounded-3xl p-4">
          <div class="flex-none lg:flex">
            <div class="h-full w-full lg:h-48 lg:w-48 lg:mb-0 mb-3">
              <img
                src="https://images.unsplash.com/photo-1585399000684-d2f72660f092?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1951&amp;q=80"
                alt="Just a flower"
                class="
                  w-full
                  object-scale-down
                  lg:object-cover
                  lg:h-48
                  rounded-2xl
                "
              />
            </div>
            <div class="flex-auto ml-3 justify-evenly py-2">
              <div class="flex flex-wrap">
                <div class="w-full flex-none text-xs text-blue-700 font-medium">
                  Shop
                </div>
                <h2 class="flex-auto text-lg font-medium">
                  Umbrella Corporation
                </h2>
              </div>
              <p class="mt-3"></p>
              <div class="flex py-4 text-sm text-gray-600">
                <div class="flex-1 inline-flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5 mr-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    ></path>
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    ></path>
                  </svg>
                  <p class="">Mumbai,MH</p>
                </div>
                <div class="flex-1 inline-flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                  <p class="">05-25-2021</p>
                </div>
              </div>
              <div class="flex p-4 pb-2 border-t border-gray-200"></div>
              <div class="flex space-x-3 text-sm font-medium">
                <div class="flex-auto flex space-x-3">
                  <button
                    class="
                      mb-2
                      md:mb-0
                      bg-white
                      px-5
                      py-2
                      shadow-sm
                      tracking-wider
                      border
                      text-gray-600
                      rounded-full
                      hover:bg-gray-100
                      inline-flex
                      items-center
                      space-x-2
                    "
                  >
                    <span
                      class="text-green-400 hover:text-green-500 rounded-lg"
                    >
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fab"
                        data-icon="shopify"
                        class="svg-inline--fa fa-shopify w-5 h-5"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                      >
                        <path
                          fill="currentColor"
                          d="M388.32,104.1a4.66,4.66,0,0,0-4.4-4c-2,0-37.23-.8-37.23-.8s-21.61-20.82-29.62-28.83V503.2L442.76,472S388.72,106.5,388.32,104.1ZM288.65,70.47a116.67,116.67,0,0,0-7.21-17.61C271,32.85,255.42,22,237,22a15,15,0,0,0-4,.4c-.4-.8-1.2-1.2-1.6-2C223.4,11.63,213,7.63,200.58,8c-24,.8-48,18-67.25,48.83-13.61,21.62-24,48.84-26.82,70.06-27.62,8.4-46.83,14.41-47.23,14.81-14,4.4-14.41,4.8-16,18-1.2,10-38,291.82-38,291.82L307.86,504V65.67a41.66,41.66,0,0,0-4.4.4S297.86,67.67,288.65,70.47ZM233.41,87.69c-16,4.8-33.63,10.4-50.84,15.61,4.8-18.82,14.41-37.63,25.62-50,4.4-4.4,10.41-9.61,17.21-12.81C232.21,54.86,233.81,74.48,233.41,87.69ZM200.58,24.44A27.49,27.49,0,0,1,215,28c-6.4,3.2-12.81,8.41-18.81,14.41-15.21,16.42-26.82,42-31.62,66.45-14.42,4.41-28.83,8.81-42,12.81C131.33,83.28,163.75,25.24,200.58,24.44ZM154.15,244.61c1.6,25.61,69.25,31.22,73.25,91.66,2.8,47.64-25.22,80.06-65.65,82.47-48.83,3.2-75.65-25.62-75.65-25.62l10.4-44s26.82,20.42,48.44,18.82c14-.8,19.22-12.41,18.81-20.42-2-33.62-57.24-31.62-60.84-86.86-3.2-46.44,27.22-93.27,94.47-97.68,26-1.6,39.23,4.81,39.23,4.81L221.4,225.39s-17.21-8-37.63-6.4C154.15,221,153.75,239.8,154.15,244.61ZM249.42,82.88c0-12-1.6-29.22-7.21-43.63,18.42,3.6,27.22,24,31.23,36.43Q262.63,78.68,249.42,82.88Z"
                        ></path>
                      </svg>
                    </span>
                    <span>62 Products</span>
                  </button>
                </div>
                <button
                  class="
                    mb-2
                    md:mb-0
                    bg-gray-900
                    px-5
                    py-2
                    shadow-sm
                    tracking-wider
                    text-white
                    rounded-full
                    hover:bg-gray-800
                  "
                  type="button"
                  aria-label="like"
                >
                  Edit Shop
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div
    class="
      relative
      mt-5
      min-h-screen
      flex
      items-center
      justify-center
      bg-gray-50
      py-12
      px-4
      sm:px-6
      lg:px-8
      bg-gray-500 bg-no-repeat bg-cover
      relative
      items-center
    "
    style="
      background-image: url(https://images.unsplash.com/photo-1525302220185-c387a117886e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80);
    "
  >
    <div class="absolute bg-black opacity-60 inset-0 z-0"></div>
    <div class="max-w-md w-full space-y-8 p-10 bg-white rounded-xl z-10">
      <div class="text-center">
        <h2 class="mt-6 text-3xl font-bold text-gray-900">Welcom Back!</h2>
        <p class="mt-2 text-sm text-gray-600">Please sign in to your account</p>
      </div>
      <div class="flex flex-row justify-center items-center space-x-3">
        <span
          class="
            w-11
            h-11
            items-center
            justify-center
            inline-flex
            rounded-full
            font-bold
            text-lg text-white
            bg-blue-900
            hover:shadow-lg
            cursor-pointer
            transition
            ease-in
            duration-300
          "
          ><img
            class="w-4 h-4"
            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDI0IDI0IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyIiB4bWw6c3BhY2U9InByZXNlcnZlIiBjbGFzcz0iIj48Zz48cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Im0xNS45OTcgMy45ODVoMi4xOTF2LTMuODE2Yy0uMzc4LS4wNTItMS42NzgtLjE2OS0zLjE5Mi0uMTY5LTMuMTU5IDAtNS4zMjMgMS45ODctNS4zMjMgNS42Mzl2My4zNjFoLTMuNDg2djQuMjY2aDMuNDg2djEwLjczNGg0LjI3NHYtMTAuNzMzaDMuMzQ1bC41MzEtNC4yNjZoLTMuODc3di0yLjkzOWMuMDAxLTEuMjMzLjMzMy0yLjA3NyAyLjA1MS0yLjA3N3oiIGZpbGw9IiNmZmZmZmYiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD48L2c+PC9zdmc+"
        /></span>
        <span
          class="
            w-11
            h-11
            items-center
            justify-center
            inline-flex
            rounded-full
            font-bold
            text-lg text-white
            bg-blue-400
            hover:shadow-lg
            cursor-pointer
            transition
            ease-in
            duration-300
          "
          ><img
            class="w-4 h-4"
            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDY4MS4zMzQ2NCA2ODEiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxnPjxwYXRoIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZD0ibTIwMC45NjQ4NDQgNTE1LjI5Mjk2OWMyNDEuMDUwNzgxIDAgMzcyLjg3MTA5NC0xOTkuNzAzMTI1IDM3Mi44NzEwOTQtMzcyLjg3MTA5NCAwLTUuNjcxODc1LS4xMTcxODgtMTEuMzIwMzEzLS4zNzEwOTQtMTYuOTM3NSAyNS41ODU5MzctMTguNSA0Ny44MjQyMTgtNDEuNTg1OTM3IDY1LjM3MTA5NC02Ny44NjMyODEtMjMuNDgwNDY5IDEwLjQ0MTQwNi00OC43NTM5MDcgMTcuNDYwOTM3LTc1LjI1NzgxMyAyMC42MzY3MTggMjcuMDU0Njg3LTE2LjIzMDQ2OCA0Ny44MjgxMjUtNDEuODk0NTMxIDU3LjYyNS03Mi40ODgyODEtMjUuMzIwMzEzIDE1LjAxMTcxOS01My4zNjMyODEgMjUuOTE3OTY5LTgzLjIxNDg0NCAzMS44MDg1OTQtMjMuOTE0MDYyLTI1LjQ3MjY1Ni01Ny45NjQ4NDMtNDEuNDAyMzQ0LTk1LjY2NDA2Mi00MS40MDIzNDQtNzIuMzY3MTg4IDAtMTMxLjA1ODU5NCA1OC42ODc1LTEzMS4wNTg1OTQgMTMxLjAzMTI1IDAgMTAuMjg5MDYzIDEuMTUyMzQ0IDIwLjI4OTA2MyAzLjM5ODQzNyAyOS44ODI4MTMtMTA4LjkxNzk2OC01LjQ4MDQ2OS0yMDUuNTAzOTA2LTU3LjYyNS0yNzAuMTMyODEyLTEzNi45MjE4NzUtMTEuMjUgMTkuMzYzMjgxLTE3Ljc0MjE4OCA0MS44NjMyODEtMTcuNzQyMTg4IDY1Ljg3MTA5MyAwIDQ1LjQ2MDkzOCAyMy4xMzY3MTkgODUuNjA1NDY5IDU4LjMxNjQwNyAxMDkuMDgyMDMyLTIxLjUtLjY2MDE1Ni00MS42OTUzMTMtNi41NjI1LTU5LjM1MTU2My0xNi4zODY3MTktLjAxOTUzMS41NTA3ODEtLjAxOTUzMSAxLjA4NTkzNy0uMDE5NTMxIDEuNjcxODc1IDAgNjMuNDY4NzUgNDUuMTcxODc1IDExNi40NjA5MzggMTA1LjE0NDUzMSAxMjguNDY4NzUtMTEuMDE1NjI1IDIuOTk2MDk0LTIyLjYwNTQ2OCA0LjYwOTM3NS0zNC41NTg1OTQgNC42MDkzNzUtOC40Mjk2ODcgMC0xNi42NDg0MzctLjgyODEyNS0yNC42MzI4MTItMi4zNjMyODEgMTYuNjgzNTk0IDUyLjA3MDMxMiA2NS4wNjY0MDYgODkuOTYwOTM3IDEyMi40MjU3ODEgOTEuMDIzNDM3LTQ0Ljg1NTQ2OSAzNS4xNTYyNS0xMDEuMzU5Mzc1IDU2LjA5NzY1Ny0xNjIuNzY5NTMxIDU2LjA5NzY1Ny0xMC41NjI1IDAtMjEuMDAzOTA2LS42MDU0NjktMzEuMjYxNzE4OC0xLjgxNjQwNyA1Ny45OTk5OTk4IDM3LjE3NTc4MSAxMjYuODcxMDkzOCA1OC44NzEwOTQgMjAwLjg4NjcxODggNTguODcxMDk0IiBmaWxsPSIjZmZmZmZmIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIj48L3BhdGg+PC9nPjwvc3ZnPg=="
        /></span>
        <span
          class="
            w-11
            h-11
            items-center
            justify-center
            inline-flex
            rounded-full
            font-bold
            text-lg text-white
            bg-blue-500
            hover:shadow-lg
            cursor-pointer
            transition
            ease-in
            duration-300
          "
          ><img
            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDI0IDI0IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyIiB4bWw6c3BhY2U9InByZXNlcnZlIj48Zz48cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Im0yMy45OTQgMjR2LS4wMDFoLjAwNnYtOC44MDJjMC00LjMwNi0uOTI3LTcuNjIzLTUuOTYxLTcuNjIzLTIuNDIgMC00LjA0NCAxLjMyOC00LjcwNyAyLjU4N2gtLjA3di0yLjE4NWgtNC43NzN2MTYuMDIzaDQuOTd2LTcuOTM0YzAtMi4wODkuMzk2LTQuMTA5IDIuOTgzLTQuMTA5IDIuNTQ5IDAgMi41ODcgMi4zODQgMi41ODcgNC4yNDN2Ny44MDF6IiBmaWxsPSIjZmZmZmZmIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIj48L3BhdGg+PHBhdGggeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBkPSJtLjM5NiA3Ljk3N2g0Ljk3NnYxNi4wMjNoLTQuOTc2eiIgZmlsbD0iI2ZmZmZmZiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiI+PC9wYXRoPjxwYXRoIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZD0ibTIuODgyIDBjLTEuNTkxIDAtMi44ODIgMS4yOTEtMi44ODIgMi44ODJzMS4yOTEgMi45MDkgMi44ODIgMi45MDkgMi44ODItMS4zMTggMi44ODItMi45MDljLS4wMDEtMS41OTEtMS4yOTItMi44ODItMi44ODItMi44ODJ6IiBmaWxsPSIjZmZmZmZmIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIj48L3BhdGg+PC9nPjwvc3ZnPg=="
            class="w-4 h-4"
        /></span>
      </div>
      <div class="flex items-center justify-center space-x-2">
        <span class="h-px w-16 bg-gray-300"></span>
        <span class="text-gray-500 font-normal">OR</span>
        <span class="h-px w-16 bg-gray-300"></span>
      </div>
      <form class="mt-8 space-y-6" action="#" method="POST">
        <input type="hidden" name="remember" value="true" />
        <div class="relative">
          <div class="absolute right-0 mt-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 text-green-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
          </div>
          <label class="text-sm font-bold text-gray-700 tracking-wide"
            >Email</label
          >
          <input
            class="
              w-full
              text-base
              py-2
              border-b border-gray-300
              focus:outline-none
              focus:border-indigo-500
            "
            type=""
            placeholder="mail@gmail.com"
            value="mail@gmail.com"
          />
        </div>
        <div class="mt-8 content-center">
          <label class="text-sm font-bold text-gray-700 tracking-wide">
            Password
          </label>
          <input
            class="
              w-full
              content-center
              text-base
              py-2
              border-b border-gray-300
              focus:outline-none
              focus:border-indigo-500
            "
            type=""
            placeholder="Enter your password"
            value="*****|"
          />
        </div>
        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <input
              id="remember_me"
              name="remember_me"
              type="checkbox"
              class="
                h-4
                w-4
                bg-indigo-500
                focus:ring-indigo-400
                border-gray-300
                rounded
              "
            />
            <label for="remember_me" class="ml-2 block text-sm text-gray-900">
              Remember me
            </label>
          </div>
          <div class="text-sm">
            <a
              href="#"
              class="font-medium text-indigo-500 hover:text-indigo-500"
            >
              Forgot your password?
            </a>
          </div>
        </div>
        <div>
          <button
            type="submit"
            class="
              w-full
              flex
              justify-center
              bg-indigo-500
              text-gray-100
              p-4
              rounded-full
              tracking-wide
              font-semibold
              focus:outline-none
              focus:shadow-outline
              hover:bg-indigo-600
              shadow-lg
              cursor-pointer
              transition
              ease-in
              duration-300
            "
          >
            Sign in
          </button>
        </div>
        <p
          class="
            flex flex-col
            items-center
            justify-center
            mt-10
            text-center text-md text-gray-500
          "
        >
          <span>Don't have an account?</span>
          <a
            href="#"
            class="
              text-indigo-500
              hover:text-indigo-500no-underline
              hover:underline
              cursor-pointer
              transition
              ease-in
              duration-300
            "
            >Sign up</a
          >
        </p>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from "vue";
import { useStore } from "../store";
export default defineComponent({
  name: "Home",
  setup: () => {
    const store = useStore();

    const handleChange = (value: Number) => {
      console.log(value);
    };
    return {
      store,
      handleChange,
    };
  },
  methods: {},
});
</script>

<style scoped>
</style>
