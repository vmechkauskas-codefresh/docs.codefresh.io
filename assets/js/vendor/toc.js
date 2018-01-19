/* eslint-disable func-style,block-scoped-var */
// https://github.com/ghiculescu/jekyll-table-of-contents
(function ($) {
  'use strict'

  $.fn.toc = function (options) {
    var defaults = {
      noBackToTopLinks: false,
      title: '',
      minimumHeaders: 3,
      headers: 'h1, h2, h3, h4',
      listType: 'ol', // values: [ol|ul]
      showEffect: 'show', // values: [show|slideDown|fadeIn|none]
      showSpeed: 'slow' // set to 0 to deactivate effect
    }

    var settings = $.extend(defaults, options)

    var headers = $(settings.headers)

    headers.filter(function () {
      // get all headers with an ID
      var previousSiblingName = $(this)
        .prev()
        .attr('name')
      if (!this.id && previousSiblingName) {
        this.id = $(this)
          .attr('id', previousSiblingName.replace(/\./g, '-'))
      }
      return this.id
    })

    var output = $(this)
    if (!headers.length || headers.length < settings.minimumHeaders || !output.length) {
      return
    }

    if (settings.showSpeed === 0) {
      settings.showEffect = 'none'
    }

    var render = {
      show: function () {
        output.hide()
          .html(html)
          .show(settings.showSpeed)
      },
      slideDown: function () {
        output.hide()
          .html(html)
          .slideDown(settings.showSpeed)
      },
      fadeIn: function () {
        output.hide()
          .html(html)
          .fadeIn(settings.showSpeed)
      },
      none: function () {
        output.html(html)
      }
    }

    var getLevel = function (ele) {
      return parseInt(ele.nodeName.replace('H', ''), 10)
    }
    var highestLevel = headers.map(function (_, ele) {
      return getLevel(ele)
    })
      .get()
      .sort()[0]
    var returnToTop = '<i class="icon-arrow-up back-to-top"> </i>'

    var level = getLevel(headers[0])
    var thisLevel
    var html = settings.title + ' <' + settings.listType + ' class="section-nav">'

    headers.on('click', function () {
      if (!settings.noBackToTopLinks) {
        window.location.hash = this.id
      }
    })
      .addClass('clickable-header')
      .each(function (_, header) {
        thisLevel = getLevel(header)
        if (!settings.noBackToTopLinks && thisLevel === highestLevel) {
          $(header)
            .addClass('top-level-header')
            .after(returnToTop)
        }
        // same level as before; same indenting
        if (thisLevel === level) {
          html += '<li class="toc-entry toc-h' + level +'"><a href=\'#' + header.id + '\'>' + $(header).text() + '</a>'
        } else if (thisLevel <= level) { // higher level than before; end parent ol
          for (var i = thisLevel; i < level; i++) {
            html += '</li></' + settings.listType + '>'
          }
          html += '<li class="toc-entry toc-h' + level +'"><a href=\'#' + header.id + '\'>' + $(header).text() + '</a>'
        } else if (thisLevel > level) { // lower level than before; expand the previous to contain a ol
          for (var n = thisLevel; n > level; n--) {
            html += '<' + settings.listType + '><li  class="toc-entry toc-h' + thisLevel +'">'
          }
          html += '<a href=\'#' + header.id + '\'>' + $(header).text() + '</a>'
        }
        level = thisLevel // update for the next one
      })
    html += '</' + settings.listType + '>'
    if (!settings.noBackToTopLinks) {
      $(document)
        .on('click', '.back-to-top', function () {
          $(window)
            .scrollTop(0)
          window.location.hash = ''
        })
    }

    render[settings.showEffect]()
  }
}(jQuery))
