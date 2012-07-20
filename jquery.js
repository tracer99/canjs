require.config({
	map: {
		"can/util/string/string" : {
			"can/util" : "can/util/jquery/jquery"
		}
	}
});
define(["can/util/amd-mvc"], function( can ) {
	return can;
});
