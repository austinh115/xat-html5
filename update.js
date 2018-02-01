var SITE_URL = "ixat.io";
var SAVE_DIR = "./embed";

var Config = {};

var http = require('https');
var fs = require('fs');

if(process.argv.length >= 3)
	SITE_URL = process.argv[2];

var download = function(url, dest, cb) {
	var file = fs.createWriteStream(dest);
	var request = http.get(url, function(response) {
		response.pipe(file);
		file.on('finish', function() {
			file.close(cb);
		});
	});
}

var startBytes = 0;

var request = require("request-promise");
request.get("https://xat.com/embed/chat.php#id=5&xc=3360&cn=793705656&gb=7tG4d&gn=xat_test").then(function(box) {

	box = box.split("/")[4];

	download("https://xat.com/site/" + box + "/xatcoremem.php", "xatcoremem.php", function(r) {

		console.log("xatcoremem.php saved");

		request.get("https://xat.com/site/" + box + "/xatcore.php").then(function(res) {

			eval(res = res.replace("}run()", "}"));

			Module.findStr = function(str) {
				var arr = HEAP8;
				var starts = [];
				var slice = [];
				for (var i = 0, length = str.length; i < length; i++) {
					var code = str.charCodeAt(i);
					slice.push(code & 0xff);
				}
				var start = arr.indexOf(slice[0]);
				while (start != -1 && start < arr.length) {
					var found = false;
					while (!found && start != -1) {
						for (var i = 0; i < slice.length; i++) {
							if (arr[start + i] != slice[i]) {
								start = arr.indexOf(slice[0], start + 1);
								break;
							}
							if (i == slice.length - 1) found = true;
						}
					}
					if (start == -1) break;
					var d = start;
					while (![0, 1].includes(arr[d - 1]) && d > 0) d--;
					starts.push([d, Pointer_stringify(d)]);
					start = arr.indexOf(slice[0], start + 1);
				}
				return starts;
			}

			Config = Module.findStr("xat.com");

			Config.push(Module.findStr("https:")[0]);

			for (var keys = Object.keys(Config), i = 0; i < keys.length; i++) {
				Config[keys[i]][1] = Config[keys[i]][1].replace(/(xat|xatech)\.com/g, SITE_URL).replace("https:", "http:");
				var text = Config[keys[i]][1],
					a = text.length * HEAPU8.BYTES_PER_ELEMENT + 1,
					n = Module._malloc(a);
				Module.stringToUTF8(text, n, a), Config[keys[i]][2] = n;
			}

			var config2 = {};

			for (var keys = Object.keys(Config), i = 0; i < keys.length; i++) {
				config2[Config[keys[i]][0]] = Config[keys[i]][1];

				index = res.search("," + Config[keys[i]][0]);

				res = res.substring(0, index) + ",Config[" + Config[keys[i]][0] + "]" + res.substring(index + ("," + Config[keys[i]][0]).length);
			}

			Config = config2;

			var file = "<?php header(\"Content-Type:application/javascript\");?>\nvar Config = " + JSON.stringify(Config) + ";\n";

			var repl = function() {
				for (var keys = Object.keys(Config), i = 0; i < keys.length; i++) {
					var text = Config[keys[i]],
						a = text.length * HEAPU8.BYTES_PER_ELEMENT + 1,
						n = Module._malloc(a);
					Module.stringToUTF8(text, n, a), Config[keys[i]] = n;
				}
			}

			res = res.replace("HEAPU8.set(data,Runtime.GLOBAL_BASE);", "HEAPU8.set(data,Runtime.GLOBAL_BASE);(" + repl.toString() + ")();").trim();

			file = file + res + "run()";

			fs.writeFile(SAVE_DIR + "/xatcore.php", file, function(err) {
				if (err) {
					return console.log(err);
				}

				console.log("xatcore.php saved");
			});

			fs.renameSync("xatcoremem.php", SAVE_DIR + "/xatcoremem.php"); 

		}).catch(function(err) {
			console.log('Error2 ' + err.statusCode);
			console.dir(err);
		});

	});

	var files = ["activity.js", "embed.html", "www/createjs-2015.11.26.min.js", "www/actions.html", "www/actions.js", "www/chats.html", "www/chats.js", "www/classic.html", "www/friends.html", "www/friends.js", "www/groups.html", "www/groups.js", "www/hammer.js", "www/messages.html", "www/messages.js", "www/settings.html", "www/settings.js", "www/visitors.html", "www/visitors.js", "www/xat2.js", "www/XatBackground.jpg", "www/xat.css", "www/xat.js", "www/svg/8ball.svg", "www/svg/abchats.svg", "www/svg/abfriends.svg", "www/svg/abgroups.svg", "www/svg/ablogo.svg", "www/svg/abme.svg", "www/svg/abmore.svg", "www/svg/app.svg", "www/svg/biggrin.svg", "www/svg/bubble2.svg", "www/svg/confused.svg", "www/svg/cool.svg", "www/svg/crying.svg", "www/svg/deleteicon.svg", "www/svg/eek.svg", "www/svg/favorite.svg", "www/svg/frown.svg", "www/svg/getx.svg", "www/svg/groups.svg", "www/svg/helpicon.svg", "www/svg/mad.svg", "www/svg/more.svg", "www/svg/notfavorite.svg", "www/svg/off.svg", "www/svg/on.svg", "www/svg/redface.svg", "www/svg/selActions.svg", "www/svg/selFriends.svg", "www/svg/selGroups.svg", "www/svg/selPowers.svg", "www/svg/sleepy.svg", "www/svg/smile.svg", "www/svg/spkoff.svg", "www/svg/spk.svg", "www/svg/ss.svg", "www/svg/tongue.svg", "www/svg/wink.svg", "www/svg/xatsat.svg", "www/svg/xdelete.svg", "www/svg/x.svg"];

	for (var keys = Object.keys(files), i = 0; i < files.length; i++) {
		var file = SAVE_DIR + "/" + files[keys[i]];

		var dir = file.split("/", (file.match(/\//g) || []).length).join("/");

		if (!fs.existsSync(dir)) {
			fs.mkdirSync(dir);
		}

		download("https://xat.com/site/" + box + "/" + file, file, function(r) {});

		console.log("Progress: " + (i + 1) + " / " + files.length + " (" + file + ") downloaded...");
	}

}).catch(function(err) {
	console.log('Error1 ' + err.statusCode);
	console.dir(err);
});