<div class="flex justify-center items-center h-screen bg-gray-50">
    <form class="w-full max-w-sm mx-auto bg-white border border-gray-200 p-6 rounded-lg" method="POST">
        <a href="#" class="flex justify-center items-center mb-5">
            <img src="/favicon/favicon-32x32.png" alt="<?= SHOP_NAME ?>">
            <h1 class="pl-2 font-semibold"><?= SHOP_NAME ?></h1>
        </a>
        <div class="mb-5">
            <label for="username" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
            <input type="text" id="username" name="username" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="johndoe" required />
        </div>
        <div class="mb-5">
            <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
            <input type="password" id="password" name="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="••••••••" required />
        </div>
        <div class="flex items-start mb-5">
            <div class="flex items-center h-5">
                <input id="remember" name="remember" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" />
            </div>
            <label for="remember" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
        </div>
        <div class="flex justify-end">
            <button type="submit" name="admin-login" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Log In</button>
        </div>
    </form>
</div>