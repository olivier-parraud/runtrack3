<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Job 05</title>
    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
</head>

<body class="bg-[url(assets/img/wallpaper.jpg)]" style="overflow-x:hidden;">

    <header class="bg-sky-300 bg-opacity-5 text-black shadow-lg hidden md:block border-b-4 border-black px-4">
        <div class="container mx-auto flex items-center h-24">
            <a href="/" class="flex items-center justify-center">
                <img class="h-16" src="assets/img/Feastables_Rebrand_Non_Tilted.avif" alt="Logo" />
                <span class="ml-4 uppercase font-black"></span>
            </a>
            <nav class="contents font-semibold text-base lg:text-lg">
                <ul class="mx-auto flex items-center">
                    <li class="p-5 xl:p-8 active">
                        <a href="/">
                            <span class="text-xl italic">Shop</span>
                        </a>
                    </li>
                    <li class="p-5 xl:p-8">
                        <a href="/">
                            <span class="text-xl italic">Our story</span>
                        </a>
                    </li>
                    <li class="p-5 xl:p-8">
                        <a href="/">
                            <span class="text-xl italic">Ethical sourcing</span>
                        </a>
                    </li>
                    <li class="p-5 xl:p-8">
                        <a href="/">
                            <span class="text-xl italic">Available Worldwide</span>
                        </a>
                    </li>
                </ul>
                <ul class="list-none flex items-center gap-x-3">
                    <li class="group chatbot-item relative">
                        <button title="Open Feastables Chat" type="button" aria-label="Open Feastables Chat">
                            <span class="sr-only">Open Feastables Chat</span>
                            <span class="text-blue-cloud">
                                <svg class="icon icon--help group w-[35px] h-[35px] hover:drop-shadow-[1px_2px_0_#000000] mt-[5px] text-current" aria-hidden="true">
                                    <use xlink:href="#help" class="w-[35px] h-[35px] text-current group:fill-inherit group:stroke-inherit" />
                                </svg>
                            </span>
                        </button>
                    </li>
                    <li class="group country-selector-item relative">
                        <div class="localization-form text-black flex items-center relative">
                            <div>
                                <button type="button" title="Select Country (UNITED STATES)" class="w-8 h-8 flex items-center justify-center rounded-full bg-black hover:drop-shadow-[2px_2px_0_#000000]">
                                    <img class="w-[28px] h-[28px] rounded-full object-cover object-center" src="//feastables.com/cdn/shop/files/Flag-United-States-of-America.webp?v=1683068544&amp;width=60" srcset="//feastables.com/cdn/shop/files/Flag-United-States-of-America.webp?v=1683068544&amp;width=60, //feastables.com/cdn/shop/files/Flag-United-States-of-America.webp?v=1683068544&amp;width=120 2x" alt="Flag: UNITED STATES" width="800" height="416" loading="lazy">
                                    <span class="sr-only bg-white text-black">UNITED STATES (US )</span>
                                </button>
                                <div class="submenu container absolute z-[100] top-full left-1/2 -translate-x-1/2 hidden group-focus-within:block">
                                    <ul class="absolute w-max top-0 right-0 bg-blue-cloud border-2 border-black">
                                        <li class="hover:bg-black hover:text-white" tabindex="-1">
                                            <a title="UNITED STATES" class="whitespace-nowrap hover:bg-x-blue-400 px-5 py-4 flex gap-x-2 items-center w-full uppercase font-bold italic" href="index.php">
                                                <img src="//feastables.com/cdn/shop/files/Flag-United-States-of-America.webp?v=1683068544&amp;width=32" alt="Flag: UNITED STATES" class="inline-block rounded-sm self-end mb-0.5 outline outline-1 outline-offset-1 outline-black" width="32" height="17" loading="lazy">
                                                UNITED STATES </a>
                                        </li>
                                        <li class="hover:bg-black hover:text-white" tabindex="-1">
                                            <a title="UNITED KINGDOM" class="whitespace-nowrap hover:bg-x-blue-400 px-5 py-4 flex gap-x-2 items-center w-full uppercase font-bold italic" href="index.php">
                                                <img src="//feastables.com/cdn/shop/files/download.png?v=1683068527&amp;width=32" alt="Flag: UNITED KINGDOM" class="inline-block rounded-sm self-end mb-0.5 outline outline-1 outline-offset-1 outline-black" width="32" height="17" loading="lazy">
                                                UNITED KINGDOM </a>
                                        </li>
                                        <li class="hover:bg-black hover:text-white" tabindex="-1">
                                            <a title="IRELAND" class="whitespace-nowrap hover:bg-x-blue-400 px-5 py-4 flex gap-x-2 items-center w-full uppercase font-bold italic" href="index.php">
                                                <img src="//feastables.com/cdn/shop/files/640px-Flag_of_Ireland_svg.png?v=1741454450&amp;width=32" alt="Flag: IRELAND" class="inline-block rounded-sm self-end mb-0.5 outline outline-1 outline-offset-1 outline-black" width="32" height="17" loading="lazy">
                                                IRELAND </a>
                                        </li>
                                        <li class="hover:bg-black hover:text-white" tabindex="-1">
                                            <a title="GERMANY" class="whitespace-nowrap hover:bg-x-blue-400 px-5 py-4 flex gap-x-2 items-center w-full uppercase font-bold italic" href="index.php">
                                                <img src="//feastables.com/cdn/shop/files/Flag-Germany_1.jpg?v=1741454538&amp;width=32" alt="Flag: GERMANY" class="inline-block rounded-sm self-end mb-0.5 outline outline-1 outline-offset-1 outline-black" width="32" height="17" loading="lazy">
                                                GERMANY </a>
                                        </li>
                                        <li class="hover:bg-black hover:text-white" tabindex="-1">
                                            <a title="AUSTRIA" class="whitespace-nowrap hover:bg-x-blue-400 px-5 py-4 flex gap-x-2 items-center w-full uppercase font-bold italic" href="index.php">
                                                <img src="//feastables.com/cdn/shop/files/640px-Flag_of_Austria_svg.png?v=1741454483&amp;width=32" alt="Flag: AUSTRIA" class="inline-block rounded-sm self-end mb-0.5 outline outline-1 outline-offset-1 outline-black" width="32" height="17" loading="lazy">
                                                AUSTRIA </a>
                                        </li>
                                        <li class="hover:bg-black hover:text-white" tabindex="-1">
                                            <a title="FRANCE" class="whitespace-nowrap hover:bg-x-blue-400 px-5 py-4 flex gap-x-2 items-center w-full uppercase font-bold italic" href="index.php">
                                                <img src="//feastables.com/cdn/shop/files/640px-Flag_of_France_svg.png?v=1741454550&amp;width=32" alt="Flag: FRANCE" class="inline-block rounded-sm self-end mb-0.5 outline outline-1 outline-offset-1 outline-black" width="32" height="17" loading="lazy">
                                                FRANCE </a>
                                        </li>
                                        <li class="hover:bg-black hover:text-white" tabindex="-1">
                                            <a title="SPAIN" class="whitespace-nowrap hover:bg-x-blue-400 px-5 py-4 flex gap-x-2 items-center w-full uppercase font-bold italic" href="index.php">
                                                <img src="//feastables.com/cdn/shop/files/640px-Flag_of_Spain_svg.png?v=1741454568&amp;width=32" alt="Flag: SPAIN" class="inline-block rounded-sm self-end mb-0.5 outline outline-1 outline-offset-1 outline-black" width="32" height="17" loading="lazy">
                                                SPAIN </a>
                                        </li>
                                        <li class="hover:bg-black hover:text-white" tabindex="-1">
                                            <a title="AUSTRALIA" class="whitespace-nowrap hover:bg-x-blue-400 px-5 py-4 flex gap-x-2 items-center w-full uppercase font-bold italic" href="index.php">
                                                <img src="//feastables.com/cdn/shop/files/Flag-Australia.webp?v=1689806978&amp;width=32" alt="Flag: AUSTRALIA" class="inline-block rounded-sm self-end mb-0.5 outline outline-1 outline-offset-1 outline-black" width="32" height="17" loading="lazy">
                                                AUSTRALIA </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li class="group account-item relative hover:drop-shadow-[2px_2px_0_#000000] transition ease-in duration-100">
                        <a href="index.php" title="My Account">
                            <span class="sr-only bg-black text-white">My Account</span>
                            <svg class="icon icon--face-happy group w-[35px] h-[35px] text-current" aria-hidden="true">
                                <use xlink:href="#face-happy" class="w-[35px] h-[35px] text-current group:fill-inherit group:stroke-inherit" />
                            </svg>
                        </a>
                    </li>
                    <li class="group store-locator-item relative hover:drop-shadow-[2px_2px_0_#000000] transition ease-in duration-100">
                        <a href="index.php" title="Find A Store">
                            <span class="sr-only bg-black text-white">Find A Store</span>
                            <svg class="icon icon--map-pin group w-[35px] h-[35px] text-current" aria-hidden="true">
                                <use xlink:href="#map-pin" class="w-[35px] h-[35px] text-current group:fill-inherit group:stroke-inherit" />
                            </svg>
                        </a>
                    </li>
                    <li class="cart-item relative">
                        <button class="relative inline-block group" aria-label="Open My Bag" title="Open My Bag">
                            <svg class="icon icon--bag group w-10 h-10 group-hover:drop-shadow-[2px_1px_0_#000000] text-current" aria-hidden="true">
                                <use xlink:href="#bag" class="w-10 h-10 group-hover:drop-shadow-[2px_1px_0_#000000] text-current group:fill-inherit group:stroke-inherit" />
                            </svg>
                            <span class="absolute top-[65%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-bold italic text-black">0</span>
                        </button>
                        <svg style="display:none;" aria-hidden="true">
                            <symbol id="help" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <circle cx="12" cy="12" r="10" />
                                <path d="M9.09 9a3 3 0 1 1 5.83 1c0 2-3 3-3 3" />
                                <line x1="12" y1="17" x2="12.01" y2="17" />
                            </symbol>
                            <symbol id="face-happy" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <circle cx="12" cy="12" r="10" />
                                <path d="M8 15s1.5 2 4 2 4-2 4-2" />
                                <line x1="9" y1="9" x2="9.01" y2="9" />
                                <line x1="15" y1="9" x2="15.01" y2="9" />
                            </symbol>
                            <symbol id="map-pin" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M12 21c-4.418 0-8-7.163-8-10a8 8 0 1 1 16 0c0 2.837-3.582 10-8 10z" />
                                <circle cx="12" cy="11" r="3" />
                            </symbol>
                            <symbol id="bag" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <circle cx="9" cy="21" r="1" />
                                <circle cx="20" cy="21" r="1" />
                                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                            </symbol>
                        </svg>
                    </li>
                </ul>
            </nav>
        </div>
    </header>

    <img src="assets/img/holiday-2025-hero-mobile_1.jpg" alt="" class="w-full max-w-screen-xl mx-auto border-4 border-black block mt-8 rounded-2xl">

    <div class="whitespace-nowrap flex animate-marquee gap-8 font-black italic uppercase text-[56px] md:text-[90px] tracking-tight" style="color:#f5e7c2; text-shadow: 0 8px 0 #000, 0 12px 8px rgba(251,82,0,0.7);">
        <span>7-Eleven</span>
        <span>·</span>
        <span>Kroger</span>
        <span>·</span>
        <span>Sams Club</span>
        <span>·</span>
        <span>Albertsons</span>
        <span>·</span>
        <span>Costco</span>
        <span>·</span>
        <span>Find Us At</span>
        <span>·</span>
        <span>Walmart</span>
        <span>·</span>
        <span>Target</span>
        <span>·</span>
        <span>7-Eleven</span>
        <span>·</span>
        <span>Kroger</span>
        <span>·</span>
        <span>Sams Club</span>
        <span>·</span>
        <span>Albertsons</span>
        <span>·</span>
        <span>Costco</span>
        <span>·</span>
        <span>Find Us At</span>
        <span>·</span>
        <span>Walmart</span>
        <span>·</span>
        <span>Target</span>
        <span>·</span>
    </div>
    </div>
    <style>
        html,
        body {
            overflow-x: hidden;
        }

        @keyframes marquee {
            0% {
                transform: translateX(0);
            }

            100% {
                transform: translateX(-50%);
            }
        }

        .animate-marquee {
            animation: marquee 30s linear infinite;
        }
    </style>

    <div class="relative w-full max-w-screen-xl mx-auto m-8">
        <img src="assets/img/beastgames-prem-hero-mobile.jpg" alt="" class="w-full border-4 border-black block rounded-2xl">
        <button class="absolute right-32 bottom-40 py-2 px-5 rounded-lg bg-pink-600 text-black font-bold italic text-3xl transition border-3 border-black hover:drop-shadow-[2px_2px_0_#000000] cursor-pointer">LEARN MORE</button>
        <p class="absolute right-2 bottom-2 text-xs text-black font-bold bg-opacity-60 px-2 py-1 rounded max-w-[90%] text-right pointer-events-none select-none m-5" style="font-size:10px;">
            NO PURCHASE NECESSARY TO ENTER OR WIN. Takes place from 11/19/25 at 12:00 a.m. CT to 12/19/25 at 11:59 p.m. CT. Open <br>only to legal U.S. residents residing in the 50 U.S./D.C., Puerto Rico and U.S. Territories and Possessions, who are 18 or older. To enter <br> without purchase, go to https://fstbls.com/vn6zmu, and follow the instructions to request an AMOE. Each request is equal to 2 entries <br> into the Sweepstakes. See Official Rules at https://fstbls.com/9nsk93 for details on how to enter without purchase, additional <br> eligibility restrictions and complete details. Odds of winning depend on the number of eligible entries received. Void where <br> prohibited. Sponsor: Feastables, Inc., 167 N Green Street, Chicago, IL 60607
        </p>
    </div>

    <div class="bg-sky-400 py-12 border-3 border-black w-full">
        <div class="w-full flex flex-col md:flex-row items-start gap-8">
            <div class="flex-1 flex flex-col justify-center items-start mb-8 md:mb-0 md:pl-8">
                <h2 class="text-5xl md:text-6xl font-black leading-tight mb-4">SHOP OUR<br>WORLD'S BEST<br>CHOCOLATE</h2>
                <p class="text-xl font-bold mb-6">Show you care how your<br>chocolate is sourced</p>
                <button class="bg-blue-900 text-white font-black italic text-2xl px-12 py-4 rounded-xl border-4 border-black hover:drop-shadow-[2px_2px_0_#000000] transition cursor-pointer">SHOP ALL</button>
            </div>
            <div class="flex-[2] overflow-x-auto pb-4 pt-0 overflow-visible w-full pr-0 ml-auto">
                <div class="flex gap-6 overflow-visible pt-24">
                    <div class="relative min-w-[280px] flex flex-col items-center group">
                        <img src="assets/img/shop/cane.webp" alt="Pretzel Mint Crunch Cane" class="h-64 object-contain -mt-12 z-20 relative block group-hover:hidden">
                        <img src="assets/img/shop/cane-hover.webp" alt="Pretzel Mint Crunch Cane Hover" class="h-64 object-contain -mt-12 z-20 relative hidden group-hover:block">
                        <div class="bg-white h-80 rounded-2xl shadow-xl border-2 border-gray-200 flex flex-col items-center p-6 pt-20 w-full -mt-16 z-10 relative">
                            <h3 class="text-xl font-black text-center mb-4">Pretzel Mint Crunch Cane</h3>
                            <button class="bg-red-700 text-white font-black text-base rounded-lg px-10 py-3 mt-2 transition w-full hover:drop-shadow-[2px_2px_0_#000000] cursor-pointer mt-auto">FIND A STORE</button>
                        </div>
                    </div>
                    <div class="relative min-w-[280px] flex flex-col items-center group">
                        <img src="assets/img/shop/mint.webp" alt="Pretzel Mint Crunch" class="h-64 object-contain -mt-12 z-20 relative block group-hover:hidden">
                        <img src="assets/img/shop/mint-hover.webp" alt="Pretzel Mint Crunch Hover" class="h-64 object-contain -mt-12 z-20 relative hidden group-hover:block">
                        <div class="bg-white h-80 rounded-2xl shadow-xl border-2 border-gray-200 flex flex-col items-center p-6 pt-20 w-full -mt-16 z-10 relative">
                            <h3 class="text-xl font-black text-center mb-2">Pretzel Mint Crunch</h3>
                            <span class="text-lg font-bold mb-3">$39.99</span>
                            <button class="bg-red-700 text-white font-black text-base rounded-lg px-10 py-3 mt-2 transition w-full hover:drop-shadow-[2px_2px_0_#000000] cursor-pointer mt-auto">ADD TO BAG</button>
                        </div>
                    </div>
                    <div class="relative min-w-[280px] flex flex-col items-center group">
                        <img src="assets/img/shop/hot-cocoa.webp" alt="Hot Cocoa Crunch" class="h-64 object-contain -mt-12 z-20 relative block group-hover:hidden">
                        <img src="assets/img/shop/hot-cocoa-hover.webp" alt="Hot Cocoa Crunch Hover" class="h-64 object-contain -mt-12 z-20 relative hidden group-hover:block">
                        <div class="bg-white h-80 rounded-2xl shadow-xl border-2 border-gray-200 flex flex-col items-center p-6 pt-20 w-full -mt-16 z-10 relative">
                            <h3 class="text-xl font-black text-center mb-2">Hot Cocoa Crunch</h3>
                            <span class="text-lg font-bold mb-3">$39.99</span>
                            <button class="bg-red-700 text-white font-black text-base rounded-lg px-10 py-3 mt-2 transition w-full hover:drop-shadow-[2px_2px_0_#000000] cursor-pointer mt-auto">ADD TO BAG</button>
                        </div>
                    </div>
                    <div class="relative min-w-[280px] flex flex-col items-center group">
                        <img src="assets/img/shop/snowman.webp" alt="Snowman" class="h-64 object-contain -mt-12 z-20 relative block group-hover:hidden">
                        <img src="assets/img/shop/snowman-hover.webp" alt="Snowman Hover" class="h-64 object-contain -mt-12 z-20 relative hidden group-hover:block">
                        <div class="bg-white h-80 rounded-2xl shadow-xl border-2 border-gray-200 flex flex-col items-center p-6 pt-20 w-full -mt-16 z-10 relative">
                            <h3 class="text-xl font-black text-center mb-2">Peanut Butter <br> Snowman Cup</h3>
                            <span class="text-lg font-bold mb-3">$39.99</span>
                            <button class="bg-red-700 text-white font-black text-base rounded-lg px-10 py-3 mt-2 transition w-full hover:drop-shadow-[2px_2px_0_#000000] cursor-pointer mt-auto">ADD TO BAG</button>
                        </div>
                    </div>
                    <div class="relative min-w-[280px] flex flex-col items-center group">
                        <img src="assets/img/shop/caramel.webp" alt="Caramel" class="h-64 object-contain -mt-12 z-20 relative block group-hover:hidden">
                        <img src="assets/img/shop/caramel-hover.webp" alt="Caramel Hover" class="h-64 object-contain -mt-12 z-20 relative hidden group-hover:block">
                        <div class="bg-white h-80 rounded-2xl shadow-xl border-2 border-gray-200 flex flex-col items-center p-6 pt-20 w-full -mt-16 z-10 relative">
                            <h3 class="text-xl font-black text-center mb-2">Caramel</h3>
                            <span class="text-lg font-bold mb-3">$29.99</span>
                            <button class="bg-yellow-500 text-white font-black text-base rounded-lg px-10 py-3 mt-2 hover:bg-red-700 transition w-full cursor-pointer mt-auto">ADD TO BAG</button>
                        </div>
                    </div>
                    <div class="relative min-w-[280px] flex flex-col items-center group">
                        <img src="assets/img/shop/milk.webp" alt="Milk" class="h-64 object-contain -mt-12 z-20 relative block group-hover:hidden">
                        <img src="assets/img/shop/milk-hover.webp" alt="Milk Hover" class="h-64 object-contain -mt-12 z-20 relative hidden group-hover:block">
                        <div class="bg-white h-80 rounded-2xl shadow-xl border-2 border-gray-200 flex flex-col items-center p-6 pt-20 w-full -mt-16 z-10 relative">
                            <h3 class="text-xl font-black text-center mb-2">Chocolate Milk</h3>
                            <button class="bg-amber-950 text-white font-black text-base rounded-lg px-10 py-3 mt-2 hover:bg-red-700 transition w-full cursor-pointer mt-auto">Find A Store</button>
                        </div>
                    </div>
                    <div class="relative min-w-[280px] flex flex-col items-center group">
                        <img src="assets/img/shop/rasp.webp" alt="Rasp" class="h-64 object-contain -mt-12 z-20 relative block group-hover:hidden">
                        <img src="assets/img/shop/rasp-hover.webp" alt="Rasp Hover" class="h-64 object-contain -mt-12 z-20 relative hidden group-hover:block">
                        <div class="bg-white h-80 rounded-2xl shadow-xl border-2 border-gray-200 flex flex-col items-center p-6 pt-20 w-full -mt-16 z-10 relative">
                            <h3 class="text-xl font-black text-center mb-2">Raspberry Sour <br> Gummies</h3>
                            <button class="bg-purple-800 text-white font-black text-base rounded-lg px-10 py-3 mt-2 hover:bg-red-700 transition w-full cursor-pointer mt-auto">Find A Store</button>
                        </div>
                    </div>
                    <div class="relative min-w-[280px] flex flex-col items-center group">
                        <img src="assets/img/shop/assorted.webp" alt="Assorted" class="h-64 object-contain -mt-12 z-20 relative block group-hover:hidden">
                        <img src="assets/img/shop/assorted-hover.webp" alt="Assorted Hover" class="h-64 object-contain -mt-12 z-20 relative hidden group-hover:block">
                        <div class="bg-white h-80 rounded-2xl shadow-xl border-2 border-gray-200 flex flex-col items-center p-6 pt-20 w-full -mt-16 z-10 relative">
                            <h3 class="text-xl font-black text-center mb-2">Assorted Sour <br> Gummies</h3>
                            <span class="text-lg font-bold mb-3">$34.99</span>
                            <button class="bg-purple-800 text-white font-black text-base rounded-lg px-10 py-3 mt-2 hover:bg-red-700 transition w-full cursor-pointer mt-auto">Find A Store</button>
                        </div>
                    </div>
                    <div class="relative min-w-[280px] flex flex-col items-center group">
                        <img src="assets/img/shop/butter.webp" alt="Butter" class="h-64 object-contain -mt-12 z-20 relative block group-hover:hidden">
                        <img src="assets/img/shop/butter-hover.webp" alt="Butter Hover" class="h-64 object-contain -mt-12 z-20 relative hidden group-hover:block">
                        <div class="bg-white h-80 rounded-2xl shadow-xl border-2 border-gray-200 flex flex-col items-center p-6 pt-20 w-full -mt-16 z-10 relative">
                            <h3 class="text-xl font-black text-center mb-2">Peanut Butter Cups</h3>
                            <span class="text-lg font-bold mb-3">$39.99</span>
                            <button class="bg-yellow-700 text-white font-black text-base rounded-lg px-10 py-3 mt-2 hover:bg-red-700 transition w-full cursor-pointer mt-auto">ADD TO BAG</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="flex justify-center mt-8 gap-2">
            <span class="w-3 h-3 rounded-full border-2 border-black bg-blue-900"></span>
            <span class="w-3 h-3 rounded-full border-2 border-black bg-white"></span>
            <span class="w-3 h-3 rounded-full border-2 border-black bg-white"></span>
            <span class="w-3 h-3 rounded-full border-2 border-black bg-white"></span>
            <span class="w-3 h-3 rounded-full border-2 border-black bg-white"></span>
            <span class="w-3 h-3 rounded-full border-2 border-black bg-white"></span>
            <span class="w-3 h-3 rounded-full border-2 border-black bg-white"></span>
            <span class="w-3 h-3 rounded-full border-2 border-black bg-white"></span>
            <span class="w-3 h-3 rounded-full border-2 border-black bg-white"></span>
        </div>
    </div>

    <div>
        <div class="relative bg-blue-500 w-full overflow-hidden" style="min-height:480px;">
            <img src="assets/img/vague-caramel.png" alt="" class="w-full block m-0 p-0 border-0 select-none pointer-events-none">
            <div class="absolute inset-0 flex flex-col items-center justify-center">
                <span class="block -rotate-6 bg-white px-4 py-1 text-pink-600 font-black text-3xl md:text-4xl border-4 border-pink-600 shadow-lg mb-2 tracking-tight italic" style="margin-left:-2rem; margin-bottom:0.5rem; text-shadow:0 2px 0 #000;">FEASTABLES</span>
                <span class="block text-white text-5xl md:text-7xl font-black text-center leading-tight animate-shadow-perspective" style="text-shadow: 8px 12px 0 #000, 0 2px 0 #000, 0 8px 8px rgba(0,0,0,0.7); -webkit-text-stroke: 2px #000; text-stroke: 2px #000;">
                    A FLAVOR FOR <br class="hidden md:block">EVERY CRAVING
                </span>
                <style>
                    @keyframes shadowPerspective {
                        0% {
                            text-shadow: 8px 12px 0 #000, 0 2px 0 #000, 0 8px 8px rgba(0, 0, 0, 0.7);
                        }

                        40% {
                            text-shadow: 8px 12px 0 transparent, 0 2px 0 transparent, 0 8px 8px transparent;
                        }

                        60% {
                            text-shadow: 8px 12px 0 transparent, 0 2px 0 transparent, 0 8px 8px transparent;
                        }

                        100% {
                            text-shadow: 8px 12px 0 #000, 0 2px 0 #000, 0 8px 8px rgba(0, 0, 0, 0.7);
                        }
                    }

                    .animate-shadow-perspective {
                        animation: shadowPerspective 2.5s ease-in-out infinite;
                    }
                </style>
            </div>
        </div>
    </div>

    <div class="w-full bg-sky-400 py-12 flex flex-wrap justify-center gap-6">
        <div class="flex flex-col items-center w-64">
            <div class="border-2 border-black rounded-xl overflow-hidden bg-black">
                <video src="https://cdn.shopify.com/videos/c/vp/d7bfc792894548c4896b1ffd53666daa/d7bfc792894548c4896b1ffd53666daa.HD-720p-1.6Mbps-44743994.mp4" class="w-64 h-80 object-cover" controls poster="assets/img/shop/milk.webp"></video>
            </div>
            <div class="flex items-center border-2 border-black rounded-b-xl bg-white w-full px-2 py-3 mt-0">
                <img src="assets/img/shop/milk.webp" alt="Milk Chocolate" class="w-12 h-12 object-contain mr-2">
                <span class="font-black text-lg">MILK CHOCOLATE</span>
            </div>
        </div>
        <div class="flex flex-col items-center w-64">
            <div class="border-2 border-black rounded-xl overflow-hidden bg-black">
                <iframe width="100%" height="320" src="https://www.youtube.com/embed/W0iQguIT_yE?si=WmcmNXiaX5Km9L7V" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
            <div class="flex items-center border-2 border-black rounded-b-xl bg-white w-full px-2 py-3 mt-0">
                <img src="assets/img/shop/mint.webp" alt="Milk Crunch" class="w-12 h-12 object-contain mr-2">
                <span class="font-black text-lg">MILK CRUNCH</span>
            </div>
        </div>
        <div class="flex flex-col items-center w-64">
            <div class="border-2 border-black rounded-xl overflow-hidden bg-black">
                <iframe width="100%" height="320" src="https://www.youtube.com/embed/AT-ElP8uSTE?si=qzYJqHUmGTiNfzox" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
            <div class="flex items-center border-2 border-black rounded-b-xl bg-white w-full px-2 py-3 mt-0">
                <img src="assets/img/shop/butter.webp" alt="Peanut Butter Cups" class="w-12 h-12 object-contain mr-2">
                <span class="font-black text-lg">PEANUT BUTTER CUPS</span>
            </div>
        </div>
        <!-- Video Card 4 -->
        <div class="flex flex-col items-center w-64">
            <div class="border-2 border-black rounded-xl overflow-hidden bg-black">
                <video src="https://cdn.shopify.com/videos/c/vp/4bfc792894548c4896b1ffd53666daa/4bfc792894548c4896b1ffd53666daa.HD-720p-1.6Mbps-44743994.mp4" class="w-64 h-80 object-cover" controls poster="assets/img/shop/dark.webp"></video>
            </div>
            <div class="flex items-center border-2 border-black rounded-b-xl bg-white w-full px-2 py-3 mt-0">
                <img src="assets/img/shop/dark.webp" alt="Dark Chocolate" class="w-12 h-12 object-contain mr-2">
                <span class="font-black text-lg">DARK CHOCOLATE</span>
            </div>
        </div>
        <!-- Video Card 5 -->
        <div class="flex flex-col items-center w-64">
            <div class="border-2 border-black rounded-xl overflow-hidden bg-black">
                <video src="https://cdn.shopify.com/videos/c/vp/5bfc792894548c4896b1ffd53666daa/5bfc792894548c4896b1ffd53666daa.HD-720p-1.6Mbps-44743994.mp4" class="w-64 h-80 object-cover" controls poster="assets/img/shop/cookies.webp"></video>
            </div>
            <div class="flex items-center border-2 border-black rounded-b-xl bg-white w-full px-2 py-3 mt-0">
                <img src="assets/img/shop/cookies.webp" alt="Cookies & Creme" class="w-12 h-12 object-contain mr-2">
                <span class="font-black text-lg">COOKIES & CREME</span>
            </div>
        </div>
    </div>