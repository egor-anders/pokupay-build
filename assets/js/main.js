$(document).ready(function () {
  var menuButton = $('#menu-btn');
  var mobileNav = $('#mobile-nav');
  menuButton.on('click', toggleMobileNav);

  var optionsButton = $('#options-btn');
  var mobileOptions = $('#options-nav');
  optionsButton.on('click', toggleMobileOptions);

  var desktopOptionsButton = $('#desktop-options-btn');
  var desktopOptions = $('#desktop-options-nav');
  desktopOptionsButton.on('click', toggleDesktopOptions);

  window.addEventListener('click', function (e) {
    if (!desktopOptions.hasClass('desktop-options-nav--active')) {
      return;
    }

    if (e.target === desktopOptionsButton.get(0)) {
      return false;
    }
    
    if (!desktopOptions.get(0).contains(e.target)) {
      hideDesktopOptions();
    }
  });

  function toggleMobileNav(e) {
    e.preventDefault();
    if (!menuButton.hasClass('header__menu-btn--active')) {
      hideMobileOptions();
      showMobileNav();
    } else {
      hideMobileNav();
    }
  }

  function showMobileNav() {
    menuButton.addClass('header__menu-btn--active');
    mobileNav.addClass('mobile-nav--active');
  }

  function hideMobileNav() {
    menuButton.removeClass('header__menu-btn--active');
    mobileNav.removeClass('mobile-nav--active');
  }

  function toggleMobileOptions(e) {
    e.preventDefault();
    if (!optionsButton.hasClass('header__options-btn--active')) {
      hideMobileNav();
      showMobileOptions();
    } else {
      hideMobileOptions();
    }
  }

  function showMobileOptions() {
    optionsButton.addClass('header__options-btn--active');
    mobileOptions.addClass('options-nav--active');
  }

  function hideMobileOptions() {
    optionsButton.removeClass('header__options-btn--active');
    mobileOptions.removeClass('options-nav--active');
  }

  function toggleDesktopOptions(e) {
    e.preventDefault();
    if (!desktopOptions.hasClass('desktop-options-nav--active')) {
      showDesktopOptions();
    } else {
      hideDesktopOptions();
    }
  }

  function showDesktopOptions() {
    desktopOptions.addClass('desktop-options-nav--active');

    var rect = desktopOptionsButton.get(0).getBoundingClientRect();
    desktopOptions.css('left', rect.left);
  }

  function hideDesktopOptions() {
    desktopOptions.removeClass('desktop-options-nav--active');
  }

  // header sticky
  $(window).scroll(function () {
    var sticky = $('.header');
    var scroll = $(window).scrollTop();

    if (scroll >= 500) {
      sticky.addClass('header--fixed');
      $(document.body).addClass('padding');
    } else {
      sticky.removeClass('header--fixed');
      $(document.body).removeClass('padding');
    }
  });
});
