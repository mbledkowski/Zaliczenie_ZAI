<template>
  <header class="h-0">
    <div class="sticky left-0 top-0 p-4 flex">
      <div class="navbar bg-base-100 rounded-lg">
        <div class="navbar-start">
          <div class="dropdown">
            <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              <li><a></a></li>
              <li><a></a></li>
            </ul>
          </div>
          <a class="btn btn-ghost normal-case text-xl">{{ $t('comName') }}</a>
        </div>
        <div class="navbar-center hidden lg:flex">
          <ul class="menu menu-horizontal px-1">
            <li><a></a></li>
            <li><a></a></li>
            <li><a></a></li>
            <li><a></a></li>
            <li><a></a></li>
            <li><a></a></li>
          </ul>
        </div>
        <div class="navbar-end">
        </div>
      </div>
    </div>
  </header>
</template>
