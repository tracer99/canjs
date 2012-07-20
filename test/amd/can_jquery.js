steal("funcunit/qunit", function() {
	module("Require Can jQuery")
	asyncTest("Require Can", function() {
		require(["can/jquery"], function( can ) {
			ok( can );
			start();
		});
	});
});
