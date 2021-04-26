webpackHotUpdate_N_E("pages/episodes/[slug]",{

/***/ "./src/contexts/PlayerContext.tsx":
/*!****************************************!*\
  !*** ./src/contexts/PlayerContext.tsx ***!
  \****************************************/
/*! exports provided: PlayerContext, PlayerContextProvider, usePlayer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerContext", function() { return PlayerContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerContextProvider", function() { return PlayerContextProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "usePlayer", function() { return usePlayer; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var _jsxFileName = "C:\\Users\\joaop\\Desktop\\NWL5\\podcastrr\\src\\contexts\\PlayerContext.tsx",
    _s = $RefreshSig$(),
    _s2 = $RefreshSig$();


var PlayerContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["createContext"])({});
function PlayerContextProvider(_ref) {
  _s();

  var children = _ref.children;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      episodeList = _useState[0],
      setEpisodeList = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      currentEpisodeIndex = _useState2[0],
      setCurrentEpisodeIndex = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      isPlaying = _useState3[0],
      setIsPlaying = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      isLooping = _useState4[0],
      setIsLooping = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      isShuffling = _useState5[0],
      setIsShuffling = _useState5[1];

  function play(episode) {
    setEpisodeList([episode]);
    setCurrentEpisodeIndex(0);
    setIsPlaying(true);
  }

  function playList(list, index) {
    setEpisodeList(list);
    setCurrentEpisodeIndex(index);
    setIsPlaying(true);
  }

  var hasPrevious = currentEpisodeIndex > 0;
  var hasNext = currentEpisodeIndex + 1 < episodeList.length;

  function toggleShuffle() {
    setIsShuffling(isShuffling);
  }

  function toggleLoop() {
    setIsLooping(!isLooping);
  }

  function playNext() {
    var nextEpisodeIndex = currentEpisodeIndex + 1;

    if (hasNext) {
      setCurrentEpisodeIndex(currentEpisodeIndex + 1);
    }
  }

  function playPrevious() {
    if (hasPrevious) {
      setCurrentEpisodeIndex(currentEpisodeIndex - 1);
    }
  }

  function togglePlay() {
    setIsPlaying(!isPlaying);
  }

  function setPlayingState(state) {
    setIsPlaying(state);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(PlayerContext.Provider, {
    value: {
      episodeList: episodeList,
      currentEpisodeIndex: currentEpisodeIndex,
      play: play,
      playList: playList,
      playNext: playNext,
      playPrevious: playPrevious,
      isPlaying: isPlaying,
      togglePlay: togglePlay,
      setPlayingState: setPlayingState,
      hasPrevious: hasPrevious,
      hasNext: hasNext,
      isLooping: isLooping,
      toggleLoop: toggleLoop
    },
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 92,
    columnNumber: 5
  }, this);
}

_s(PlayerContextProvider, "zNfPUPHFH+BVcWs6aYe6magX10E=");

_c = PlayerContextProvider;
var usePlayer = function usePlayer() {
  _s2();

  return Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(PlayerContext);
};

_s2(usePlayer, "gDsCjeeItUuvgOWf1v4qoK9RF6k=");

var _c;

$RefreshReg$(_c, "PlayerContextProvider");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRleHRzL1BsYXllckNvbnRleHQudHN4Il0sIm5hbWVzIjpbIlBsYXllckNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwiUGxheWVyQ29udGV4dFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJ1c2VTdGF0ZSIsImVwaXNvZGVMaXN0Iiwic2V0RXBpc29kZUxpc3QiLCJjdXJyZW50RXBpc29kZUluZGV4Iiwic2V0Q3VycmVudEVwaXNvZGVJbmRleCIsImlzUGxheWluZyIsInNldElzUGxheWluZyIsImlzTG9vcGluZyIsInNldElzTG9vcGluZyIsImlzU2h1ZmZsaW5nIiwic2V0SXNTaHVmZmxpbmciLCJwbGF5IiwiZXBpc29kZSIsInBsYXlMaXN0IiwibGlzdCIsImluZGV4IiwiaGFzUHJldmlvdXMiLCJoYXNOZXh0IiwibGVuZ3RoIiwidG9nZ2xlU2h1ZmZsZSIsInRvZ2dsZUxvb3AiLCJwbGF5TmV4dCIsIm5leHRFcGlzb2RlSW5kZXgiLCJwbGF5UHJldmlvdXMiLCJ0b2dnbGVQbGF5Iiwic2V0UGxheWluZ1N0YXRlIiwic3RhdGUiLCJ1c2VQbGF5ZXIiLCJ1c2VDb250ZXh0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQTJCTyxJQUFNQSxhQUFhLGdCQUFHQywyREFBYSxDQUFDLEVBQUQsQ0FBbkM7QUFNQSxTQUFTQyxxQkFBVCxPQUEyRTtBQUFBOztBQUFBLE1BQXpDQyxRQUF5QyxRQUF6Q0EsUUFBeUM7O0FBQUEsa0JBRXhDQyxzREFBUSxDQUFDLEVBQUQsQ0FGZ0M7QUFBQSxNQUV4RUMsV0FGd0U7QUFBQSxNQUUzREMsY0FGMkQ7O0FBQUEsbUJBR3hCRixzREFBUSxDQUFDLENBQUQsQ0FIZ0I7QUFBQSxNQUd4RUcsbUJBSHdFO0FBQUEsTUFHbkRDLHNCQUhtRDs7QUFBQSxtQkFJNUNKLHNEQUFRLENBQUMsS0FBRCxDQUpvQztBQUFBLE1BSXhFSyxTQUp3RTtBQUFBLE1BSTdEQyxZQUo2RDs7QUFBQSxtQkFLNUNOLHNEQUFRLENBQUMsS0FBRCxDQUxvQztBQUFBLE1BS3hFTyxTQUx3RTtBQUFBLE1BSzdEQyxZQUw2RDs7QUFBQSxtQkFNekNSLHNEQUFRLENBQUMsS0FBRCxDQU5pQztBQUFBLE1BTXhFUyxXQU53RTtBQUFBLE1BTTNEQyxjQU4yRDs7QUFRaEYsV0FBU0MsSUFBVCxDQUFjQyxPQUFkLEVBQWdDO0FBQzlCVixrQkFBYyxDQUFDLENBQUNVLE9BQUQsQ0FBRCxDQUFkO0FBQ0FSLDBCQUFzQixDQUFDLENBQUQsQ0FBdEI7QUFDQUUsZ0JBQVksQ0FBQyxJQUFELENBQVo7QUFDRDs7QUFFRCxXQUFTTyxRQUFULENBQWtCQyxJQUFsQixFQUFtQ0MsS0FBbkMsRUFBa0Q7QUFDaERiLGtCQUFjLENBQUNZLElBQUQsQ0FBZDtBQUNBViwwQkFBc0IsQ0FBQ1csS0FBRCxDQUF0QjtBQUNBVCxnQkFBWSxDQUFDLElBQUQsQ0FBWjtBQUNEOztBQUVELE1BQU1VLFdBQVcsR0FBR2IsbUJBQW1CLEdBQUcsQ0FBMUM7QUFDQSxNQUFNYyxPQUFPLEdBQUlkLG1CQUFtQixHQUFHLENBQXZCLEdBQTRCRixXQUFXLENBQUNpQixNQUF4RDs7QUFHQSxXQUFTQyxhQUFULEdBQXlCO0FBQ3ZCVCxrQkFBYyxDQUFDRCxXQUFELENBQWQ7QUFDRDs7QUFFRCxXQUFTVyxVQUFULEdBQXNCO0FBQ3BCWixnQkFBWSxDQUFDLENBQUNELFNBQUYsQ0FBWjtBQUNEOztBQUVELFdBQVNjLFFBQVQsR0FBb0I7QUFDbEIsUUFBTUMsZ0JBQWdCLEdBQUduQixtQkFBbUIsR0FBRyxDQUEvQzs7QUFFQSxRQUFJYyxPQUFKLEVBQWE7QUFDWGIsNEJBQXNCLENBQUNELG1CQUFtQixHQUFHLENBQXZCLENBQXRCO0FBQ0Q7QUFFRjs7QUFFRCxXQUFTb0IsWUFBVCxHQUF3QjtBQUV0QixRQUFHUCxXQUFILEVBQWdCO0FBQ2RaLDRCQUFzQixDQUFDRCxtQkFBbUIsR0FBRyxDQUF2QixDQUF0QjtBQUNEO0FBRUY7O0FBRUQsV0FBU3FCLFVBQVQsR0FBc0I7QUFDcEJsQixnQkFBWSxDQUFDLENBQUNELFNBQUYsQ0FBWjtBQUNEOztBQUVELFdBQVNvQixlQUFULENBQXlCQyxLQUF6QixFQUF5QztBQUN2Q3BCLGdCQUFZLENBQUNvQixLQUFELENBQVo7QUFDRDs7QUFFRCxzQkFDRSxxRUFBQyxhQUFELENBQWUsUUFBZjtBQUNBLFNBQUssRUFBRztBQUNKekIsaUJBQVcsRUFBWEEsV0FESTtBQUVKRSx5QkFBbUIsRUFBbkJBLG1CQUZJO0FBR0pRLFVBQUksRUFBSkEsSUFISTtBQUlKRSxjQUFRLEVBQVJBLFFBSkk7QUFLSlEsY0FBUSxFQUFSQSxRQUxJO0FBTUpFLGtCQUFZLEVBQVpBLFlBTkk7QUFPSmxCLGVBQVMsRUFBVEEsU0FQSTtBQVFKbUIsZ0JBQVUsRUFBVkEsVUFSSTtBQVNKQyxxQkFBZSxFQUFmQSxlQVRJO0FBVUpULGlCQUFXLEVBQVhBLFdBVkk7QUFXSkMsYUFBTyxFQUFQQSxPQVhJO0FBWUpWLGVBQVMsRUFBVEEsU0FaSTtBQWFKYSxnQkFBVSxFQUFWQTtBQWJJLEtBRFI7QUFBQSxjQWlCR3JCO0FBakJIO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQXNCRDs7R0EvRWVELHFCOztLQUFBQSxxQjtBQWlGVCxJQUFNNkIsU0FBUyxHQUFHLFNBQVpBLFNBQVksR0FBTTtBQUFBOztBQUM3QixTQUFPQyx3REFBVSxDQUFDaEMsYUFBRCxDQUFqQjtBQUNELENBRk07O0lBQU0rQixTIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2VwaXNvZGVzL1tzbHVnXS41NTk1OTY1MzZmNzE3NDI3YzY1ZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlU3RhdGUsIFJlYWN0Tm9kZSwgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcclxuXHJcbnR5cGUgRXBpc29kZSA9IHtcclxuICB0aXRsZTogc3RyaW5nO1xyXG4gIG1lbWJlcnM6IHN0cmluZztcclxuICB0aHVtYm5haWw6IHN0cmluZztcclxuICBkdXJhdGlvbjogbnVtYmVyO1xyXG4gIHVybDogc3RyaW5nO1xyXG59O1xyXG5cclxuXHJcbnR5cGUgUGxheWVyQ29udGV4dERhdGEgPSB7XHJcbiAgZXBpc29kZUxpc3Q6IEVwaXNvZGVbXTtcclxuICBjdXJyZW50RXBpc29kZUluZGV4OiBudW1iZXI7XHJcbiAgaXNQbGF5aW5nOiBib29sZWFuO1xyXG4gIHBsYXk6IChlcGlzb2RlOiBFcGlzb2RlKSA9PiB2b2lkO1xyXG4gIHRvZ2dsZVBsYXk6ICgpID0+IHZvaWQ7XHJcbiAgc2V0UGxheWluZ1N0YXRlOiAoc3RhdGU6IGJvb2xlYW4pID0+IHZvaWQ7XHJcbiAgcGxheUxpc3Q6IChsaXN0OiBFcGlzb2RlW10sIGluZGV4OiBudW1iZXIpID0+IHZvaWQ7XHJcbiAgcGxheU5leHQ6ICgpID0+IHZvaWQ7XHJcbiAgcGxheVByZXZpb3VzOiAoKSA9PiB2b2lkO1xyXG4gIGhhc05leHQ6IGJvb2xlYW47XHJcbiAgaGFzUHJldmlvdXM6IGJvb2xlYW47XHJcbiAgdG9nZ2xlTG9vcDogKCkgPT4gdm9pZDtcclxuICBpc0xvb3Bpbmc6IGJvb2xlYW47XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgUGxheWVyQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoe30gYXMgUGxheWVyQ29udGV4dERhdGEpOyBcclxuXHJcbnR5cGUgUGxheWVyQ29udGV4dFByb3ZpZGVyUHJvcHMgPSB7XHJcbiAgY2hpbGRyZW46IFJlYWN0Tm9kZTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFBsYXllckNvbnRleHRQcm92aWRlciggeyBjaGlsZHJlbiB9IDogUGxheWVyQ29udGV4dFByb3ZpZGVyUHJvcHMpIHtcclxuXHJcbiAgY29uc3QgWyBlcGlzb2RlTGlzdCwgc2V0RXBpc29kZUxpc3QgXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbIGN1cnJlbnRFcGlzb2RlSW5kZXgsIHNldEN1cnJlbnRFcGlzb2RlSW5kZXggXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFsgaXNQbGF5aW5nLCBzZXRJc1BsYXlpbmcgXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbIGlzTG9vcGluZywgc2V0SXNMb29waW5nIF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgWyBpc1NodWZmbGluZywgc2V0SXNTaHVmZmxpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBmdW5jdGlvbiBwbGF5KGVwaXNvZGU6IEVwaXNvZGUpIHtcclxuICAgIHNldEVwaXNvZGVMaXN0KFtlcGlzb2RlXSlcclxuICAgIHNldEN1cnJlbnRFcGlzb2RlSW5kZXgoMCk7XHJcbiAgICBzZXRJc1BsYXlpbmcodHJ1ZSk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBwbGF5TGlzdChsaXN0OiBFcGlzb2RlW10sIGluZGV4OiBudW1iZXIpIHtcclxuICAgIHNldEVwaXNvZGVMaXN0KGxpc3QpO1xyXG4gICAgc2V0Q3VycmVudEVwaXNvZGVJbmRleChpbmRleCk7XHJcbiAgICBzZXRJc1BsYXlpbmcodHJ1ZSk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBoYXNQcmV2aW91cyA9IGN1cnJlbnRFcGlzb2RlSW5kZXggPiAwO1xyXG4gIGNvbnN0IGhhc05leHQgPSAoY3VycmVudEVwaXNvZGVJbmRleCArIDEpIDwgZXBpc29kZUxpc3QubGVuZ3RoXHJcblxyXG4gIFxyXG4gIGZ1bmN0aW9uIHRvZ2dsZVNodWZmbGUoKSB7XHJcbiAgICBzZXRJc1NodWZmbGluZyhpc1NodWZmbGluZyk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiB0b2dnbGVMb29wKCkge1xyXG4gICAgc2V0SXNMb29waW5nKCFpc0xvb3BpbmcpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gcGxheU5leHQoKSB7XHJcbiAgICBjb25zdCBuZXh0RXBpc29kZUluZGV4ID0gY3VycmVudEVwaXNvZGVJbmRleCArIDE7XHJcblxyXG4gICAgaWYgKGhhc05leHQpIHtcclxuICAgICAgc2V0Q3VycmVudEVwaXNvZGVJbmRleChjdXJyZW50RXBpc29kZUluZGV4ICsgMSk7XHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gcGxheVByZXZpb3VzKCkge1xyXG5cclxuICAgIGlmKGhhc1ByZXZpb3VzKSB7XHJcbiAgICAgIHNldEN1cnJlbnRFcGlzb2RlSW5kZXgoY3VycmVudEVwaXNvZGVJbmRleCAtIDEpO1xyXG4gICAgfVxyXG5cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHRvZ2dsZVBsYXkoKSB7XHJcbiAgICBzZXRJc1BsYXlpbmcoIWlzUGxheWluZyk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBzZXRQbGF5aW5nU3RhdGUoc3RhdGU6IGJvb2xlYW4pIHtcclxuICAgIHNldElzUGxheWluZyhzdGF0ZSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFBsYXllckNvbnRleHQuUHJvdmlkZXIgXHJcbiAgICB2YWx1ZT17IHsgXHJcbiAgICAgICAgZXBpc29kZUxpc3QsIFxyXG4gICAgICAgIGN1cnJlbnRFcGlzb2RlSW5kZXgsIFxyXG4gICAgICAgIHBsYXksIFxyXG4gICAgICAgIHBsYXlMaXN0LFxyXG4gICAgICAgIHBsYXlOZXh0LFxyXG4gICAgICAgIHBsYXlQcmV2aW91cyxcclxuICAgICAgICBpc1BsYXlpbmcsIFxyXG4gICAgICAgIHRvZ2dsZVBsYXksIFxyXG4gICAgICAgIHNldFBsYXlpbmdTdGF0ZSxcclxuICAgICAgICBoYXNQcmV2aW91cyxcclxuICAgICAgICBoYXNOZXh0LFxyXG4gICAgICAgIGlzTG9vcGluZyxcclxuICAgICAgICB0b2dnbGVMb29wLFxyXG4gICAgICB9fT5cclxuXHJcbiAgICAgIHtjaGlsZHJlbn1cclxuXHJcbiAgICA8L1BsYXllckNvbnRleHQuUHJvdmlkZXI+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgdXNlUGxheWVyID0gKCkgPT4ge1xyXG4gIHJldHVybiB1c2VDb250ZXh0KFBsYXllckNvbnRleHQpO1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==