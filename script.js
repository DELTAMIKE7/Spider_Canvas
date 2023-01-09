function okay(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
  multiplier:.08
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});





// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}
okay();


function canvasStart(){


    const canvas = document.querySelector("canvas");
    const context = canvas.getContext("2d");
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    window.addEventListener("resize", function () {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        render();
    })

    function files(index) {
      var data = `./spider_main/spider_img_000.jpg
      ./spider_main/spider_img_001.jpg
      ./spider_main/spider_img_002.jpg
      ./spider_main/spider_img_003.jpg
      ./spider_main/spider_img_004.jpg
      ./spider_main/spider_img_005.jpg
      ./spider_main/spider_img_006.jpg
      ./spider_main/spider_img_007.jpg
      ./spider_main/spider_img_008.jpg
      ./spider_main/spider_img_009.jpg
      ./spider_main/spider_img_010.jpg
      ./spider_main/spider_img_011.jpg
      ./spider_main/spider_img_012.jpg
      ./spider_main/spider_img_013.jpg
      ./spider_main/spider_img_014.jpg
      ./spider_main/spider_img_015.jpg
      ./spider_main/spider_img_016.jpg
      ./spider_main/spider_img_017.jpg
      ./spider_main/spider_img_018.jpg
      ./spider_main/spider_img_019.jpg
      ./spider_main/spider_img_020.jpg
      ./spider_main/spider_img_021.jpg
      ./spider_main/spider_img_022.jpg
      ./spider_main/spider_img_023.jpg
      ./spider_main/spider_img_024.jpg
      ./spider_main/spider_img_025.jpg
      ./spider_main/spider_img_026.jpg
      ./spider_main/spider_img_027.jpg
      ./spider_main/spider_img_028.jpg
      ./spider_main/spider_img_029.jpg
      ./spider_main/spider_img_030.jpg
      ./spider_main/spider_img_031.jpg
      ./spider_main/spider_img_032.jpg
      ./spider_main/spider_img_033.jpg
      ./spider_main/spider_img_034.jpg
      ./spider_main/spider_img_035.jpg
      ./spider_main/spider_img_036.jpg
      ./spider_main/spider_img_037.jpg
      ./spider_main/spider_img_038.jpg
      ./spider_main/spider_img_039.jpg
      ./spider_main/spider_img_040.jpg
      ./spider_main/spider_img_041.jpg
      ./spider_main/spider_img_042.jpg
      ./spider_main/spider_img_043.jpg
      ./spider_main/spider_img_044.jpg
      ./spider_main/spider_img_045.jpg
      ./spider_main/spider_img_046.jpg
      ./spider_main/spider_img_047.jpg
      ./spider_main/spider_img_048.jpg
      ./spider_main/spider_img_049.jpg
      ./spider_main/spider_img_050.jpg
      ./spider_main/spider_img_051.jpg
      ./spider_main/spider_img_052.jpg
      ./spider_main/spider_img_053.jpg
      ./spider_main/spider_img_054.jpg
      ./spider_main/spider_img_055.jpg
      ./spider_main/spider_img_056.jpg
      ./spider_main/spider_img_057.jpg
      ./spider_main/spider_img_058.jpg
      ./spider_main/spider_img_059.jpg
      ./spider_main/spider_img_060.jpg
      ./spider_main/spider_img_061.jpg
      ./spider_main/spider_img_062.jpg
      ./spider_main/spider_img_063.jpg
      ./spider_main/spider_img_064.jpg
      ./spider_main/spider_img_065.jpg
      ./spider_main/spider_img_066.jpg
      ./spider_main/spider_img_067.jpg
      ./spider_main/spider_img_068.jpg
      ./spider_main/spider_img_069.jpg
      ./spider_main/spider_img_070.jpg
      ./spider_main/spider_img_071.jpg
      ./spider_main/spider_img_072.jpg
      ./spider_main/spider_img_073.jpg
      ./spider_main/spider_img_074.jpg
      ./spider_main/spider_img_075.jpg
      ./spider_main/spider_img_076.jpg
      ./spider_main/spider_img_077.jpg
      ./spider_main/spider_img_078.jpg
      ./spider_main/spider_img_079.jpg
      ./spider_main/spider_img_080.jpg
      ./spider_main/spider_img_081.jpg
      ./spider_main/spider_img_082.jpg
      ./spider_main/spider_img_083.jpg
      ./spider_main/spider_img_084.jpg
      ./spider_main/spider_img_085.jpg
      ./spider_main/spider_img_086.jpg
      ./spider_main/spider_img_087.jpg
      ./spider_main/spider_img_088.jpg
      ./spider_main/spider_img_089.jpg
      ./spider_main/spider_img_090.jpg
      ./spider_main/spider_img_091.jpg
      ./spider_main/spider_img_092.jpg
      ./spider_main/spider_img_093.jpg
      ./spider_main/spider_img_094.jpg
      ./spider_main/spider_img_095.jpg
      ./spider_main/spider_img_096.jpg
      ./spider_main/spider_img_097.jpg
      ./spider_main/spider_img_098.jpg
      ./spider_main/spider_img_099.jpg
      ./spider_main/spider_img_100.jpg
      ./spider_main/spider_img_101.jpg
      ./spider_main/spider_img_102.jpg
      ./spider_main/spider_img_103.jpg
      ./spider_main/spider_img_104.jpg
      ./spider_main/spider_img_105.jpg
      ./spider_main/spider_img_106.jpg
      ./spider_main/spider_img_107.jpg
      ./spider_main/spider_img_108.jpg
      ./spider_main/spider_img_109.jpg
      ./spider_main/spider_img_110.jpg
      ./spider_main/spider_img_111.jpg
      ./spider_main/spider_img_112.jpg
      ./spider_main/spider_img_113.jpg
      ./spider_main/spider_img_114.jpg
      ./spider_main/spider_img_115.jpg
      ./spider_main/spider_img_116.jpg
      ./spider_main/spider_img_117.jpg
      ./spider_main/spider_img_118.jpg
      ./spider_main/spider_img_119.jpg
      ./spider_main/spider_img_120.jpg
      ./spider_main/spider_img_121.jpg
      ./spider_main/spider_img_122.jpg
      ./spider_main/spider_img_123.jpg
      ./spider_main/spider_img_124.jpg
      ./spider_main/spider_img_125.jpg
      ./spider_main/spider_img_126.jpg
      ./spider_main/spider_img_127.jpg
      ./spider_main/spider_img_128.jpg
      ./spider_main/spider_img_129.jpg
      ./spider_main/spider_img_130.jpg
      ./spider_main/spider_img_131.jpg
      ./spider_main/spider_img_132.jpg
      ./spider_main/spider_img_133.jpg
      ./spider_main/spider_img_134.jpg
      ./spider_main/spider_img_135.jpg
      ./spider_main/spider_img_136.jpg
      ./spider_main/spider_img_137.jpg
      ./spider_main/spider_img_138.jpg
      ./spider_main/spider_img_139.jpg
      ./spider_main/spider_img_140.jpg
      ./spider_main/spider_img_141.jpg
      ./spider_main/spider_img_142.jpg
      ./spider_main/spider_img_143.jpg
      ./spider_main/spider_img_144.jpg
      ./spider_main/spider_img_145.jpg
      ./spider_main/spider_img_146.jpg
      ./spider_main/spider_img_147.jpg
      ./spider_main/spider_img_148.jpg
      ./spider_main/spider_img_149.jpg
      ./spider_main/spider_img_150.jpg
      ./spider_main/spider_img_151.jpg
      ./spider_main/spider_img_152.jpg
      ./spider_main/spider_img_153.jpg
      ./spider_main/spider_img_154.jpg
      ./spider_main/spider_img_155.jpg
      ./spider_main/spider_img_156.jpg
      ./spider_main/spider_img_157.jpg
      ./spider_main/spider_img_158.jpg
      ./spider_main/spider_img_159.jpg
      ./spider_main/spider_img_160.jpg
      ./spider_main/spider_img_161.jpg
      ./spider_main/spider_img_162.jpg
      ./spider_main/spider_img_163.jpg
      ./spider_main/spider_img_164.jpg
      ./spider_main/spider_img_165.jpg
      ./spider_main/spider_img_166.jpg
      ./spider_main/spider_img_167.jpg
      ./spider_main/spider_img_168.jpg
      ./spider_main/spider_img_169.jpg
      ./spider_main/spider_img_170.jpg
      ./spider_main/spider_img_171.jpg
      ./spider_main/spider_img_172.jpg
      ./spider_main/spider_img_173.jpg
      ./spider_main/spider_img_174.jpg
      ./spider_main/spider_img_175.jpg
      ./spider_main/spider_img_176.jpg
      ./spider_main/spider_img_177.jpg
      ./spider_main/spider_img_178.jpg
      ./spider_main/spider_img_179.jpg
      ./spider_main/spider_img_180.jpg
      ./spider_main/spider_img_181.jpg
      ./spider_main/spider_img_182.jpg
      ./spider_main/spider_img_183.jpg
      ./spider_main/spider_img_184.jpg
      ./spider_main/spider_img_185.jpg
      ./spider_main/spider_img_186.jpg
      ./spider_main/spider_img_187.jpg
      ./spider_main/spider_img_188.jpg
      ./spider_main/spider_img_189.jpg
      ./spider_main/spider_img_190.jpg
      ./spider_main/spider_img_191.jpg
      ./spider_main/spider_img_192.jpg
      ./spider_main/spider_img_193.jpg
      ./spider_main/spider_img_194.jpg
      ./spider_main/spider_img_195.jpg
      ./spider_main/spider_img_196.jpg
      ./spider_main/spider_img_197.jpg
      ./spider_main/spider_img_198.jpg
      ./spider_main/spider_img_199.jpg
      ./spider_main/spider_img_200.jpg
      ./spider_main/spider_img_201.jpg
      ./spider_main/spider_img_202.jpg
      ./spider_main/spider_img_203.jpg
      ./spider_main/spider_img_204.jpg
      ./spider_main/spider_img_205.jpg
      ./spider_main/spider_img_206.jpg
      ./spider_main/spider_img_207.jpg
      ./spider_main/spider_img_208.jpg
      ./spider_main/spider_img_209.jpg
      ./spider_main/spider_img_210.jpg
      ./spider_main/spider_img_211.jpg
      ./spider_main/spider_img_212.jpg
      ./spider_main/spider_img_213.jpg
      ./spider_main/spider_img_214.jpg
      ./spider_main/spider_img_215.jpg
      ./spider_main/spider_img_216.jpg
      ./spider_main/spider_img_217.jpg
      ./spider_main/spider_img_218.jpg
      ./spider_main/spider_img_219.jpg
      ./spider_main/spider_img_220.jpg
      ./spider_main/spider_img_221.jpg
      ./spider_main/spider_img_222.jpg
      ./spider_main/spider_img_223.jpg
      ./spider_main/spider_img_224.jpg
      ./spider_main/spider_img_225.jpg
      ./spider_main/spider_img_226.jpg
      ./spider_main/spider_img_227.jpg
      ./spider_main/spider_img_228.jpg
      ./spider_main/spider_img_229.jpg
      ./spider_main/spider_img_230.jpg
      ./spider_main/spider_img_231.jpg
      ./spider_main/spider_img_232.jpg
      ./spider_main/spider_img_233.jpg
      ./spider_main/spider_img_234.jpg
      ./spider_main/spider_img_235.jpg
      ./spider_main/spider_img_236.jpg
      ./spider_main/spider_img_237.jpg
      ./spider_main/spider_img_238.jpg
      ./spider_main/spider_img_239.jpg
      ./spider_main/spider_img_240.jpg
      ./spider_main/spider_img_241.jpg
      ./spider_main/spider_img_242.jpg
      ./spider_main/spider_img_243.jpg
      ./spider_main/spider_img_244.jpg
      ./spider_main/spider_img_245.jpg
      ./spider_main/spider_img_246.jpg
      ./spider_main/spider_img_247.jpg
      ./spider_main/spider_img_248.jpg
      ./spider_main/spider_img_249.jpg
      ./spider_main/spider_img_250.jpg
      ./spider_main/spider_img_251.jpg
      ./spider_main/spider_img_252.jpg
      ./spider_main/spider_img_253.jpg
      ./spider_main/spider_img_254.jpg
      ./spider_main/spider_img_255.jpg
      ./spider_main/spider_img_256.jpg
      ./spider_main/spider_img_257.jpg
      ./spider_main/spider_img_258.jpg
      ./spider_main/spider_img_259.jpg
      ./spider_main/spider_img_260.jpg
      ./spider_main/spider_img_261.jpg
      ./spider_main/spider_img_262.jpg
      ./spider_main/spider_img_263.jpg
      ./spider_main/spider_img_264.jpg
      ./spider_main/spider_img_265.jpg
      ./spider_main/spider_img_266.jpg
      ./spider_main/spider_img_267.jpg
      ./spider_main/spider_img_268.jpg
      ./spider_main/spider_img_269.jpg
      ./spider_main/spider_img_270.jpg
      ./spider_main/spider_img_271.jpg
      ./spider_main/spider_img_272.jpg
      ./spider_main/spider_img_273.jpg
      ./spider_main/spider_img_274.jpg
      ./spider_main/spider_img_275.jpg
      ./spider_main/spider_img_276.jpg
      ./spider_main/spider_img_277.jpg
      ./spider_main/spider_img_278.jpg
      ./spider_main/spider_img_279.jpg
      ./spider_main/spider_img_280.jpg
      ./spider_main/spider_img_281.jpg
      ./spider_main/spider_img_282.jpg
      ./spider_main/spider_img_283.jpg
      ./spider_main/spider_img_284.jpg
      ./spider_main/spider_img_285.jpg
      ./spider_main/spider_img_286.jpg
      ./spider_main/spider_img_287.jpg
      ./spider_main/spider_img_288.jpg
      ./spider_main/spider_img_289.jpg
      ./spider_main/spider_img_290.jpg
      ./spider_main/spider_img_291.jpg
      ./spider_main/spider_img_292.jpg
      ./spider_main/spider_img_293.jpg
      ./spider_main/spider_img_294.jpg
      ./spider_main/spider_img_295.jpg
      ./spider_main/spider_img_296.jpg
      ./spider_main/spider_img_297.jpg
      ./spider_main/spider_img_298.jpg
      ./spider_main/spider_img_299.jpg
      ./spider_main/spider_img_300.jpg
      ./spider_main/spider_img_301.jpg
      ./spider_main/spider_img_302.jpg
      ./spider_main/spider_img_303.jpg
      ./spider_main/spider_img_304.jpg
      ./spider_main/spider_img_305.jpg
      ./spider_main/spider_img_306.jpg
      ./spider_main/spider_img_307.jpg
      ./spider_main/spider_img_308.jpg
      ./spider_main/spider_img_309.jpg
      ./spider_main/spider_img_310.jpg
      ./spider_main/spider_img_311.jpg
      ./spider_main/spider_img_312.jpg
      ./spider_main/spider_img_313.jpg
      ./spider_main/spider_img_314.jpg
      ./spider_main/spider_img_315.jpg
      ./spider_main/spider_img_316.jpg
      ./spider_main/spider_img_317.jpg
      ./spider_main/spider_img_318.jpg
      ./spider_main/spider_img_319.jpg
      ./spider_main/spider_img_320.jpg
      ./spider_main/spider_img_321.jpg
      ./spider_main/spider_img_322.jpg
      ./spider_main/spider_img_323.jpg
      ./spider_main/spider_img_324.jpg
      ./spider_main/spider_img_325.jpg
      ./spider_main/spider_img_326.jpg
      ./spider_main/spider_img_327.jpg
      ./spider_main/spider_img_328.jpg
      ./spider_main/spider_img_329.jpg
      ./spider_main/spider_img_330.jpg
      ./spider_main/spider_img_331.jpg
      ./spider_main/spider_img_332.jpg
      ./spider_main/spider_img_333.jpg
      ./spider_main/spider_img_334.jpg
      ./spider_main/spider_img_335.jpg
      ./spider_main/spider_img_336.jpg
      ./spider_main/spider_img_337.jpg
      ./spider_main/spider_img_338.jpg
      ./spider_main/spider_img_339.jpg
      ./spider_main/spider_img_340.jpg
      ./spider_main/spider_img_341.jpg
      ./spider_main/spider_img_342.jpg
      ./spider_main/spider_img_343.jpg
      ./spider_main/spider_img_344.jpg
      ./spider_main/spider_img_345.jpg
      ./spider_main/spider_img_346.jpg
      ./spider_main/spider_img_347.jpg
      ./spider_main/spider_img_348.jpg
      ./spider_main/spider_img_349.jpg
      ./spider_main/spider_img_350.jpg
      ./spider_main/spider_img_351.jpg
      ./spider_main/spider_img_352.jpg
      ./spider_main/spider_img_353.jpg
      ./spider_main/spider_img_354.jpg
      ./spider_main/spider_img_355.jpg
      ./spider_main/spider_img_356.jpg
      ./spider_main/spider_img_357.jpg
      ./spider_main/spider_img_358.jpg
      ./spider_main/spider_img_359.jpg
      ./spider_main/spider_img_360.jpg
      ./spider_main/spider_img_361.jpg
      ./spider_main/spider_img_362.jpg
      ./spider_main/spider_img_363.jpg
      ./spider_main/spider_img_364.jpg
      ./spider_main/spider_img_365.jpg
      ./spider_main/spider_img_366.jpg
      ./spider_main/spider_img_367.jpg
      ./spider_main/spider_img_368.jpg
      ./spider_main/spider_img_369.jpg
      ./spider_main/spider_img_370.jpg
      ./spider_main/spider_img_371.jpg
      ./spider_main/spider_img_372.jpg
      ./spider_main/spider_img_373.jpg
      ./spider_main/spider_img_374.jpg
      ./spider_main/spider_img_375.jpg
      ./spider_main/spider_img_376.jpg
      ./spider_main/spider_img_377.jpg
      ./spider_main/spider_img_378.jpg
      ./spider_main/spider_img_379.jpg
      ./spider_main/spider_img_380.jpg
      ./spider_main/spider_img_381.jpg
      ./spider_main/spider_img_382.jpg
      ./spider_main/spider_img_383.jpg
      ./spider_main/spider_img_384.jpg
      ./spider_main/spider_img_385.jpg
      ./spider_main/spider_img_386.jpg
      ./spider_main/spider_img_387.jpg
      ./spider_main/spider_img_388.jpg
      ./spider_main/spider_img_389.jpg
      ./spider_main/spider_img_390.jpg
      ./spider_main/spider_img_391.jpg
      ./spider_main/spider_img_392.jpg
      ./spider_main/spider_img_393.jpg
      ./spider_main/spider_img_394.jpg
      ./spider_main/spider_img_395.jpg
      ./spider_main/spider_img_396.jpg
      ./spider_main/spider_img_397.jpg
      ./spider_main/spider_img_398.jpg
      ./spider_main/spider_img_399.jpg
      ./spider_main/spider_img_400.jpg
      ./spider_main/spider_img_401.jpg
      ./spider_main/spider_img_402.jpg
      ./spider_main/spider_img_403.jpg
      ./spider_main/spider_img_404.jpg
      ./spider_main/spider_img_405.jpg
      ./spider_main/spider_img_406.jpg
      ./spider_main/spider_img_407.jpg
      ./spider_main/spider_img_408.jpg
      ./spider_main/spider_img_409.jpg
      ./spider_main/spider_img_410.jpg
      ./spider_main/spider_img_411.jpg
      ./spider_main/spider_img_412.jpg
      ./spider_main/spider_img_413.jpg
      ./spider_main/spider_img_414.jpg
      ./spider_main/spider_img_415.jpg
      ./spider_main/spider_img_416.jpg
      ./spider_main/spider_img_417.jpg
      ./spider_main/spider_img_418.jpg
      ./spider_main/spider_img_419.jpg
      ./spider_main/spider_img_420.jpg
      ./spider_main/spider_img_421.jpg
      ./spider_main/spider_img_422.jpg
      ./spider_main/spider_img_423.jpg
      ./spider_main/spider_img_424.jpg
      ./spider_main/spider_img_425.jpg
      ./spider_main/spider_img_426.jpg
      ./spider_main/spider_img_427.jpg
      ./spider_main/spider_img_428.jpg
      ./spider_main/spider_img_429.jpg
      ./spider_main/spider_img_430.jpg
      ./spider_main/spider_img_431.jpg
      ./spider_main/spider_img_432.jpg
      ./spider_main/spider_img_433.jpg
      ./spider_main/spider_img_434.jpg
      ./spider_main/spider_img_435.jpg
      ./spider_main/spider_img_436.jpg
      ./spider_main/spider_img_437.jpg
      ./spider_main/spider_img_438.jpg
      ./spider_main/spider_img_439.jpg
      ./spider_main/spider_img_440.jpg
      ./spider_main/spider_img_441.jpg
      ./spider_main/spider_img_442.jpg
      ./spider_main/spider_img_443.jpg
      ./spider_main/spider_img_444.jpg
      ./spider_main/spider_img_445.jpg
      ./spider_main/spider_img_446.jpg
      ./spider_main/spider_img_447.jpg
      ./spider_main/spider_img_448.jpg
      ./spider_main/spider_img_449.jpg
      ./spider_main/spider_img_450.jpg
      ./spider_main/spider_img_451.jpg
      ./spider_main/spider_img_452.jpg
      ./spider_main/spider_img_453.jpg
      ./spider_main/spider_img_454.jpg
      ./spider_main/spider_img_455.jpg
      ./spider_main/spider_img_456.jpg
      ./spider_main/spider_img_457.jpg
      ./spider_main/spider_img_458.jpg
      ./spider_main/spider_img_459.jpg
      ./spider_main/spider_img_460.jpg
      ./spider_main/spider_img_461.jpg
      ./spider_main/spider_img_462.jpg
      ./spider_main/spider_img_463.jpg
      ./spider_main/spider_img_464.jpg
      ./spider_main/spider_img_465.jpg
      ./spider_main/spider_img_466.jpg
      ./spider_main/spider_img_467.jpg
      ./spider_main/spider_img_468.jpg
      ./spider_main/spider_img_469.jpg
      ./spider_main/spider_img_470.jpg
      ./spider_main/spider_img_471.jpg
      ./spider_main/spider_img_472.jpg
      ./spider_main/spider_img_473.jpg
      ./spider_main/spider_img_474.jpg
      ./spider_main/spider_img_475.jpg
      ./spider_main/spider_img_476.jpg
      ./spider_main/spider_img_477.jpg
      ./spider_main/spider_img_478.jpg
      ./spider_main/spider_img_479.jpg
      ./spider_main/spider_img_480.jpg
      ./spider_main/spider_img_481.jpg
      ./spider_main/spider_img_482.jpg
      ./spider_main/spider_img_483.jpg
      ./spider_main/spider_img_484.jpg
      ./spider_main/spider_img_485.jpg
      ./spider_main/spider_img_486.jpg
      ./spider_main/spider_img_487.jpg
      ./spider_main/spider_img_488.jpg
      ./spider_main/spider_img_489.jpg
      ./spider_main/spider_img_490.jpg
      ./spider_main/spider_img_491.jpg
      ./spider_main/spider_img_492.jpg
      ./spider_main/spider_img_493.jpg
      ./spider_main/spider_img_494.jpg
      ./spider_main/spider_img_495.jpg
      ./spider_main/spider_img_496.jpg
      ./spider_main/spider_img_497.jpg
      ./spider_main/spider_img_498.jpg
      ./spider_main/spider_img_499.jpg
      ./spider_main/spider_img_500.jpg
      ./spider_main/spider_img_501.jpg
      ./spider_main/spider_img_502.jpg
      ./spider_main/spider_img_503.jpg
      ./spider_main/spider_img_504.jpg
      ./spider_main/spider_img_505.jpg
      ./spider_main/spider_img_506.jpg
      ./spider_main/spider_img_507.jpg
      ./spider_main/spider_img_508.jpg
      ./spider_main/spider_img_509.jpg
      ./spider_main/spider_img_510.jpg
      ./spider_main/spider_img_511.jpg
      ./spider_main/spider_img_512.jpg
      ./spider_main/spider_img_513.jpg
      ./spider_main/spider_img_514.jpg
      ./spider_main/spider_img_515.jpg
      ./spider_main/spider_img_516.jpg
      ./spider_main/spider_img_517.jpg
      ./spider_main/spider_img_518.jpg
      ./spider_main/spider_img_519.jpg
      ./spider_main/spider_img_520.jpg
      ./spider_main/spider_img_521.jpg
      ./spider_main/spider_img_522.jpg
      ./spider_main/spider_img_523.jpg
      ./spider_main/spider_img_524.jpg
      ./spider_main/spider_img_525.jpg
      ./spider_main/spider_img_526.jpg
      ./spider_main/spider_img_527.jpg
      ./spider_main/spider_img_528.jpg
      ./spider_main/spider_img_529.jpg
      ./spider_main/spider_img_530.jpg
      ./spider_main/spider_img_531.jpg
      ./spider_main/spider_img_532.jpg
      ./spider_main/spider_img_533.jpg
      ./spider_main/spider_img_534.jpg
      ./spider_main/spider_img_535.jpg
      ./spider_main/spider_img_536.jpg
      ./spider_main/spider_img_537.jpg
      ./spider_main/spider_img_538.jpg
      ./spider_main/spider_img_539.jpg
      ./spider_main/spider_img_540.jpg
      ./spider_main/spider_img_541.jpg
      ./spider_main/spider_img_542.jpg
      ./spider_main/spider_img_543.jpg
      ./spider_main/spider_img_544.jpg
      ./spider_main/spider_img_545.jpg
      ./spider_main/spider_img_546.jpg
      ./spider_main/spider_img_547.jpg
      ./spider_main/spider_img_548.jpg
      ./spider_main/spider_img_549.jpg
      ./spider_main/spider_img_550.jpg
      ./spider_main/spider_img_551.jpg
      ./spider_main/spider_img_552.jpg
      ./spider_main/spider_img_553.jpg
      ./spider_main/spider_img_554.jpg
      ./spider_main/spider_img_555.jpg
      ./spider_main/spider_img_556.jpg
      ./spider_main/spider_img_557.jpg
      ./spider_main/spider_img_558.jpg
      ./spider_main/spider_img_559.jpg
      ./spider_main/spider_img_560.jpg
      ./spider_main/spider_img_561.jpg
      ./spider_main/spider_img_562.jpg
      ./spider_main/spider_img_563.jpg
      ./spider_main/spider_img_564.jpg
      ./spider_main/spider_img_565.jpg
      ./spider_main/spider_img_566.jpg
      ./spider_main/spider_img_567.jpg
      ./spider_main/spider_img_568.jpg
      ./spider_main/spider_img_569.jpg
      ./spider_main/spider_img_570.jpg
      ./spider_main/spider_img_571.jpg
      ./spider_main/spider_img_572.jpg
      ./spider_main/spider_img_573.jpg
      ./spider_main/spider_img_574.jpg
      ./spider_main/spider_img_575.jpg
      ./spider_main/spider_img_576.jpg
      ./spider_main/spider_img_577.jpg
      ./spider_main/spider_img_578.jpg
      ./spider_main/spider_img_579.jpg
      ./spider_main/spider_img_580.jpg
      ./spider_main/spider_img_581.jpg
      ./spider_main/spider_img_582.jpg
      ./spider_main/spider_img_583.jpg
      ./spider_main/spider_img_584.jpg
      ./spider_main/spider_img_585.jpg
      ./spider_main/spider_img_586.jpg
      ./spider_main/spider_img_587.jpg
      ./spider_main/spider_img_588.jpg
      ./spider_main/spider_img_589.jpg
      ./spider_main/spider_img_590.jpg
      ./spider_main/spider_img_591.jpg
      ./spider_main/spider_img_592.jpg
      ./spider_main/spider_img_593.jpg
      ./spider_main/spider_img_594.jpg
      ./spider_main/spider_img_595.jpg
      ./spider_main/spider_img_596.jpg
      ./spider_main/spider_img_597.jpg
      ./spider_main/spider_img_598.jpg
      ./spider_main/spider_img_599.jpg
      ./spider_main/spider_img_600.jpg
      ./spider_main/spider_img_601.jpg
      ./spider_main/spider_img_602.jpg
      ./spider_main/spider_img_603.jpg
      ./spider_main/spider_img_604.jpg
      ./spider_main/spider_img_605.jpg
      ./spider_main/spider_img_606.jpg
      ./spider_main/spider_img_607.jpg
      ./spider_main/spider_img_608.jpg
      ./spider_main/spider_img_609.jpg
      ./spider_main/spider_img_610.jpg
      ./spider_main/spider_img_611.jpg
      ./spider_main/spider_img_612.jpg
      ./spider_main/spider_img_613.jpg
      ./spider_main/spider_img_614.jpg
      ./spider_main/spider_img_615.jpg
      ./spider_main/spider_img_616.jpg
      ./spider_main/spider_img_617.jpg
      ./spider_main/spider_img_618.jpg
      ./spider_main/spider_img_619.jpg
      ./spider_main/spider_img_620.jpg
      ./spider_main/spider_img_621.jpg
      ./spider_main/spider_img_622.jpg
      ./spider_main/spider_img_623.jpg
      ./spider_main/spider_img_624.jpg
      ./spider_main/spider_img_625.jpg
      ./spider_main/spider_img_626.jpg
      ./spider_main/spider_img_627.jpg
      ./spider_main/spider_img_628.jpg
      ./spider_main/spider_img_629.jpg
      ./spider_main/spider_img_630.jpg
      ./spider_main/spider_img_631.jpg
      ./spider_main/spider_img_632.jpg
      ./spider_main/spider_img_633.jpg
      ./spider_main/spider_img_634.jpg
      ./spider_main/spider_img_635.jpg
      ./spider_main/spider_img_636.jpg
      ./spider_main/spider_img_637.jpg
      ./spider_main/spider_img_638.jpg
      ./spider_main/spider_img_639.jpg
      ./spider_main/spider_img_640.jpg
      ./spider_main/spider_img_641.jpg
      ./spider_main/spider_img_642.jpg
      ./spider_main/spider_img_643.jpg
      ./spider_main/spider_img_644.jpg
      ./spider_main/spider_img_645.jpg
      `;
      return data.split("\n")[index];
  }
  
    const frameCount = 645;
    
    const images = [];
    const imageSeq = {
        frame: 0
    };
    
    for (let i = 0; i < frameCount; i++) {
        const img = new Image();
        img.src = files(i);
        images.push(img);
    }
    
    gsap.to(imageSeq, {
        frame: frameCount - 1,
        snap: "frame",
        ease: "none",
        scrollTrigger: {
        scroller:"#main",
        scrub: 0.5,
          trigger:"#home",
          pin:true,
          start:"top top",
          // markers:true
        },
        onUpdate: render
    });
    
    images[0].onload = render;
    
    function render() {
        scaleImage(images[imageSeq.frame], context)
    }
    
    function scaleImage(img, ctx) {
        var canvas = ctx.canvas;
        var hRatio = canvas.width / img.width;
        var vRatio = canvas.height / img.height;
        var ratio = Math.max(hRatio, vRatio);
        var centerShift_x = (canvas.width - img.width * ratio) / 2;
        var centerShift_y = (canvas.height - img.height * ratio) / 2;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0, img.width, img.height,
            centerShift_x, centerShift_y, img.width * ratio, img.height * ratio);
    }
    }
    canvasStart();
    
